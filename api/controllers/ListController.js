/**
 * ListController
 *
 * @description :: Server-side logic for managing lists
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  addRex: function(req,res){
    Rex.create({
      name:req.body.name,
      street:req.body.street,
      city:req.body.city,
      state:req.body.state,
      country:req.body.country,
      website:req.body.website,
      phone:req.body.phone,
      notes:req.body.notes
    }).then(function(data){
      res.send(data)
    })
  }



};

