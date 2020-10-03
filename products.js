// acquiring [express]
const express=require('express');
// creating [router]
const router=express.Router();
const mongoose=require('mongoose');


const Product=require('../models/product');

// registering [routes]

//[GET] REQUEST
router.get('/', (req,res,next) => {
   Product
   .find()
   .exec()
   .then(docs =>{
       console.log(docs);
       res.status(200).json(docs);
    })
   .catch(err =>{
       console.log(err);
       res.status(500).json({
           error:err
       });
   });
});


//[POST] REQUEST
router.post('/', (req,res,next) => {
   const product= new Product({
        _id:new mongoose.Types.ObjectId(),
        name:req.body.name,
        price:req.body.price
    });
    //save will store this product in the database
    
    product
    .save()
    .then(result =>{
        console.log(result);
        res.status(201).json({
            message:"handle post request to /products",
            createdProduct: product
        }); 
    })
    .catch(err =>{
        console.log(err)
        res.status(500).json({
            error:err
        })
    });
     
   
 });


 // [ELEMENT GET] REQUEST

 router.get('/:productId',(req,res,next) => { 
     const id=req.params.productId;
     Product.findById(id)
     .exec()
     .then(doc =>{
         console.log("from datatbase",doc);
         res.status(200).json(doc);
        })
     .catch(err =>{
         console.log(err);
         res.status(500).json({
             error: err
         });

     });
  });


  // [patch] route 
   
  router.patch('/:productId',(req,res,next) =>{
     
    const id=req.params.productId;

    const updateOps = {};
    // this only changes what is required no everything

    for( const ops of req.body)
    {
        updateOps[ops.propName] = ops.value;

    }

    Product
    .update({id: id},{ $set:updateOps})
    .exec()
    .then(result =>{
        console.log(result);
        res.status(200).json(result);
    })
    .catch(err =>{
        console.log(err);
        res.status(500).json({
            error: err
        });
    });

  });


  //[delete ] route
   
  router.delete('/:productId',(req,res,next) =>{
    const id=req.params.productId;

    Product.remove({_id : id})
    .exec()
    .then(res =>{
        res.status(200).json(result);
    })
    .catch(err =>{
        console.log(err);
        res.status(500).json({
            error:err
        });

    })
  
    });
  




 module.exports=router;
