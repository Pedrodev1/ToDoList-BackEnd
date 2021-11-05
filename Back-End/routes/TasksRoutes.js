const express = require('express');
const controller = require('../controllers/lists');
const { checkTaskExists, findExistingTask } = require('../middlewares/lists');

const router = express.Router();



router.get('/', controller.getAll);
router.post('/create', findExistingTask, controller.insertTask);
router.delete('/delete/:id', controller.removeTask);
router.put('/update/:id', findExistingTask, controller.updateTask);

module.exports = router;
