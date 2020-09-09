const weather = require('weather-js');
const { MessageEmbed } = require('discord.js');


module.exports = {
	name: 'weather',
	aliases: 'wtr',
	category: '80',
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

		weather.find({ search: `${search}`, degreeType: `${degtype}` }, function(error, result) {
			if(error) return message.channel.send(error);

			if(result === undefined || result.length === 0) return message.channel.send('**THAT LOCATION IS INVALID**');

			const current = result[0].current;
			const location = result[0].location;

			const winfo = new MessageEmbed()
				.setTitle(`weather for ${location.name} \n ${current.skytext}`)
				.setDescription('Basic info:')
				.setColor('RANDOM')
				.setThumbnail(current.imageUrl)
				.addFields(
					{ name: 'Timezone', value: `${location.timezone}`, inline: true },
					{ name: 'Degree type', value: `${degtype}`, inline: true },
					{ name: 'Tempature', value: `${current.temperature}°`, inline: true },
					{ name: 'Wind Stats', value: `${current.winddisplay}`, inline: true },
					{ name: 'Feels likes', value: `${current.feelslike}°`, inline: true },
					{ name: 'Humidity', value: `${current.humidity}%`, inline: true },
				);
			message.channel.send(winfo);
		});
	},
};