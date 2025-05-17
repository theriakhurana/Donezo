const express = require('express');
const router = express.Router();

const {getAllTasks,
  getTaskById,
  addTask,
  deleteTask,
  updateTask
} = require("../controllers/task.controller");

router.get("/", getAllTasks);

router.get("/:id", getTaskById);

router.post("/add", addTask);

router.delete("/:id", deleteTask);

router.put("/:id", updateTask);

module.exports = router;