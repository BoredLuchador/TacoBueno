module.exports = {
	name: 'beemoviescript',
	category: 'fun',
	description: 'floods your dm with the entire bee movie script',
	run: async (client, message) => {
		message.react('🐝');

		try{
			await message.author.send('https://www.scripts.com/script/bee_movie_313');
			await message.author.send('Did you actually think i was gonna flood your dms with the script? I\'m not in the mood to risk killing myself like that.');
		}
		catch (error) {
			message.channel.send('How did that command fucked up? It was just a link.');
		}


	},
};