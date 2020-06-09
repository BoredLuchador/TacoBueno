const Discord = require('discord.js');

module.exports = {
	name: 'bin',
	category: 'Dev-Tools',
	description: 'Shows link to PrivateBin',
	run: async (client, message) => {

		const binlink = new Discord.MessageEmbed()
			.setColor('#F9BF45')
			.setTitle('PrivateBin link')
			.setURL('https://privatebin.at')
			.setDescription('This is the more privacy respecting paste bin. \n\nFeel free to use this to send large files, massive wall of texts, or a private way to send messages to someone.')
			.addFields(
				{ name: '**Notes**', value: 'I will not be responsible for you getting in fat trouble if you end up breaking any rules', inline: false },
			)
			.setTimestamp();

		message.channel.send(binlink);

	},
};