export class view_bank_class{
    public constructor(public bank_id:number,public account_no:number,
        public fk_pincode:number,public name:string,
        public bsrcode:string,public addressline:string,
        public gst_no:string,public date_since:string,
        public amount:number,public id:number,public pincode:number,public fk_city_id:number,public city_id:number,
        public city_name:string,public fk_state_id:number,public state_id:number,public state_name:string
   ){

    }
}