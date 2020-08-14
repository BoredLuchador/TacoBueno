const Discord = require('discord.js');

module.exports = {
	name: 'invite',
	aliases: false,
	category: '00',
	description: 'Invite the bot to different servers!',
	cooldown: false,
	guildOnly: false,
	NSFW: false,
	args: false,
	usage: false,
	run: async (client, message) => {

		try {

			const embed = new Discord.MessageEmbed()
				.setColor('RANDOM')
				.setTitle('Invite Link')
				.setDescription('Here is the link to invite the bot to your server! Currently since I have no idea what to do with this boi, you can pick if you wan this bot to have admin perms or not.')
				.addFields (
					{ name: '**With Administrator**', value: '[Click Here](https://ptb.discord.com/api/oauth2/authorize?client_id=699675720204681236&permissions=8&scope=bot)', inline: true },
					{ name: '**Without Administrator**', value: '[Click Here](https://ptb.discord.com/api/oauth2/authorize?client_id=699675720204681236&permissions=1007025238&scope=bot)', inline: true },
				);
			message.channel.send(embed);
		}
		catch(error) {
			console.error(error);
			message.channel.send(`Something went wrong.\nError details:\n${error}\n**If you keep running into this problem, please send this error message and send some ss to the developer.**`);
		}


	},
};
// [Click here](https://discordapp.com/oauth2/authorize?client_id=439778986050977792&scope=bot&permissions=8)