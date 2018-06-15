export class accounting_entity_manager{
    public constructor(public entity_id:number,public name:string,
        public description:string,public fk_business_id:number,
        public gst_no:string,public group_id:number,public ac_grp_name:string,
        public side:string,public account_id:number,public fk_entity_id:number,
        public fk_group_id:number,public date_since:string,public amount:number,
        public isactive:number){

    }
}