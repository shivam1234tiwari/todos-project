import express from 'express';
import dotenv from 'dotenv';
import ConnectDB from './config/db.js';
import userRoutes from './routes/userRoutes.js'
import todoRoutes from './routes/todoRoutes.js';

const port = process.env.PORT || 8000;
const app = express();

dotenv.config();
ConnectDB();
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/api/auth',userRoutes);
app.use('/api/todo',todoRoutes);
app.get('/', (req, res) => {
  res.send('Welcome to todo-list');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
