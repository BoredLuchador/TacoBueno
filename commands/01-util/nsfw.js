module.exports = {
	name: 'nsfw',
	aliases: false,
	category: '01',
	description: 'Toggles on the nsfw flag on the channel',
	cooldown : false,
	guildOnly : true,
	NSFW : false,
	args: true,
	usage: '<ON/OFF>',
	run: async (client, message, args) => {
		const ans = args[0].toLowerCase();

		try {
			if(message.member.hasPermission('MANAGE_CHANNELS') || message.member.hasPermission('MANAGE_GUILD')) {
				if (ans != 'on' && ans != 'off') {
					return message.channel.send('Dude, that isn\'t a valid option :eyes:');
				}
				if (ans == 'on') {
					message.channel.setNSFW(true);
				}
				if (ans == 'off') {
					message.channel.setNSFW(false);
				}
				message.channel.send(`sucuessfully set nsfw ${args[0]}`);
			}
			else {return message.reply('You do not have the `MANAGE_CHANNEL` or `MANAGE_GUILD` permissions.');}


		}
		catch (error) {
			console.error(error);
			message.channel.send(`Something went wrong.\nError details:\n${error}\n**If you keep running into this problem, please send this error message and send some ss to the developer.**`);
		}

	},
};