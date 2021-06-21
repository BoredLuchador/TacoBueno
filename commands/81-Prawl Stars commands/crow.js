const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'crow',
	aliases: false,
	category: '81',
	description: 'Prawl Stars Gayme command - Simple command for the best bird',
	cooldown : false,
	guildOnly: false,
	NSFW: false,
	args: false,
	usage: false,
	run: async (client, message) => {
		try {
			message.react('🏳️‍🌈');
			message.channel.send(new MessageEmbed().setColor(0x000000).setDescription('birdy boi'));
		}
		catch (error) {

			console.error(error);
			message.channel.send(`This Command seems to be broken. *make sure the error message below is sent to the developer either by opening the issue in the github page or with the \`bug\` command.*\n\`\`\`Error details:\n${error}\nCommand used: ${message.content}\`\`\``);

		}

	},
};