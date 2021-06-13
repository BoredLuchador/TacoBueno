module.exports = {
	name: 'id',
	aliases: false,
	category: '99',
	description: 'improved id resolver',
	cooldown : false,
	guildOnly: false,
	NSFW: false,
	args: true,
	usage: '<1 = user, 2 = gmember, 3 = channel> <id>',
	run: async (client, message, args) => {

		if (message.author.id == '605358463714983977') {

			if (!args[1]) return message.channel.send('please send a id');

			if (args[0] == '1') {
				const User = client.users.cache.get(args[1]);
				message.channel.send(`${User.tag}`);
			}
			if (args[0] == '2') {
				const GuildMember = message.guild.members.cache.get(args[1]);
				message.channel.send(`${GuildMember.displayName}`);
			}
			if (args[0] == '3') {
				const Channel = message.guild.channels.cache.get(args[1]);
				message.channel.send(`${Channel.name}`);
			}
		}
		else {
			return message.channel.send('you\'re not primo. What are you doing with this command?');
		}
	},
};