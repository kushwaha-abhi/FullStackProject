
import express from "express";
import { addToCart, removeFromCart, listCartItems } from "../controllers/cartController.js";

const cartRouter = express.Router();

cartRouter.post("/add", addToCart);
cartRouter.post("/remove", removeFromCart);
cartRouter.get("/", listCartItems);

export default cartRouter;