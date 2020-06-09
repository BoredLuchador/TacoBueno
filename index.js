// Things the Code depends on
const fs = require('fs');
const { Client, Collection } = require('discord.js');
const { config } = require('dotenv');
const {
	prefix,
	token,
} = require('./config.json');

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

client.on('ready', () => {
	console.log(`I am now online, my name is ${client.user.username}`);

	client.user.setPresence({
		// Color Dot Status//
		status: 'idle',
		game: {
			// Game Profile//
			name: 'How do I work this',
			type: 'PLAYING',
		},
	});
});

// message event in console//
client.on('message', async message => {


	// Checks to prevent random bad stuff from happening/

	if (!message.content.startsWith(prefix) || !message.guild || message.author.bot) return;

	const args = message.content.slice(prefix.length).split(' ');
	const cmd = args.shift().toLowerCase();

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
client.login(token);
