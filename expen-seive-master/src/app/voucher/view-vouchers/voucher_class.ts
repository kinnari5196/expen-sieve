export class voucher{
    public constructor(public voucher_id:number,public from_id:number,
    public to_id:number,public date:string,public amount:number,
    public cash_cheque:number,public cheque_no:number,
    public fk_business_id:number){

    }
}