
var db=require('../dbconnection'); //reference of dbconnection.js
 
var Customer_seller={
 
getAllCustomer_seller:function(callback){
 
return db.query("Select * from customer_seller",callback);
 
},

getCustomer_sellerbyid:function(id,callback)//aa bdhi model ma nakhvu
{
return db.query("Select * from customer_seller where cs_id=?",[id],callback);
},

addCustomer_seller:function(Customer_seller,callback){

return db.query("insert into customer_seller(name,addressline,fk_pincode,fk_phone_id,gst_no,fk_business_id,type,isactive) values(?,?,?,?,?,?,?,?)",[Customer_seller.name,Customer_seller.addressline,Customer_seller.fk_pincode,Customer_seller.fk_phone_id,Customer_seller.gst_no,Customer_seller.fk_business_id,Customer_seller.type,Customer_seller.isactive],callback);
},
deleteCustomer_seller:function(id,callback){

    return db.query("delete from customer_seller where cs_id=?",[id]),callback;

},
updateCustomer_seller:function(id,Customer_seller,callback){
  return db.query("update customer_seller set name=?, addressline=?, fk_pincode=?, fk_phone_id=?, gst_no=?, fk_business_id=?, type=?, isactive=?  where cs_id=?",[Customer_seller.name,Customer_seller.addressline,Customer_seller.fk_pincode,Customer_seller.fk_phone_id,Customer_seller.gst_no,Customer_seller.fk_business_id,Customer_seller.type,Customer_seller.isactive,id],callback);
 }
 
 
};
 module.exports=Customer_seller;