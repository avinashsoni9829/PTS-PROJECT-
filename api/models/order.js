const mongoose= require('mongoose');


//defination of the product [ how it gonna look like !]
const orderSchema= mongoose.Schema({
// ref is used to connect schemas
    _id: mongoose.Schema.Types.ObjectId,
    product: {
        type:mongoose.Schema.Types.ObjectId , 
        ref:'Product',
        required:true 
    },
    quantity:{
        type: Number, 
        default: 1
    }
});

module.exports=mongoose.model('Order',orderSchema);

