var express = require('express');
 var router = express.Router();
 var Voucher=require('../models/voucher_model');

router.get('/:id?',function(req,res,next){

if(req.params.id)
{
    Voucher.getVoucherById(req.params.id,function(err,rows){

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
else{
 Voucher.getAllVoucher(function(err,rows){

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

Voucher.addVoucher(req.body,function(err,count){

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

        Voucher.deleteVoucher(req.params.id,function(err,count){

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
 
Voucher.updateVoucher(req.params.id,req.body,function(err,rows){
 
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