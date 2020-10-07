const mongoose= require('mongoose');


//defination of the product [ how it gonna look like !]
const productSchema= mongoose.Schema({

    _id: mongoose.Schema.Types.ObjectId,
    name: {
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    productImage: {
        type:String,
        required:true
    }
});

module.exports=mongoose.model('Product',productSchema);

