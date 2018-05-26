
var db=require('../dbconnection'); //reference of dbconnection.js
 
var Company={
 
getAllCompany:function(callback){
 
return db.query("Select * from company",callback);
 
},

getCompanybyid:function(id,callback)//aa bdhi model ma nakhvu
{
return db.query("Select * from company where company_id=?",[id],callback);
},

addCompany:function(Company,callback){

return db.query("insert into company(name,description) values(?,?)",[Company.name,Company.description],callback);
},
deleteCompany:function(id,callback){

    return db.query("delete from company where company_id=?",[id]),callback;

},
updateCompany:function(id,Company,callback){
  return db.query("update company set  name=?, description=? where company_id=?",[Company.name,Company.description,id],callback);
 }
 
 
};
 module.exports=Company;