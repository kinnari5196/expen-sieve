var express = require('express');
 var router = express.Router();
 var User=require('../models/Delete_Invoice');


router.put('/:id',function(req,res,next){
 
User.addCustomer_seller(req.params.id,req.body,function(err,rows){
 
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