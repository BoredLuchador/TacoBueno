const prefixModel = require('../../models/prefix');
const mongoose = require('mongoose');

module.exports = {
	name: 'prefix-set',
	aliases: 'prefix=',
	category: '01',
	description: 'Set the custom prefix for the server (you need to have the `MANAGE CHANNELS` permission',
	cooldown : false,
	guildOnly: true,
	NSFW: false,
	args: true,
	usage: '<new prefix/reset>',
	run: async (client, message, args) => {

		try {
			// checks for required permissions
			if(!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send('You can\'t use that!');
			if(!message.guild.me.hasPermission('MANAGE_CHANNELS')) return message.channel.send('I don\'t have the right permissions.');

			// gets data for the server prefix if it already exists
			const data = await prefixModel.findOne({
				GuildID: message.guild.id,
			});
			mongoose.set('useFindAndModify', false);

			// checks length of new prefix
			if (args[0].length > 5) return message.channel.send('Your new prefix must be under `5` characters!');


			// creates new prefix or resets the prefix to bot default
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
		}
		catch (error) {
			console.error(error);
			message.channel.send(`This Command seems to be broken. *make sure the error message below is sent to the developer either by opening the issue in the github page or with the \`bug\` command.*\n\`\`\`Error details:\n${error}\nCommand used: ${message.content}\`\`\``);
		}


	},
};

