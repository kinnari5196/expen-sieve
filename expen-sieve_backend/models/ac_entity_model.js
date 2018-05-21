
var db=require('../dbconnection'); //reference of dbconnection.js
 
var Ac_entity={
 
getAllEntity:function(callback){
 
return db.query("Select * from ac_entity",callback);
 
},

getEntitybyid:function(id,callback)//aa bdhi model ma nakhvu
{
return db.query("Select * from ac_entity where entity_id=?",[id],callback);
},

addEntity:function(Ac_entity,callback){

return db.query("insert into ac_entity(name,description,fk_business_id,gst_no) values(?,?,?,?)",[Ac_entity.name,Ac_entity.description,Ac_entity.fk_business_id,Ac_entity.gst_no],callback);
},
deleteEntity:function(id,callback){

    return db.query("delete from ac_entity where entity_id=?",[id]),callback;

},
updateEntity:function(id,Ac_entity,callback){
  return db.query("update ac_entity set name=?,description=?,fk_business_id=?,gst_no=? where entity_id=?",[Ac_entity.name,Ac_entity.description,Ac_entity.fk_business_id,Ac_entity.gst_no,id],callback);
 }
 
 
};
 module.exports=Ac_entity;