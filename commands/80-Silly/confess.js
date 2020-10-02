const Discord = require('discord.js');

module.exports = {
	name: 'confess',
	aliases: 'confession',
	category: '80',
	description: 'Allows you to anonymously confess something to the confession board',
	guildOnly: true,
	args: true,
	usage: '<confession>',
	cooldown: 50,
	run: async (client, message, args) => {
		try {
			// ANTI SPAM COMMAND
			if (message.deletable) message.delete();
			if (args.length > 32) return message.channel.send('Im not gonna let you shitpost like that');

			// Command ban filter
			if (message.author.id == '446257790156144640'
			// Bans bear
			|| message.author.id == '649464520833630228'
			// Crowy id
			|| message.author.id == '566731841898414081'
			|| message.author.id == '711500299327504434'
			|| message.author.id == '621345547558584352'
			|| message.author.id == '558291497599107072'
			|| message.author.id == '295700246808231936'
			|| message.author.id == '687312215749165165') {
				return message.channel.send('you have been banned from this command. Contact the developer if you want this to change.');
			}
			if (args[0]) {
				let confession = args.slice(0).join(' ');


				let Channel = message.guild.channels.cache.find(ch=>ch.name.includes('confess'));
				if (!Channel) return message.channel.send('There is no channel in this guild which contains the word `confess`');

				let Embed = new Discord.MessageEmbed()
					.setTitle('**Anonymous#0000**')
					.setColor('RANDOM')
					.setThumbnail('https://www.blogherald.com/wp-content/uploads/2015/09/anonymous-logo-transparent-wallpaper-4.jpg.png')
					.addFields(
						{ name:'Confession:', value: confession, inline:true },
					);
				Channel.send(Embed);

			}
		}
		catch (error) {
			console.error(error);
			message.channel.send(`Something went wrong.\nError details:\n${error}\n**If you keep running into this problem, please send this error message and send some ss to the developer.**`);
		}

	},
};

