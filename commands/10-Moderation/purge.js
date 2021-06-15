module.exports = {
	name: 'purge',
	aliases: ['delete', 'clean'],
	category: '10',
	description: 'allows you to clean up some spam or your mess',
	guildOnly: true,
	args: true,
	usage: '<amount of messages to delete>',

	run: async (client, message, args) => {
		if (args[0]) {
			// checks to see if the argument is an number
			if (isNaN (args[0])) {
				message.channel.send('That isn\'t an actual number, dummy.');
			}
			else {
				// purges messages (currewntly way too spammy)
				const msgamount = args[0];
				let x = args[0];
				try {
					await message.channel.bulkDelete(x, true);
					await message.channel.bulkDelete(1, true);
					const fin = await message.channel.send(`looks like I purged ${msgamount} messages.`);
					await fin.delete({ timeout: 5000, reason: `${message.author} wanted to delete ${msgamount}` });
				}
				catch(error) {
					console.error(error);
					message.channel.send(`something went wrong.\nError details:\n${error}\n**If you keep running into this problem, please send this error message and send some ss to the developer.**`);
				}
			}
		}
	},
};

// note that limit is 100