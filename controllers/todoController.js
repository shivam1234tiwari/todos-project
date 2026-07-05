import Todo from "../models/Todo.js";
export const newTodo = async (req, res) => {
  try {
    const { title, description } = req.body;
    if (!title || !description) {
  return res.status(400).json({
    success: false,
    message: "Title and description are required",
  });
}
    const existtodo = await Todo.findOne({ title });
    if (existtodo) {
      return res.status(400).json({
        success: false,
        message: "Title already exists",
      });
    }

    const newtodo = await Todo.create({
      title,
      description,
    });

    return res.status(201).json({
      success: true,
      message: "New todo created",
      todo: newtodo,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
export const alltodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    return res.status(200).json({
      success: true,
      message: "Todos fetched successfully",
      count: todos.length,
      todos,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
export const onetodo = async (req, res) => {
  try {
    const { id } = req.params;
    const Singletodo = await Todo.findById(id);
    if (!Singletodo) {
      return res.status(404).json({
        success: false,
        message: "Not Found",
      });
    }
    return res.status(200).json({
      success: true,
      message: "Todo Found",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const edittodo = async (req, res) => {
  try {
    const { id } = req.params;
    const updatetodo = await Todo.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });
    return res.status(200).json({
      success: true,
      message: "Updated todo",
      updatetodo,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
export const deleteTodos = async (req, res) => {
  try {
    const { id } = req.params;
    const removetodos = await Todo.findByIdAndDelete(id,);
    if (!removetodos) {
      return res.status(404).json({
        success: false,
        message: "Todo not found",
      });
    }
    return res.status(200).json({
      success: true,
      message: "todo Delete successfull",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
