
var db=require('../dbconnection'); //reference of dbconnection.js
 
var Invoice_items={
 
getAllInvoiceitems:function(callback){
 
return db.query("Select * from invoice_items",callback);
 
},

getInvoiceitemsbyid:function(id,callback)//aa bdhi model ma nakhvu
{
return db.query("Select * from invoice_items where invoice_item_id=?",[id],callback);
},

addInvoiceitems:function(Invoice_items,callback){

return db.query("insert into invoice_items(fk_invoice_id,quantity,amount,total,fk_product_id,fk_company_id) values(?,?,?,?,?,?)",[Invoice_items.fk_invoice_id,Invoice_items.quantity,Invoice_items.amount,Invoice_items.total,Invoice_items.fk_product_id,Invoice_item.fk_company_id],callback);
},
deleteInvoiceitems:function(id,callback){

    return db.query("delete from invoice_items where invoice_item_id=?",[id]),callback;

},
updateInvoiceitems:function(id,Invoice_items,callback){
  return db.query("update invoice_items set fk_invoice_id=?,quantity=?,amount=?,total=?,fk_product_id=?,fk_company_id=? where invoice_item_id=?",[Invoice_items.fk_invoice_id,Invoice_items.quantity,Invoice_items.amount,Invoice_items.total,Invoice_items.fk_product_id,Invoice_items.fk_company_id,id],callback);
 }
 
 
};
 module.exports=Invoice_items;