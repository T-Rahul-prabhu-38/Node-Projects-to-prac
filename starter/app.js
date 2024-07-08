const express = require('express');
const morgan = require('morgan');

const tourRouter = require('./routes/tourRoutes')
const userRoutes = require('./routes/userRoutes')


const app = express();

app.use(morgan('dev'));
app.use(express.json());

app.use((req,res,next)=>{
  console.log("hello from the middleware");
  next();
});


app.use('api/v1/tours',tourRouter);
app.use('api/v1/users',userRoutes);

module.exports = app;