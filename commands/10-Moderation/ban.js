const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'ban',
	aliases: false,
	category: '10',
	description: 'Bans someone out of the server',
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
		if(!member.bannable) return message.channel.send('This user can\'t be banned. It is either because they are a mod/admin, or their highest role is higher than mine');

		if(member.id === message.author.id) return message.channel.send('Bruh, I\'m not dumb enough to let you ban yourself. Try kicking yourself out, it works for sure.');

		let reason = args.slice(1).join(' ');

		if(reason === undefined) reason = 'Unspecified';

		member.ban(reason)
			.catch(err => {
				if(err) return message.channel.send('Something went wrong');
			});

		const banembed = new MessageEmbed()
			.setTitle('Member Kicked')
			.setThumbnail(member.user.displayAvatarURL())
			.addField('User Banned', member)
			.addField('banned by', message.author)
			.addField('Reason', reason)
			.setFooter('Time banned', client.user.displayAvatarURL())
			.setTimestamp();

		message.channel.send(banembed);

		try {
			member.send(`You were banned from ${message.guild.name} for ${reason}`);
		}
		catch (err) {
			return;
		}

	},
};