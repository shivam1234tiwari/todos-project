import jwt from "jsonwebtoken";
import User from "../models/User.js";
import bcrypt from "bcrypt";
import dotenv from 'dotenv'
export const register = async (req, res) => {
  try {
    const { username, email, password, role, address } = req.body;
    if (!username || !email || !password || !role || !address) {
      return res.status(400).json({ message: "All Fields are Required" });
    }
    const existuser = await User.findOne({ email });
    if (existuser) {
      return res.status(400).json({
        message: "Email already registered please login"
      });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      username,
      email,
      password: hashedPassword,
      role,
      address,
    });
    await user.save();
    return res.status(200).json({
      message: "User Registered",
      user,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};
export const login = async (req, res) => {
  try {
    const {email ,password}=req.body;
    if(!email || !password){
      return res.status(400).json({
        message:"All Fields are required"
      })
    }
    const alreadyuser=await User.findOne({email});
    if(alreadyuser){
     return res.status(403).json({
        message:"Already Email registered please login.."
      })
    }
    const isMatch=await bcrypt.compare(password,user.password);
    if(!isMatch){
      return res.status(400).json({
        message:"Password doesn 't matched"
      })
    }
    const token=jwt.sign({id:user._id,email:user.email},process.env.JWT_SECRET,{expiresIn:'1d'});
    return res.status(200).json({
            message: "Login successful",
            token,
            user: {
                id: user._id,
                username: user.username,
                email: user.email,
                role: user.role
            }
        });
  } catch (error) {
    return res.status(500).json({
            message: error.message
        });
  }
};
export const singleuser = async (req, res) => {
  try {
   
  } catch (error) {
    return res.status(500).json({
            message: error.message
        });
  }
};
export const allUser = async (req, res) => {
  try {
    const Users=await User.find();
    if(!Users){
      res.status(400).json({
        message:"Not User Found",
      })
    }
    return res.status(200).json({
      success:true,
      message:"All Users found",
      user:Users
    })
  } catch (error) {
    return res.status(500).json({
            message: error.message
        });
  }
};
export const updateUser = async (req, res) => {
  try {
     const{id}=req.params;
    const updatedata=await User.findByIdAndUpdate(
      id.
      req.body,
      {new:true},
      user
    );
    return res.status(200).json({
            message: "User updated successfully",
            user: updatedata
        });
  } catch (error) {
    return res.status(500).json({
            message: error.message
        });
  }
};
export const deleteUser = async (req, res) => {
  try {
  } catch (error) {
    return res.status(500).json({
            message: error.message
        });
  }
};
