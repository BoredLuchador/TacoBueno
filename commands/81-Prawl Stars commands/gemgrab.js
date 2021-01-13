module.exports = {
	name: 'gemgrab',
	aliases: 'gb',
	category: '81',
	description: 'Prawl Stars Gayme command - Play a game of gemgrab',
	cooldown : false,
	guildOnly: false,
	NSFW: false,
	args: false,
	usage: false,
	run: async (client, message) => {
		message.react('🏳️‍🌈');
		let gem1 = Math.floor(Math.random() * 3 + 1);
		let gem2 = Math.floor(Math.random() * 3 + 1);
		let gem3a = Math.floor(Math.random() * 3 + 1);
		let gem3b = Math.floor(Math.random() * 3 + 1);
		let gemcountdown = 0;
		let reverse = Math.floor(Math.random() * 4 + 1);
		let elprimo = Math.floor(Math.random() * 12 + 1);

		const data = [];

		data.push('You started a game of Gem Grab!');
		if (gem1 === 1) {
			data.push(
				'You failed to rush the generator, the enemies have the start',
			);
		}
		else {data.push('You rushed the gem generator and have a head start');}
		if (gem1 == 2 || gem1 == 3) {
			if (gem2 === 1) {
				data.push(
					'The teammate with the gems died, and the enemies took them',
				);
			}
			if (gem2 === 2) {
				data.push(
					'The teammate with the gems died, but you got them back',
				);
			}
		}
		if (gem2 === 1) {
			if (gem3a === 1) {
				data.push(
					'The enemies hid in a bush and took down the gem carrier',
				);
			}
			if (gem3a === 1) {gemcountdown = 2;}
			else {
				data.push(
					'You grinded gems at the generator, defending from the enemies',
				);
			}
			if (gem3a == 2 || gem3a == 3) gemcountdown === 1;
		}
		if (gem2 == 2 || gem2 == 3) {
			if (gem3b == 1 || gem3b == 3) {
				data.push(
					'The enemies hid in a bush and took down the gem carrier',
				);
			}
			if (gem3b == 1 || gem3b == 3) {gemcountdown = 2;}
			else {
				data.push(
					'You grinded gems at the generator, defending from the enemies',
				);
			}
			if (gem3b === 2) gemcountdown = 1;
		}
		data.push('Countdown!');
		if (gemcountdown === 1) {
			if (reverse === 1) {data.push('The enemy team killed the gem carrier. THEY WIN!');}
			else if (elprimo === 1) {
				data.push(
					'What is that? EL PRIMO JUMPED WITH THE GEMS! **THEY WIN!**',
				);
			}
			else {data.push('YOU WIN!');}
		}
		if (gemcountdown === 2) {
			if (reverse === 1) {data.push('Your team killed the enemy gem carrier. YOU WIN!');}
			else {data.push('THEY WIN!');}
		}
		message.channel.send(data, { split: true });
	},
};