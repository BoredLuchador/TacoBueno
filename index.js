// Things the Code depends on
require('dotenv').config();
const fs = require('fs');
const { Client, Collection } = require('discord.js');
const mongoose = require('mongoose');

// Setup //
const client = new Client();

mongoose.connect(process.env.DATA, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});
// COLLECTIONS //
client.commands = new Collection();
client.aliases = new Collection();


// Command handlers
fs.readdirSync('./commands/').forEach(dir => {
	const commandFiles = fs.readdirSync(`./commands/${dir}/`).filter(file => file.endsWith('.js'));

	for (const file of commandFiles) {
		const command = require(`./commands/${dir}/${file}`);
		client.commands.set(command.name, command);
	}
});

// EVENT HANDLER//
const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));

for (const file of eventFiles) {
	const event = require(`./events/${file}`);
	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args, client));
	}
	else {
		client.on(event.name, (...args) => event.execute(...args, client));
	}
}


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
client.login(process.env.TOKEN);
