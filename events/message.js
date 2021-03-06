const { Dprefix } = require('.././config.json');
const prefix = require('.././models/prefix.js');
const { Collection } = require('discord.js');

module.exports = {
	name: 'message',
	once: false,
	args: 'message',
	async execute(message, client) {
		const cooldowns = new Collection();


		// Gets guild id when command is run with prefix
		if (!message.guild || message.author.bot || message.mentions.everyone) return;


		const data = await prefix.findOne({
			GuildID: message.guild.id,
		});
		let Prefix = Dprefix;
		if(data) {
			Prefix = data.Prefix;
		}

		// Sends prefix by mentioning the bot. also uses mentioning the bot as the prefix
		if(data) {

			if (message.mentions.has(client.user, { ignoreEveryone: true })) {

				message.channel.send(`My prefix for this server is \`${Prefix}\`.`);
			}
			else {
				// Uses The prefix method if the Mention function doesnt work //
				if (!message.guild || message.author.bot || !message.content.startsWith(Prefix)) return;


				// CONDITION ? TRUE : FALSE
				const args = message.content.slice(Prefix.length).split(/ +/);
				const commandName = args.shift().toLowerCase();

				// Gets the command OR gets the aliases of said command //
				const command = client.commands.get(commandName)
                || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

				if (!command) return;

				// Filter for guild only commands
				if (command.guildOnly && message.channel.type !== 'text') {
					return message.reply('Ummm do you know that you can\'t use that command inside DMs?');
				}

				// filter for commands with NEEDED args
				if (command.args && !args.length) {
					let reply = `You didn't provide any arguments, ${message.author}!`;

					if (command.usage) {
						reply += `\nThe proper usage would be: \`${Prefix}${command.name} ${command.usage}\``;
					}

					return message.channel.send(reply);
				}
				// NSFW FILTER
				if (command.NSFW && message.channel.nsfw == false) {
					return message.reply('You can\'t use NSFW commands here. Either go look for an NSFW marked channel or ask an administrator to set the channel as NSFW.');
				}

				// Prevents command flooding
				if (!cooldowns.has(command.name)) {
					cooldowns.set(command.name, new Collection());
				}

				const now = Date.now();
				const timestamps = cooldowns.get(command.name);
				const cooldownAmount = (command.cooldown || 2) * 1000;

				if (timestamps.has(message.author.id)) {
					const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

					if (now < expirationTime) {
						const timeLeft = (expirationTime - now) / 1000;
						return message.reply(`please wait ${timeLeft.toFixed(1)} more second(s) before reusing the \`${command.name}\` command.`);
					}
				}

				timestamps.set(message.author.id, now);
				setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);

				// This thing actually runs the command
				try {
					command.run (client, message, args);
				}
				catch (error) {
					console.error(error);
					message.reply(`We ran into a problem trying to run the command.\nDetails: ${error}\n If you keep getting this, please send this to the developer.`);
				}
			}
		}
		else if (!data) {
			if (message.mentions.has(client.user)) {
				message.channel.send(`My prefix for this server is \`${Dprefix}\`.`);
			}
			else {
				// Uses The prefix method if the Mention function doesnt work //
				if (!message.guild || message.author.bot || !message.content.startsWith(Dprefix)) return;


				// CONDITION ? TRUE : FALSE
				const args = message.content.slice(Dprefix.length).split(/ +/);
				const commandName = args.shift().toLowerCase();

				// Gets the command OR gets the aliases of said command //
				const command = client.commands.get(commandName)
                || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

				if (!command) return;

				// Filter for guild only commands
				if (command.guildOnly && message.channel.type !== 'text') {
					return message.reply('Ummm do you know that you can\'t use that command inside DMs?');
				}

				// filter for commands with NEEDED args
				if (command.args && !args.length) {
					let reply = `You didn't provide any arguments, ${message.author}!`;

					if (command.usage) {
						reply += `\nThe proper usage would be: \`${Dprefix}${command.name} ${command.usage}\``;
					}

					return message.channel.send(reply);
				}
				// NSFW FILTER
				if (command.NSFW && message.channel.nsfw == false) {
					return message.reply('You can\'t use NSFW commands here. Either go look for an NSFW marked channel or ask an administrator to set the channel as NSFW.');
				}

				// Prevents command flooding
				if (!cooldowns.has(command.name)) {
					cooldowns.set(command.name, new Collection());
				}

				const now = Date.now();
				const timestamps = cooldowns.get(command.name);
				const cooldownAmount = (command.cooldown || 2) * 1000;

				if (timestamps.has(message.author.id)) {
					const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

					if (now < expirationTime) {
						const timeLeft = (expirationTime - now) / 1000;
						return message.reply(`please wait ${timeLeft.toFixed(1)} more second(s) before reusing the \`${command.name}\` command.`);
					}
				}

				timestamps.set(message.author.id, now);
				setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);

				// This thing actually runs the command
				command.run (client, message, args);

			}
		}
	},
};