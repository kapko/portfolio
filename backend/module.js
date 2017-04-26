let express = require('express'),
	mongoose = require('mongoose'),
	app = express(),
	bodyParser = require('body-parser'),
	ejs = require('ejs');

app
	.use(bodyParser.urlencoded())
	.use(bodyParser.json())
	.use(express.static(__dirname + '/../public'))
	.set('views', __dirname + 'public')
	.engine('html', ejs.renderFile)
	.set('view engine', 'html');

// mongoose
// 	.connect('mongodb://localhost/booking', err => 
// 	(err) ? console.error(err) : null);

module.exports = app;
