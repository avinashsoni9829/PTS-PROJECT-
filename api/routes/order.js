const express=require('express');
const router=express.Router();
// [get] route
router.get('/',(req,res,next) => {
    res.status(200).json({
        message:"orders were fetched !"
    });
});

// [post] route

router.post('/',(req,res,next) => {
    res.status(201).json({
        message:"orders was created!"
    });
});

// [get] order req

router.get('/:orderId',(req,res,next) => {
    res.status(201).json({
        message:"orders deatils",
        orderId:req.params.orderId
    });
});

// [delete] order

router.delete('/:orderId',(req,res,next) => {
    res.status(201).json({
        message:"orders deleted !",
        orderId:req.params.orderId
    });
});


module.exports=router;

