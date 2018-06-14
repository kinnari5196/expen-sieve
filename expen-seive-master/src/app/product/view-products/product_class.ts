export class product{
    public constructor(public product_id:number,public fk_product_type_id:number,
        public product_name:string,public hsncode:number,
        public fk_company_id:number,public price:number,public stock:number,
        public reorder_level:number,public fk_business_id:number,public isactive:number,
        public product_type_id:number,public description:string,public meter_qty:string,
        public company_id:number,public name:string,public business_id:number,public business_name:string,public password:string){

    }
}