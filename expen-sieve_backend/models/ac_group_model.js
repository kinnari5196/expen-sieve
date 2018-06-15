
var db=require('../dbconnection'); //reference of dbconnection.js
 
var Ac_group={
 
getAllGroup:function(callback){
 
return db.query("Select * from ac_group where group_id!=1 and group_id!=2 and group_id!=3",callback);
 
},

getGroupbyid:function(id,callback)//aa bdhi model ma nakhvu
{
return db.query("Select * from ac_group where group_id=?",[id],callback);
},

addGroup:function(Ac_group,callback){

return db.query("insert into ac_group(ac_grp_name,side) values(?,?)",[Ac_group.ac_grp_name,Ac_group.side],callback);
},
deleteGroup:function(id,callback){

    return db.query("delete from ac_group where group_id=?",[id]),callback;

},
updateGroup:function(id,Ac_group,callback){
  return db.query("update ac_group set ac_grp_name=?,side=? where group_id=?",[Ac_group.ac_grp_name,Ac_group.side,id],callback);
 }
 
 
};
 module.exports=Ac_group;