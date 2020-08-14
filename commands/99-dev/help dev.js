const Discord = require('discord.js');
const { BotColor } = require('../../config.json');

module.exports = {
	name: 'help-dev',
	aliases: 'h-d',
	category: '99',
	description: 'Shows a list of command, or details on one command',
	args: true,
	usage: '<magic password>',
	run: async (client, message, args) => {
		try {
		// MAGIC PASSWORDS BELOW
			if(args[0] == 'cumshake') {
				// Picks the color based on Taco Bueno color palette defined in Config.json
				const colorarray = [`${BotColor[0]}`, `${BotColor[1]}`, `${BotColor[2]}`, `${BotColor[3]}`, `${BotColor[4]}`];
				let color = Math.floor((Math.random() * colorarray.length));
				const devembed = new Discord.MessageEmbed()
					.setColor(`${colorarray[color]}`)
					.setTitle('Help Panel, for El Primo')
					.setDescription('instead of bookmarking all of the links, you instead made a command that you hope that nobody else finds where you list all of the things you need to look at often. noice')
					.addFields(
						{ name: 'Basic Discord js links (v12)', value: '[Official docs](https://discord.js.org/#/docs/main/12.2.0/general/welcome), [Official Guide](https://discordjs.guide/)' },
						{ name: 'Random things you should\'ve learned lmao', value: '[Folder stuff](https://estk.aenhancers.com/3%20-%20File%20System%20Access/using-file-and-folder-objects.html), [Mozilla docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript), [Hosting with heroku](https://youtu.be/6By-t-FaKPc)' },
						{ name: 'Youtube channels that give good ideas', value: '[The Source code](https://www.youtube.com/channel/UCNXt2MrZaqfIBknamqwzeXA), [Stuy](https://www.youtube.com/user/DatAdam93/featured), [Menu Docs](https://www.youtube.com/channel/UCpGGFqJP9vYvzFudqnQ-6IA/featured), [Salvage_Dev](https://www.youtube.com/channel/UC7-pjRSGoNEMoIujwOH2Mhw/featured)' },
					);
				message.author.send(devembed);
			}
			else {
				return message.channel.send('No, your\'e not getting your hands on primo\'s notes');
			}
		}
		catch (error) {
			console.error(error);
			message.channel.send(`Something went wrong.\nError details:\n${error}\n**If you keep running into this problem, please send this error message and send some ss to the developer.**`);
		}
	},
};
