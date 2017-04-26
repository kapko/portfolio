app.get('/', (req, res) => {
	res.json(kapko.name);
});

app.post('/list', (req, res) => {
	new LIST(req.body).save();
	res.send(req.body);
});

app.get('/list', (req, res) => {
	LIST.find({}, (err, data) => {
		res.send(data);
	})
})

app.get('/list/:id', (req, res) => {
	LIST.find({_id: req.params.id}, (err, data) => {
		res.send(data);
	});
});

app.get('/category/:slug', (req, res) => {
	LIST.find({slug: req.params.slug}, (err, data) => {
		res.send(data);
	});
});

app.delete('/list/:id', (req, res) => {
	LIST.find({_id: req.params.id}).remove((err, data) => {
		res.send(data);
	});
})

app.get('/list/category/:slug', (req, res) => {
	LIST.findOne({slug: req.params.slug}, (err, data) => {
		res.send(data);
	})
})