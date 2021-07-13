const Discord = require("discord.js");
const { pycolor, prefix } = require("../../../config");

const pystringEmbed = new Discord.MessageEmbed()
    .setColor(pycolor)
    .setTitle("Python - Loop Dictionaries")
    .setURL("https://docs.python.org/3/")
    .setAuthor(
        "DevBot by JuSoft",
        "https://cdn.discordapp.com/attachments/828176464041476111/852459976420229120/devbot-100.png"
    )
    .setThumbnail("https://img.icons8.com/color/2x/python.png")
    .addFields(
        {
            name: "Loop Through a Dictionary",
            value:
                "You can loop through a dictionary by using a ``for`` loop.\n" +
                "\n" +
                "When looping through a dictionary, the return value are the keys of the dictionary, but there are methods to return the values as well.\n" +
                "```py\n" +
                "for x in thisdict:\n" +
                "  print(x)\n" +
                "```\n" +
                "```py\n" +
                "for x in thisdict:\n" +
                "  print(thisdict[x])" +
                "```\n" +
                "```py\n" +
                "for x in thisdict.values():\n" +
                "  print(x)" +
                "```\n" +
                "```py\n" +
                "for x in thisdict.keys():\n" +
                "  print(x)" +
                "```\n" +
                "```py\n" +
                "for x, y in thisdict.items():\n" +
                "  print(x, y)" +
                "```"
        },
    )
    .setTimestamp()
    .setFooter(`DevBot Python Documentation • ${prefix}py`);

module.exports = {
    name: "py-dictionary-loop",
    category: "Python",
    permissions: ["SEND_MESSAGES"],
    cooldown: "5s",
    testOnly: false,

    callback: ({ message, client }) => {
        message.channel.send(pystringEmbed);
    },
};
