import jwt from "jsonwebtoken";
import User from "../models/User.js";
import bcrypt from "bcrypt";
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
  } catch (error) {}
};
export const singleuser = async (req, res) => {
  try {
  } catch (error) {}
};
export const allUser = async (req, res) => {
  try {
  } catch (error) {}
};
export const updateUser = async (req, res) => {
  try {
  } catch (error) {}
};
export const deleteUser = async (req, res) => {
  try {
  } catch (error) {}
};
