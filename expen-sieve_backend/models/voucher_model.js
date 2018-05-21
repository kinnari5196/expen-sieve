var db=require('../dbconnection'); //reference of dbconnection.js
var fs = require('fs');
 
var Voucher={
 
getAllVoucher:function(callback){
 
return db.query("Select * from voucher",callback);
 
},
addVoucher:function(Voucher,callback){


return db.query("insert into voucher(from_id,to_id,date,amount,cash_cheque,cheque_no,fk_business_id) values(?,?,?,?,?,?,?)",[Voucher.from_id,Voucher.to_id,Voucher.date,Voucher.amount,Voucher.cash_cheque,Voucher.cheque_no,Voucher.fk_business_id],callback)
},
deleteVoucher:function(id,callback){

    return db.query("delete from voucher where voucher_id=?",[id]),callback;

},
updateVoucher:function(id,Voucher,callback){
  return db.query("update voucher set from_id=?,to_id=?,date=?,amount=?,cash_cheque=?,cheque_no=?,fk_business_id=? where voucher_id=?",[Voucher.from_id,Voucher.to_id,Voucher.date,Voucher.amount,Voucher.cash_cheque,Voucher.cheque_no,Voucher.fk_business_id,id],callback);
 },

 getVoucherById:function(id,callback)
 {
     return db.query("Select * from voucher where voucher_id=?",[id],callback);
 },


 
 
};
 module.exports=Voucher;