const Discord = require('discord.js');

module.exports = {
	name: 'help',
	aliases: 'h',
	category: 'info',
	description: 'Shows a list of command, or details on one command',
	usage: '[command | alias of command]',
	run: async (client, message) => {

		const embed = new Discord.MessageEmbed()
			.setColor('#6A8372')
			.setTitle('Help Panel')
			.setDescription('*Note that this help command is currently hardcoded and will not be as up to date. If that is the case, please let the developer know.*')
			.addFields (
				{ name: '**Info**', value: '`help`\n`invite`\n`ping`', inline: true },
				{ name: '**Moderation**', value: '`avatar`\n`report`\n`say`', inline: true },
				{ name: '**Silly Commands**', value: '`confess`', inline: true },
				{ name: '**Dev tools**', value: '`bin`\n`module.exports`', inline: true },
				{ name: '**Broken commands**', value: '`whois`', inline: true },
			);
		message.channel.send(embed);
	},
};
// NOTE THAT THIS COMMAND IS NOT DYNAMIC YET