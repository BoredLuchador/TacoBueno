const { prefix, BotColor } = require('../../config.json');
const Discord = require('discord.js');

module.exports = {
	name: 'help',
	aliases: 'h',
	category: '00',
	description: 'Shows a list of command, or details on one command',
	cooldown : false,
	guildOnly: false,
	NSFW: false,
	args: false,
	usage: '[command | alias of command]',
	run: async (client, message, args) => {
		// Picks the color based on Taco Bueno color palette defined in Config.json NO LONGER USED
		const colorarray = [`${BotColor[0]}`, `${BotColor[1]}`, `${BotColor[2]}`, `${BotColor[3]}`, `${BotColor[4]}`];
		let color = Math.floor((Math.random() * colorarray.length));

		// Creates empty array and loads command data //
		const data = [];
		const { commands } = message.client;

		if (!args.length) {
			const title = ('Here\'s a list of all my commands:');
			const field = (`You can send \`${prefix}help [command name]\` to get info on a specific command!`);
			const x = false;

			// PAGE 1 file sorter
			const cmd00 = (commands.filter(command => command.category == '00').map(command => command.name).join('`, `'));
			const cmd01 = (commands.filter(command => command.category == '01').map(command => command.name).join('`, `'));
			const cmd10 = (commands.filter(command => command.category == '10').map(command => command.name).join('`, `'));
			const cmd80 = (commands.filter(command => command.category == '80').map(command => command.name).join('`, `'));
			const cmd85 = (commands.filter(command => command.category == '85').map(command => command.name).join('`, `'));

			// Actual pages
			// PAGE 1
			const pg1 = new Discord.MessageEmbed()
				.setColor(`${colorarray[color]}`)
				.setTitle(title)
				.addFields(
					{ name: 'Info', value: `\`${cmd00}\``, inline: x },
					{ name: 'Utility', value: `\`${cmd01}\``, inline: x },
					{ name: 'Moderation', value: `\`${cmd10}\``, inline: x },
					{ name: 'Silly', value: `\`${cmd80}\``, inline: x },
					{ name: 'Reddit', value:  `\`${cmd85}\``, inline: x },
					{ name: 'Want to know more about a command?', value: field, inline: false },
				)
				.setTimestamp();

			await message.author.send(pg1)
				.then(() => {
					if (message.channel.type === 'dm') return;
					message.reply('I\'ve sent you a DM with all my commands!');
				})
				.catch(error => {
					console.error(`Could not send help DM to ${message.author.tag}.\n`, error);
					message.reply('it seems like I can\'t DM you! Do you have DMs disabled? :pleading_face: ');
				});
		}
		else {
			const name = args[0].toLowerCase();
			const command = commands.get(name) || commands.find(c => c.aliases && c.aliases.includes(name));

			if (!command) {
				return message.reply('that\'s not a valid command!');
			}
			// Category setter
			let cname = '';
			if (command.category) {


				if (command.category == '00') cname = 'Info';
				if (command.category == '00') cname = 'Utility';
				if (command.category == '10') cname = 'Moderation';
				if (command.category == '80') cname = 'Silly';
				if (command.category == '85') cname = 'Reddit';
				if (command.category == '99') cname = 'UNDER DEVELOPMENT / BROKEN';
			}

			// Help command page (Not in embed format yet)
			data.push(`**Name:** ${command.name}`);
			if (command.category) data.push(`**Category:** ${cname}`);
			if (command.aliases) data.push(`**Aliases:** ${command.aliases.join(', ')}`);
			if (command.description) data.push(`**Description:** ${command.description}`);
			if (command.usage) data.push(`**Usage:** ${prefix}${command.name} ${command.usage}`);

			data.push(`**Cooldown:** ${command.cooldown || 2} second(s)`);

			message.channel.send(data, { split: true });
		}
	},
};
