var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors=require('cors');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var Businessinfo=require('./routes/businessinfo');
var Invoiceitems=require('./routes/invoiceitems');
var Phoneno=require('./routes/phoneno');
var Product=require('./routes/product');
var Producttype=require('./routes/producttype');
var Acentity=require('./routes/acentity');
var Acgroup=require('./routes/acgroup');
var Acmaster=require('./routes/acmaster');
var Address=require("./routes/address");
var Bank=require("./routes/bank");
var Company=require("./routes/comapny");
var Customer_seller=require("./routes/customerseller");
var Invoice=require("./routes/invoice");



var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/businessinfo',Businessinfo);
app.use('/invoiceitems',Invoiceitems);
app.use('/phoneno',Phoneno);
app.use('/product',Product);
app.use('/producttype',Producttype);
app.use('/acentity',Acentity);
app.use('/acgroup',Acgroup);
app.use('/acmaster',Acmaster);
app.use('/address',Address);
app.use('/bank',Bank);
app.use('/company',Company);
app.use('/customerseller',Customer_seller);
app.use('/invoice',Invoice);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
