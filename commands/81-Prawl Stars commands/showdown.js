module.exports = {
	name: 'showdown',
	aliases: 'sd',
	category: '81',
	description: 'Prawl Stars Gayme command - Play a showdown game, lets see how it goes.',
	cooldown : false,
	guildOnly: false,
	NSFW: false,
	args: false,
	usage: false,
	run: async (client, message) => {
		message.react('🏳️‍🌈');
		let action1 = Math.floor(Math.random() * 2 + 1);
		let action2 = Math.floor(Math.random() * 4 + 1);
		let action3 = Math.floor(Math.random() * 5 + 1);
		let action4 = Math.floor(Math.random() * 7 + 1);
		// Action 1a and such
		let action1a = null;
		let action1b = null;

		// data table
		const data = [];

		if (action1 === 1) {
			data.push(
				'You have gone for the middle! \nYou have ' +
            Math.floor(Math.random() * 4 + 2) +
            ' powercubes.',
			);
		}
		if (action1 === 2) {
			data.push(
				'You have gone for boxes at the edge of the map. \nYou got ' +
            Math.floor(Math.random() * 3 + 1) +
            ' powercubes.',
			);
		}
		if (action1 === 1) {
			action1a = Math.floor(Math.random() * 3 + 1);
		}
		if (action1 === 2) {
			action1b = Math.floor(Math.random() * 3 + 1);
		}


		if (action1a === 1) {
			data.push(
				'You were killed by the people at middle. you get `10th` place.',
			);
		}
		if (action1a === 2) {
			data.push(
				'You were killed by the people at middle. you get `9th` place.',
			);
		}
		if (action1a === 1 || action1a === 2) return message.channel.send(data, { split: true });

		if (action1a === 3) {data.push('You dominated the middle, and killed everyone there.');}
		if (action1b === 1) data.push('You died. You get 8th place.');
		if (action1b === 1) return;
		if (action1b === 2) {
			data.push(
				'You have got recurces, and gone to fight people at middle.',
			);
		}
		if (action1b === 3) {
			message.channel.send(
				'You have got recurces, and gone to fight people at middle.',
			);
		}
		if (action2 === 1) {data.push('A meteor killed you. You get 7th place.');}
		if (action2 === 1) return message.channel.send(data, { split: true });
		if (action2 === 2) {data.push('You are now at the middle and you killed a brawler.');}
		if (action2 === 3) {data.push('You are now at the middle and you killed a brawler.');}
		if (action2 === 4) {data.push('You are now at the middle and you killed a brawler.');}
		if (action3 === 1) {
			data.push(
				'You have gone camping into a bush, and killed the Nita that was there.',
			);
		}
		if (action3 === 2) {
			data.push(
				'You have gone camping into a bush, But you were killed by the Bull in there. You get 6th place.',
			);
		}
		if (action3 === 3) {
			data.push(
				'You have gone camping into a bush, But you were killed by the Rosa in there. You get 5th place.',
			);
		}
		if (action3 === 2 || action3 === 3) return message.channel.send(data, { split: true });


		if (action3 === 4) {
			data.push(
				'You have gone exploring for the brawlers left, and you killed a Bea.',
			);
		}
		if (action3 === 5) {
			data.push(
				'You have gone exploring around the map, and killed a Rico.',
			);
		}
		if (action4 === 1) {
			data.push(
				'You have been rushed on when you were low health. You get `3rd` place.',
			);
		}
		if (action4 === 2) {
			data.push(
				'You have been rushed on by teamers. You get `4th` place.',
			);
		}
		if (action4 === 3) {
			data.push(
				'You killed the rest of the people wits ease. ***YOU WIN!***',
			);
		}
		if (action4 === 4) {
			data.push(
				'You have been rushed on when you were low health. You get `3rd` place.',
			);
		}
		if (action4 === 5) {
			data.push(
				'You have been rushed on by teamers. You get `4th` place.',
			);
		}
		if (action4 === 6) {
			data.push(
				'You killed the rest of the people with ease. ***YOU WIN!***',
			);
		}
		if (action4 === 7) {
			data.push(
				'The last brawler alive managed to kill you. You get `2nd` place.',
			);
		}
		message.channel.send(data, { split: true });
	},
};