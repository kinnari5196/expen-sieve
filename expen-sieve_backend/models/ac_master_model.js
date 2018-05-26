//hiii aesha
var db=require('../dbconnection'); //reference of dbconnection.js
 //hello krishma
var Ac_master={
 
getAllMaster:function(callback){
 
return db.query("Select master.*,entity.*,grp.*,bi.* from ac_master as master,ac_entity as entity,ac_group as grp,business_info as bi where master.fk_entity_id=entity.entity_id and master.fk_group_id=grp.group_id and master.fk_business_id=bi.business_id",callback);
 
},

getMasterbyid:function(id,callback)//aa bdhi model ma nakhvu
{
return db.query("Select master.*,entity.*,grp.*,bi.* from ac_master as master,ac_entity as entity,ac_group as grp,business_info as bi where master.fk_entity_id=entity.entity_id and master.fk_group_id=grp.group_id and master.fk_business_id=bi.business_id and account_id=?",[id],callback);
},

addMaster:function(Ac_master,callback){

return db.query("insert into ac_master(fk_entity_id,fk_group_id,date_since,amount) values(?,?,?,?)",[Ac_master.fk_entity_id,Ac_master.fk_group_id,Ac_master.date_since,Ac_master.amount],callback);
},
deleteMaster:function(id,callback){

    return db.query("delete from ac_master where account_id=?",[id]),callback;

},
updateMaster:function(id,Ac_master,callback){
  return db.query("update ac_master set fk_entity_id=?, fk_group_id=?, date_since=?, amount=?,gst_no=? where account_id=?",[Ac_master.fk_entity_id,Ac_master.fk_group_id,Ac_master.date_since,Ac_master.amount,Ac_master.gst_no,id],callback);
 }
 
 
};
 module.exports=Ac_master;