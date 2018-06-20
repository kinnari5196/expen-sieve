var express = require('express');
 var router = express.Router();
 var User=require('../models/bank_add');


router.post('/',function(req,res,next){

User.addBank(req.body,function(err,count){

if(err){

    res.json(err);
}
else
{
    res.json(req.body);
}

});

});

 module.exports=router;