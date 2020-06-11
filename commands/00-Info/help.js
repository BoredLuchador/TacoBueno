const { prefix, BotColor } = require('../../config.json');
const Discord = require('discord.js');

module.exports = {
	name: 'help',
	aliases: 'h',
	category: 'Info',
	description: 'Shows a list of command, or details on one command',
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
			const Commands = (commands.map(command => command.name).join('`, `'));
			const field = (`You can send \`${prefix}help [command name]\` to get info on a specific command!`);

			const embed = new Discord.MessageEmbed()
				.setColor(`${colorarray[color]}`)
				.setTitle(title)
				.setDescription(`\`${Commands}\``)
				.addFields(
					{ name: 'Want to know more about a command?', value: field, inline: false },
				)
				.setTimestamp();

			return message.author.send(embed)
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

			data.push(`**Name:** ${command.name}`);
			if (command.category) data.push(`**Category:** ${command.category}`);
			if (command.aliases) data.push(`**Aliases:** ${command.aliases.join(', ')}`);
			if (command.description) data.push(`**Description:** ${command.description}`);
			if (command.usage) data.push(`**Usage:** ${prefix}${command.name} ${command.usage}`);

			data.push(`**Cooldown:** ${command.cooldown || 2} second(s)`);

			message.channel.send(data, { split: true });
		}
	},
};
