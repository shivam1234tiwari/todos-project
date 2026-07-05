import express from 'express';
import {authMiddleware} from '../middleware/authMiddleware.js'
import { register,login,singleuser,profile,allUser,updateUser,deleteUser } from '../controllers/authController.js';
const route=express.Router();

route.get('/users',allUser);
route.get('/users/:id',singleuser);
route.post('/users/register',register);
route.get("/profile", authMiddleware, profile);
route.put('/users/:id',updateUser);
route.delete('/users/:id',deleteUser);

export default route;