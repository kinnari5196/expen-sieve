var express = require('express');
 var router = express.Router();
 var User=require('../models/product_type_model');

router.get('/:id?',function(req,res,next){
    if(req.params.id){

     User.getProducttypebyid(req.params.id,function(err,rows){
 
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

User.getAllProducttype(function(err,rows){

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

User.addProducttype(req.body,function(err,count){

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

        User.deleteProducttype(req.params.id,function(err,count){

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
 
User.updateProducttype(req.params.id,req.body,function(err,rows){
 
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