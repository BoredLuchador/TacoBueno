module.exports = {
	name: 'nsfw',
	aliases: false,
	category: '01',
	description: 'Toggles on the nsfw flag on the channel',
	cooldown : false,
	guildOnly : true,
	NSFW : false,
	args: true,
	usage: '[channel/id] <ON/OFF>',
	run: async (client, message, args) => {
		// grabs arguments info
		let channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[0]) || undefined;
		let ans = args[1];

		// Defaults to channel the message was sent if the target channel is not defined
		if (channel == undefined) {
			channel = message.channel;
			ans = args[0];
		}

		try {
			// Checks to see if the message author has the required premission in the server.
			if(message.member.hasPermission('MANAGE_CHANNELS') || message.member.hasPermission('MANAGE_GUILD')) {
				if (ans != 'on' && ans != 'off') {
					return message.channel.send('Dude, that isn\'t a valid option :eyes:');
				}
				if (ans == 'on') {
					channel.setNSFW(true);
				}
				if (ans == 'off') {
					channel.setNSFW(false);
				}
				message.channel.send(`sucuessfully set nsfw ${ans} in ${channel}`);
			}
			else {return message.reply('You do not have the `MANAGE_CHANNEL` or `MANAGE_GUILD` permissions.');}


		}
		catch (error) {
			console.error(error);
			message.channel.send(`Something went wrong.\nError details:\n${error}\n**If you keep running into this problem, please send this error message and send some ss to the developer.**`);
		}

	},
};