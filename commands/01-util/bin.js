const Discord = require('discord.js');

module.exports = {
	name: 'bin',
	category: '01',
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

		try{
			message.channel.send(binlink);
		}
		catch (error) {
			console.error(error);
			message.channel.send(`Something went wrong.\nError details:\n${error}\n**If you keep running into this problem, please send this error message and send some ss to the developer.**`);
		}
	},
};