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
			if (isNaN (args[0])) {
				message.channel.send('That isn\'t an actual number, dummy.');
			}
			else {
				const msgamount = args[0];
				let x = args[0];
				x = x + 1;
				try {
					while(x > 100 || x == 100) {
						await message.channel.bulkDelete(50, true);
						x = x - 50;
					}

					await message.channel.bulkDelete(x, true);
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