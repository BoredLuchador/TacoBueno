const mongoose = require('mongoose');

const RoleSchema = new mongoose.Schema({
	BanRole: {
		type: String,
		default: '',
	},
	GuildID: String,
});

module.exports = mongoose.model('Confession Board Ban Role', RoleSchema);