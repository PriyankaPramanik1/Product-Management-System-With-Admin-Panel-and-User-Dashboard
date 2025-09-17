require('dotenv').config();
const express = require('express');

const app = express();
const session = require('express-session');
const cookieParser = require('cookie-parser')
const flash = require('connect-flash');

const DbConnection=require('./app/config/dbCon')
DbConnection();

//get data form body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { 
        maxAge: 1000 * 60 * 60 * 24 // 24 hours
     } 
}));

app.use(flash());

app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.static(__dirname + "/public"));

app.use(express.static(__dirname + "/public"));

const AuthRouter=require("./app/routers/authRoutes")
app.use(AuthRouter);

const adminRouter=require("./app/routers/adminRoutes")
app.use(adminRouter);

const userRouter=require("./app/routers/userRoutes")
app.use(userRouter);

const PORT=7500;
app.listen(PORT,()=>{
    console.log(`server is running on http://localhost:${PORT}`);
})