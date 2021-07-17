const express = require('express');
const app = express();
require('dotenv').config();
const { PORT, MONGO_URI} = process.env;
const mongoose = require('mongoose');
const router = require('./router/User')

mongoose.connect(MONGO_URI, { useNewUrlParser : true, useUnifiedTopology : true}, (err) => {
  if (err) {
    console.log('db connect err : ' , err);
  } else {
    console.log('db connect on : ', MONGO_URI);
  }
})

app.use(require('cors')());
app.use(express.json({ limit : '50mb'}));
app.use(express.urlencoded({extended : false, limit : '50mb'}));


app.use('/api/user', router);

require('http').createServer(app).listen(PORT || 8081);