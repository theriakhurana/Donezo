const express = require('express');
const taskModel = require('../models/task');
const router = express.Router();

router.post("/add", async (req, res)=> {
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
})

module.exports = router;