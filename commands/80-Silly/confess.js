const Discord = require('discord.js');

module.exports = {
	name: 'confess',
	category: 'Silly',
	description: 'Allows you to anonymously confess something to the confession board',
	args: true,
	usage: '<confession>',
	run: async (client, message, args) => {
		if (message.deletable) message.delete();

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

	},
};

