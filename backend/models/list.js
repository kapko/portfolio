var mongoose = require('mongoose'),
	listSchema = new mongoose.Schema({
		title: 'string',
		image: 'string',
		slug: 'string',
		description: 'string',
		created_at: 'string',
	}),
	lists = mongoose.model('lists', listSchema);

module.exports = lists;
