var express = require('express');
 var router = express.Router();
 var User=require('../models/invoice_model');

router.get('/',function(req,res,next){
   
    User.Invoice_number_generate(function(err,rows){

        if (err)
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