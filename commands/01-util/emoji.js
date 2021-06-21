module.exports = {
	name: 'emoji',
	aliases: '',
	category: '01',
	description: 'Gets you the image link for custom emojis by sending it an id',
	cooldown : false,
	guildOnly: false,
	NSFW: false,
	args: true,
	usage: '<emote-id>',
	run: async (client, message, args) => {
		try {
			let GuildEmoji = message.guild.emojis.cache.get(args[0]);
			// emoji object from id
			let img = GuildEmoji.url;
			// image link from emote object.

			message.channel.send(`${img}`);
		}
		catch (error) {
			console.error(error);
			message.channel.send(`This Command seems to be broken. *make sure the error message below is sent to the developer either by opening the issue in the github page or with the \`bug\` command.*\n\`\`\`Error details:\n${error}\nCommand used: ${message.content}\`\`\``);
		}
	},
};

// Currently incomplete
// will need to figure out how to get image from raw emote message