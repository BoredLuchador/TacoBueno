const Discord = require('discord.js');

module.exports = {
	name: 'avatar',
	aliases: ['pfp', 'av'],
	category: '01',
	description: 'Returns avatar image in png format',
	usage : '[Mention]',
	run: async (client, message, args) => {

		// Sets user variable as the first person mentioned OR NULL //
		let User = message.mentions.users.first() || client.users.cache.get(args[0]) || null;


		if (User != null) {
			// Sends pfp of anyone that has been pinged// In good shape //

			let Userimg = User.displayAvatarURL({ format: 'png', dynamic: true });

			const Udes = [ User, '`s profile image'];
			// Embed stuff here//

			const UEmbed = new Discord.MessageEmbed()
				.setColor('RANDOM')
				.setTitle('Image link')
				.setURL(Userimg)
				.setDescription(Udes.join(' '))
				.setImage(Userimg)
				.setTimestamp();

			try{
				message.channel.send(UEmbed);
			}
			catch (error) {
				console.error(error);
				message.channel.send(`Something went wrong.\nError details:\n${error}\n**If you keep running into this problem, please send this error message and send some ss to the developer.**`);
			}
		}
		else {

			// Sends pfp of message author// In good shape //
			let image = message.author.displayAvatarURL({ format: 'png', dynamic: true });
			let name = message.author;

			const des = [ name, '`s profile image'];

			// Embed stuff here//

			const Embed = new Discord.MessageEmbed()
				.setColor('RANDOM')
				.setTitle('Image link')
				.setURL(image)
				.setDescription(des.join(' '))
				.setImage(image)
				.setTimestamp();

			try {
				message.channel.send(Embed);
			}
			catch (error) {
				console.error(error);
				message.channel.send(`Something went wrong.\nError details:\n${error}\n**If you keep running into this problem, please send this error message and send some ss to the developer.**`);
			}
		}

	},
};