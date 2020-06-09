const Discord = require('discord.js');
const { BotColor } = require('../../config.json');

module.exports = {
	name: 'help',
	aliases: 'h',
	category: 'Info',
	description: 'Shows a list of command, or details on one command',
	usage: '[command | alias of command]',
	run: async (client, message) => {
		// Picks the color based on Taco Bueno color palette defined in Config.json
		const colorarray = [`${BotColor[0]}`, `${BotColor[1]}`, `${BotColor[2]}`, `${BotColor[3]}`, `${BotColor[4]}`];
		let color = Math.floor((Math.random() * colorarray.length));

		// Actual help panel
		const embed = new Discord.MessageEmbed()
			.setColor(`${colorarray[color]}`)
			.setTitle('Help Panel')
			.setDescription('*Note that this help command is currently hardcoded and will not be as up to date. If that is the case, please let the developer know.*')
			.addFields (
				{ name: '**Info**', value: '`help`\n`invite`\n`stats`', inline: true },
				{ name: '**Utility**', value: '`bin`\n`ping`', inline: true },
				{ name: '**Moderation**', value: '`avatar`\n`report`\n`say`\n`whois`', inline: true },
				{ name: '**Silly Commands**', value: '`beemoviescript`\n`confess`\n`dice`', inline: true },
				{ name: '**Broken commands**', value: '`no broken commands at this point`', inline: true },
			);
		message.channel.send(embed);
	},
};
// NOTE THAT THIS COMMAND IS NOT DYNAMIC YET