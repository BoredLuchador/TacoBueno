const figlet = require('figlet');

module.exports = {
	name: 'ascii',
	aliases: false,
	category: '80',
	description: 'Converts text to ascii',
	cooldown : false,
	guildOnly: false,
	NSFW: false,
	args: true,
	usage: '<Text to convert>',
	run: async (client, message, args) => {

		let msg = args.join(' ');

		try {
			figlet.text(msg, function(err, data) {
				if(err) {
					console.log('Something went wrong');
					console.dir(err);
				}
				if(data.length > 2000) return message.channel.send('Please provide text shorter than 2000 characters');

				message.channel.send('```' + data + '```');
			});
		}
		catch (error) {
			console.error(error);
			message.channel.send(`This Command seems to be broken. *make sure the error message below is sent to the developer either by opening the issue in the github page or with the \`bug\` command.*\n\`\`\`Error details:\n${error}\nCommand used: ${message.content}\`\`\``);
		}


	},
};