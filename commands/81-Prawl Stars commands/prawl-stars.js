const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'prawl-stars',
	aliases: ['psinfo'],
	category: '81',
	description: 'Prawl Stars Gayme command - shows info about the prawl stars commands',
	cooldown : false,
	guildOnly: false,
	NSFW: false,
	args: false,
	usage: false,
	run: async (client, message) => {
		try {
			message.react('🏳️‍🌈');

			const msg = new MessageEmbed()
				.setTitle('PRAWL STARS GAYME')
				.setDescription('This bot is a small bot made for the popular game Brawl Stars, with intresting and unexpected commands.')
				.setURL('https://top.gg/bot/630084558083063828')
				.addFields(
					{ name: 'bot author', value: '<@406028027768733696>' },
					{ name: 'Why am I using the code?', value: 'Sadly the bot is going down, and I wanted to keep some memories of it. It made things easier since the bot went open source.' },
					{ name: 'Which commands are from the prawl stars bot?', value: 'They are the commands that reacts with a=the pride flag. They even have their own category.' },
					{ name: 'Source code of Prawl Stars', value: 'https://glitch.com/edit/#!/prawl-stars-gayme?path=server.js%3A1%3A0' },
				);

			message.channel.send(msg);
		}
		catch (error) {

			console.error(error);
			message.channel.send(`This Command seems to be broken. *make sure the error message below is sent to the developer either by opening the issue in the github page or with the \`bug\` command.*\n\`\`\`Error details:\n${error}\nCommand used: ${message.content}\`\`\``);

		}

	},
};