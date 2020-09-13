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
		message.react('🏳️‍🌈');
		message.channel.send(new MessageEmbed().setColor(0x000000).setDescription('birdy boi'));
	},
};