import express from "express";

const route = express.Router();

route.get("/todo", (req, res) => {
    res.send("Get Todos");
});

route.post("/todo", (req, res) => {
    res.send("Create Todo");
});

route.put("/todo/:id", (req, res) => {
    res.send("Update Todo");
});

route.delete("/todo/:id", (req, res) => {
    res.send("Delete Todo");
});

export default route;