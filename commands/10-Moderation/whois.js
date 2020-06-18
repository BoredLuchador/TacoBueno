const { MessageEmbed } = require('discord.js');

// STATE OF WHOIS COMMAND = BROKEN AND UNDER //
// TYPE OF INFO CURRENTLY OUTPUTED = ONLY PUTPUTS PFP, ID, and TAG //

module.exports = {
	name: 'whois',
	aliases: ['userinfo', 'user', 'who' ],
	category: 'info',
	description: 'Returns user infomation/n*Currently the command is broken*',
	usage: '[id | mention]',
	run: async (client, message) => {

		try {
			let User = message.mentions.users.first() || null;

			// checks to see if the message author pinged anyone //
			if (User == null) {

				// Author
				const apfp = message.author.displayAvatarURL({ format: 'png', dynamic: true });
				const Rcolor1 = message.guild.me.displayHexColor === '#000000' ? '#ffffff' : message.guild.me.displayHexColor;


				const Aembed = new MessageEmbed()

					.setTitle(`${message.author.username}`)
					.setDescription('Info on you since you didn\'t mention anybody else')
					.setColor(Rcolor1)
					.setThumbnail(apfp)
					.addFields(
						{ name:'User ID', value:`${message.author.id}`, inline:true },
						{ name:'User Tag', value:`${message.author.tag}`, inline:true },
					);

				message.channel.send(Aembed);

			}
			else {

				// User
				const pfp = User.displayAvatarURL({ format: 'png', dynamic: true });
				const Rcolor = message.guild.me.displayHexColor === '#000000' ? '#ffffff' : message.guild.me.displayHexColor;


				const embed = new MessageEmbed()

					.setTitle(`${User.username}`)
					.setDescription('Info on the mentioned user')
					.setColor(Rcolor)
					.setThumbnail(pfp)
					.addFields(
						{ name:'User ID', value:`${User.id}`, inline:true },
						{ name:'User Tag', value:`${User.tag}`, inline:true },
					);

				message.channel.send(embed);
			}
		}
		catch (error) {
			console.error(error);
			message.channel.send(`Something went wrong.\nError details:\n${error}\n**If you keep running into this problem, please send this error message and send some ss to the developer.**`);
		}


	},
};

