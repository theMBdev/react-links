var config = require('./api/config/config');

var express = require('express')

let app = express();
let port = process.env.PORT || 5000;


mongodbUser = config.mongodbUser;
mongodbPassword = config.mongodbPassword;
dbString = config.dbString;


// Set up mongoose connection
const mongoose = require('mongoose');
let Link = require('./api/models/linkModel'); //created model loading here
	
const dbPath = 'mongodb://' + mongodbUser + ':' + mongodbPassword + dbString;

const bodyParser = require('body-parser');



mongoose.connect(dbPath, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/linkRoutes'); //importing route
routes(app); //register the route

app.listen(port, () => {
    console.log('Lists api server started on: ' + port);
});

app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});
