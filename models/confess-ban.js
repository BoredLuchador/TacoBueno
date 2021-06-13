const mongoose = require('mongoose');

const RoleSchema = new mongoose.Schema({
	BanRole: {
		type: String,
		default: '',
	},
	GuildID: String,
});

// eslint-disable-next-line no-unused-vars
const MessageModel = module.exports = mongoose.model('Confession Board Ban Role', RoleSchema);