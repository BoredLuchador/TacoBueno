const { MessageEmbed } = require('discord.js');
const { bot_info, BotColor } = require('../../config.json');

module.exports = {
	name: 'stats',
	aliases: false,
	category: '00',
	description: 'Gives stats about the bot, and how it is made.',
	cooldown: false,
	guildOnly: false,
	NSFW: false,
	args: false,
	usage: false,
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
				{ name: 'Author', value:`${bot_info.Author}` },
				{ name: 'Hosting Provider', value: `${bot_info.hosting_provider}` },
				{ name: 'Libary', value:`${bot_info.Libary}` },
				{ name: 'Server count', value: `${client.guilds.cache.size}` },
				{ name: 'Source Code', value: 'https://github.com/BoredLuchador/TacoBueno' },
			);
		try{
			message.channel.send(embed);
		}
		catch(error) {
			console.error(error);
			message.channel.send(`This Command seems to be broken. *make sure the error message below is sent to the developer either by opening the issue in the github page or with the \`bug\` command.*\n\`\`\`Error details:\n${error}\nCommand used: ${message.content}\`\`\``);
		}
	},
};