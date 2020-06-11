// Things the Code depends on
const fs = require('fs');
const { Client, Collection } = require('discord.js');
const { prefix, token } = require('./config.json');

// Setup //
const client = new Client();

// Command handler client stuff? //
client.commands = new Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

// Stuff below will be replaced by EVENT HANDLER//
// READY EVENT//

client.once('ready', () => {
	console.log(`I am now online, my name is ${client.user.username}`);

	client.user.setPresence({
		// Color Dot Status//
		status: 'online',
	});
	client.user.setActivity('Primo Fail at coding', { type: 'WATCHING' });
});

// message event in console//
client.on('message', async (message) => {

	// Sends prefix by mentioning the bot. also uses mentioning the bot as the prefix
	const mentionRegex = RegExp(`^<@!${client.user.id}>$`);
	if (message.content.match(mentionRegex)) message.channel.send(`My prefix for this server is \`${prefix}\`.`);

	if (!message.guild || message.author.bot) return;


	// CONDITION ? TRUE : FALSE
	const args = message.content.slice(prefix.length).split(/ +/);
	const commandName = args.shift().toLowerCase();

	const command = client.commands.get(commandName)
		|| client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

	if (!command) return;
	// const commandName = client.commands.get(cmd.toLowerCase()) || client.command.get(client.aliases.get(cmd.toLowerCase));
	if (command.guildOnly && message.channel.type !== 'text') {
		return message.reply('Ummm do you know that you can\'t use that command inside DMs?');
	}

	if (command.args && !args.length) {
		let reply = `You didn't provide any arguments, ${message.author}!`;

		if (command.usage) {
			reply += `\nThe proper usage would be: \`${prefix}${command.name} ${command.usage}\``;
		}

		return message.channel.send(reply);
	}

	try {
		command.run (client, message, args);
	}
	catch (error) {
		console.error(error);
		message.reply('we ran into a problem trying to run the command.');
	}


});
// errors logging to prevent complete crashes (also moninters bot health)//
client.on('error', (e) => console.error(e));
client.on('warn', (e) => console.warn(e));
client.on('debug', (e) => console.info(e));

// HOW TO COMMIT CHANGES
// $ git add .
// $ git commit -am "make it better"
// $ git push heroku master


// Logging the bot in//
client.login(token);
