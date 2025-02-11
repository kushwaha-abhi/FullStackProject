import userModel from "../Models/userModel.js";

const addToCart = async (req, res) => {
  try {
    let userData = await userModel.findOne({ _id: req.body.userId });
    let cartData = await userData.cartData;
    if (!cartData[req.body.itemId]) {
      cartData[req.body.itemId] = 1;
    } else {
      cartData[req.body.itemId] += 1;
    }

    await userModel.findByIdAndUpdate(req.body.userId, { cartData });

    return res
      .status(200)
      .json({ success: true, message: "Added to the cart" });
  } catch (error) {
    console.log(error);
    return res.json({ success: false, message: "Error" });
  }
};

const removeFromCart = async (req, res) => {
  try {
    let userData = await userModel.findById(req.body.userId);
    let cartData = userData.cartData;

    if (cartData[req.body.itemId] > 0) {
      cartData[req.body.itemId] -= 1;
    }

    await userModel.findByIdAndUpdate(req.body.userId, { cartData });

    return res.status(200).json({ success: true, message: "item deleted" });
  } catch (error) {
    console.log(error);
    alert("not worked");
  }
};

const listCartItems =async(req, res) => {

try {
    let userData= await userModel.findById(req.body.userId);  
    let cartData= userData.cartData;
    return res.status(200).json({success:true, message:"Got the data" , cartData} )
    
} catch (error) {
    console.log(error);
    return res.status(400).json({success:false, message:"error while fetching data"})
}     
};

export { addToCart, removeFromCart, listCartItems };
