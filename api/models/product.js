const mongoose= require('mongoose');


//defination of the product [ how it gonna look like !]
const productSchema= mongoose.Schema({

    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    price:Number
});

module.exports=mongoose.model('Product',productSchema);

