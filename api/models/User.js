/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

var bcrypt = require('bcrypt');
module.exports = {

  attributes: {
    firstName:{
      type:'string',
      required: true,
      unique:false
    },
    lastName: {
      type:'string',
      required: false,
      unique: false
    },
    username:{
      type:'string',
      required: true,
      unique: true
    },
    email:{
      type:'email',
      required: true,
      unique:true
    },
    password:{
      type:'string',
      minLength:6,
      required:true
    },
    list:{
      collection:'List',
      via:'user'
    },
    fullName:function(){
      return this.firstName+ ' ' + this.lastName;
    }

  },

  beforeCreate: function(values,callback){
    bcrypt.hash(values.password,10, function(err,hash){
      if(err) return callback(err);
      values.password=hash;
      callback();

    })
  }
};

