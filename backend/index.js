const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const router = express.Router();
const TaskRouter = require('./routes/task.route');

const TaskModel = require('./models/task.module');

const app = express();

app.use(cors());
app.use(express.json());
app.use("/tasks", TaskRouter);



app.get('/', (req, res)=>{
  res.send('Welcome to DoneZo');
})

mongoose
.connect('mongodb://localhost:27017/DoneZo', { useNewUrlParser: true, useUnifiedTopology: true })
.then(()=>{
    console.log('Connected to MongoDB');
    app.listen(4444, ()=> console.log('Server is running on port 4444'));
})
.catch(err => console.log('Error connecting to MongoDB:'));