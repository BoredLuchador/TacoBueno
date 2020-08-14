const { MessageEmbed, MessageAttachment } = require('discord.js');
const randomPuppy = require('random-puppy');


module.exports = {
	name: 'reddit',
	aliases: ['reddt'],
	category: '85',
	description: 'Allows you to look up a subreddit if there isn\'t a preset for your tastes yet',
	cooldown : 5,
	guildOnly: false,
	NSFW : true,
	args: true,
	usage: '<Subreddit>',
	run: async (client, message, args) => {
		// Subreddits
		try {
			if(message.channel.nsfw == false) {return message.channel.send('Umm this channel doesn\'t has the requirement for this command to work safely');}
			else{
				const subReddits = [args[0]];
				const x = Math.floor((Math.random() * subReddits.length));
				const img = await randomPuppy(subReddits[x]);

				let embed = new MessageEmbed()
					.setTitle(`From /r/${subReddits[x]}`)
					.setColor('RANDOM')
					.setDescription(`[File link just in case the command really breaks](${img})`)
					.setURL(`https://reddit.com/r/${subReddits[x]}/`)
					.setImage(img)
					.setTimestamp();
				if (img.includes(['.mp4'])) {
					embed = new MessageEmbed()
						.setTitle(`From /r/${subReddits[x]}`)
						.setColor('RANDOM')
						.setDescription(`[File link just in case the command really breaks](${img})`)
						.setURL(`https://reddit.com/r/${subReddits[x]}/`)
						.setTimestamp();
				}
				const attchment = new MessageAttachment(img);

				// Actual commands plays out here
				await message.channel.send(embed);
				if (img.includes(['.mp4'])) {
					await message.channel.send(attchment);
				}
			}
		}
		catch (error) {
			console.error(error);
			message.channel.send(`something went wrong.\nError details:\n${error}\n**If you keep running into this problem, please send this error message and send some ss to the developer.**`);
		}
	},
};