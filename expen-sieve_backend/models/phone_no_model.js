
var db=require('../dbconnection'); //reference of dbconnection.js
 
var Phone_no={
 
getAllPhoneno:function(callback){
 
return db.query("Select * from phone_no",callback);
 
},

getPhonenobyid:function(id,callback)//aa bdhi model ma nakhvu
{
return db.query("Select * from phone_no where phone_id=?",[id],callback);
},

addPhoneno:function(Phone_no,callback){

return db.query("insert into phone_no(phone_no1,phone_no2) values(?,?)",[Phone_no.phone_no1,Phone_no.phone_no2],callback);
},
deletePhoneno:function(id,callback){

    return db.query("delete from phone_no where phone_id=?",[id]),callback;

},
updatePhoneno:function(id,Phone_no,callback){
  return db.query("update phone_no set phone_no1=?,phone_no2=? where phone_id=?",[Phone_no.phone_no1,Phone_no.phone_no2,id],callback);
 }
 
 
};
 module.exports=Phone_no;