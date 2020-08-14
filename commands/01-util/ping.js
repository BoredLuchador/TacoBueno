module.exports = {
	name: 'ping',
	category: '01',
	description: 'Returns the latency ping',
	run: async (client, message) => {
		try{

			const msg = await message.channel.send('🏸 Pinging...');

			msg.edit(`🏓 **Pong!**\nLatency is ${Math.floor(msg.createdTimestamp - message.createdTimestamp)}ms.`);
		}
		catch (error) {
			console.error(error);
			message.channel.send(`Something went wrong.\nError details:\n${error}\n**If you keep running into this problem, please send this error message and send some ss to the developer.**`);
		}
	},
};