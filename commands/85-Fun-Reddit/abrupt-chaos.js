const { MessageEmbed, MessageAttachment } = require('discord.js');
const randomPuppy = require('random-puppy');


module.exports = {
	name: 'abrupt-chaos',
	aliases: ['rac'],
	category: '85',
	description: 'Gives you some chaos from the depths of Reddit.',
	cooldown : 5,
	args: false,
	usage: false,
	run: async (client, message) => {
		// Subreddits
		const subReddits = ['AbruptChaos'];
		const x = Math.floor((Math.random() * subReddits.length));
		const img = await randomPuppy(subReddits[x]);

		let embed = new MessageEmbed()
			.setTitle(`From /r/${subReddits[x]}`)
			.setColor('RANDOM')
			.setDescription(`[File link just in case the command really breaks](${img})`)
			.setURL(`https://reddit.com/r/${subReddits[x]}/`)
			.setImage(img)
			.setTimestamp();
		if (img.includes(['.mp4'])) {
			embed = new MessageEmbed()
				.setTitle(`From /r/${subReddits[x]}`)
				.setColor('RANDOM')
				.setDescription(`[File link just in case the command really breaks](${img})`)
				.setURL(`https://reddit.com/r/${subReddits[x]}/`)
				.setTimestamp();
		}
		const attchment = new MessageAttachment(img);
		try {
			// Actual commands plays out here
			await message.channel.send(embed);
			if (img.includes(['.mp4'])) {
				await message.channel.send(attchment);

			}
		}
		catch (error) {
			console.error(error);
			message.channel.send(`This Command seems to be broken. *make sure the error message below is sent to the developer either by opening the issue in the github page or with the \`bug\` command.*\n\`\`\`Error details:\n${error}\nCommand used: ${message.content}\`\`\``);
		}
	},
};