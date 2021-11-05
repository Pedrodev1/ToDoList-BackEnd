const { ObjectId } = require('mongodb');
const tasks = require('../models/lists');


const insertTask = async (task) =>{
  const insert = await tasks.insertTask(task);
  return insert;
}

const getAllTasks = async () => {
  const getAll = await tasks.getAllTasks();
  return getAll;
}

const removeTask = async (id) => {
  if(ObjectId.isValid(id) || ObjectId(id).length !== 24) return null;
  const remove = await tasks.removeTask(id);
  return remove;
}

const updateTask = async (id, task) => {
  const updated = await tasks.updateTask(id, task);
  const findTaskbyId = await tasks.findTaskById(id);
  return updated;
}

const findTaskbyName = async (task) => {
  const taskbyName = await tasks.findTaskbyName(task);
  return taskbyName;
}

const findTaskId = async (id) => {
  const taskbyId = await tasks.findTaskById(id);
  return taskbyId;
}


module.exports = { insertTask, getAllTasks, removeTask, findTaskbyName, updateTask, findTaskId };