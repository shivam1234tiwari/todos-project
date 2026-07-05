import express from "express";
import {newTodo,alltodos,edittodo,deleteTodos} from '../controllers/todoController.js'

const route = express.Router();

route.get("/todo",alltodos);

route.post("/todo",newTodo);

route.put("/todo/:id", edittodo);

route.delete("/todo/:id",deleteTodos);

export default route;