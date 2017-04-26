let name = require('./backend/models/list.js'),
	app = require('./backend/module.js'),
	LIST = require('./backend/models/list.js');


app.get('/', (req, res) => {
	res.render('./index.html');
});

app.listen('8080', ()=>{
	console.log('PORT=8080');
});

