import express from 'express';
import{placeOrder, userOrders, verify} from "../controllers/orderController.js"
import authMiddleware from "../Milldleware/auth.js"
const orderRouter= express.Router();

orderRouter.post('/order',  authMiddleware,placeOrder);
orderRouter.post("/verify",verify)
orderRouter.get("/myorders",authMiddleware, userOrders)

export default orderRouter;