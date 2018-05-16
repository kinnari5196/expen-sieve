
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

return db.query("insert into product_type(description,meter_qty,isactive) values(?,?,?)",[Product_type.description,Product_type.meter_qty,Product_type.isactive],callback);
},
deleteProducttype:function(id,callback){

    return db.query("delete from product_type where product_type_id=?",[id]),callback;

},
updateProducttype:function(id,Product_type,callback){
  return db.query("update product_type set description=?,meter_qty=?,isactive=? where product_type_id=?",[Product_type.description,Product_type.meter_qty,Product_type.isactive,id],callback);
 }
 
 
};
 module.exports=Product_type;