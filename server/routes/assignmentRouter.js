var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Assignment = require('../models/assignment');

//TO DO:  come back and finish the get
router.get('/', function(req, res){
  console.log('in the getter');
  // find all
  Assignment.find({}, function(err, assResults) {
    if (err){
      console.log(err);
      res.sendStatus(500);
    } else {
      console.log('assignments ->', assResults);
      res.send(assResults);
    }
  });
}); // end router.get

router.delete('/:id', function(req, res) {
  console.log('in post user route, req.body -> ', req.params.id);

  Assignment.findByIdAndRemove(req.params.id, function (err) {
    if (err){
      console.log(err);
      res.sendStatus(500);
    } else {
      console.log('assignment deleted');
      res.sendStatus(200);
    }// end if/else
  });// end newAssignment.save

});// end router.delete

router.post('/', function(req, res) {
  console.log('in post user route, req.body -> ', req.body);

});// end router.post

module.exports = router;
