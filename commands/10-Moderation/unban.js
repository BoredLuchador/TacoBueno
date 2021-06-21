const { MessageEmbed } = require('discord.js');
// Currently broken DO NOT USE
module.exports = {
	name: 'unban',
	aliases: false,
	category: '10',
	description: 'Unbans someone that was previously banned from the server',
	cooldown : false,
	guildOnly: true,
	NSFW: false,
	args: true,
	usage: '<id> [reason]',
	run: async (client, message, args) => {

		try {
			if(!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send('You can\'t use that!');
			if(!message.guild.me.hasPermission('BAN_MEMBERS')) return message.channel.send('I don\'t have the right permissions.');

			if(args[0] === message.author.id) return message.channel.send('Can you explain to me how you will unaban yourself from a server that you are texting in? ');

			let reason = args.slice(1).join(' ');
			if(reason === undefined) reason = 'Unspecified';

			let userID = args[0];
			message.guild.fetchBans().then(bans=> {
				if(bans.size == 0) return ;
				let bUser = bans.find(b => b.user.id == userID);
				if(!bUser) return;
				message.guild.members.unban(bUser.user);
			});

			const unbanembed = new MessageEmbed()
				.setTitle('Member Unanned')
				.addField('User Unanned', args[0])
				.addField('unbanned by', message.author)
				.setFooter('Time unbanned', client.user.displayAvatarURL())
				.setTimestamp();

			message.channel.send(unbanembed);
		}
		catch (error) {
			console.error(error);
			message.channel.send(`This Command seems to be broken. *make sure the error message below is sent to the developer either by opening the issue in the github page or with the \`bug\` command.*\n\`\`\`Error details:\n${error}\nCommand used: ${message.content}\`\`\``);
		}


	},
};