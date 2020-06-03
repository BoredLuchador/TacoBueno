module.exports = {
	name: 'ping',
	category: 'info',
	description: 'Returns the latency ping',
	run: async (client, message) => {

		const msg = await message.channel.send('🏸 Pinging...');

		msg.edit(`🏓 **Pong!**\nLatency is ${Math.floor(msg.createdTimestamp - message.createdTimestamp)}ms.`);
		// note that \n means a new line is created//
	},
};