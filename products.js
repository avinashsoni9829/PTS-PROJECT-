// acquiring [express]
const express=require('express');
// creating [router]
const router=express.Router();

// registering [routes]

//[GET] REQUEST
router.get('/', (req,res,next) => {
   res.status(200).json({
       message:"handle get request to /products"
   }); 
});


//[POST] REQUEST
router.post('/', (req,res,next) => {
    res.status(201).json({
        message:"handle post request to /products"
    }); 
 });


 // [ELEMENT GET] REQUEST

 router.get('/:productId',(req,res,next) => { 
     const id=req.params.productId;
     if(id=='special')
     {
         res.status(200).json({
             message:"you got special !",
             id:id
         });
      }
      else
      {
          res.status(200).json({
              message:`you pass an id: ${id} `


          });
      }
  });


  // [patch] route 
   
  router.patch('/:productId',(req,res,next) =>{
  res.status(200).json({
      message:'updated product !'
  });

  });


  //[delete ] route
   
  router.delete('/:productId',(req,res,next) =>{
    res.status(200).json({
        message:'Deleted product !'
    });
  
    });
  




 module.exports=router;
