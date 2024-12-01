const mongoose = require('mongoose');
const plm= require('passport-local-mongoose')

mongoose.connect("mongodb://127.0.0.1:27017/PINTEREST");

const userSchema = mongoose.Schema({
  username: {
    type:String,
    require: true,
    unique: true,
  },

  email: {
    type:String,
    require: true,
    unique: true,
  },

  password: String,
  secret: Date,

  posts: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Post',
  }],

  dp:{
    type: String,
  }
});

userSchema.plugin(plm);

module.exports = mongoose.model("User",userSchema);
