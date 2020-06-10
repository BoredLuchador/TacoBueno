// Things the Code depends on
const fs = require('fs');
const { Client, Collection } = require('discord.js');
const { config } = require('dotenv');
const { prefix } = require('./config.json');

// Setup //
const client = new Client();


// Command handler client stuff? //
client.commands = new Collection();
client.aliases = new Collection();

client.categories = fs.readdirSync('./commands');

config({
	path: __dirname + '/.env',
});

// Gotta load that command handler //
['command'].forEach(handler => {
	require(`./handler/${handler}`)(client);
});

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
	const mentionRegexPrefix = RegExp(`^<@!${client.user.id}> `);

	if (!message.guild || message.author.bot) return;

	if (message.content.match(mentionRegex)) message.channel.send(`My prefix for this server is \`${prefix}\`.`);

	// Sets the prefix const using the mention and falling back to actual prefix

	const dprefix = message.content.match(mentionRegexPrefix) ?
		message.content.match(mentionRegexPrefix)[0] : prefix;

	// CONDITION ? TRUE : FALSE
	// Creating the command and args array //
	const [cmd, ...args] = message.content.slice(dprefix.length).trim().split(/ +/g);

	// Checks to prevent random bad stuff from happening/

	if (cmd.length === 0) return;

	let command = client.commands.get(cmd);
	if (!command) command = client.commands.get(client.aliases.get(cmd));

	if (command) {command.run (client, message, args);}


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
client.login(process.env.TOKEN);
