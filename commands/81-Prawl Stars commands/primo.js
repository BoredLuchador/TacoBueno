const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'primo',
	aliases: false,
	category: '81',
	description: 'Prawl Stars Gayme command - just a commentry on primo',
	cooldown : false,
	guildOnly: false,
	NSFW: false,
	args: false,
	usage: false,
	run: async (client, message) => {
		try {
			message.react('🏳️‍🌈');
			const msg = new MessageEmbed()
				.setColor(0xFFAD60)
				.setDescription('Hope he won\'t jump too far');

			message.channel.send(msg);
		}
		catch (error) {

			console.error(error);
			message.channel.send(`This Command seems to be broken. *make sure the error message below is sent to the developer either by opening the issue in the github page or with the \`bug\` command.*\n\`\`\`Error details:\n${error}\nCommand used: ${message.content}\`\`\``);

		}

	},
};