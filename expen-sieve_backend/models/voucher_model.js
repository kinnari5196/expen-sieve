var db=require('../dbconnection'); //reference of dbconnection.js
var fs = require('fs');
 
var Voucher={
 
getAllVoucher:function(callback){
 
return db.query("Select * from voucher",callback);
 
},
addVoucher:function(Voucher,callback){


return db.query("insert into voucher(from_id,to_id,date,amount,cash_cheque,cheque_no) values(?,?,?,?,?,?)",[Voucher.from_id,Voucher.to_id,Voucher.date,Voucher.amount,Voucher.cash_cheque,Voucher.cheque_no],callback)
},
deleteVoucher:function(id,callback){

    return db.query("delete from voucher where voucher_id=?",[id]),callback;

},
updateVoucher:function(id,Voucher,callback){
  return db.query("update voucher set from_id=?,to_id=?,date=?,amount=?,cash_cheque=?,cheque_no=? where voucher_id=?",[Voucher.from_id,Voucher.to_id,Voucher.date,Voucher.amount,Voucher.cash_cheque,Voucher.cheque_no,id],callback);
 },

 getVoucherById:function(id,callback)
 {
     return db.query("Select * from voucher where voucher_id=?",[id],callback);
 },


 
 
};
 module.exports=Voucher;