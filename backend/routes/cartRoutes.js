
import express from "express";
import { addToCart, removeFromCart, listCartItems } from "../controllers/cartController.js";
import authMiddleware from "../Milldleware/auth.js";
const cartRouter = express.Router();

cartRouter.post("/add",authMiddleware, addToCart);
cartRouter.post("/remove",authMiddleware, removeFromCart);
cartRouter.get("/get",authMiddleware, listCartItems);

export default cartRouter ;