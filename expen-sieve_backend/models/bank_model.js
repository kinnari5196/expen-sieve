
var db=require('../dbconnection'); //reference of dbconnection.js
 
var Bank={
 
getAllBank:function(callback){
 
return db.query("Select b.*,pin.*,c.*,s.*,am.* from bank as b,address as pin,city as c,state as s,ac_master as am where b.fk_pincode=pin.pincode and pin.fk_city_id=c.city_id and c.fk_state_id=s.state_id  and am.fk_entity_id=b.bank_id and am.fk_group_id=3  and b.isactive=0",callback);
 
},

getBankbyid:function(id,callback)//aa bdhi model ma nakhvu
{
return db.query("Select b.*,pin.*,c.*,s.* from bank as b,address as pin,city as c,state as s where b.fk_pincode=pin.pincode and pin.fk_city_id=c.city_id and c.fk_state_id=s.state_id and b.isactive=0 and bank_id=?",[id],callback);
},

addBank:function(Bank,callback){

return db.query("insert into bank(account_no,fk_pincode,name,bsrcode,addressline,gst_no) values(?,?,?,?,?,?)",[Bank.account_no,Bank.fk_pincode,Bank.name,Bank.bsrcode,Bank.addressline,Bank.gst_no],callback);
},
deleteBank:function(id,callback){

    return db.query("delete from bank where bank_id=?",[id]),callback;

},
updateBank:function(id,Bank,callback){
  return db.query("update bank set account_no=?,fk_pincode=?, name=?, bsrcode=?, addressline=?, gst_no=?  where bank_id=?",[Bank.account_no,Bank.fk_pincode,Bank.name,Bank.bsrcode,Bank.addressline,Bank.gst_no,id],callback);
 }
 
 
};
 module.exports=Bank;