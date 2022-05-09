const express = require("express");
require("dotenv").config({ path: "./config/.env" });
const cookieParser = require('cookie-parser');
require('./config/db');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/user.routes');
const postRoutes = require('./routes/post.routes');

const {checkUser , requireAuth} = require('./middleware/auth.middleware');

const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());


// jwt 
app.get('*', checkUser);
app.get('/jwtid', requireAuth, (req, res) => {
    res.status(200).send(res.locals.user._id)
  });


// routes 
app.use('/api/user', userRoutes);
app.use('/api/post', postRoutes);


// server 
app.listen(process.env.PORT, () => {
    console.log(`listening on port ${process.env.PORT}`);
  });