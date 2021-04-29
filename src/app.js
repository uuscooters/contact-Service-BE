const express = require('express');
// init logging request or response
const morgan = require('morgan');
// init body parse
const bodyParse = require("body-parser");
// init group route
require('express-group-routes');

const {MONGOURL, API} = require('./keys');
const usersRouter = require('./routers/users');

const app = express();
app.use(bodyParse.json());
app.use(morgan('tiny'));
app.use(`${API}/contact`, usersRouter);

// Database Connections
const mongoose = require('mongoose');
mongoose.connect(MONGOURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'contact-database'
});

mongoose.connection.on('connected', () => {
   console.log('Connected to mongo ready...');
});

mongoose.connection.on('error', (err) => {
   console.error(`Connected is ${err}`);
});

// Server Connections
app.listen(3000, () =>{
    console.log("server is running http://localhost:3000");
});