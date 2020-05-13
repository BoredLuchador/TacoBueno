const Discord = require("discord.js");

module.exports = {
    name: "avatar",
    aliases: ["pfp"],
    category: "moderation",
    description: "Returns avatar image in png format",
    run: async (clinet, message, args) => {

        let image = message.author.displayAvatarURL({ format: "png", dynamic: true});
        let name = message.author;
        
        const des = [ name, '`s profile image'];

        const Embed = new Discord.MessageEmbed() //Embed stuff here//
                .setColor("RANDOM")
                .setTitle('Image link')
                .setURL(image)
                .setDescription(des.join(" "))
                .setImage(image)
                .setTimestamp()
            message.channel.send(Embed);

    }
}