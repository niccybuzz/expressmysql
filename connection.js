 const mysql  = require("mysql2");
 const db = mysql.createConnection({
     host: 'localhost',
     user: 'root',
     password: '',
     database: 'webdev',
     port: '3306' 
 });
 
 db.connect( (err)=> {
     if(err) throw err;
     console.log("Connection established")
 });
 
 module.exports = db;
 