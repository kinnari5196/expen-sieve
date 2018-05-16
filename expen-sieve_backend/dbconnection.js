var mysql=require('mysql');
 var connection=mysql.createPool({
 
host:'localhost',
 user:'root',
 password:'',
 database:'expen_seive'
 
});
 module.exports=connection;