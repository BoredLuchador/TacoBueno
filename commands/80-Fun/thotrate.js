const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'thotrate',
	aliases: false,
	category: '80',
	description: 'Guesses how much of a thot you are',
	cooldown : false,
	guildOnly: false,
	NSFW: false,
	args: false,
	usage: '[ping]',
	run: async (client, message) => {
		try {
			const member = message.mentions.users.first() || message.author;

			const x = Math.floor((Math.random() * 100));

			const embed = new MessageEmbed()
				.setTitle(`results for ${member.username}`)
				.setDescription(`${member.username} is ${x}% a thot`)
				.setColor('RANDOM')
				.setTimestamp();

			message.channel.send(embed);
		}
		catch (error) {

			console.error(error);
			message.channel.send(`This Command seems to be broken. *make sure the error message below is sent to the developer either by opening the issue in the github page or with the \`bug\` command.*\n\`\`\`Error details:\n${error}\nCommand used: ${message.content}\`\`\``);

		}


	},
};