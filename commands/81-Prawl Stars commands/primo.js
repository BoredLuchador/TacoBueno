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
		message.react('🏳️‍🌈');
		const msg = new MessageEmbed()
			.setColor(0xFFAD60)
			.setDescription('Hope he won\'t jump too far');

		message.channel.send(msg);
	},
};