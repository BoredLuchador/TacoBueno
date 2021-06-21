const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'buygems',
	aliases: false,
	category: '81',
	description: 'Prawl Stars Gayme command - Lets you become pay to win',
	cooldown : false,
	guildOnly: false,
	NSFW: false,
	args: false,
	usage: false,
	run: async (client, message) => {
		try {
			message.react('🏳️‍🌈');
			message.reply(
				new MessageEmbed().setColor(0x00FF00).setDescription('You bought gems! Your Prawl gamer rate increased by ' +
            Math.floor(Math.random() * 100 + 1) + '% ! '),
			);
		}
		catch (error) {

			console.error(error);
			message.channel.send(`This Command seems to be broken. *make sure the error message below is sent to the developer either by opening the issue in the github page or with the \`bug\` command.*\n\`\`\`Error details:\n${error}\nCommand used: ${message.content}\`\`\``);

		}

	},
};
