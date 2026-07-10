# 🚀 Todo List REST API

**Project Reference:**  
https://roadmap.sh/projects/todo-list-api

A RESTful Todo List API built using **Node.js**, **Express.js**, **MongoDB**, **Mongoose**, **JWT Authentication**, and **Role-Based Authorization**.

---

# 📂 Project Structure

```
todo-list-api/
│
├── config/
│   └── db.js
│
├── controllers/
│   ├── authController.js
│   ├── todoController.js
│   └── adminController.js
│
├── middleware/
│   ├── authMiddleware.js
│   └── adminMiddleware.js
│
├── models/
│   ├── User.js
│   └── Todo.js
│
├── routes/
│   ├── userRoutes.js
│   ├── todoRoutes.js
│   └── adminRoutes.js
│
├── .env
├── index.js
├── package.json
└── README.md
```

---

# ⚙️ Installation

### Clone the Repository

```bash
git clone https://github.com/shivam1234tiwari/todos-project.git
```

### Move to Project Directory

```bash
cd todo-list-api
```

### Install Dependencies

```bash
npm install
```

### Run the Project

```bash
npm start
```

or

```bash
npm run dev
```

---

# 🔑 Environment Variables

Create a `.env` file in the root directory.

```env
PORT=8000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

---

# 📍 Base URL

```
http://localhost:8000/api
```

---

# 🔒 Authentication

Protected APIs require a JWT Token.

**Header**

```
Authorization: Bearer YOUR_JWT_TOKEN
```

---

# 👥 User APIs

## Register User

**POST**

```
/api/auth/users/register
```

### Request Body

```json
{
  "username": "Rahul Tiwari",
  "email": "rahul@gmail.com",
  "password": "Rahul@123",
  "role": "user",
  "address": "Pune"
}
```

---

## Login User

**POST**

```
/api/auth/users/login
```

### Request Body

```json
{
  "email": "rahul@gmail.com",
  "password": "Rahul@123"
}
```

### Response

```json
{
  "success": true,
  "message": "Login Successful",
  "token": "JWT_TOKEN"
}
```

---

## Get All Users

**GET**

```
/api/auth/users
```

---

## Get Single User

**GET**

```
/api/auth/users/:id
```

Example

```
/api/auth/users/687a4f7d98af0c18b8c88b91
```

---

## Update User

**PUT**

```
/api/auth/users/:id
```

### Request Body

```json
{
  "username": "Rahul",
  "address": "Mumbai"
}
```

---

## Delete User

**DELETE**

```
/api/auth/users/:id
```

---

## User Profile

**GET**

```
/api/auth/profile
```

**Header**

```
Authorization: Bearer JWT_TOKEN
```

---

# ✅ Todo APIs

## Create Todo

**POST**

```
/api/todo
```

### Request Body

```json
{
  "title": "Learn Express",
  "description": "Complete CRUD APIs"
}
```

---

## Get All Todos

**GET**

```
/api/todo
```

---

## Get Single Todo

**GET**

```
/api/todo/:id
```

---

## Update Todo

**PUT**

```
/api/todo/:id
```

### Request Body

```json
{
  "title": "Updated Todo",
  "description": "Updated Description"
}
```

---

## Delete Todo

**DELETE**

```
/api/todo/:id
```

---

# 👑 Admin APIs

These APIs can only be accessed by users having the **Admin** role.

## Admin Dashboard

**GET**

```
/api/admin/dashboard
```

**Header**

```
Authorization: Bearer JWT_TOKEN
```

---

# 📊 HTTP Status Codes

| Status | Description |
|---------|-------------|
| 200 | Success |
| 201 | Created |
| 400 | Bad Request |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |
| 500 | Internal Server Error |

---

# 🛡️ Security Features

- Password Hashing using bcrypt
- JWT Authentication
- Protected Routes
- Admin Middleware
- Role-Based Authorization
- Environment Variables
- MongoDB Schema Validation

---

# 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT (JSON Web Tokens)
- bcrypt
- dotenv
- Nodemon

---

# 🚀 Future Improvements

- User Specific Todos (Owner-based Access Control)
- Todo Categories
- Todo Status
- Search & Pagination
- Swagger Documentation
- Docker Containerization
- Unit Testing
- Refresh Token Authentication
- Forgot Password
- Email Verification

---

# 👨‍💻 Author

**Rahul Tiwari**

MCA Student | Backend Developer
