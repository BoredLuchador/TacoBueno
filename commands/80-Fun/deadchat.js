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
			message.channel.send(`Something went wrong.\nError details:\n${error}\n**If you keep running into this problem, please send this error message and send some ss to the developer.**`);
		}
	},
};