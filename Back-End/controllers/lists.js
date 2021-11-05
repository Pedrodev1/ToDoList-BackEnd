const Tasks = require('../services/tasks');


const insertTask = async (req, res) => {
  const { task } = req.body;
  const newTask = await Tasks.insertTask(task);
  return res.status(201).json({newTask});
}

const getAll = async (_req, res) => {
  const tasks = await Tasks.getAllTasks();
  return res.status(200).json({tasks});
}

const removeTask = async (req, res) => {
  const { id } = req.params;
  const removeTask = await Tasks.removeTask(id);
  res.status(200).json(removeTask);
}

const updateTask = async (req, res) => {
  const { id } = req.params;
  const { task } = req.body;
  const updateTask = await Tasks.updateTask(id, task);
  res.status(200).json(updateTask);
}

module.exports = { insertTask, getAll, removeTask, updateTask};