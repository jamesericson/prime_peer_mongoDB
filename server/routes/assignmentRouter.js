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

router.post('/', function(req, res) {
  console.log('in post user route, req.body -> ', req.body);

  var newAssignment = new Assignment({
    assignment_name: req.body.name,
    student_id: req.body.student_id,
    assignment_score: req.body.score,
    turned_in_date: req.body.date
  });

  newAssignment.save(function (err) {
    if (err){
      console.log(err);
      res.sendStatus(500);
    } else {
      console.log('new assignment created');
      res.sendStatus(201);
    }// end if/else
  });// end newAssignment.save

});// end router.post

module.exports = router;
