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
			message.channel.send(`This Command seems to be broken. *make sure the error message below is sent to the developer either by opening the issue in the github page or with the \`bug\` command.*\n\`\`\`Error details:\n${error}\nCommand used: ${message.content}\`\`\``);
		}
	},
};