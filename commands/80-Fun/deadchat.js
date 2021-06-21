const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'deadchat',
	category: '80',
	description: 'Sends a message showing how dead the chat is.',
	guildOnly: true,
	cooldown : 30,
	run: async (client, message) => {

		const images = ['https://assets.babycenter.com/ims/2016/07/ThinkstockPhotos-181944820_4x3.jpg', 'https://i.imgflip.com/2y5dfu.jpg', 'https://discordemoji.com/assets/emoji/3946_DeadChat.png'];
		const img = Math.floor((Math.random() * images.length));

		const ded = ['a little', 'pretty much', 'kinda', '**very**', 'normally', 'super'];
		let result = Math.floor((Math.random() * ded.length));

		const embed = new MessageEmbed()
			.setColor('RANDOM')
			.setDescription(`Seems like this chat is ${ded[result]} dead.`)
			.setImage(images[img])
			.setTimestamp();

		try {
			message.channel.send(embed);
		}
		catch (error) {
			console.error(error);
			message.channel.send(`This Command seems to be broken. *make sure the error message below is sent to the developer either by opening the issue in the github page or with the \`bug\` command.*\n\`\`\`Error details:\n${error}\nCommand used: ${message.content}\`\`\``);
		}
	},
};