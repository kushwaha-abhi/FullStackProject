import express from 'express';
import{placeOrder, verify} from "../controllers/orderController.js"
import authMiddleware from "../Milldleware/auth.js"
const orderRouter= express.Router();

orderRouter.post('/order',  authMiddleware,placeOrder);
orderRouter.post("/verify",verify)


export default orderRouter;