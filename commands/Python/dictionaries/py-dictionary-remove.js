const Discord = require("discord.js");
const { pycolor, prefix } = require("../../../config");

const pystringEmbed = new Discord.MessageEmbed()
    .setColor(pycolor)
    .setTitle("Python - Remove Dictionary Items")
    .setURL("https://docs.python.org/3/")
    .setAuthor(
        "DevBot by JuSoft",
        "https://cdn.discordapp.com/attachments/828176464041476111/852459976420229120/devbot-100.png"
    )
    .setThumbnail("https://img.icons8.com/color/2x/python.png")
    .addFields(
        {
            name: "Removing Items",
            value:
                "There are several methods to remove items from a dictionary:\n" +
                "```py\n" +
                "thisdict = {\n" +
                "  \"brand\": \"Ford\",\n" +
                "  \"model\": \"Mustang\",\n" +
                "  \"year\": 1964\n" +
                "}\n" +
                "thisdict.pop(\"model\")\n" +
                "print(thisdict)" +
                "```\n" +
                "```py\n" +
                "thisdict = {\n" +
                "  \"brand\": \"Ford\",\n" +
                "  \"model\": \"Mustang\",\n" +
                "  \"year\": 1964\n" +
                "}\n" +
                "thisdict.popitem()\n" +
                "print(thisdict)" +
                "```\n" +
                "```py\n" +
                "thisdict = {\n" +
                "  \"brand\": \"Ford\",\n" +
                "  \"model\": \"Mustang\",\n" +
                "  \"year\": 1964\n" +
                "}\n" +
                "del thisdict[\"model\"]\n" +
                "print(thisdict)" +
                "```\n" +
                "```py\n" +
                "thisdict = {\n" +
                "  \"brand\": \"Ford\",\n" +
                "  \"model\": \"Mustang\",\n" +
                "  \"year\": 1964\n" +
                "}\n" +
                "del thisdict\n" +
                "print(thisdict) #this will cause an error because \"thisdict\" no longer exists." +
                "```\n" +
                "```py\n" +
                "thisdict = {\n" +
                "  \"brand\": \"Ford\",\n" +
                "  \"model\": \"Mustang\",\n" +
                "  \"year\": 1964\n" +
                "}\n" +
                "thisdict.clear()\n" +
                "print(thisdict)" +
                "```"
        },
    )
    .setTimestamp()
    .setFooter(`DevBot Python Documentation • ${prefix}py`);

module.exports = {
    name: "py-dictionary-remove",
    category: "Python",
    permissions: ["SEND_MESSAGES"],
    cooldown: "5s",
    testOnly: false,

    callback: ({ message, client }) => {
        message.channel.send(pystringEmbed);
    },
};
