var express = require('express');
 var router = express.Router();
 var Purchase=require('../models/purchase_model');

router.get('/:id?',function(req,res,next){

if(req.params.id)
{
    Purchase.getPurchaseById(req.params.id,function(err,rows){

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
 Purchase.getAllPurchase(function(err,rows){

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

Purchase.addPurchase(req.body,function(err,count){

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

        Purchase.deletePurchase(req.params.id,function(err,count){

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
 
Purchase.updatePurchase(req.params.id,req.body,function(err,rows){
 
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