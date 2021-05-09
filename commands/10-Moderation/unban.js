const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'unban',
	aliases: false,
	category: '10',
	description: 'Unans someone that was previously banned from the server',
	cooldown : false,
	guildOnly: true,
	NSFW: false,
	args: true,
	usage: '<ping> [reason]',
	run: async (client, message, args) => {
		if(!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send('You can\'t use that!');
		if(!message.guild.me.hasPermission('BAN_MEMBERS')) return message.channel.send('I don\'t have the right permissions.');

		const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

		if(!member) return message.channel.send('Can\'t seem to find this user. Sorry \'bout that :/');
		if(!member.deleted) return message.channel.send('This user can\'t be unbanned. They are defintely not banned');

		if(member.id === message.author.id) return message.channel.send('Can you explain to me how you will unaban yourself from a server that you are texting in? ');

		let reason = args.slice(1).join(' ');

		if(reason === undefined) reason = 'Unspecified';

		member.unban(reason)
			.catch(err => {
				if(err) return message.channel.send('Something went wrong');
			});

		const unbanembed = new MessageEmbed()
			.setTitle('Member Unanned')
			.setThumbnail(member.user.displayAvatarURL())
			.addField('User Unanned', member)
			.addField('unbanned by', message.author)
			.addField('Reason', reason)
			.setFooter('Time unbanned', client.user.displayAvatarURL())
			.setTimestamp();

		message.channel.send(unbanembed);

		try {
			member.send(`You were unbanned from ${message.guild.name} for ${reason}`);
		}
		catch (err) {
			return;
		}

	},
};