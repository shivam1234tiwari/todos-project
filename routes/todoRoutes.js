import express from "express";
import {newTodo,alltodos,onetodo,edittodo,deleteTodos} from '../controllers/todoController.js'

const route = express.Router();

route.get("/todo",alltodos);
route.get('/todo/:id',onetodo);
route.post("/todo",newTodo);

route.put("/todo/:id", edittodo);

route.delete("/todo/:id",deleteTodos);

export default route;