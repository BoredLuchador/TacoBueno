const { MessageEmbed } = require('discord.js');

// STATE OF WHOIS COMMAND = BROKEN AND UNDER LIMBO

module.exports = {
	name: 'whois',
	aliases: ['userinfo', 'user', 'who' ],
	category: 'broken',
	description: 'Returns user infomation/n*Currently the command is broken*',
	usage: '[id | mention]',
	run: async (client, message) => {


		let GuildMember = message.mentions.users.first() || null;
		let User = message.mentions.users.first() || null;

		if (GuildMember == null || User == null) {
			return message.channel.send('You did not mention a user!');
		}
		else {

			// const date = User.createdAt
			const pfp = User.displayAvatarURL({ format: 'png', dynamic: true });


			const embed = new MessageEmbed()

				.setTitle(`${GuildMember.username}`)
				.setDescription('Info on the mentioned user')
				.setColor(`${GuildMember.displayColor}`)
				.setThumbnail(pfp)
				.addFields(
					{ name:'User ID', value:`${User.id}`, inline:true },
					{ name:'User Tag', value:`${GuildMember.tag}`, inline:true },
					{ name:'Nickname', value:`${GuildMember.nickname}`, inline:true },
					{ name:'Base 10 color', value:`${GuildMember.displayColor}`, inline:true },
					{ name:'Hex Color', value:`${GuildMember.displayHexColor}`, inline:true },
					{ name:'Display Name', value:`${GuildMember.displayName}`, inline:true },
					{ name:'Join Date', value:`${GuildMember.joinedAt}`, inline:true },
					{ name:'Creation Date', value: `${User.CreatedAt}`, inline: true },
				);

			message.channel.send(embed);
		}


	},
};

