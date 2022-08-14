const express = require('express');
const app = express();
const projects = require('./routes/projects');
const connectDB = require('./db/connect');
require('dotenv').config();


app.use(express.json())
app.use('/api/v1/projects', projects)


const port = process.env.PORT || 5000;

const start = async () =>{
    try{
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`server is listening on port ${port}...`))
    }catch(error){
        console.log(error)
    }
}

start()

