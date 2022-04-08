const express=require('express');

const taskController=require('../controllers/tasks');

const router=express.Router();

router.route('/').get(taskController.getAllTasks).post(taskController.createSingleTask);

router.route('/:id').get(taskController.getSingleTask).patch(taskController.updateOldTask).delete(taskController.deleteOldTask);

module.exports=router;
