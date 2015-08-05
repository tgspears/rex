/**
 * PagesController
 *
 * @description :: Server-side logic for managing Pages
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

// index
module.exports = {
  index: function(req,res){
    res.view('pages/index')
  }
};

