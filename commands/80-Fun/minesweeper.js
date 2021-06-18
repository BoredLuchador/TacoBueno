const Minesweeper = require('discord.js-minesweeper');
// current version of the minesweeper does not allow a easy way to customize the command, and will be added in the future

module.exports = {
	name: 'minesweeper',
	aliases: false,
	category: '80',
	description: 'lets you create a quick minesweeper game, or you can customize the game to your content',
	cooldown : false,
	guildOnly: false,
	NSFW: false,
	args: true,
	usage: '<quick> or <rows> <columns> <mines> [give hint]',
	run: async (client, message, args) => {

		if (args[0] == '--q' || args == 'quick') {
			const minesweeper = new Minesweeper();

			let matrix = minesweeper.start();

			return matrix
				? message.channel.send(matrix)
				: message.channel.send(':warning: You have provided invalid data.');

		}


		if (!args[0] || !args[1] || !args[2]) {
			const msg = message.channel.send('You do not have enough required arguments.');
			return msg.delete({ timeout: 5000 });
		}

		let rows = parseInt(args[0]);
		let columns = parseInt(args[1]);
		let mines = parseInt(args[2]);
		let revealFirstCell = args[3] || false;

		let minesweeper = new Minesweeper({
			rows: rows,
			columns: columns,
			mines: mines,
			revealFirstCell: revealFirstCell,
			spaces: 'false',
			returnType: 'emoji',
		});

		let matrix = minesweeper.start();

		return matrix
			? message.channel.send(matrix)
			: message.channel.send(':warning: You have provided invalid data.');
	},
};