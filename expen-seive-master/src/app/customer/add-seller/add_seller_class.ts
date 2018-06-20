export class add_seller_class{
    public constructor(public seller_id:number,public name:string,
        public addressline:string,public fk_pincode:number,
        public fk_phone_id:number,public gst_no:string,
        public date_since:string,public amount:number,public phone_no1:string,public phone_no2:string
   ){

    }
}