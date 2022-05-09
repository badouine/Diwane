const express = require("express");
require("dotenv").config({ path: "./config/.env" });
const cookieParser = require('cookie-parser');
require('./config/db');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/user.routes');
const {checkUser} = require('./middleware/auth.middleware');

const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());


// jwt 
app.get('*', checkUser);


// routes 
app.use('/api/user', userRoutes);


// server 
app.listen(process.env.PORT, () => {
    console.log(`listening on port ${process.env.PORT}`);
  });