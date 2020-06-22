module.exports = function(app) {
	var linkList = require('../controllers/linkController');

	app.use(function(req, res, next) {
		res.header("Access-Control-Allow-Origin", "http://localhost:3001"); // update to match the domain you will make the request from
		res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS, DELETE, PUT");
		res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, append,delete,entries,foreach,get,has,keys,set,values,Authorization");
		next();
	});

	// Link Routes
	app.route('/links')
		.get(linkList.list_all_links)
		.post(linkList.create_a_link);

	app.route('/links/:linkId')
		.get(linkList.read_a_link)
		.put(linkList.update_a_link)
		.delete(linkList.delete_a_link);
};