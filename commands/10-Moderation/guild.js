const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'guild',
	aliases: ['guild--i', 'server info', 'serveri', 'server'],
	category: '10',
	description: 'Returns basic info about the server',
	guildOnly: true,
	run: async (client, message) => {
		let Roles = message.guild.roles.cache.map(roles => roles.name);
		const embed = new MessageEmbed()
			.setColor('RANDOM')
			.setThumbnail(`${message.guild.iconURL({ format: 'png', dynamic: true })}`)
			.setTitle('server info')
			.addFields(
				{ name: 'Server Name', value: `${message.guild.name}` },
				{ name: 'Member count', value: `${message.guild.memberCount}` },
				{ name: 'Server id', value: `${message.guild.id}` },
				{ name: 'Owner\'s name', value: `${message.guild.owner.nickname}` },
				{ name: 'Owner\'s id', value: `${message.guild.owner.id}` },
				{ name: 'Role count', value:`${Roles.length - 1}` },
				{ name: 'Server region', value: `${message.guild.region}` },
				{ name: 'Verrification level', value: `${message.guild.verificationLevel}` },
				{ name: 'Explicit content filter', value: `${message.guild.explicitContentFilter}` },

			);
		try {
			message.channel.send(embed);
		}
		catch (error) {
			console.error(error);
			message.channel.send(`Something went wrong.\nError details:\n${error}\n**If you keep running into this problem, please send this error message and send some ss to the developer.**`);
		}
	},
};