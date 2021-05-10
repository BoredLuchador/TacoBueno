const { MessageEmbed } = require('discord.js');
// Currently broken DO NOT USE
module.exports = {
	name: 'unban1',
	aliases: false,
	category: '10',
	description: 'Unbans someone that was previously banned from the server',
	cooldown : false,
	guildOnly: true,
	NSFW: false,
	args: true,
	usage: '<id> [reason]',
	run: async (client, message, args) => {
		if(!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send('You can\'t use that!');
		if(!message.guild.me.hasPermission('BAN_MEMBERS')) return message.channel.send('I don\'t have the right permissions.');

		if(args[0] === message.author.id) return message.channel.send('Can you explain to me how you will unaban yourself from a server that you are texting in? ');

		let reason = args.slice(1).join(' ');
		if(reason === undefined) reason = 'Unspecified';

		let member = client.users.resolveID(args[0]);

		message.guild.fetchBan(member).then(user => {
			message.guild.members.unban(`${user}}, ${reason}`)
				.catch(err => {
					if(err) return message.channel.send(`Something went wrong ${err}`);
				});
		});

		const unbanembed = new MessageEmbed()
			.setTitle('Member Unanned')
			.addField('User Unanned', args[0])
			.addField('unbanned by', message.author)
			.setFooter('Time unbanned', client.user.displayAvatarURL())
			.setTimestamp();

		message.channel.send(unbanembed);

	},
};