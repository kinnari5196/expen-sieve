
var db=require('../dbconnection'); //reference of dbconnection.js

//const pgp1 = db.$config.pgp;
 
var Customer_seller={
 
getAllCustomer_seller:function(callback){
 
return db.query("select cs.*,pin.*,phn.*,bi.*,c.*,s.* from seller as cs,address as pin,phone_no as phn,business_info as bi,city as c,state as s  where cs.fk_pincode=pin.pincode and cs.fk_phone_id=phn.phone_id and cs.fk_business_id=bi.business_id and cs.isactive=0 and phn.isactive=0 and pin.fk_city_id=c.city_id and c.fk_state_id=s.state_id",callback);
 
},

getCustomer_sellerbyid:function(id,callback)//aa bdhi model ma nakhvu
{
return db.query(" select cs.*,pin.*,phn.*,bi.*,c.*,s.* from seller as cs,address as pin,phone_no as phn,business_info as bi,city as c,state as s  where cs.fk_pincode=pin.pincode and cs.fk_phone_id=phn.phone_id and cs.fk_business_id=bi.business_id and cs.isactive=0 and phn.isactive=0 and pin.fk_city_id=c.city_id and c.fk_state_id=s.state_id and cs.cs_id=?",[id],callback);
},

addCustomer_seller:function(Customer_seller,callback){

//return db.query("insert into customer_seller(name,addressline,fk_pincode,fk_phone_id,gst_no,fk_business_id,type,isactive) values(?,?,?,?,?,?,?,?)",[Customer_seller.name,Customer_seller.addressline,Customer_seller.fk_pincode,Customer_seller.fk_phone_id,Customer_seller.gst_no,Customer_seller.fk_business_id,Customer_seller.type,Customer_seller.isactive],callback);

//return db.query("INSERT ALL INTO  customer_seller (name,addressline,fk_pincode,fk_phone_id,gst_no,fk_business_id,type) values(?,?,?,?,?,?,?) INTO phone_no (phone_no1,phone_no2) values(?,?)  INTO ac_master(fk_entity_id,fk_group_id,date_since,amount,fk_business_id) values(?,?,?,?,?)",
//[Customer_seller.name,Customer_seller.addressline,Customer_seller.fk_pincode,Customer_seller.fk_phone_id,Customer_seller.gst_no,Customer_seller.fk_business_id,Customer_seller.type,Customer_seller.phone_no1,Customer_seller.phone_no2,Customer_seller.fk_entity_id,Customer_seller.fk_group_id,Customer_seller.date_since,Customer_seller.amount,Customer_seller.fk_business_id],callback);

},
deleteCustomer_seller:function(id,callback){

    return db.query("delete from seller where seller_id=?",[id]),callback;

},
updateCustomer_seller:function(id,Customer_seller,callback){
  return db.query("update seller set name=?, addressline=?, fk_pincode=?, fk_phone_id=?, gst_no=?, fk_business_id=?, isactive=?  where seller_id=?",[Customer_seller.name,Customer_seller.addressline,Customer_seller.fk_pincode,Customer_seller.fk_phone_id,Customer_seller.gst_no,Customer_seller.fk_business_id,Customer_seller.isactive,id],callback);
 }
 
 
};
 module.exports=Customer_seller;