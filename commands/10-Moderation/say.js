const Discord = require('discord.js');

module.exports = {
	name: 'say',
	aliases: ['bc', 'broadcast'],
	category: '10',
	description: 'bot justs repeats after you. please note that using the embed version will use the embed',
	args: true,
	usage: '<input> OR <embed> <input>',
	run: async (clinet, message, args) => {
		if (args[0]) {
			const Sender = message.author;
			const say = args;

			if (args[0] == 'embed') {
				if (args[1]) {
					const Embed = new Discord.MessageEmbed()
						.setColor('RANDOM')
						.setDescription(say.slice(1).join(' '))
						.addField('Author:', (Sender), true)
						.setTimestamp();

					try {
						message.channel.send(Embed);
					}
					catch (error) {
						console.error(error);
						message.channel.send(`Something went wrong.\nError details:\n${error}\n**If you keep running into this problem, please send this error message and send some ss to the developer.**`);
					}
				}
				else {
					return message.channel.send('Oh no, I\'m not able to send a empty embed');
				}
			}
			else {
				try {
					message.channel.send(say.join(' '));
				}
				catch (error) {
					console.error(error);
					message.channel.send(`Something went wrong.\nError details:\n${error}\n**If you keep running into this problem, please send this error message and send some ss to the developer.**`);
				}
			}
			if (message.deletable) message.delete();
		}

	},
};
