const { MessageEmbed, MessageAttachment } = require('discord.js');
const randomPuppy = require('random-puppy');


module.exports = {
	name: 'reddit',
	aliases: ['reddt'],
	category: '85',
	description: 'Allows you to look up a subreddit if there isn\'t a preset for your tastes yet',
	cooldown : 5,
	guildOnly: false,
	NSFW : false,
	// This is marked as not nsfw only because there is a custom response if the channel is not properly marked
	args: true,
	usage: '<Subreddit>',
	run: async (client, message, args) => {
		// Subreddits
		try {
			if(message.channel.nsfw == false) {return message.channel.send('This command is mark as nsfw because poeple have been known to use this command to send nsfw content in channels that are not proplerly marked. In the meantime, please use a marked channel or ask a Staff Member to make the channel nsfw for you');}
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