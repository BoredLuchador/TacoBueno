const Discord = require("discord.js");
const {stripIndents} = require("common-tags");

module.exports = { 
    name: "report",
    category: "broken",
    description: "Reports people. what else did you expect? (broken)",
    usage: "<mention | id>",
    run: async (client, message ,args) => {
        if (message.deletable) message.delete();

        let rMember = message.mentions.member.first() || message.guild.members.get(args[0]);

        if (!rMember)
            return message.reply("Couldn't find the person who you're looking for");

        if (!args[1])
            return message.reply("Next time, actually add a reason?");

        const channel = message.guild.channels.find(channel => channel.name === "report");

        if (!channel)
            return message.channel.send("I can't find a \`#reports\` channel");

        const embed = new Discord.MessageEmbed()
            .setColor("#e83015")
            .setTimestamp()
            .setFooter(message.guild.name, message.guild.iconURL)
            .setAuthor("reported member", rMember.user.displayAvatarURl)
            .setDescription(stripIndents`**> Member:** ${rMember} (${rMember.id})
            **> Reported by:** ${message.member} (${message.member.id})
            **> Reported in:** ${message.channel} 
            **> Reason:** ${args.slice(1).join(" ")}`);

        return channel.send(embed);
    }
}