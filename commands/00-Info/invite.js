const Discord = require('discord.js');

module.exports = {
	name: 'invite',
	category: 'info',
	description: 'Invite the bot to different servers!',
	run: async (client, message) => {

		const embed = new Discord.MessageEmbed()
			.setColor('RANDOM')
			.setTitle('Invite Link')
			.setDescription('Here is the link to invite the bot to your server! Currently since I have no idea what to do with this boi, you can pick if you wan this bot to have admin perms or not.')
			.addFields (
				{ name: '**With Administrator**', value: '[Click Here](https://ptb.discord.com/api/oauth2/authorize?client_id=699675720204681236&permissions=8&scope=bot)', inline: true },
				{ name: '**Without Administrator**', value: '[Click Here](https://ptb.discord.com/api/oauth2/authorize?client_id=699675720204681236&permissions=1007025238&scope=bot)', inline: true },
			);
		message.channel.send(embed);

	},
};
// [Click here](https://discordapp.com/oauth2/authorize?client_id=439778986050977792&scope=bot&permissions=8)