// acquiring the [express]
const express=require('express');

// creating the [app]

const app=express();

//import [product routes]

const productRoutes=require('./api/routes/products')

//import [order routes]
const orderRoutes=require('./api/routes/order')




// using the app [ using the .use middleware] 

app.use('/products',productRoutes);

app.use('/orders',orderRoutes);


// export 

module.exports =  app;
