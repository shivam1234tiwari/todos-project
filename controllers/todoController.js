import Todo from '../models/Todo.js'
export const newTodo=async(req,res)=>{
    try{
        const {title,description}=req.body;
        const existtodo=await Todo.findOne({title});
        if(title){
            return res.status(200).json({
                success:false,
                message:"title already used"
            })
            const newtodo=await Todo.create({
                title,
                description
            })
            return res.status(201).json({
                success:true,
                message:"New todo created"
            })
        }
    }catch(error){
        return res.status(500).json({
             success: false,
            message: error.message
        })
    }
}
export const alltodos=async(req,res)=>{
     try{
        const gettodo=await Todo.find();
        if(!gettodo){
            return res.status(402).json({
                success:false,
                message:"todo not found"
            })
            return res.status(200).json({
                success:true,
                message:"Todo is found",
                gettodo
            })
        }
    }catch(error){
         return res.status(500).json({
             success: false,
            message: error.message
        })
    }
}
export const onetodo=async(req,res)=>{
    try{
        const Singletodo=await Todo.findOne(req.body.id);
        if(!Singletodo){
            return res.status(402).json({
                success:false,
                message:"Not Found"
            })
        }
        return res.status(200).json({
            success:true,
            message:"Todo Found"
        })
    }catch(error){
         return res.status(500).json({
             success: false,
            message: error.message
        })
    }
}

export const edittodo=async(req,res)=>{
     try{
        const {id}=req.params;
        const updatetodo=await Todo.findByIdAndUpdate(
            id,
            req.body,
            {new:true}
        )
        return res.status(200).json({
            success:true,
            message:"Updated todo"
        })
    }catch(error){
         return res.status(500).json({
             success: false,
            message: error.message
        })
    }
}
export const deleteTodos=async(req,res)=>{
     try{
        const {id}=req.params;
        const removetodos=await Todo.findByIdAndDelete(
            id,
            req.body
        )
        return res.status(200).json({
            success:true,
            message:"todo Delete successfull"
        })
    }catch(error){
         return res.status(500).json({
             success: false,
            message: error.message
        })
    }
}