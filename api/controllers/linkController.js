var mongoose = require('mongoose'),
  Link = mongoose.model('Links');

// Find all
exports.list_all_links = function(req, res) {
  Link.find({}, function(err, link) {
    if (err)
      res.send(err);
    res.json(link);
  });
};

// Create
exports.create_a_link = function(req, res) {
  var new_link = new Link(req.body);
  new_link.save(function(err, link) {
    if (err)
      res.send(err);
    res.json(link);
  });
};

// Find by id
exports.read_a_link = function(req, res) {
  Link.findById(req.params.linkId, function(err, link) {
    if (err)
      res.send(err);
    res.json(link);
  });
};

// Find one by id and update 
exports.update_a_link = function(req, res) {
  Link.findOneAndUpdate({_id: req.params.linkId}, req.body, {new: true}, function(err, link) {
    if (err)
      res.send(err);
    res.json(link);
  });
};

// Find one by id and delete 
exports.delete_a_link = function(req, res) {
  Link.remove({
    _id: req.params.linkId
  }, function(err, link) {
    if (err)
      res.send(err);
    res.json({ message: 'Link successfully deleted' });
  });
};

