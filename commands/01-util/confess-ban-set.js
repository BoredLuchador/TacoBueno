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

		if(!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send('You can\'t use that!');
		if(!message.guild.me.hasPermission('MANAGE_CHANNELS')) return message.channel.send('I don\'t have the right permissions.');

		const data = await roleModel.findOne({
			GuildID: message.guild.id,
		});
		mongoose.set('useFindAndModify', false);

		let role = message.mentions.roles.first() || message.guild.roles.cache.get(args[0]);
		if (!role) return message.channel.send('I\'m very confident that you did not mention a role');


		if (data) {
			await roleModel.findOneAndRemove({
				GuildID: message.guild.id,
			});
			if (args[0] == 'reset') {
				return message.channel.send('You resetted the prefix. The default prefix isnt bad at all tbh.');
			}
			else {

				message.channel.send(`The new prefix is now **\`${args[0]}\`**`);

				let newData = new roleModel({
					BanRole: args[0],
					GuildID: message.guild.id,
				});
				newData.save();
			}
		}
		else if (!data) {
			message.channel.send(`The new prefix is now **\`${args[0]}\`**`);

			let newData = new roleModel({
				BanRole: args[0],
				GuildID: message.guild.id,
			});
			newData.save();
		}

	},
};

