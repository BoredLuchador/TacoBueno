const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'prawlrate',
	aliases: false,
	category: '81',
	description: 'Prawl Stars Gayme command - How much of a prawler are you?',
	cooldown : false,
	guildOnly: false,
	NSFW: false,
	args: false,
	usage: false,
	run: async (client, message) => {
		try {
			message.react('🏳️‍🌈');
			message.reply(
				new MessageEmbed().setColor(0xFFAD60).setDescription('You are ' + Math.floor(Math.random() * 100 + 1) + '% a Prawl Gamer'),
			);
		}
		catch (error) {

			console.error(error);
			message.channel.send(`This Command seems to be broken. *make sure the error message below is sent to the developer either by opening the issue in the github page or with the \`bug\` command.*\n\`\`\`Error details:\n${error}\nCommand used: ${message.content}\`\`\``);

		}

	},
};