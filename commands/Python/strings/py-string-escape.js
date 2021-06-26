const Discord = require("discord.js");
const { pycolor, prefix } = require("../../../config");

const pystringEmbed = new Discord.MessageEmbed()
    .setColor(pycolor)
    .setTitle("Python - Escape Characters")
    .setURL("https://docs.python.org/3/")
    .setAuthor(
        "DevBot by JuSoft",
        "https://cdn.discordapp.com/attachments/828176464041476111/852459976420229120/devbot-100.png"
    )
    .setThumbnail("https://img.icons8.com/color/2x/python.png")
    .addFields(
        {
            name: "Escape Character",
            value:
                "To insert characters that are illegal in a string, use an escape character.\n" +
                "\n" +
                "An escape character is a backslash followed by the character you want to insert.\n" +
                "\n" +
                "An example of an illegal character is a double quote inside a string that is surrounded by double quotes:\n" +
                "```py\n" +
                "txt = \"We are the so-called \"Vikings\" from the north.\"" +
                "```\n"
        },
        {
            name: "Escape Characters",
            value: "Other escape characters used in Python:"
        },
    )
    .setImage("https://i.imgur.com/hnQL2Cq.png")
    .setTimestamp()
    .setFooter(`DevBot Python Documentation • ${prefix}py`);

module.exports = {
    name: "py-string-escape",
    category: "Python",
    permissions: ["SEND_MESSAGES"],
    cooldown: "5s",
    testOnly: false,

    callback: ({ message, client }) => {
        message.channel.send(pystringEmbed);
    },
};
