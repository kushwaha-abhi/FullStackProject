import mongoose from "mongoose";

const orderSchema= mongoose.Schema({
    userId:{
        type:String,
        required:true
    },
    items:{
        type:Array,
        required:true,
    },
    amount:{
        type:Number,
        required:true,
    },
    address:{
        type:Object,
        required:true,
    },
    status:{
        type:String,
        // required:true,
    },
    date:{
        type:Date,
        default:Date.now()
    },
    payment:{
        type:Boolean,
        default:false
    }
})

const orderModel= mongoose.model.Orders || mongoose.model("Orders", orderSchema);

export default orderModel;