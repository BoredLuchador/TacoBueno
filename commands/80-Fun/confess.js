const Discord = require('discord.js');
const role = require('../../models/confess-ban');

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
			// checks to see if the server where the command is being run has a ban role set
			let banRole = null;
			const data = await role.findOne({
				GuildID: message.guild.id,
			});
			if (data) {
				banRole = data.BanRole;
			}
			// ANTI SPAM COMMAND
			if (message.deletable) message.delete();
			if (args.length > 32) return message.channel.send('Im not gonna let you shitpost like that');

			// Server ban filter (TEMPOARY
			if (message.member.roles.cache.find(r => r.id == banRole)) {
				return message.channel.send('you have been banned from this command by the server mods. Contact the staff team if you want this to change.');
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
			message.channel.send(`This Command seems to be broken. *make sure the error message below is sent to the developer either by opening the issue in the github page or with the \`bug\` command.*\n\`\`\`Error details:\n${error}\nCommand used: ${message.content}\`\`\``);
		}

	},
};

