const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'thotrate',
	aliases: false,
	category: '80',
	description: 'Guesses how much of a thot you are',
	cooldown : false,
	guildOnly: false,
	NSFW: false,
	args: false,
	usage: '[ping]',
	run: async (client, message) => {
		const member = message.mentions.users.first() || message.author;

		const x = Math.floor((Math.random() * 100));

		const embed = new MessageEmbed()
			.setTitle(`results for ${member.username}`)
			.setDescription(`${member.username} is ${x}% a thot`)
			.setColor('RANDOM')
			.setTimestamp();

		message.channel.send(embed);

	},
};