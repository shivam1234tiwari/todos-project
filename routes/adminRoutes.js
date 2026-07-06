import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import adminMiddleware from "../middleware/adminMiddleware.js";
import { adminDashboard } from "../controllers/adminController.js";

const route = express.Router();

route.get(
    "/admin/dashboard",
    authMiddleware,
    adminMiddleware,
    adminDashboard
);

export default route;