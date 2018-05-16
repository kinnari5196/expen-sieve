
var db=require('../dbconnection'); //reference of dbconnection.js
 
var Business_info={
 
getAllBusiness:function(callback){
 
return db.query("Select * from business_info",callback);
 
},

getBusinessbyid:function(id,callback)//aa bdhi model ma nakhvu
{
return db.query("Select * from business_info where business_id=?",[id],callback);
},

addBusiness:function(Business_info,callback){

return db.query("insert into business_info(business_name,password) values(?,?)",[Business_info.business_name,Business_info.password],callback);
},
deleteBusiness:function(id,callback){

    return db.query("delete from business_info where business_id=?",[id]),callback;

},
updateBusiness:function(id,Business_info,callback){
  return db.query("update business_info set business_name=?,password=? where business_id=?",[Business_info.business_name,Business_info.password,id],callback);
 }
 
 
};
 module.exports=Business_info;