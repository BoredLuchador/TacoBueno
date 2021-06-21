const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'guild',
	aliases: ['guild--i', 'server info', 'serveri', 'server'],
	category: '10',
	description: 'Returns basic info about the server',
	guildOnly: true,
	run: async (client, message) => {
		// creates a map of all of the role in a guild
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
			message.channel.send(`This Command seems to be broken. *make sure the error message below is sent to the developer either by opening the issue in the github page or with the \`bug\` command.*\n\`\`\`Error details:\n${error}\nCommand used: ${message.content}\`\`\``);
		}
	},
};