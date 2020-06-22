var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var LinkSchema = new Schema({
  name: {
    type: String,
    required: 'Enter link name'
  },
  link: {
    type: String,
    required: 'Enter link url'
  }  
});

module.exports = mongoose.model('Links', LinkSchema);