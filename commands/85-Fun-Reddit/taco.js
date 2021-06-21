const { MessageEmbed, MessageAttachment } = require('discord.js');
const randomPuppy = require('random-puppy');

module.exports = {
	name: 'taco',
	aliases: false,
	category: '85',
	description: 'allows you to send an image of a taco and ping someone in the progress (dm coming soon)',
	cooldown : 30,
	guildOnly: false,
	NSFW: false,
	args: true,
	usage: '<mention>',
	run: async (client, message) => {

		const subReddits = ['tacos'];
		const x = Math.floor((Math.random() * subReddits.length));
		const img = await randomPuppy(subReddits[x]);

		let User = message.mentions.users.first() || null;
		if (User == null) return message.channel.send('You gotta ping someone');

		let embed = new MessageEmbed()
			.setTitle(`Taco for ${User}`)
			.setColor('RANDOM')
			.setImage(img)
			.setTimestamp();
		if (img.includes(['.mp4'])) {
			embed = new MessageEmbed()
				.setTitle(`Taco for ${User}`)
				.setColor('RANDOM')
				.setTimestamp();
		}
		const attachment = new MessageAttachment(img);

		try {
			await message.channel.send(embed);
			if (img.includes(['.mp4'])) {
				await message.channel.send(attachment);
			}
		}
		catch (error) {
			console.error(error);
			message.channel.send(`This Command seems to be broken. *make sure the error message below is sent to the developer either by opening the issue in the github page or with the \`bug\` command.*\n\`\`\`Error details:\n${error}\nCommand used: ${message.content}\`\`\``);
		}

	},
};