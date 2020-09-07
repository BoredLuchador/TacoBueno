const weather = require('weather.js');
const { MessageEmbed } = require('discord.js');


module.exports = {
	name: 'weather',
	aliases: 'wtr',
	category: '90',
	description: 'Lets you get the some weather stats for a place',
	cooldown : false,
	guildOnly: false,
	NSFW: false,
	args: true,
	usage: '<location> [f/c]>',
	run: async (client, message, args) => {
		let degtype = 'c';
		let search = args.join(' ');
		if (args[1] == 'F' || args[1] == 'f') {
			degtype = 'f';
			search = args.slice(0, args.length - 1).join(' ');
		}
		else if (args[1] == 'C' || args[1] == 'c') {
			search = args.slice(0, args.length - 1).join(' ');
		}

		weather.find({ search: search, degreeType: degtype }, function(error, result) {
			if(error) return message.channel.send(error);

			if(result === undefined || result.length === 0) return message.channel.send('**THAT LOCATION IS INVALID**');

			const current = result[0].current;
			const location = result[0].location;

			const winfo = new MessageEmbed()
		});
	},
};