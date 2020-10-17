const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'github',
	aliases: ['git', 'source-code'],
	category: '00',
	description: 'Shows the link to the Taco Bueno source code on Github.',
	cooldown : false,
	guildOnly: false,
	NSFW: false,
	args: false,
	usage: false,
	run: async (client, message) => {
		const Embed = new MessageEmbed()
			.setColor('#9AAB8C')
			.setTitle('source code')
			.setURL('https://github.com/PrimoPunch/tacobueno')
			.setDescription('Here is the link to the source code!');

		message.channel.send(Embed);
	},
};