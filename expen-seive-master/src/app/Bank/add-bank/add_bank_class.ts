export class add_bank_class{
    public constructor(public bank_id:number,public account_no:number,
        public fk_pincode:number,public name:string,
        public bsrcode:string,public addressline:string,
        public gst_no:string,public date_since:string,public amount:number
   ){

    }
}