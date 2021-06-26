const Discord = require("discord.js");
const { pycolor, prefix } = require("../../../config");

const pycastEmbed = new Discord.MessageEmbed()
    .setColor(pycolor)
    .setTitle("Python - String Concatenation")
    .setURL("https://docs.python.org/3/")
    .setAuthor(
        "DevBot by JuSoft",
        "https://cdn.discordapp.com/attachments/828176464041476111/852459976420229120/devbot-100.png"
    )
    .setThumbnail("https://img.icons8.com/color/2x/python.png")
    .addFields(
        {
            name: "String Concatenation",
            value:
                "To concatenate, or combine, two strings you can use the + operator.\n" +
                "```py\n" +
                "a = \"Hello\"\n" +
                "b = \"World\"\n" +
                "c = a + b\n" +
                "print(c)" +
                "```\n" +
                "```py\n" +
                "a = \"Hello\"\n" +
                "b = \"World\"\n" +
                "c = a + \" \" + b\n" +
                "print(c)" +
                "```"
        },
    )
    .setTimestamp()
    .setFooter(`DevBot Python Documentation • ${prefix}py`);

module.exports = {
    name: "py-string-concatenate",
    category: "Python",
    permissions: ["SEND_MESSAGES"],
    cooldown: "5s",
    testOnly: false,

    callback: ({ message, client }) => {
        message.channel.send(pycastEmbed);
    },
};
