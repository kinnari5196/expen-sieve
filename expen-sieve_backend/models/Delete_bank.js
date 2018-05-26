var mysql = require('mysql');
 var Customer_seller={
     addCustomer_seller:function(id,Customer_seller){ 
var connection = mysql.createConnection(
    {
      host     : 'localhost',
      user     : 'root',
      password : '',
      database : 'expen_seive'
    }
);
 
connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.log('connected as id ' + connection.threadId);
});
 
/* Begin transaction */
connection.beginTransaction(function(err) {
  if (err) { throw err; }
  connection.query('update bank set isactive=1 where account_no=?',[id],function(err, result) {
    if (err) { 
      connection.rollback(function() {
        throw err;
      });
    }
 
   // var log = result.insertId;
 
    connection.query('update ac_master set isactive=1 where fk_entity_id=? and fk_group_id=?', [id,3], function(err, result) {
      if (err) { 
        connection.rollback(function() {
          throw err;
        });
      }  

      var log2 = result.insertId;

 
       connection.commit(function(err) {
        if (err) { 
          connection.rollback(function() {
            throw err;
          });
        }
        console.log('Transaction Complete.');
        connection.end();
      });
      });
  });
});
 }
  }
module.exports=Customer_seller;
/* End transaction */