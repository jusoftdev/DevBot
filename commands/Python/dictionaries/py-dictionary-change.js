const Discord = require("discord.js");
const { pycolor, prefix } = require("../../../config");

const pystringEmbed = new Discord.MessageEmbed()
    .setColor(pycolor)
    .setTitle("Python - Change Dictionary Items")
    .setURL("https://docs.python.org/3/")
    .setAuthor(
        "DevBot by JuSoft",
        "https://cdn.discordapp.com/attachments/828176464041476111/852459976420229120/devbot-100.png"
    )
    .setThumbnail("https://img.icons8.com/color/2x/python.png")
    .addFields(
        {
            name: "Change Values",
            value:
                "You can change the value of a specific item by referring to its key name:\n" +
                "```py\n" +
                "thisdict = {\n" +
                "  \"brand\": \"Ford\",\n" +
                "  \"model\": \"Mustang\",\n" +
                "  \"year\": 1964\n" +
                "}\n" +
                "thisdict[\"year\"] = 2018" +
                "```"
        },
        {
            name: "Update Dictionary",
            value:
                "The ``update()`` method will update the dictionary with the items from the given argument.\n" +
                "\n" +
                "The argument must be a dictionary, or an iterable object with key:value pairs.\n" +
                "\n" +
                "```py\n" +
                "thisdict = {\n" +
                "  \"brand\": \"Ford\",\n" +
                "  \"model\": \"Mustang\",\n" +
                "  \"year\": 1964\n" +
                "}\n" +
                "thisdict.update({\"year\": 2020})\n" +
                "```"
        },
    )
    .setTimestamp()
    .setFooter(`DevBot Python Documentation • ${prefix}py`);

module.exports = {
    name: "py-dictionary-change",
    category: "Python",
    permissions: ["SEND_MESSAGES"],
    cooldown: "5s",
    testOnly: false,

    callback: ({ message, client }) => {
        message.channel.send(pystringEmbed);
    },
};
