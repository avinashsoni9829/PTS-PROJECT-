// acquiring the [express]
const express=require('express');

// creating the [app]

const app=express();

// using the app [ using the .use middleware] 

app.use((req,res,next) => {
    res.status(200).json({
        message: 'server connected !'
    });
});

// export 

module.exports =  app;
