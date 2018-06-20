var mysql = require('mysql');
 var Customer_seller={
     addBank:function(Customer_seller,callback){ 
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
  connection.query('INSERT INTO bank SET account_no=?,fk_pincode=?,name=?,bsrcode=?,addressline=?,gst_no=?', [Customer_seller.account_no,Customer_seller.fk_pincode,Customer_seller.name,Customer_seller.bsrcode,Customer_seller.addressline,Customer_seller.gst_no],function(err, result) {
    if (err) { 
      connection.rollback(function() {
        throw err;
      });
    }
 
    var log = result.insertId;
 
    connection.query('INSERT INTO ac_master SET fk_entity_id=?,fk_group_id=?,date_since=?,amount=?,gst_no=?', [log,3,Customer_seller.date_since,Customer_seller.amount,Customer_seller.gst_no], function(err, result) {
      if (err) { 
        connection.rollback(function() {
          throw err;
        });
      }  

      
        

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