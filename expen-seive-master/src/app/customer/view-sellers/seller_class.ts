export class seller{
    public constructor(public seller_id:number,public name:string,
        public addressline:string,public fk_pincode:number,
        public fk_phone_id:number,public gst_no:string,public fk_business_id:number,public phone_id:number,
    public phone_no1:number,public phone_no2:number,
public id:number,public pincode:number,public fk_city_id:number,public city_id:number,
public city_name:string,public fk_state_id:number,public state_id:number,public state_name:string){

    }
}