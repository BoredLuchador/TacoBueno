const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'rps',
	aliases: false,
	category: 80,
	description: 'Play rock paper and scissor with the bot',
	cooldown : false,
	guildOnly: false,
	NSFW: false,
	args: true,
	usage: '<rock/paper/scissor/r/p/s>',
	run: async (client, message, args) => {

		const choices = ['rock', 'paper', 'scissor'];
		// bot makes decesion here
		const x = Math.floor((Math.random() * choices.length));

		// assumed bot victory
		let end = `${choices[x]} wins!`;

		// message author win senario
		if(choices[x] == 'rock' && args[0] == 'paper' || choices[x] == 'rock' && args[0] == 'p'
        || choices[x] == 'paper' && args[0] == 'scissor' || choices[x] == 'paper' && args[0] == 's'
        || choices[x] == 'scissor' && args[0] == 'rock' || choices[x] == 'scissor' && args[0] == 'r') {
			end = `${args[0]} wins!`;
			// last minute conversion
			if (args[0] == 'p') end = 'paper wins!';
			if (args[0] == 's') end = 'scissor wins!';
			if (args[0] == 'r') end = 'rock wins!';
		}
		// draw senarios
		if(choices[x] == 'rock' && args[0] == 'rock' || choices[x] == 'rock' && args[0] == 'r'
        || choices[x] == 'paper' && args[0] == 'paper' || choices[x] == 'paper' && args[0] == 'p'
        || choices[x] == 'scissor' && args[0] == 'scissor' || choices[x] == 'scissor' && args[0] == 's') {
			end = 'looks like we tied.';
		}
		// final message sent
		const embed = new MessageEmbed()
			.setTitle('Results for rock paper scissor')
			.setColor('RANDOM')
			.setDescription(`You chose ${args[0]}, I chose ${choices[x]}\n${end}`)
			.setTimestamp();

		try {
			message.channel.send(embed);
		}
		catch (error) {
			console.error(error);
			message.channel.send(`Something went wrong.\nError details:\n${error}\n**If you keep running into this problem, please send this error message and send some ss to the developer.**`);
		}

	},
};