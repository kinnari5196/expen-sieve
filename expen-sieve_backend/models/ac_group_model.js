
var db=require('../dbconnection'); //reference of dbconnection.js
 
var Ac_group={
 
getAllGroup:function(callback){
 
return db.query("Select * from ac_group",callback);
 
},

getGroupbyid:function(id,callback)//aa bdhi model ma nakhvu
{
return db.query("Select * from ac_group where group_id=?",[id],callback);
},

addGroup:function(Ac_group,callback){

return db.query("insert into ac_group(name,side,fk_business_id) values(?,?,?)",[Ac_group.name,Ac_group.side,Ac_group.fk_business_id],callback);
},
deleteGroup:function(id,callback){

    return db.query("delete from ac_group where group_id=?",[id]),callback;

},
updateGroup:function(id,Ac_group,callback){
  return db.query("update ac_group set name=?,side=?,fk_business_id=? where group_id=?",[Ac_group.name,Ac_group.side,Ac_group.fk_business_id,id],callback);
 }
 
 
};
 module.exports=Ac_group;