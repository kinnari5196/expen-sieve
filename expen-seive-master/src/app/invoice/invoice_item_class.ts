export class Invoice_item_class{
    public constructor(public invoice_item_id:number,public fk_invoice_id:number,
        public quantity:number,public amount:number,
        public total:number,public fk_product_id:number,public isactive:number,
        public fk_company_id:number){

    }
}