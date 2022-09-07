require('dotenv').config();
const express = require('express');
const app = express();
const projects = require('./routes/projects');
const connectDB = require('./db/connect');
const notFound = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');




app.use(express.static('./public'));

app.use(express.json())
app.use('/api/v1/projects', projects)


app.use(notFound)
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 8000;

const path = require("path");





const start = async () =>{
    try{
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`server is listening on port ${port}...`))
    }catch(error){
        console.log(error)
    }
}


app.use(express.static(path.join(__dirname, "client", "build")));

app.get("*", (req, res) => {
    response.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });

start()

