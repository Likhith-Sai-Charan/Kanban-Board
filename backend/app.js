const express = require('express');
const mongoose =  require('mongoose');
const route = require("./routes/task-routes");
const router = require('./routes/task-routes');
const cors=require('cors');

const app=express();

//middlewares
app.use(express.json());
app.use(cors());
app.use("/tasks",router)  //localhose:5000/tasks


mongoose.connect(
    "mongodb+srv://admin:Pvpsit507@cluster0.ltnkyz9.mongodb.net/?retryWrites=true&w=majority"
)
.then(()=>console.log("connected to database"))
.then(()=>{
    app.listen(5000);
}).catch((err)=>console.log(err));