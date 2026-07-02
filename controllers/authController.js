import jwt from 'jsonwebtoken'
import User from '../models/User.js'
import bcrypt from 'bcrypt'
export const register=async(req,res)=>{
    try{
const {username,email,password,role,address}=req.body;
if(!username || !email ||!password || !role ||! address){
    res.status(400).json({message:"All Fields are Required"});
}
    }catch(error){}
}
export const login=async(req,res)=>{
    try{

    }catch(error){}
}
export const singleuser=async(req,res)=>{
    try{

    }catch(error){

    }
}
export const allUser=async(req,res)=>{
    try{

    }catch(error){}
}
export const updateUser=async(req,res)=>{
    try{

    }catch(error){}
}
export const deleteUser=async(req,res)=>{
    try{

    }catch(error){}
}