var db=require('../dbconnection'); //reference of dbconnection.js
var fs = require('fs');
 
var Purchase_items={
 
getAllPurchase_items:function(callback){
 
return db.query("Select * from purchase_items",callback);
 
},
addPurchase_items:function(Purchase_items,callback){


return db.query("insert into purchase_items(fk_purchase_id,quantity,amount,fk_product_id,isactive) values(?,?,?,?,?)",[Purchase_items.fk_purchase_id,Purchase_items.quantity,Purchase_items.amount,Purchase_items.fk_product_id,Purchase_items.isactive],callback)
},
deletePurchase_items:function(id,callback){

    return db.query("delete from purchase_items where purchase_item_id=?",[id]),callback;

},
updatePurchase_items:function(id,Purchase_items,callback){
  return db.query("update purchase_items set fk_purchase_id=?,quantity=?,amount=?,fk_product_id=?,isactive=? where purchase_item_id=?",[Purchase_items.fk_purchase_id,Purchase_items.quantity,Purchase_items.amount,Purchase_items.fk_product_id,Purchase_items.isactive,id],callback);
 },

 getPurchase_itemsById:function(id,callback)
 {
     return db.query("Select * from purchase_items where purchase_item_id=?",[id],callback);
 },


 
 
};
 module.exports=Purchase_items;