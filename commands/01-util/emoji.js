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

		let GuildEmoji = message.guild.emojis.cache.get(args[0]);
		// emoji object from id
		let img = GuildEmoji.url;
		// image link from emote object.

		message.channel.send(`${img}`);
	},
};

// Currently incomplete
// will need to figure out how to get image from raw emote message