
var db=require('../dbconnection'); //reference of dbconnection.js
 
var Product={
 
getAllProduct:function(callback){
 
return db.query("select p.*,pt.*,c.*,bi.* from product as p,product_type as pt,company as c,business_info as bi  where p.fk_product_type_id=pt.product_type_id and p.fk_company_id=c.company_id and p.fk_business_id=bi.business_id and p.isactive=0 and pt.isactive=0 and c.isactive=0",callback);
 
},

getProductbyid:function(id,callback)//aa bdhi model ma nakhvu
{
return db.query(" select p.*,pt.*,c.*,bi.* from product as p,product_type as pt,company as c,business_info as bi  where p.fk_product_type_id=pt.product_type_id and p.fk_company_id=c.company_id and p.fk_business_id=bi.business_id and p.isactive=0 and pt.isactive=0 and c.isactive=0 and product_id=?",[id],callback);
},

addProduct:function(Product,callback){

return db.query("insert into product(fk_product_type_id,product_name,hsncode,fk_company_id,price,stock,reorder_level,fk_business_id,isactive) values(?,?,?,?,?,?,?,?,?)",[Product.fk_product_type_id,Product.product_name,Product.hsncode,Product.fk_company_id,Product.price,Product.stock,Product.reorder_level,Product.fk_business_id,Product.isactive],callback);
},
deleteProduct:function(id,callback){

    return db.query("delete from product where product_id=?",[id]),callback;

},
updateProduct:function(id,Product,callback){
  return db.query("update product set fk_product_type_id=?,product_name=?,hsncode=?,fk_company_id=?,price=?,stock=?,reorder_level=?,fk_business_id=?,isactive=? where product_id=?",[Product.fk_product_type_id,Product.product_name,Product.hsncode,Product.fk_company_id,Product.price,Product.stock,Product.reorder_level,Product.fk_business_id,Product.isactive,id],callback);
                
}
 
 
};
 module.exports=Product;