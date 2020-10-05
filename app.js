

// acquiring the [express]

const express=require('express');
// creating the [app]

const app=express();
//import [product routes]
// importing [morgan]

const morgan=require('morgan');
const bodyParser = require('body-parser');

// using [mongoose]

const mongoose=require('mongoose');


const productRoutes=require('./api/routes/products')


// import [order routes]
const orderRoutes=require('./api/routes/order');

const dbURI="mongodb+srv://avi_9314:avinashjee@node-rest-shop.rdadz.mongodb.net/<dbname>?retryWrites=true&w=majority";

mongoose.connect(dbURI,{useNewUrlParser:true,useUnifiedTopology:true})
        .then((result)=>console.log("server connected successfully!"))
        .catch((err) => console.log(err));

// using [morgan]

mongoose.Promise=global.Promise;

app.use(morgan('dev'));
// using the [body parser]

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// this ensure that we prevent [CORS] error
// [CORS] error are the security mechanism imposed by the browsers
// so we cant see them in the postman tool as it is a testing tool not a browser


app.use((req,res,next) =>{
    res.header("Acess-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type,Accept,Authorization");

    if(req.method ==='OPTIONS')
    {
        res.header('Access-Control-Allow-Methods','PUT','POST','PATCH','DELETE','GET');
        return res.status(200).json({});

    }
    next();
    

});
 

// using the app [ using the .use middleware] 

app.use('/products',productRoutes);

app.use('/orders',orderRoutes); 

app.use((req,res,next)=>{
    const error=new Error('Not Found!');
    error.status=404;
    next(error);
})

app.use((error,req,res,next) =>{

    res.status(error.status || 500);
    res.json({
        error:{
            message: error.message
        }
    });
});


// export 
module.exports =  app;
