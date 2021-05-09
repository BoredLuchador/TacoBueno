const { Dprefix, BotColor } = require('../../config.json');
const Discord = require('discord.js');
const prefix = require('../../models/prefix.js');

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
		// MONGODB PREFIX
		const data = await prefix.findOne({
			GuildID: message.guild.id,
		});
		let Prefix = Dprefix;
		if(data) {
			Prefix = data.Prefix;
		}
		// Picks the color based on Taco Bueno color palette defined in Config.json
		const colorarray = [`${BotColor[0]}`, `${BotColor[1]}`, `${BotColor[2]}`, `${BotColor[3]}`, `${BotColor[4]}`];
		let color = Math.floor((Math.random() * colorarray.length));

		// Creates empty array and loads command data //
		const data1 = [];
		const { commands } = message.client;

		if (!args.length) {
			const title = ('Here\'s a list of all my commands:');
			const field = (`You can send \`${Prefix}help [command name]\` to get info on a specific command!\nThis will even reveal hidden options for some commands.`);
			const x = false;

			// PAGE 1 file sorter
			const cmd00 = (commands.filter(command => command.category == '00').map(command => command.name).join('`, `'));
			const cmd01 = (commands.filter(command => command.category == '01').map(command => command.name).join('`, `'));
			const cmd10 = (commands.filter(command => command.category == '10').map(command => command.name).join('`, `'));
			const cmd80 = (commands.filter(command => command.category == '80').map(command => command.name).join('`, `'));
			const cmd81 = (commands.filter(command => command.category == '81').map(command => command.name).join('`, `'));
			const cmd85 = (commands.filter(command => command.category == '85').map(command => command.name).join('`, `'));

			// Actual pages
			// PAGE 1
			const pg1 = new Discord.MessageEmbed()
				.setColor(`${colorarray[color]}`)
				.setTitle(title)
				.addFields(
					{ name: '**Info**', value: `\`${cmd00}\``, inline: x },
					{ name: '**Utility**', value: `\`${cmd01}\``, inline: x },
					{ name: '**Moderation**', value: `\`${cmd10}\``, inline: x },
					{ name: '**Silly**', value: `\`${cmd80}\``, inline: x },
					{ name: '**Prawl stars bot commands (made thanks to the bot creators making it open source)**', value: `\`${cmd81}\``, inline: x },
					{ name: '**Reddit**', value:  `\`${cmd85}\``, inline: x },
					{ name: '**Want to know more about a command?**', value: field, inline: false },
				)
				.setTimestamp();
			// New Pages will go here if there is a need to

			await message.author.send(pg1)

				// Tests to see if sending the help message to DMs is sucuessful.
				.then(() => {
					if (message.channel.type === 'dm') return;
					message.reply('I\'ve sent you a DM with all my commands!');
				})
				.catch(error => {
					console.error(`Could not send help DM to ${message.author.tag}.\n`, error);
					message.reply('it seems like I can\'t DM you! Do you have DMs disabled? :pleading_face: ');
					message.channel.send(pg1);
				});
		}
		else {
			// Will only occour if there is any text after the help command
			const name = args[0].toLowerCase();
			const command = commands.find(c => c.name && c.name.includes(name)) || commands.find(c => c.aliases && c.aliases.includes(name));

			if (!command) {
				return message.reply('that\'s not a valid command!');
			}
			// Category setter
			let cname = '';
			if (command.category) {


				if (command.category == '00') cname = 'Info';
				if (command.category == '01') cname = 'Utility';
				if (command.category == '10') cname = 'Moderation';
				if (command.category == '80') cname = 'Silly';
				if (command.category == '81') cname = 'Prawl Stars Bot commands';
				if (command.category == '85') cname = 'Reddit';
				if (command.category == '99') cname = 'UNDER DEVELOPMENT / BROKEN';
			}

			// Help command page
			data1.push(`**Name:** ${command.name}`);
			if (command.category) data1.push(`**Category:** ${cname}`);
			if (command.aliases) data1.push(`**Aliases:** ${command.aliases}`);
			if (command.description) data1.push(`**Description:** ${command.description}`);
			if (command.usage) data1.push(`**Usage:** ${Prefix}${command.name} ${command.usage}`);

			data1.push(`**Cooldown:** ${command.cooldown || 2} second(s)`);
			try {
				const cmdembed = new Discord.MessageEmbed()
					.setColor('RANDOM')
					.setTitle ('Here is some info for you...')
					.setDescription(data1, { split: true })

					.setTimestamp();

				message.channel.send(cmdembed);

			}
			catch (error) {
				// Will only happen if the bot for some reason can not send the embed
				message.channel.send(data1, { split: true });
			}

			// Useful piece of code for sending raw array- data1, { split: true }
		}
	},
};
