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
		message.react('🏳️‍🌈');

		const msg = new MessageEmbed()
			.setTitle('PRAWL STARS GAYME')
			.setDescription('This bot is a small bot made for the popular game Brawl Stars, with intresting and unexpected commands.')
			.setURL('https://top.gg/bot/630084558083063828')
			.addFields(
				{ name: 'bot author', value: '<@406028027768733696>' },
				{ name: 'Why am I using the code?', value: 'Sadly the bot is going down, and I wanted to keep some memories of it. It made things easier since the bot went open source.' },
				{ name: 'Which commands are from the prawl stars bot?', value: 'They are the commands that reacts with a=the pride flag. They even have their own category.' },
			);

		message.channel.send(msg);
	},
};