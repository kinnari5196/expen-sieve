
var db=require('../dbconnection'); //reference of dbconnection.js
 
var Product_type={
 
getAllProducttype:function(callback){
 
return db.query("Select * from product_type",callback);
 
},

getProducttypebyid:function(id,callback)//aa bdhi model ma nakhvu
{
return db.query("Select * from product_type where product_type_id=?",[id],callback);
},

addProducttype:function(Product_type,callback){

return db.query("insert into product_type(product_type_description,meter_qty) values(?,?)",[Product_type.product_type_description,Product_type.meter_qty],callback);
},
deleteProducttype:function(id,callback){

    return db.query("delete from product_type where product_type_id=?",[id]),callback;

},
updateProducttype:function(id,Product_type,callback){
  return db.query("update product_type set product_type_description=?,meter_qty=? where product_type_id=?",[Product_type.product_type_description,Product_type.meter_qty,id],callback);
 }
 
 
};
 module.exports=Product_type;