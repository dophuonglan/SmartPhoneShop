var express = require('express');
var router = express.Router();
const sql = require('mssql')
 
const config ={
  user :'',
  password :'',
  server : 'DESKTOP-115OKUD\SQLEXPRESS',
  database :'WebShop',
  port :1433,
}

// connect

sql.connect(config, function(err){
  if(err) console.log(err);
  //create a new  request object
  let sqlRequest = new sql.Request();

  //query  to the  database and get the records/fields in the data Object
  let sqlQuery ='Select ID, Account, Address, Name, Password, Phone, Status where ID =3';
  sqlRequest.query(sqlQuery, function(err,data){
    if(err)console.log(err);
    console.table(data.recordset);
  sql.close();
  });
});
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
