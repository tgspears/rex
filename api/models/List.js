/**
* List.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    title:{
      type:'string',
      required:true
    },
    description:{
      type:'text',
      required:true
    },

    ////////ASSOCIATIONS/////////

    //has many
    rex:{
      collection:'Rex',
      via:'list'
    },
    //belongs to
    user:{
      model:'User'
    }

  }

};

