export class view_invoice_class{
    public constructor(public invoice_id:number,public date:string,
        public fk_cs_id:number,public cgst:number,
        public sgst:number,public igst:number,public sub_total:number,public grand_total:number,
    public cash_credit:number,public additional_expenses:number,
public additional_expenses_text:string,public cs_id:number,public name:string,public addressline:string,
public fk_pincode:number,public fk_phone_id:number,public gst_no:string){

    }
}