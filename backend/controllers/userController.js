import express from "express";
import User from '../Models/userModel.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
// register a new user
const createToken= (id)=>{
    return jwt.sign({id}, process.env.jwt_secret, {
        expiresIn: "30d"
    })
 }
const register = async (req, res)=>{
   const {name, email, password}= req.body;
try{
    const userExits= await  User.findOne({email});
   if(userExits){
       return res.status(400).json({message: "User already exists"});
   }
   const salt= await bcrypt.genSalt(10);
   const hashedpassword= await bcrypt.hash(password, salt);
   const user= await User.create({
    name, 
    email, 
    password:hashedpassword
   })

   const token= await createToken(user._id);

   return res.status(200).json({
    success:true,
    user,
    token,
    message:"User created successfully"
   })

   }catch(error){
      console.error(error);
      return res.status(500).json({message: "Server Error"});
   }
}

const login= async(req,res)=>{
   const {email, password}= req.body;
   try{
    if (!email || !password) {
        return res.status(400).json({ message: "Email and password are required" });
      }
        const user= await User.findOne({email});
        console.log(user);
        if(!user){
           return res.status(404).json({message: "User not found"});
        }
        if (!user.password) {
            return res.status(500).json({ message: "User does not have a password set" });
          }
      
        const isMatch= await bcrypt.compare(password, user.password);
        console.log(isMatch);
        if(!isMatch){
           return res.status(400).json({message: "Invalid credentials"});
        }
        const token= await createToken(user._id);
        return res.status(200).json({
            message:"Login success",
            success:true,
            token
        })

   }catch(error){
       console.error(error);
       return res.status(500).json({message: "Server Error"});
   }

}

export{register, login}
