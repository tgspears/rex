/**
* Rex.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    name:{
      type:'string',
      required:true
    },
    street:{
      type:'string',
      required:false
    },
    city:{
      type:'string',
      required:true
    },
    state:{
      type:'string',
      required:false
    },
    country:{
      type:'string',
      required:true
    },
    category:{
      type:'string',
      required:false
    },
    phone:{
      type:'integer',
      required:false,
    },
    website:{
      type:'url',
      required:false
    },
    email:{
      type:'email',
      required:false
    },
    notes:{
      type:'text',
      required:false
    },
    privateNotes:{
      type:'text',
      required:false
    },

    ////ASSOCIATIONS///
    //belongs to
    list:{
      model:'List'
    },
    //hasmany
    images:{
      collection:'Image',
      via:'rex'
    }

  }
};

