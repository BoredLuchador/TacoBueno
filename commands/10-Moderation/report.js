const Discord = require('discord.js');

module.exports = {
	name: 'report',
	category: 'Moderation',
	description: 'Reports people. What else did you expect?',
	usage: '<mention | id> <reason>',
	run: async (client, message, args) => {
		if (message.deletable) message.delete();

		let User = message.mentions.users.first() || null;

		if (User == null) {
			return message.channel.send('You did not mention a user!');
		}
		else {
			let Reason = args.slice(1).join(' ') || null;
			if (Reason == null) {
				return message.channel.send('You did not specify a reason for the report!');
			}

			let Avatar = User.displayAvatarURL({ format: 'png', dynamic: true });
			let Channel = message.guild.channels.cache.find(ch=>ch.name.includes('reports'));
			if (!Channel) return message.channel.send('There is no channel in this guild which is called `reports`') ;

			let Embed = new Discord.MessageEmbed()
				.setTitle('New report!')
				.setDescription(`The user \`${message.author.tag}\` has reported \`${User.tag}\`! `)
				.setColor('RANDOM')
				.setThumbnail(Avatar)
				.addFields(
					{ name:'User ID', value:`${message.author.id}`, inline:true },
					{ name:'User Tag', value:`${message.author.tag}`, inline:true },
					{ name:'Reported ID', value:`${User.id}`, inline:true },
					{ name:'Reported Tag', value:`${User.tag}`, inline:true },
					{ name:'Reason', value:`\`${Reason.slice(0)}\``, inline:true },
					{ name:'Date (M/D/Y)', value:`${new Intl.DateTimeFormat('en-US').format(Date.now())}`, inline:true },
				);
			Channel.send(Embed);
		}

	},
};

// NOTE THAT VARIABLE USER IS THE PERSON YOU ARE REPORTING //