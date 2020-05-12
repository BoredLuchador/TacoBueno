const Discord = require("discord.js");

module.exports = {
    name: "avatar",
    aliases: "pfp",
    category: "moderation",
    description: "Returns avatar image in png format",
    run: async (clinet, message, args) => {

        message.channel.send(message.author.displayAvatar);

    }
}