var mysql = require('mysql');

var client = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'expen_seive'
  });
  client.connect();

  var Customer_seller={

  addCustomer_seller:function(Customer_seller,callback){
   return client.query('INSERT INTO phone_no (phone_no1,phone_no2) values(?,?)',[Customer_seller.phone_no1,Customer_seller.phone_no2],callback);
  // return client.query('INSERT INTO  customer_seller(name,addressline,fk_pincode,fk_phone_id,gst_no,fk_business_id,type,isactive) values(?,?,?,?,?,?,?,?)',[Customer_seller.name,Customer_seller.addressline,Customer_seller.fk_pincode,Customer_seller.fk_phone_id,Customer_seller.gst_no,Customer_seller.fk_business_id,Customer_seller.type],callback);
  
  
 /* client:query(sql, function(err, res) {
 
    // Create row, using the insert id of the first query
    // as the exhibit_id foreign key.
    sql = 'INSERT INTO  customer_seller (name,addressline,fk_pincode,fk_phone_id,gst_no,fk_business_id,type) '+
      'VALUES('+res.name+res.addressline+res.fk_pincode+res+res.SCOPE_IDENTITY()+res.gst_no+res.fk_business_id+res.type+')';
   
    client.query(sql);
   
  })*/
  
 }
  }
module.exports=Customer_seller;