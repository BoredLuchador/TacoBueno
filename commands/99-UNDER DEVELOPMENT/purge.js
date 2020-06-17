module.exports = {
	name: 'purge',
	aliases: ['delete', 'clean'],
	category: 'moderation',
	description: 'allows you to clean up some spam or your mess',
	guildOnly: true,
	args: true,
	usage: '<amount of messages to delete>',

	run: async (client, message, args) => {
		if (args[0]) {
			if (isNaN (args[0])) {
				message.channel.send('That isn\'t an actual number, dummy.');
			}
			else {
				const msgamount = args[0];
				const amount = args[0]++;
				try {
					await message.channel.bulkDelete(amount, true);
					await message.channel.send(`looks like I purged ${msgamount} messages.`);
				}
				catch(error) {
					console.error(error);
					message.channel.send('something went wrong.');
					message.channel.send(`Error details:\n${error}\n**If you keep running into this problem, please send this error message and send some ss to the developer.**`);
				}
			}
		}
	},
};

// note that limit is 100