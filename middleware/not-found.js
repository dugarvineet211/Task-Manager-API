exports.notFound=(req,res,next)=>{
    res.status(404).send('Cannot find the resource you are looking for!');
}