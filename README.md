"# todos-project" 
#  Todo List REST API

A secure and scalable **Todo List REST API** built with **Node.js**, **Express.js**, **MongoDB**, and **JWT Authentication**. This project provides user authentication, authorization, and CRUD operations for user management. It follows RESTful API principles and uses industry-standard security practices such as password hashing with **bcrypt** and authentication using **JSON Web Tokens (JWT)**.

<!-- todos all features -->
## ✨ Features

* 🔐 User Registration
* 🔑 User Login with JWT Authentication
* 👤 User Profile API
* 📋 Get All Users
* 🔍 Get Single User
* ✏️ Update User
* 🗑️ Delete User
* 🔒 Password Hashing using bcrypt
* ✅ Input Validation
* 🌍 Environment Variable Support
* 📦 RESTful API Architecture

<!-- tech stack using for this project -->
##  Tech Stack
* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT (jsonwebtoken)
* bcrypt - for password hashing and decrypt
* dotenv - for enviroment configuration
* Nodemon

---

# 📁 Project Structure

```text
todo-list-api/
│
├── config/
│   └── db.js
│
├── controllers/
│   └── authController.js
│
├── middleware/
│   └── authMiddleware.js
│
├── models/
│   └── userModel.js
│
├── routes/
│   ├── userRoutes.js
│   └── todoRoutes.js
│
├── .env
├── app.js
├── package.json
└── README.md
```

---

# ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/username/todos-project.git
```

### Move into Project

```bash
cd todos-project
```

### Install Dependencies

```bash
npm install
```

### Start Development Server

```bash
npm run dev
```

Server will start at:

```text
http://localhost:8000
```

---

# 🌍 Environment Variables

Create a `.env` file in the root directory.

```env
PORT=8000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key
```

---

# 🔑 Authentication

Protected routes require a JWT token.

Example Header

```http
Authorization: Bearer YOUR_JWT_TOKEN
```

---

# 📌 API Endpoints

## Authentication

| Method | Endpoint                   | Description         |
| ------ | -------------------------- | ------------------- |
| POST   | `/api/auth/users/register` | Register a new user |
| POST   | `/api/auth/users/login`    | Login user          |

---

## User APIs

| Method | Endpoint              | Description            |
| ------ | --------------------- | ---------------------- |
| GET    | `/api/auth/users`     | Get all users          |
| GET    | `/api/auth/users/:id` | Get single user        |
| PUT    | `/api/auth/users/:id` | Update user            |
| DELETE | `/api/auth/users/:id` | Delete user            |
| GET    | `/api/auth/profile`   | Logged-in user profile |

---

# 📤 Register User

### Endpoint

```http
POST /api/auth/users/register
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

### Response

```json
{
    "message": "User registered successfully",
    "user": {
        "_id": "...",
        "username": "Rahul Tiwari",
        "email": "rahul@gmail.com",
        "role": "user",
        "address": "Pune"
    }
}
```

---

# 🔑 Login User

### Endpoint

```http
POST /api/auth/users/login
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
    "message": "Login successful",
    "token": "JWT_TOKEN"
}
```

---

# 👤 User Profile

### Endpoint

```http
GET /api/auth/profile
```

### Headers

```http
Authorization: Bearer YOUR_JWT_TOKEN
```

---

# 📊 HTTP Status Codes

| Status Code | Meaning               |
| ----------- | --------------------- |
| 200         | OK                    |
| 201         | Created               |
| 400         | Bad Request           |
| 401         | Unauthorized          |
| 403         | Forbidden             |
| 404         | Not Found             |
| 500         | Internal Server Error |

---

# 🔒 Security

* Passwords are hashed using **bcrypt**
* JWT Authentication
* Environment variables managed using **dotenv**
* Password is never returned in API responses

---

# 🚀 Future Improvements

* Todo CRUD APIs
* Role-Based Authorization (Admin/User)
* Refresh Token Authentication
* Email Verification
* Password Reset
* Swagger/OpenAPI Documentation
* Docker Support
* Unit Testing (Jest)
* API Rate Limiting

---

## Author

**Rahul Tiwari**

* MCA Student (2027)
* Backend Developer (Node.js | Express.js | MongoDB)
* Passionate about building secure and scalable REST APIs.
