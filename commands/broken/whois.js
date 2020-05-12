const { getMember, formatDate } = require("../../functions.js");
const Discord = require("discord.js");
const { stripIndents } = require("common-tags");

//TypeError: Cannot read property 'roles' of undefined at Object.run//
//broken command//
module.exports = {
    name: "whois",
    aliases: ["userinfo", "user", "who",],
    category: "broken",
    description: "Returns user infomation/n*Currently the command is broken*",
    usage: "[username | id, | mention]",
    run: async (client, message, args) => {
        const GuildMember = getMember(message, args.join(" "));

        // Member variables//
        const joined = formatDate(GuildMember.joinedAt);
        const roles = GuildMember.roles
            .roles.filter(r => r.id !== message.guild.id)
            .map(r => r)
            .join("' ") || "none";

        // USER VARIABLES //
        const created = formatDate(GuildMember.user.createdAt);

        const embed = new Discord.MessageEmbed()
            .setFooter(GuildMember.displayName, GuildMember.user.displayAvatarURL)
            .setThumbnail(GuildMember.user.displayAvatarURL)
            .setColor(GuildMember.displayHexColor === "#000000" ? "#ffffff" : GuildMember.displayHexColor)

            .addField('Member infomation', stripIndents`**> Display name:** ${GuildMember.displayName}
            **> Joined at:** ${joined}
            ** Roles:** ${roles}`, true)

            .addField('User infomation', stripIndents`**> Display name:** ${GuildMember.displayName}
            **> Joined at:** ${joined}
            **>roles: ${roles}`, true)

            .addField('User Infomation', stripIndents`**> ID:** ${GuildMember.user.id}
            **> Username:** ${GuildMember.user.username}
            **> Discord Tag:** ${GuildMember.user.tag}
            **> Created at:** ${created}`, true)

            .setTimestamp()

        if (GuildMember.user.presence.game)
            embed.addField('Currently playing', `**> Name:** ${GuildMember.user.presence.game.name}`);

        message.channel.send(embed);
    }
}

//added GuildMember to every mention of member//