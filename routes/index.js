const express = require('express');
const passport = require('passport');
const router = express.Router();
const userModel = require("./users")
const postModel = require("./post")
const localStrategy = require("passport-local")
const upload = require('./multer')

passport.use(new localStrategy(userModel.authenticate()));

router.get('/', function(req, res,) {
  res.render('index');
});

router.get('/login', function(req, res,next) {
  res.render('login', {error: req.flash('error')});
});

router.post('/loggedin',
passport.authenticate("local",{
  successRedirect: "/profile",
  failureRedirect: "/login",
  failureFlash: true,
})
, function(req, res,) {
  
});

router.post('/register', function(req, res,) {
  var userData = new userModel({
    username: req.body.username,
    email: req.body.email,
    secret: req.body.secret
  })

  userModel.register(userData, req.body.password)
    .then( function (registereduser){
      passport.authenticate("local")(req,res,function(){
        res.redirect("/profile");
      });

    });
});


router.get('/profile',isloggedin, async function(req, res,) {
 
  const user = await userModel.findOne({
    username: req.session.passport.user
  })
  .populate("posts");
  // console.log(user);
  res.render('profile', {user});
   
});

router.get('/feed',isloggedin ,function(req, res,) {
   res.render('feed');
});

router.post('/upload',isloggedin ,upload.single('file') ,async function(req, res,) {

  if(!req.file){
    return res.status(400).send('No files were uploaded.');
  }
  
  const user =await userModel.findOne({username: req.session.passport.user}).populate("posts");

  const post = await postModel.create({
    image: req.file.filename,
    caption: req.body.caption,
    user: user._id,
  })

  user.posts.push(post._id);
  await user.save();
  
  res.redirect("/profile");

});

router.get('/logout', function(req, res,) {
  req.logout(function(err){
    if (err){return next(err);}
    res.redirect("/login");
  })
});

function isloggedin(req,res,next){
  if(req.isAuthenticated()){
    return next();
  }

  res.redirect("/");
}



module.exports = router;
