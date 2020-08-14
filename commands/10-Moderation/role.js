const { MessageEmbed } = require('discord.js');
module.exports = {
	name: 'role',
	aliases: false,
	category: '10',
	description: 'Toggle a role for a single user, or yourself',
	cooldown: 5,
	guildOnly: true,
	NSFW: false,
	args: true,
	usage: '[mention/id] <role/role id>',
	run: async (client, message, args) => {
		try {
			let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || null;
			let ARG = [];
			if(member == null) {
				ARG = args[0];
				member = message.member;
			}
			else {ARG = args[1];}
			if (message.member.hasPermission('MANAGE_ROLES')) {
				let roles = message.mentions.roles.first() || message.guild.roles.cache.get(ARG);
				let rcolor = roles.hexColor;
				console.log(roles);
				console.log(ARG);

				if (roles) {
					if(roles.permissions.has('ADMINISTRATOR') || roles.permissions.has('KICK_MEMBERS') || roles.permissions.has('BAN_MEMBERS') || roles.permissions.has('MANAGE_GUILD') || roles.permissions.has('MENTION_EVERYONE') || roles.permissions.has('MANAGE_NICKNAMES') || roles.permissions.has('MANAGE_ROLES') || roles.permissions.has('MANAGE_WEBHOOKS') || roles.permissions.has('MANAGE_EMOJIS')) {
						message.channel.send('I\'m not gonna take your own perms away silly.');
						return;
					}
					else if(message.member.roles.cache.has(roles.id)) {
						const embed1 = new MessageEmbed()
							.setColor(rcolor)
							.setDescription(`Removed ${roles} for ${member}`);
						member.roles.remove(roles)
							.catch(err => {
								console.log(err);
								message.channel.send('The role wasn\'t removed due to one of 2 reasons\n`Missing permissions`\n`Role Heiarchy`');
							})
							.then(message.channel.send(embed1));
						return;
					}
					if(roles.permissions.has('ADMINISTRATOR') || roles.permissions.has('KICK_MEMBERS') || roles.permissions.has('BAN_MEMBERS') || roles.permissions.has('MANAGE_GUILD') || roles.permissions.has('MENTION_EVERYONE') || roles.permissions.has('MANAGE_NICKNAMES') || roles.permissions.has('MANAGE_ROLES') || roles.permissions.has('MANAGE_WEBHOOKS') || roles.permissions.has('MANAGE_EMOJIS')) {
						message.channel.send('As a abuse prevention measure, you will not be able to give yourself or others this role.');
						return;
					}
					else {
						const embed2 = new MessageEmbed()
							.setColor(rcolor)
							.setDescription(`Added ${roles} for ${member}`);

						member.roles.add(roles)
							.then(message.channel.send(embed2))
							.catch(err => {
								console.log(err);
								message.channel.send(`Something went wrong.\nError details:\n${err}\n**If you keep running into this problem, please send this error message and send some ss to the developer.**`);
							});
					}
				}
				else {

					message.channel.send('Sorry I couldnt find the role. Try making sure it exists?');
				}
			}
		}
		catch (error) {
			console.log(error);
		}
	},
};