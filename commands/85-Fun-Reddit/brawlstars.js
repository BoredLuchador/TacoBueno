const randomPuppy = require('random-puppy');
const { MessageEmbed, MessageAttachment } = require('discord.js');

// currently the command does not work at all due to the way the module works (does not get media directly from reddit.)

module.exports = {
	name: 'brawlstars',
	aliases: 'rbs',
	category: '85',
	description: 'Attempts to get a image or video from various brawkstars themed subreddits, with some of them end up not being as good as you hoped.',
	cooldown : false,
	guildOnly: false,
	NSFW: false,
	args: 30,
	usage: false,
	run: async (client, message) => {
		// Subreddits
		const subReddits = ['Brawlstarsmeme', 'Brawlstars', 'CoachCorySubmissions', 'OkBrawlerRetard', 'supercell'];
		let x = Math.floor((Math.random() * subReddits.length));
		let img = await randomPuppy(subReddits[x])
			.then(url => {
				console.log(url);
			});

		try {
			do {
				setTimeout(() => {
					x = Math.floor((Math.random() * subReddits.length));
				}, 2000);
				img = await randomPuppy(subReddits[x])
					.then(url => {
						console.log(url);
					});
			} while (!img);
		}
		catch (error) {
			console.log(error);
			return message.channel.send(`looks like theres nothing for us to look at today \n*${error}*`);

		}
		do {
			setImmediate(() =>
				x = Math.floor((Math.random() * subReddits.length)));
			img = await randomPuppy(subReddits[x])
				.then(url => {
					console.log(url);
				});
		} while (!img);

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
		try {
			// Actual commands plays out here
			await message.channel.send(embed);
			if (img.includes(['.mp4'])) {
				await message.channel.send(attchment);

			}
		}
		catch (error) {
			console.error(error);
			message.channel.send(`something went wrong.\nError details:\n${error}\n**If you keep running into this problem, please send this error message and send some ss to the developer.**`);
		}
	},
};