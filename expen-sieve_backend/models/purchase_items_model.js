var db=require('../dbconnection'); //reference of dbconnection.js
var fs = require('fs');
 
var Purchase_items={
 
getAllPurchase_items:function(callback){
 
return db.query("Select pi.*,pur.*,pro.*,pt.*,s.*,c.* from purchase_items as pi,purchase as pur,product as pro,product_type as pt,seller as s,company as c where pi.fk_purchase_id=pur.purchase_id and pi.fk_product_id=pro.product_id and pro.fk_product_type_id=pt.product_type_id and pro.fk_company_id=c.company_id and pur.fk_seller_id=s.seller_id and pi.isactive=0",callback);
 
},
addPurchase_items:function(Purchase_items,callback){


return db.query("insert into purchase_items(fk_purchase_id,quantity,amount,fk_product_id) values(?,?,?,?)",[Purchase_items.fk_purchase_id,Purchase_items.quantity,Purchase_items.amount,Purchase_items.fk_product_id],callback)
},
deletePurchase_items:function(id,callback){

    return db.query("delete from purchase_items where purchase_item_id=?",[id]),callback;

},
updatePurchase_items:function(id,Purchase_items,callback){
  return db.query("update purchase_items set fk_purchase_id=?,quantity=?,amount=?,fk_product_id=? where purchase_item_id=?",[Purchase_items.fk_purchase_id,Purchase_items.quantity,Purchase_items.amount,Purchase_items.fk_product_id,id],callback);
 },

 getPurchase_itemsById:function(id,callback)
 {
     return db.query("Select pi.*,pur.*,pro.*,pt.*,s.*,c.* from purchase_items as pi,purchase as pur,product as pro,product_type as pt,seller as s,company as c where pi.fk_purchase_id=pur.purchase_id and pi.fk_product_id=pro.product_id and pro.fk_product_type_id=pt.product_type_id and pro.fk_company_id=c.company_id and pur.fk_seller_id=s.seller_id and pi.isactive=0 and pi.purchase_item_id=?",[id],callback);
 },


 
 
};
 module.exports=Purchase_items;