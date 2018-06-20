var mysql = require('mysql');
 var Customer_seller={
     addCustomer_seller:function(id,Customer_seller,callback){ 
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
  connection.query('update purchase set isactive=1 where purchase_id=?',id,function(err, result) {
    if (err) { 
      connection.rollback(function() {
        throw err;
      });
    }
 
   // var log = result.insertId;
 
    connection.query('update purchase_items set isactive=1 where fk_purchase_id=?',id, function(err, result) {
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
        connection.end(callback);
      });
      });
  });
});
 }
  }
module.exports=Customer_seller;
/* End transaction */