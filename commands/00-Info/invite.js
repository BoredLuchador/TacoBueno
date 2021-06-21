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
					// These are the link to invite the bot. You can add your own by simply going to the discord developer site
					{ name: '**With Administrator**', value: '[Click Here](https://ptb.discord.com/api/oauth2/authorize?client_id=699675720204681236&permissions=8&scope=bot)', inline: true },
					{ name: '**Without Administrator**', value: '[Click Here](https://ptb.discord.com/api/oauth2/authorize?client_id=699675720204681236&permissions=1007025238&scope=bot)', inline: true },
				);
			message.channel.send(embed);
		}
		catch(error) {
			console.error(error);
			message.channel.send(`This Command seems to be broken. *make sure the error message below is sent to the developer either by opening the issue in the github page or with the \`bug\` command.*\n\`\`\`Error details:\n${error}\nCommand used: ${message.content}\`\`\``);
		}


	},
};
