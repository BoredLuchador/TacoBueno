// Things the Code depends on
const fs = require('fs');
const { Client, Collection } = require('discord.js');
const { prefix, token, Status } = require('./config.json');

// Setup //
const client = new Client();

// COLLECTIONS //
client.commands = new Collection();
client.aliases = new Collection();

const cooldowns = new Collection();


// Command handlers
fs.readdirSync('./commands/').forEach(dir => {
	const commandFiles = fs.readdirSync(`./commands/${dir}/`).filter(file => file.endsWith('.js'));

	for (const file of commandFiles) {
		const command = require(`./commands/${dir}/${file}`);
		client.commands.set(command.name, command);
	}
});

// Stuff below will be replaced by EVENT HANDLER//
// READY EVENT//

client.once('ready', () => {
	console.log(`I am now online, my name is ${client.user.username}`);

	client.user.setPresence({
		// Color Dot Status//
		status: 'online',
	});
	client.user.setActivity(`${Status.Message}`, { type: 'WATCHING' });
});

// message event in console//
client.on('message', async (message) => {

	// Sends prefix by mentioning the bot. also uses mentioning the bot as the prefix
	const mentionRegex = RegExp(`^<@!${client.user.id}>$`);
	if (message.content.match(mentionRegex)) {
		message.channel.send(`My prefix for this server is \`${prefix}\`.`);
	}
	else {
		// Uses The prefix method if the Mention function doesnt work //
		if (!message.guild || message.author.bot || !message.content.startsWith(prefix)) return;


		// CONDITION ? TRUE : FALSE
		const args = message.content.slice(prefix.length).split(/ +/);
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
				reply += `\nThe proper usage would be: \`${prefix}${command.name} ${command.usage}\``;
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
});
// errors logging to prevent complete crashes (also moninters bot health)//
client.on('error', (e) => console.error(e));
client.on('warn', (e) => console.warn(e));
client.on('debug', (e) => console.info(e));
client.on('unhandledRejection', error => console.error('Uncaught Promise Rejection', error));
// HOW TO COMMIT CHANGES
// $ git add .
// $ git commit -am "make it better"
// $ git push heroku master


// Logging the bot in//
client.login(token);
