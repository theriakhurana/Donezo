const taskModel = require("../models/task.module");

const getAllTasks = async (req, res) => {
  try{
    const allTasks = await taskModel.find();
    res.status(200).json(allTasks);
  }
  catch(err){
    res.status(500).json({error : err.message});
  }
};

const getTaskById = async (req, res) => {
  try{
    const task = await taskModel.findById(req.params.id);
    res.status(200).json(task);
  }
  catch(err){
    res.status(500).json({error : err.message});
  }
};

const addTask = async (req, res) =>{
  try{
    const {title, description} = req.body;

    const newTask = new taskModel({
      title, 
      description
    })

    // save to database
    const savedTask = await newTask.save();
    res.status(200).json(savedTask);
  }
  catch(err){
    res.status(500).json({error: err.message});
  }
};

const deleteTask = async (req, res) => {
  try{
    const task = await taskModel.findByIdAndDelete(req.params.id);
    if(!task){
      return res.status(404).json({message: "Task not found"});
    }
    res.status(200).json({message: "Task deleted successfully"});
  }
  catch(err){
    res.status(500).json({error: err.message});
  }
};

const updateTask = async (req, res) => {
  try{
    const {id} = req.params;
    const task = await taskModel.findByIdAndUpdate(id, req.body);

    if(!task){
      return res.status(404).json({message: "Task not found"});
    }

    const updatedtask = await taskModel.findById(id);
    res.status(200).json(updatedtask);
  }
  catch(err){
    res.status(500).json({error: err.message});
  }
};

module.exports = {
  getAllTasks,
  getTaskById,
  addTask,
  deleteTask,
  updateTask
}