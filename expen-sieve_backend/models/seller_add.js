var mysql = require('mysql');
 var Customer_seller={
     addCustomer_seller:function(Customer_seller){ 
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
  connection.query('INSERT INTO phone_no SET phone_no1=?,phone_no2=?,isactive=?', [Customer_seller.phone_no1,Customer_seller.phone_no2,Customer_seller.isactive,Customer_seller.name,Customer_seller.addressline,Customer_seller.fk_pincode,Customer_seller.fk_phone_id,Customer_seller.gst_no,Customer_seller.fk_business_id,Customer_seller.isactive],function(err, result) {
    if (err) { 
      connection.rollback(function() {
        throw err;
      });
    }
 
    var log = result.insertId;
 
    connection.query('INSERT INTO seller SET name=?,addressline=?,fk_pincode=?,fk_phone_id=?,gst_no=?,fk_business_id=?,isactive=?', [Customer_seller.name,Customer_seller.addressline,Customer_seller.fk_pincode,log,Customer_seller.gst_no,Customer_seller.fk_business_id,Customer_seller.isactive], function(err, result) {
      if (err) { 
        connection.rollback(function() {
          throw err;
        });
      }  

      var log2 = result.insertId;

 
    connection.query('INSERT INTO ac_master  SET fk_entity_id=?,fk_group_id=?,date_since=?,amount=?,fk_business_id=?,gst_no=?', [log2,2,Customer_seller.date_since,Customer_seller.amount,Customer_seller.fk_business_id,Customer_seller.gst_no], function(err, result) {
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
        connection.end();
      });
      });
  });
});
});
 }
  }
module.exports=Customer_seller;
/* End transaction */