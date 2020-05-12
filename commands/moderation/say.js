const Discord = require("discord.js");

module.exports = {
    name: "say",
    aliases: ["bc", "broadcast"],
    description: "bot justs repeats after you. please note that using the embed version will use ",
    usage: "<input>",
    run: async (clinet, message, args) => {
        if (message.deletable) message.delete();

        if (args.length < 1)
            return message.reply("You can't just ask me to say nothing... :eyes:");

        //Embed variables//
        //CONST below picks the role color//
        //const roleColor = message.guild.me.displayHexColor === "#000000" ? "#ffffff" : message.guild.me.displayHexColor;
        const Author = message.author;

        if (args[0].toLowerCase() === "embed") {

            const Embed = new Discord.MessageEmbed() //Embed stuff here//
                .setColor("RANDOM")
                .setDescription(args.slice(1).join(" "))
                .addField('Author:', (Author), true)
                .setTimestamp()
            message.channel.send(Embed);
        } else {
            message.channel.send(args.join(" "));
        }
    }
}



//COPY AND PASTE FROM GUIDE//


//const exampleEmbed = new Discord.MessageEmbed()
//	.setColor('#0099ff')
//	.setTitle('Some title')
//	.setURL('https://discord.js.org/')
//	.setAuthor('Some name', 'https://i.imgur.com/wSTFkRM.png', 'https://discord.js.org')
//	.setDescription('Some description here')
//	.setThumbnail('https://i.imgur.com/wSTFkRM.png')
//	.addFields(
//		{ name: 'Regular field title', value: 'Some value here' },
//		{ name: '\u200B', value: '\u200B' },
//		{ name: 'Inline field title', value: 'Some value here', inline: true },
//		{ name: 'Inline field title', value: 'Some value here', inline: true },
//	)
//	.addField('Inline field title', 'Some value here', true)
//	.setImage('https://i.imgur.com/wSTFkRM.png')
//	.setTimestamp()
//	.setFooter('Some footer text here', 'https://i.imgur.com/wSTFkRM.png');
//
//channel.send(exampleEmbed)