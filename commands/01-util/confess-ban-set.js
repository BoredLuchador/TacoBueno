const roleModel = require('../../models/confess-ban');
const mongoose = require('mongoose');

module.exports = {
	name: 'confess-ban-set',
	aliases: ['confess-ban-role', 'confess-role'],
	category: '01',
	description: 'Set the custom role used to ban people from the confession channel',
	cooldown : false,
	guildOnly: true,
	NSFW: false,
	args: true,
	usage: '<new role/reset>',
	run: async (client, message, args) => {

		try {
			// checks to see if the message author has the required permissions
			if(!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send('You can\'t use that!');
			if(!message.guild.me.hasPermission('MANAGE_CHANNELS')) return message.channel.send('I don\'t have the right permissions.');

			// pulls up data for the ban role and checks to see if it exists
			const data = await roleModel.findOne({
				GuildID: message.guild.id,
			});
			mongoose.set('useFindAndModify', false);

			// sets the role variable as either an mention turned into an id, or raw id data
			let role = message.mentions.roles.first() || message.guild.roles.cache.get(args[0]);
			if (!role) return message.channel.send('I\'m very confident that you did not mention a role');
			if (role == message.mentions.roles.first()) {
				role = role.id;
			}

			// Updates or creates mongo data
			if (data) {
				await roleModel.findOneAndRemove({
					GuildID: message.guild.id,
				});
				if (args[0] == 'reset') {
					return message.channel.send('You resetted the ban role for the confession board.');
				}
				else {

					message.channel.send(`The new confess ban role is now **\`${role}\`**`);

					let newData = new roleModel({
						BanRole: role,
						GuildID: message.guild.id,
					});
					newData.save();
				}
			}
			else if (!data) {
				message.channel.send(`The new confess ban role is now **\`${role}\`**`);

				let newData = new roleModel({
					BanRole: role,
					GuildID: message.guild.id,
				});
				newData.save();
			}
		}
		catch (error) {
			console.error(error);
			message.channel.send(`This Command seems to be broken. *make sure the error message below is sent to the developer either by opening the issue in the github page or with the \`bug\` command.*\n\`\`\`Error details:\n${error}\nCommand used: ${message.content}\`\`\``);
		}


	},
};

