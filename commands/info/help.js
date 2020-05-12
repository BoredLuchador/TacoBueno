const Discord = require("discord.js");
const { stripIndents } = require("common-tags");

module.exports = {
    name: "help",
    aliases: "h",
    category: "info",
    description: "Shows a list of command, or details on one command",
    usage: "[command | alias of command]",
    run: async (client, message, args) => {

    }
}

function getAll(client, message) {
    const embed = new Discord.MessageEmbed()
        .setColor("RANDOM")

}