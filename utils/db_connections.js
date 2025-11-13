const {Sequelize} = require('sequelize');
const sequelize = new Sequelize('studentsdb','root','Mitaliguli017#',{
  host:'localhost',
  dialect:'mysql'
});

(async() =>{ try {
     await sequelize.authenticate();
    console.log("Connections to the database has been created");
} catch (error) {
    console.log(error);
}
})();
module.exports=sequelize;
























// const mysql = require('mysql2');

// const connection = mysql.createConnection({
//     host:'localhost',
//     user:'root',
//     password:'Mitaliguli017#',
//     database:'studentsdb'
// })
// connection.connect((err) =>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log("Connection is established");
// })

// const creationQuery= `create table if not exists students(
// id INT AUTO_INCREMENT PRIMARY KEY,
// name VARCHAR(20),
// email VARCHAR(20)
// )`


// connection.execute(creationQuery,(err) =>{
//      if(err){
//         console.log(err);
//         connection.end();
//         return;
//      }
//      console.log("Table is created");
// });
// module.exports = connection;
