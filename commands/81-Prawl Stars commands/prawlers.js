const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'prawlers',
	aliases: false,
	category: '81',
	description: 'Prawl Stars Gayme command - sends an image of one of the 11 prawlers',
	cooldown : false,
	guildOnly: false,
	NSFW: false,
	args: false,
	usage: false,
	run: async (client, message) => {
		message.react('🏳️‍🌈');

		const prawlers = [
			'https://cdn.discordapp.com/attachments/697488522600382556/697696314170802186/Untitled240_20191008175502.png',
			'https://cdn.discordapp.com/attachments/697488522600382556/697696351231803432/32443232443243244323432434234232434223443432324.PNG',
			'https://cdn.discordapp.com/attachments/697488522600382556/698102661177933854/2Q.png',
			'https://cdn.discordapp.com/attachments/697488522600382556/698102715716468766/Z.png',
			'https://cdn.discordapp.com/attachments/697488522600382556/698102785866203137/images.png',
			'https://cdn.discordapp.com/attachments/697488522600382556/698102866321080360/images.png',
			'https://cdn.discordapp.com/attachments/697488522600382556/698103006062706798/images.png',
			'https://cdn.discordapp.com/attachments/697488522600382556/698103106067759124/Z.png',
			'https://cdn.discordapp.com/attachments/700053698100985886/700229861838422056/image0.png',
			'https://cdn.discordapp.com/attachments/700053698100985886/700229918566514729/image0.png',
			'https://cdn.discordapp.com/attachments/700053698100985886/700229916670558268/image0.png',

		];
		const x = Math.floor((Math.random() * prawlers.length));
		const msg = new MessageEmbed()
			.setColor('RANDOM')
			.setImage(`${prawlers[x]}`);

		message.channel.send(msg);
	},
};