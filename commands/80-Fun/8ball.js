const { MessageEmbed } = require('discord.js');

module.exports = {
	name: '8ball',
	aliases: ['yesno', 'yn'],
	category: '80',
	description: 'Replies to an yes/no question with a prediction (**DO NOT USE TO DETERMINE YOUR FATE**)',
	args: true,
	usage: '<question>',
	run: async (client, message, args) => {
		const question = args;

		const replies = [
			'It is certain',
			'Without a doubt',
			'You may rely on it',
			'Yes definitely',
			'It is decidedly so',
			'As I see it, yes',
			'Most likely',
			'Yes',
			'Outlook good',
			'Signs point to yes',
			'Reply hazy try again',
			'Better not tell you now',
			'Ask again later',
			'Look dude, I am severely underqualified to deal with your problems',
			'Cannot predict now',
			'Concentrate and ask again',
			'Don’t count on it',
			'Outlook not so good',
			'My sources say no',
			'Very doubtful',
			'My reply is no',
			'LMAO NOPE',

		];
		try {
			let ans = Math.floor((Math.random() * replies.length));

			const embed = new MessageEmbed()
				.setTitle(`Original question from ${message.author.username}:\n${question.join(' ')}`)
				.setDescription(`Result: ${replies[ans]}`)
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