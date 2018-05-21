
var db=require('../dbconnection'); //reference of dbconnection.js
 
var Invoice={
 
getAllInvoice:function(callback){
 
return db.query("Select * from invoice",callback);
 
},

getInvoicebyid:function(id,callback)//aa bdhi model ma nakhvu
{
return db.query("Select * from invoice where invoice_id=?",[id],callback);
},

addInvoice:function(Invoice,callback){

return db.query("insert into invoice(date,fk_cs_id,cgst,sgst,igst,sub_total,grand_total,cash_credit,additional_expenses,additional_expenses_text,fk_business_id,isactive) values(?,?,?,?,?,?,?,?,?,?,?,?)",[Invoice.date,Invoice.fk_cs_id,Invoice.cgst,Invoice.sgst,Invoice.igst,Invoice.sub_total,Invoice.grand_total,Invoice.cash_credit,Invoice.additional_expenses,Invoice.additional_expenses_text,Invoice.fk_business_id,Invoice.isactive],callback);
},
deleteInvoice:function(id,callback){

    return db.query("delete from invoice where invoice_id=?",[id]),callback;

},
updateInvoice:function(id,Invoice,callback){
  return db.query("update invoice set date=?, fk_cs_id=?, cgst=?, sgst=?, igst=?, sub_total=?, grand_total=?, cash_credit=?, additional_expenses=?, additional_expenses_text=?, fk_business_id=?, isactive=?  where invoice_id=?",[Invoice.date,Invoice.fk_cs_id,Invoice.cgst,Invoice.sgst,Invoice.igst,Invoice.sub_total,Invoice.grand_total,Invoice.cash_credit,Invoice.additional_expenses,Invoice.additional_expenses_text,Invoice.fk_business_id,Invoice.isactive,id],callback);
 }
 
 
};
 module.exports=Invoice;