const mongoose = require('mongoose');

const PrefixSchema = new mongoose.Schema({
	Prefix: {
		type: String,
		default: '_',
	},
	GuildID: {
		type: String,
		required: true,
	},
});

module.exports = mongoose.model('prefixes', PrefixSchema);