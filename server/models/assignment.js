var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var assignmentSchema = new Schema ({
  assignment_name: String,
  student_id: Number,
  assignment_score: Number,
  turned_in_date: String
});

var Assignment = mongoose.model('assignments', assignmentSchema);

module.exports = Assignment;
