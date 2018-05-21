var express = require('express');
 var router = express.Router();
 var User=require('../models/ac_master_model');

router.get('/:id?',function(req,res,next){
    if(req.params.id){

     User.getMasterbyid(req.params.id,function(err,rows){
 
if(err) 
  { 
  res.json(err);
  }
  else 
  {
  res.json(rows);
  }
  });
 }
else
{

User.getAllMaster(function(err,rows){

    if (err)
    {
        res.json(err);
    }
    else
    {
        res.json(rows);
    }
});
}
}); 


router.post('/',function(req,res,next){

User.addMaster(req.body,function(err,count){

if(err){

    res.json(err);
}
else
{
    res.json(req.body);
}

});

});

router.delete('/:id',function(req,res,next){

        User.deleteMaster(req.params.id,function(err,count){

                if(err){
                    res.json(err);
                }
                else
                {
                    res.json(count);
                }
        });
});

router.put('/:id',function(req,res,next){
 
User.updateMaster(req.params.id,req.body,function(err,rows){
 
if(err)
  {
  res.json(err);
  }
  else
  {
  res.json(rows);
  }
  });
 });
 module.exports=router;