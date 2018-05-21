
var db=require('../dbconnection'); //reference of dbconnection.js
 
var Ac_master={
 
getAllMaster:function(callback){
 
return db.query("Select * from ac_master",callback);
 
},

getMasterbyid:function(id,callback)//aa bdhi model ma nakhvu
{
return db.query("Select * from ac_master where account_id=?",[id],callback);
},

addMaster:function(Ac_master,callback){

return db.query("insert into ac_master(fk_entity_id,fk_group_id,date_since,amount,fk_business_id) values(?,?,?,?,?)",[Ac_master.fk_entity_id,Ac_master.fk_group_id,Ac_master.date_since,Ac_master.amount,Ac_master.fk_business_id],callback);
},
deleteMaster:function(id,callback){

    return db.query("delete from ac_master where account_id=?",[id]),callback;

},
updateMaster:function(id,Ac_master,callback){
  return db.query("update ac_master set fk_entity_id=?, fk_group_id=?, date_since=?, amount=?, fk_business_id=?,gst_no=? where account_id=?",[Ac_master.fk_entity_id,Ac_master.fk_group_id,Ac_master.date_since,Ac_master.amount,Ac_master.fk_business_id,Ac_master.gst_no,id],callback);
 }
 
 
};
 module.exports=Ac_master;