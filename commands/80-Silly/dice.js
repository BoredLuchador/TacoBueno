module.exports = {
	name: 'dice',
	category: '80',
	description: 'Lets a bot roll a die with as much faces as you wish.',
	args: true,
	usage: '<Number OF Faces>',
	run: async (client, message, args) => {

		try {
			if (args.length < 1 || isNaN(args[0])) {
				return message.reply('You have to give me the number of faces you want. :flushed:');
			}
			else {

				// Randomly picks a number from 0 to the number defined as the first argument //
				let result = Math.floor((Math.random() * args[0]));

				if (result == 0) {
				// This only changes the 0 output to 1 if needed //
					result = 1;
				}

				message.channel.send(`:tada: You rolled a \`${result}\`! :tada:`);
			}
		}
		catch (error) {
			console.error(error);
			message.channel.send(`Something went wrong.\nError details:\n${error}\n**If you keep running into this problem, please send this error message and send some ss to the developer.**`);
		}
	},
};

