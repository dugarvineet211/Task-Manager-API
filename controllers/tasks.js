const Task=require('../models/task');

//SENDS ALL TASKS
exports.getAllTasks = async (req,res,next)=>{
    try{
        const tasks=await Task.find({});
        return res.status(200).json({tasks});
    }
    catch(error)
    {
        return res.status(500).json({msg:error})
    }
}

//CREATES A SINGLE TASK
exports.createSingleTask = async(req,res,next)=>{
    try{
        const task=await Task.create(req.body);
        return res.status(201).json({task});
    }
    catch(error)
    {
        return res.status(500).json({msg:error});
    }   
}

//SENDS A SINGLE TASK
exports.getSingleTask = async (req,res,next)=>{
    try{
        const { id:taskID }=req.params;
        const task=await Task.findOne({_id:taskID});
        
        if(!task)
        {
            return res.status(404).json({msg:`Task with id ${taskID} does not exist!`});
        }
        else
        {
            return res.status(201).json({task});
        }
    }
    catch(error){
        return res.status(500).json({msg:error});
    }
}

//UPDATES EXISTING TASK
exports.updateOldTask = async(req,res,next)=>{
    try{
    const { id:taskID }=req.params;
    const task=await Task.findOneAndUpdate({_id:taskID},req.body,{
        new:true,
        runValidators:true
    });
    if(!task)
    {
        return res.status(404).json({msg:`Task with id ${taskID} does not exist!`});
    }
    else
    {
        return res.status(201).json({task});
    }
        
    }
    catch(error){
        return res.status(500).json({msg:error});
    }
}

//DELETES EXISTING TASK
exports.deleteOldTask = async (req,res,next)=>{
    try{
    const { id:taskID }=req.params;
    const task=await Task.findOneAndDelete({_id:taskID});
    if(!task)
    {
        return res.status(404).json({msg:`Task with id ${taskID} does not exist!`});
    }
    else
    {
        return res.status(201).json({task:null});
    }
}
catch(error){
    return res.status(500).json({msg:error});
}
}