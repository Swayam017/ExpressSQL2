const express = require('express');
const app = express();
const db = require("./utils/db_connections");
const studentRoutes = require("./routes/StudentRoutes");
const identityCardRoutes = require("./routes/identityCardRoutes");
const departmentRoutes = require("./routes/departmentRoutes");
const CourseRoutes = require("./routes/CourseRoutes");


require("./models")

app.use(express.json());
app.use("/students",studentRoutes);
app.use("/courses",CourseRoutes);
app.use(identityCardRoutes);
app.use(departmentRoutes);

db.sync({force: true }).then(()=>{
  app.listen(3000,()=>{
  console.log("Server is running");
})
}).catch((err)=>{
  console.log(err);
})
