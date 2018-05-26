
var db=require('../dbconnection'); //reference of dbconnection.js
 
var Invoice={
 
getAllInvoice:function(callback){
 
return db.query("select invo.*,cs.*,bi.*,pin.*,phn.*,c.*,s.* from invoice as invo,customer as cs,business_info as bi,address as pin,phone_no as phn,city as c,state as s  where invo.fk_cs_id=cs.cs_id	and invo.fk_business_id=bi.business_id and cs.fk_pincode=pin.pincode and pin.fk_city_id=c.city_id and c.fk_state_id=s.state_id and cs.fk_phone_id=phn.phone_id and invo.isactive=0",callback);
 
},

getInvoicebyid:function(id,callback)//aa bdhi model ma nakhvu
{
return db.query(" select invo.*,cs.*,bi.*,pin.*,phn.*,c.*,s.* from invoice as invo,customer as cs,business_info as bi,address as pin,phone_no as phn,city as c,state as s  where invo.fk_cs_id=cs.cs_id	and invo.fk_business_id=bi.business_id and cs.fk_pincode=pin.pincode and pin.fk_city_id=c.city_id and c.fk_state_id=s.state_id and cs.fk_phone_id=phn.phone_id and invo.isactive=0 and invoice_id=?",[id],callback);
},

addInvoice:function(Invoice,callback){

return db.query("insert into invoice(date,fk_cs_id,cgst,sgst,igst,sub_total,grand_total,cash_credit,additional_expenses,additional_expenses_text) values(?,?,?,?,?,?,?,?,?,?)",[Invoice.date,Invoice.fk_cs_id,Invoice.cgst,Invoice.sgst,Invoice.igst,Invoice.sub_total,Invoice.grand_total,Invoice.cash_credit,Invoice.additional_expenses,Invoice.additional_expenses_text],callback);
},
/*deleteInvoice:function(id,callback){

    return db.query("delete from invoice where invoice_id=?",[id]),callback;

},*/
updateInvoice:function(id,Invoice,callback){
  return db.query("update invoice set date=?, fk_cs_id=?, cgst=?, sgst=?, igst=?, sub_total=?, grand_total=?, cash_credit=?, additional_expenses=?, additional_expenses_text=?  where invoice_id=?",[Invoice.date,Invoice.fk_cs_id,Invoice.cgst,Invoice.sgst,Invoice.igst,Invoice.sub_total,Invoice.grand_total,Invoice.cash_credit,Invoice.additional_expenses,Invoice.additional_expenses_text,id],callback);
 }
 
 
};
 module.exports=Invoice;