const Discord = require('discord.js');

module.exports = {
	name: 'report',
	aliases: ['r'],
	category: '10',
	description: 'Reports people. What else did you expect?',
	guildOnly: true,
	args: true,
	usage: '<mention> <reason>',
	run: async (client, message, args) => {
		if (message.deletable) message.delete();

		let User = message.mentions.users.first() || null;

		if (User == null) {
			try {
				return message.channel.send('You did not mention a user!');
			}
			catch (error) {
				console.error(error);
				message.channel.send(`Something went wrong.\nError details:\n${error}\n**If you keep running into this problem, please send this error message and send some ss to the developer.**`);
			}
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
			try{
				Channel.send(Embed);
			}
			catch (error) {
				console.error(error);
				message.channel.send(`Something went wrong.\nError details:\n${error}\n**If you keep running into this problem, please send this error message and send some ss to the developer.**`);
			}
		}

	},
};

// NOTE THAT VARIABLE USER IS THE PERSON YOU ARE REPORTING //