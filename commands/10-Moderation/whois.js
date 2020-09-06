const { MessageEmbed } = require('discord.js');

// STATE OF WHOIS COMMAND = BROKEN AND UNDER //
// TYPE OF INFO CURRENTLY OUTPUTED = ONLY PUTPUTS PFP, ID, and TAG //

module.exports = {
	name: 'whois',
	aliases: ['userinfo', 'user', 'who' ],
	category: '10',
	description: 'Returns user infomation',
	guildOnly: true,
	usage: '[id | mention]',
	run: async (client, message, args) => {

		try {
			let User = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;
			let GuildMember = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.get(message.author.id);

			let Roles = [];
			let count = GuildMember.roles.cache.filter(roles => roles.name != '@everyone').map(roles => roles.id);
			Roles = GuildMember.roles.cache.filter(roles => roles.name != '@everyone').map(roles => roles.id).join('>  <@&');

			const embed = new MessageEmbed()
				.setColor(GuildMember.displayHexColor)
				.setTitle(`${User.username}`)
				.setThumbnail(User.displayAvatarURL({ format: 'png', dynamic: true }))
				.addFields(
					{ name:'User ID', value:`${User.id}`, inline:true },
					{ name:'User Tag', value:`${User.tag}`, inline:true },
					{ name:'Nickname in this server', value: `${GuildMember.displayName}`, inline:true },
					{ name:'Role count', value: `${count.length}` },
					{ name:'Roles', value: `<@&${Roles}>`, inline:true },

				)
				.setTimestamp(message.createdAt);

			await message.channel.send(embed);

		}
		catch (error) {
			console.error(error);
			message.channel.send(`Something went wrong.\nError details:\n${error}\n**If you keep running into this problem, please send this error message and send some ss to the developer.**`);
		}


	},
};

