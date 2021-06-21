const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'checkbush',
	aliases: false,
	category: '81',
	description: 'Prawl Stars Gayme command - Makes you check a bush for any campers',
	cooldown : false,
	guildOnly: false,
	NSFW: false,
	args: false,
	usage: false,
	run: async (client, message) => {
		try {
			message.react('🏳️‍🌈');
			message.reply(
				new MessageEmbed().setColor(0x013220).setDescription('A wild brawler has appeared and dealt ' +
            Math.floor(Math.random() * 5000 + 1) +
            ' damange!'),
			);
		}
		catch (error) {

			console.error(error);
			message.channel.send(`This Command seems to be broken. *make sure the error message below is sent to the developer either by opening the issue in the github page or with the \`bug\` command.*\n\`\`\`Error details:\n${error}\nCommand used: ${message.content}\`\`\``);

		}

	},
};
