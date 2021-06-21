const { Status } = require('.././config.json');


module.exports = {
	name: 'ready',
	once: true,
	execute(client) {

		console.log(`I am now online, my name is ${client.user.username}`);

		client.user.setPresence({
			// Color Dot Status//
			status: 'online',
		});
		client.user.setActivity(`${Status.Message}`, { type: 'WATCHING' });

	},
};