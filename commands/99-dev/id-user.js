module.exports = {
	name: 'id-user',
	category: '99',
	description: 'test to find out how the user resolvable works',
	guildOnly: true,
	args: true,
	usage: '<something for it to resolve to user object>',
	run: async (client, message, args) => {
		try {

			const GuildMember = message.guild.members.cache.get(args[0]);
			const User = client.users.cache.get(args[0]);

			// message.channel.send(`${GuildMember}`);
			message.channel.send(`${User.tag}`);
			message.channel.send(`${GuildMember.displayName}`);


		}
		catch (error) {
			console.error(error);
			message.channel.send(`something went wrong.\nError details:\n${error}\n**If you keep running into this problem, please send this error message and send some ss to the developer.**`);
		}

	},
};