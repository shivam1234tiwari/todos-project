# 🚀 Todo List REST API

> **Project Reference:** https://roadmap.sh/projects/todo-list-api

A RESTful Todo List API built with **Node.js**, **Express.js**, **MongoDB**, **Mongoose**, **JWT Authentication**, and **Role-Based Authorization**.

---

# 📂 Project Structure

todo-list-api/│├── config/│   └── db.js│├── controllers/│   ├── authController.js│   ├── todoController.js│   └── adminController.js│├── middleware/│   ├── authMiddleware.js│   └── adminMiddleware.js│├── models/│   ├── User.js│   └── Todo.js│├── routes/│   ├── userRoutes.js│   ├── todoRoutes.js│   └── adminRoutes.js│├── .env├── index.js├── package.json└── README.md
---

# ⚙️ Installation

Clone the repository
```bash
git clone [https://github.com/shivam1234tiwari/todos-project.git](https://github.com/shivam1234tiwari/todos-project.git)
Move to projectBashcd todo-list-api
Install dependenciesBashnpm install
Run projectBashnpm start
orBashnpm run dev
🔑 Environment VariablesCreate a .env file in the root directory.Code snippetPORT=8000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
📍 Base URLhttp://localhost:8000/api
🔒 AuthenticationProtected APIs require a JWT Token.HeaderAuthorization: Bearer YOUR_JWT_TOKEN
👥 User APIsRegister UserPOST /api/auth/users/registerBodyJSON{
    "username": "Rahul Tiwari",
    "email": "rahul@gmail.com",
    "password": "Rahul@123",
    "role": "user",
    "address": "Pune"
}
Login UserPOST /api/auth/users/loginBodyJSON{
    "email": "rahul@gmail.com",
    "password": "Rahul@123"
}
ResponseJSON{
    "success": true,
    "message": "Login Successful",
    "token": "JWT_TOKEN"
}
Get All UsersGET /api/auth/usersGet Single UserGET /api/auth/users/:idExample: /api/auth/users/687a4f7d98af0c18b8c88b91Update UserPUT /api/auth/users/:idBodyJSON{
    "username": "Rahul",
    "address": "Mumbai"
}
Delete UserDELETE /api/auth/users/:idUser ProfileGET /api/auth/profileHeaderAuthorization: Bearer JWT_TOKEN
✅ Todo APIsCreate TodoPOST /api/todoBodyJSON{
    "title": "Learn Express",
    "description": "Complete CRUD APIs"
}
Get All TodosGET /api/todoGet Single TodoGET /api/todo/:idUpdate TodoPUT /api/todo/:idBodyJSON{
    "title": "Updated Todo",
    "description": "Updated Description"
}
Delete TodoDELETE /api/todo/:id👑 Admin APIsThese APIs can only be accessed by users having the Admin role.Admin DashboardGET /api/admin/dashboardHeaderAuthorization: Bearer JWT_TOKEN
📊 HTTP Status CodesStatusDescription200Success201Created400Bad Request401Unauthorized403Forbidden404Not Found500Internal Server Error🛡️ Security FeaturesPassword Hashing (bcrypt)JWT AuthenticationProtected RoutesAdmin MiddlewareRole-Based AuthorizationEnvironment Variables ConfigurationMongoDB Schema Validation🛠️ Tech StackNode.jsExpress.jsMongoDBMongooseJWT (JSON Web Tokens)bcryptdotenvNodemon🚀 Future ImprovementsUser Specific Todos (Owner-based access control)Todo Categories & StatusSearch & Pagination for TodosSwagger DocumentationDocker ContainerizationUnit TestingRefresh Token ImplementationForgot Password & Email Verification👨‍💻 AuthorRahul Tiwari MCA Student | Backend Developer
