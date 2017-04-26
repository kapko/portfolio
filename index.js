let express = require('express'),
	app = express(),
	bodyParser = require('body-parser'),
	ejs = require('ejs');

app
	.use(bodyParser.urlencoded())
	.use(bodyParser.json())
	.use(express.static(__dirname + '/public'))
	.set('views', __dirname + '/public')
	.engine('html', ejs.renderFile)
	.set('view engine', 'html');

app.get('/', (req, res) => {
	res.render('./index.html');
});

app.listen('8080', ()=>{
	console.log('PORT=8080');
});

