//IMPORTING INSTALLED PACKAGES
const express=require('express');
const cors=require('cors');
const bodyParser=require('body-parser');
require('dotenv').config();

//IMPORTING ROUTES
const taskRoutes=require('./routes/tasks');
const errorRoutes=require('./middleware/not-found');

//USER DEFINED MODULES AND FUNCTIONS
const connectDB=require('./db/connect');

//INITIALIZING PACKAGES
const app=express();
app.use(cors());
app.use(bodyParser.json());
//app.use(express.static('./public'))

//routes
app.use('/api/v1/tasks',taskRoutes);
app.use(errorRoutes.notFound);

//STARTING SERVER
const port=3000;


const startServer = async ()=>
{
    try{
        await connectDB(process.env.MONGO_URI);
        app.listen(port,console.log(`Server Started! Listening on port ${port}`));
    }
    catch(error){
        console.log(error);
    }
}

startServer();