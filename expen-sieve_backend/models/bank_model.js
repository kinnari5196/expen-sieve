
var db=require('../dbconnection'); //reference of dbconnection.js
 
var Bank={
 
getAllBank:function(callback){
 
return db.query("Select * from bank",callback);
 
},

getBankbyid:function(id,callback)//aa bdhi model ma nakhvu
{
return db.query("Select * from bank where account_no=?",[id],callback);
},

addBank:function(Bank,callback){

return db.query("insert into bank(account_no,fk_pincode,name,bsrcode,addressline,gst_no,isactive) values(?,?,?,?,?,?,?)",[Bank.account_no,Bank.fk_pincode,Bank.name,Bank.bsrcode,Bank.addressline,Bank.gst_no,Bank.isactive],callback);
},
deleteBank:function(id,callback){

    return db.query("delete from bank where account_no=?",[id]),callback;

},
updateBank:function(id,Bank,callback){
  return db.query("update bank set account_no=?,fk_pincode=?, name=?, bsrcode=?, addressline=?, gst_no=?, isactive=?  where account_no=?",[Bank.account_no,Bank.fk_pincode,Bank.name,Bank.bsrcode,Bank.addressline,Bank.gst_no,Bank.isactive,id],callback);
 }
 
 
};
 module.exports=Bank;