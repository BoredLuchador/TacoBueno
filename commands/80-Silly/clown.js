const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'clown',
	aliases: 'clown',
	category: '80',
	description: 'The confession command but for shitposting',
	cooldown : 30,
	guildOnly: true,
	NSFW: false,
	args: false,
	usage: '[command | alias of command]',
	run: async (client, message) => {
		try {
			// if (message.deletable) message.delete();

			let Channel = message.guild.channels.cache.find(ch=>ch.name.includes('clown'));
			if (!Channel) return message.channel.send('There is no channel in this guild which contains the word `clown`');

			const Img = message.attachments.first() || null;
			if (Img == null) return message.channel.send('You need to send a image.');

			let Embed = new MessageEmbed()
				.setDescription(`Image from ${message.author}`)
				.setColor('RANDOM')
				.setImage(Img.url);
			Channel.send(Embed);

		}
		catch (error) {
			console.error(error);
			message.channel.send(`Something went wrong.\nError details:\n${error}\n**If you keep running into this problem, please send this error message and send some ss to the developer.**`);
		}
	},
};