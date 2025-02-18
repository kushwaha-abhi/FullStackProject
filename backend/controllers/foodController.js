import fs from "fs";
import foodModel from "../Models/foodModel.js"

const addFood = async (req, res) => {
  const { name, description, price, countInStock , category} = req.body;
  const image = req.file ? req.file.filename : null;

  if (!name || !description || !price) {
     
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const newFood = new foodModel({ name, description, price, image ,category, countInStock});
    await newFood.save();
    res
      .status(201)
      .json({ message: "Food item added successfully", data: newFood });
  } catch (error) {
    console.error("Error saving food:", error);
    res
      .status(500)
      .json({ message: "Failed to add food item", error: error.message });
  }
};

const listFood = async (req, res) => {
  try {
    const foods = await foodModel.find();
    res.status(200).json({ success: true, data: foods });
  } catch (error) {
    res
      .status(500)
      .json({success:false , message: "Failed to fetch food items", error: error.message });
  }
};

const removeFood = async (req, res) => {
  const { id } = req.body;
  try {
    const food = await foodModel.findByIdAndDelete(id);
     if(!food){
        return res.status(404).json({ message: "Food item not found" });}
    if (food && food.image) {
      fs.unlink(`uploads/${food.image}`, (err) => {
        if (err) {
          console.error("Error deleting image:", err);
        }
      });
    }
    res.status(200).json({ success: true,
      message: "Food item deleted successfully",
       data: food });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to delete food", error: error.message });
  }
};

const searchFoods= async (req, res)=>{
   try {
    const result = await foodModel.find({});
    if(!result){
      return res.status(400).json({
        success:false,
        message:"no Products are available",
      })
    }

      res.status(200).json({
        success:true,
         data:result,
      })
   } catch (error) {
     console.log(error);
     return res.json({
      success:'false'
     })
   }
}


export { addFood, listFood, removeFood , searchFoods};
