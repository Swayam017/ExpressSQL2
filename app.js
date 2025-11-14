const express = require('express');
const app = express();
const db = require("./utils/db_connections");
const studentRoutes = require("./routes/StudentRoutes");

const studentModel = require("./models/students")

require("./models")

app.use(express.json());
app.use("/students",studentRoutes);

db.sync({force:true}).then(()=>{
  app.listen(3000,()=>{
  console.log("Server is running");
})
}).catch((err)=>{
  console.log(err);
})
