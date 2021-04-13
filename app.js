var express = require("express");
var methodOverride = require("method-override");
var mongoose = require("mongoose");
var passport = require("passport");
var bodyParser = require("body-parser");
var localStrategy = require("passport-local");

mongoose.set("useNewUrlParser", true);
 mongoose.set("useUnifiedTopology", true);
mongoose.set('useCreateIndex', true);
 mongoose.connect("mongodb://localhost:27017/vote",{useNewUrlParser: true , useFindAndModify: false});

//=====================//
//Express configurations
//=====================//
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/uploads', express.static('uploads'));
app.use(methodOverride('_method'));

//=======================//
//Passport Configuration=//
//=======================//
app.use(require("express-session")({
    secret: "I am hot",
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());
passport.serializeUser(user.serializeUser());
passport.deserializeUser(user.deserializeUser());
passport.use(new localStrategy(user.authenticate()));



app.use(function (req, res, next) {
    res.locals.currentUser = req.user; //it basically passes a single variable to every route
    next();
});




//=======================//
//Route Configuration//
//=======================//

app.use(indexRoutes);
app.use(pollRoutes);
app.use(voterRoutes);

//=========================================================================================================

const port = process.env.PORT || 9000;
app.listen(port, () => console.log(`Example app listening on port ${port}!`))

