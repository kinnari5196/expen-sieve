var db=require('../dbconnection'); //reference of dbconnection.js
var fs = require('fs');
 
var Purchase={
 
getAllPurchase:function(callback){
 
return db.query("Select * from purchase",callback);
 
},
addPurchase:function(Purchase,callback){


return db.query("insert into purchase(date,fk_cs_id,gst,igst,hgst,total,cash_credit,additional_expenses,additional_expenses_text,state,fk_business_id,isactive) values(?,?,?,?,?,?,?,?,?,?,?,?)",[Purchase.date,Purchase.fk_cs_id,Purchase.gst,Purchase.igst,Purchase.hgst,Purchase.total,Purchase.cash_credit,Purchase.additional_expenses,Purchase.additional_expenses_text,Purchase.state,Purchase.fk_business_id,Purchase.isactive],callback)
},
deletePurchase:function(id,callback){

    return db.query("delete from purchase where purchase_id=?",[id]),callback;

},
updatePurchase:function(id,Purchase,callback){
  return db.query("update purchase set date=?,fk_cs_id=?,gst=?,igst=?,hgst=?,total=?,cash_credit=?,additional_expenses=?,additional_expenses_text=?,state=?,fk_business_id=?,isactive=? where purchase_id=?",[Purchase.date,Purchase.fk_cs_id,Purchase.gst,Purchase.igst,Purchase.hgst,Purchase.total,Purchase.cash_credit,Purchase.additional_expenses,Purchase.additional_expenses_text,Purchase.state,Purchase.fk_business_id,Purchase.isactive,id],callback);
 },

 getPurchaseById:function(id,callback)
 {
     return db.query("Select * from purchase where purchase_id=?",[id],callback);
 },


 
 
};
 module.exports=Purchase;