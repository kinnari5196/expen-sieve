export class master{
    public constructor(public account_id:number,public fk_entity_id:number,
    public fk_group_id:number,public date_since:string,public amount:number,
    public fk_business_id:number,public gst_no:string,
    public isactive:number){

    }
}