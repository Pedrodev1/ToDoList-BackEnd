const { findTaskbyName, findTaskId } = require('../services/tasks');
const { ObjectId } = require('mongodb');
const { findTaskById } = require('../models/lists');


const findExistingTask = async (req,res, next) => {
  const { task } = req.body;
  const findExistingTask = await findTaskbyName(task);
  if(findExistingTask) {
    return res.status(422).json({err: { code: 'invalid_data', message: 'Task already registered'}});
  }
  next();
}

const checkTaskExists = async (req, res, next) => {
  const { id } = req.params;
  const findTask = await findTaskId(id);
  console.log(findTask);
  if(!findTask){ 
    return res.status(422).json({err: { code: 'invalid_data', message: 'No task found'}})
  }
  next();
}

module.exports = { checkTaskExists, findExistingTask }