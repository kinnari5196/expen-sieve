var express = require('express');
 var router = express.Router();
 var User=require('../models/phone_no_model');

router.get('/:id?',function(req,res,next){
    if(req.params.id){

     User.getPhonenobyid(req.params.id,function(err,rows){
 
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

User.getAllPhoneno(function(err,rows){

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

User.addPhoneno(req.body,function(err,count){

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

        User.deletePhoneno(req.params.id,function(err,count){

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
 
User.updatePhoneno(req.params.id,req.body,function(err,rows){
 
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