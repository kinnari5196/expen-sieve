var db=require('../dbconnection'); //reference of dbconnection.js
var fs = require('fs');
 
var Purchase={
 
getAllPurchase:function(callback){
 
return db.query("select pur.*,cs.*,bi.*,pin.*,phn.*,c.*,s.* from purchase as pur,seller as cs,business_info as bi,address as pin,phone_no as phn,city as c,state as s  where pur.fk_seller_id=cs.seller_id	and pur.fk_business_id=bi.business_id and cs.fk_pincode=pin.pincode and pin.fk_city_id=c.city_id and c.fk_state_id=s.state_id and cs.fk_phone_id=phn.phone_id and pur.isactive=0",callback);
 
},
addPurchase:function(Purchase,callback){


return db.query("insert into purchase(date,fk_seller_id,gst,igst,hgst,total,cash_credit,additional_expenses,additional_expenses_text,state) values(?,?,?,?,?,?,?,?,?,?)",[Purchase.date,Purchase.fk_seller_id,Purchase.gst,Purchase.igst,Purchase.hgst,Purchase.total,Purchase.cash_credit,Purchase.additional_expenses,Purchase.additional_expenses_text,Purchase.state],callback)
},
deletePurchase:function(id,callback){

    return db.query("delete from purchase where purchase_id=?",[id]),callback;

},
updatePurchase:function(id,Purchase,callback){
  return db.query("update purchase set date=?,fk_seller_id=?,gst=?,igst=?,hgst=?,total=?,cash_credit=?,additional_expenses=?,additional_expenses_text=?,state=? where purchase_id=?",[Purchase.date,Purchase.fk_seller_id,Purchase.gst,Purchase.igst,Purchase.hgst,Purchase.total,Purchase.cash_credit,Purchase.additional_expenses,Purchase.additional_expenses_text,Purchase.state,id],callback);
 },

 getPurchaseById:function(id,callback)
 {
     return db.query("select pur.*,cs.*,bi.*,pin.*,phn.*,c.*,s.* from purchase as pur,seller as cs,business_info as bi,address as pin,phone_no as phn,city as c,state as s  where pur.fk_seller_id=cs.seller_id	and pur.fk_business_id=bi.business_id and cs.fk_pincode=pin.pincode and pin.fk_city_id=c.city_id and c.fk_state_id=s.state_id and cs.fk_phone_id=phn.phone_id and pur.isactive=0 and pur.purchase_id=?",[id],callback);
 },


 
 
};
 module.exports=Purchase;