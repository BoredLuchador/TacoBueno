const prefixModel = require('../../models/prefix');
const mongoose = require('mongoose');

module.exports = {
	name: 'prefix-set',
	aliases: 'prefix=',
	category: '01',
	description: 'Set the custom prefix for the server',
	cooldown : false,
	guildOnly: true,
	NSFW: false,
	args: true,
	usage: '<new prefix/reset>',
	run: async (client, message, args) => {
		const data = await prefixModel.findOne({
			GuildID: message.guild.id,
		});
		mongoose.set('useFindAndModify', false);

		if (args[0].length > 5) return message.channel.send('Your new prefix must be under `5` characters!');


		if (data) {
			await prefixModel.findOneAndRemove({
				GuildID: message.guild.id,
			});
			if (args[0] == 'reset') {
				return message.channel.send('You resetted the prefix. The default prefix isnt bad at all tbh.');
			}
			else {

				message.channel.send(`The new prefix is now **\`${args[0]}\`**`);

				let newData = new prefixModel({
					Prefix: args[0],
					GuildID: message.guild.id,
				});
				newData.save();
			}
		}
		else if (!data) {
			message.channel.send(`The new prefix is now **\`${args[0]}\`**`);

			let newData = new prefixModel({
				Prefix: args[0],
				GuildID: message.guild.id,
			});
			newData.save();
		}

	},
};

