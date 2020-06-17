const { MessageEmbed } = require('discord.js');
const { bot_info, BotColor } = require('../../config.json');

module.exports = {
	name: 'stats',
	category: 'Utility',
	description: 'Gives stats about the bot, and how it is made.',
	run: async (client, message) => {
		// COLOR PICKER BASED ON CONFIG.JSON
		const colorarray = [`${BotColor[0]}`, `${BotColor[1]}`, `${BotColor[2]}`, `${BotColor[3]}`, `${BotColor[4]}`];
		let color = Math.floor((Math.random() * colorarray.length));

		// Embed Creation
		const embed = new MessageEmbed()
			.setColor(`${colorarray[color]}`)
			.setTitle(`${bot_info.name}'s Stats`)
			.setDescription('Wow I\'m very susprised that you care enough about me to look up my stats. These are some basic info that will change from time to time.')
			.addFields (
				{ name: 'name', value: `${bot_info.name}` },
				{ name: 'Version', value:`${bot_info.Version}` },
				{ name: 'Author', value:`${bot_info.Author}` },
				{ name: 'Hosting Provider', value: `${bot_info.hosting_provider}` },
				{ name: 'Libary', value:`${bot_info.Libary}` },
				{ name: 'Operating System', value: `${bot_info.Platform}` },
				{ name: 'Server count', value: `${client.guilds.cache.size}` },
			);
		message.channel.send(embed);
	},
};