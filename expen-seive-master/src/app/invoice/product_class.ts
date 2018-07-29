export class product{
    public constructor(public product_id:number,public fk_product_type_id:number,
        public product_name:string,public hsncode:number,
        public fk_company_id:number,public price:number,public stock:number,
        public reorder_level:number,public fk_business_id:number){

    }
}