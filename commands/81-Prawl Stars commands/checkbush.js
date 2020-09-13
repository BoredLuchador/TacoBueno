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
		message.react('🏳️‍🌈');
		message.reply(
			new MessageEmbed().setColor(0x013220).setDescription('A wild brawler has appeared and dealt ' +
            Math.floor(Math.random() * 5000 + 1) +
            ' damange!'),
		);
	},
};
