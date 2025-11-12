const express = require('express');
const db = require('./utils/db_connections');
const app = express();
const studentRoutes = require("./routes/StudentRoutes");

app.use(express.json());
app.use("/students",studentRoutes);


app.get("/",(req,res) =>{
    res.send("Hello World");
})
app.listen(3000,()=>{
  console.log("Server is running");
})