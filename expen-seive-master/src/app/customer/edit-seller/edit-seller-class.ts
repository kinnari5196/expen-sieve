export class edit_seller{
    public constructor(public seller_id:number,public name:string,
        public addressline:string,public fk_pincode:number,
        public fk_phone_id:number,public gst_no:string,
        public fk_business_id:number){

    }
}