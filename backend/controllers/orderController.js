import orderModel from "../Models/orderModel.js";
import userModel from "../Models/userModel.js";
import Stripe from "stripe";
import dotenv from "dotenv";

dotenv.config();
const FRONTEND_URL= "https://foodweb-4pf4.onrender.com"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
console.log("stripe key " + process.env.STRIPE_SECRET_KEY);
const placeOrder = async (req, res) => {
  try {
    const { userId, items, amount, address } = req.body;

    const newOrder = await orderModel.create({
      userId,
      amount,
      items,
      address,
    });

    await userModel.findByIdAndUpdate(userId, { cartData: {} });

    const line_items = items.map((item) => ({
      price_data: {
        currency: "inr",
        product_data: { name: item.name },
        unit_amount: item.price * 100,
      },
      quantity: item.quantity,
    }));

    line_items.push({
      price_data: {
        currency: "inr",
        product_data: { name: "Delivery Charges" },
        unit_amount: 500,
      },
      quantity: 1,
    });

    const session = await stripe.checkout.sessions.create({
      line_items,
      mode: "payment",
      success_url: `${FRONTEND_URL}/verify?success=true&orderId=${newOrder._id}`,
      cancel_url: `${FRONTEND_URL}/verify?success=false&orderId=${newOrder._id}`,
    });

    res.status(201).json({
      success: true,
      message: "Order placed successfully",
      order: newOrder,
      session_url: session.url,
    });
  } catch (error) {
    console.error("Error placing order:", error);
    res.status(500).json({
      success: false,
      message: "Failed to place order",
      error: error.message,
    });
  }
};

const verify = async (req,res) => {
  try {
    const { success, orderId } = req.body;
    if (success == "true") {
      await orderModel.findByIdAndUpdate(orderId, { payment: true }, { new: true });
      return res.json({ success: true, message: "paid" });
    } else {
      await orderModel.findByIdAndDelete(orderId);
      return res.json({ success: false, message: "not paid" });
    }
  } catch (err) {
    console.log(err);
    return res.json({
      success: false,
      message: "server Error",
    });
  }
};

const userOrders = async (req,res)=>{
   const orders= await orderModel.find({userId:req.body.userId});
   if(!orders){
      res.status(400).json({
        success:false,
        message:"No Oders are available"
      }) }

      res.status(200).json({
        success:true,
        data:orders
      })
   
}


export { placeOrder, verify, userOrders };
