const connection  = require('../services/connection');
const { ObjectId } = require('mongodb');

const insertTask = async(task) => {
  const result = await connection();
   await result.collection('Ebyrt').insertOne({task});
  return { _id: ObjectId(insertTask.insertedId), task};
}

const findTaskbyName = async (task) => {
  const result = await connection();
  const taskbyId = await result.collection('Ebyrt').findOne({task});
  return taskbyId;
}

const findTaskById = async (id) => {
  const finded = await connection().then((result) => result.collection('Ebytr')
  .findOne({_id: ObjectId(id)}));
  return finded;
}

const getAllTasks = async () => {
  const result = await connection();
  const AllTasks = await result.collection('Ebyrt').find().toArray();
  return AllTasks;
}

const removeTask = async (id) =>{
  const result = await connection();
  const deletedProduct = await result.collection('Ebyrt').deleteOne({_id: ObjectId(id)});
  return deletedProduct;
}

const updateTask = async (id, task) => {
  const result = await connection();
    return await result.collection('Ebyrt').updateOne({ _id: ObjectId(id)}, { $set: { task }});
};

 module.exports = { insertTask, getAllTasks, removeTask, updateTask, findTaskbyName, findTaskById };