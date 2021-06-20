const randomPuppy = require ('random-puppy');

module.exports = {
	name: 'birbbomb',
	aliases: false,
	category: '85',
	description: 'Send 5 images of birds, not much else',
	cooldown: 5,
	args: false,
	usage: false,
	run: async (client, message) => {
		const subReddits = ['parrots', 'birdpics'];

		let data1 = [];

		let x1 = Math.floor((Math.random() * subReddits.length));
		let x2 = Math.floor((Math.random() * subReddits.length));
		let x3 = Math.floor((Math.random() * subReddits.length));
		let x4 = Math.floor((Math.random() * subReddits.length));
		let x5 = Math.floor((Math.random() * subReddits.length));

		// starts adding links to an array
		await randomPuppy(subReddits[x1])
			.then(url => {
				data1.push(url);
			});
		await randomPuppy(subReddits[x2])
			.then(url => {
				data1.push(url);
			});
		await randomPuppy(subReddits[x3])
			.then(url => {
				data1.push(url);
			});
		await randomPuppy(subReddits[x4])
			.then(url => {
				data1.push(url);
			});
		await randomPuppy(subReddits[x5])
			.then(url => {
				data1.push(url);
			});

		message.channel.send(data1, { split: true });
	},
};