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
  connection.query('update invoice set isactive=1 where invoice_id=?',id,function(err, result) {
    if (err) { 
      connection.rollback(function() {
        throw err;
      });
    }
 
   // var log = result.insertId;
 
    connection.query('update invoice_items set isactive=1 where fk_invoice_id=?',id, function(err, result) {
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