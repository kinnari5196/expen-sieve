export class add_entity_class{
    public constructor(public name:string,
        public description:string,public fk_business_id:number,
        public gst_no:string,public fk_group_id:number,public date_since:string,public amount:number){

    }
}