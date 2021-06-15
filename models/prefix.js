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

// eslint-disable-next-line no-unused-vars
const MessageModel = module.exports = mongoose.model('prefixes', PrefixSchema);