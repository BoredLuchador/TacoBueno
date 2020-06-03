const Discord = require('discord.js');

module.exports = {
	name: 'module.exports',
	category: 'Dev-Tools',
	description: 'Shows proper command modue structure',
	run: async (client, message) => {

		const Moduleexport = new Discord.MessageEmbed()
			.setColor('#44A290')
			.setTitle('module.exports format')
			.setDescription('module.exports = {\n   name:"",\n  aliases:"",\n   category: "",\n     usage:"",\n   run: async (client, message, args) => {\n}\n}')
			.setTimestamp();

		message.channel.send(Moduleexport);

	},
};