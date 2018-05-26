var express = require('express');
 var router = express.Router();
 var User=require('../models/customer_add');


router.post('/',function(req,res,next){

User.addCustomer_seller(req.body,function(err,count){

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