
var db=require('../dbconnection'); //reference of dbconnection.js
 
var Address={
 
getAllAdress:function(callback){
 
return db.query("Select * from address",callback);
 
},

getAddressbyid:function(id,callback)//aa bdhi model ma nakhvu
{
return db.query("Select * from address where pincode=?",[id],callback);
},

addAddress:function(Address,callback){

return db.query("insert into address(area,fk_city_id) values(?,?)",[Address.area,Address.fk_city_id],callback);
},
deleteAddress:function(id,callback){

    return db.query("delete from address where pincode=?",[id]),callback;

},
updateAddress:function(id,Address,callback){
  return db.query("update address set area=?,fk_city_id=? where pincode=?",[Address.area,Address.fk_city_id,id],callback);
 }
 
 
};
 module.exports=Address;