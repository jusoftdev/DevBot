const Discord = require("discord.js");
const { pycolor, prefix } = require("../../../config");

const pystringEmbed = new Discord.MessageEmbed()
    .setColor(pycolor)
    .setTitle("Python - Copy Dictionaries")
    .setURL("https://docs.python.org/3/")
    .setAuthor(
        "DevBot by JuSoft",
        "https://cdn.discordapp.com/attachments/828176464041476111/852459976420229120/devbot-100.png"
    )
    .setThumbnail("https://img.icons8.com/color/2x/python.png")
    .addFields(
        {
            name: "Copy a Dictionary",
            value:
                "You cannot copy a dictionary simply by typing ``dict2 = dict1``, because: ``dict2`` will only be a reference to ``dict1``, and changes made in dict1 will automatically also be made in ``dict2``.\n" +
                "\n" +
                "There are ways to make a copy, one way is to use the built-in Dictionary method ``copy()``.\n" +
                "```py\n" +
                "thisdict = {\n" +
                "  \"brand\": \"Ford\",\n" +
                "  \"model\": \"Mustang\",\n" +
                "  \"year\": 1964\n" +
                "}\n" +
                "mydict = thisdict.copy()\n" +
                "print(mydict)" +
                "```\n" +
                "Another way to make a copy is to use the built-in function dict().\n" +
                "```py\n" +
                "thisdict = {\n" +
                "  \"brand\": \"Ford\",\n" +
                "  \"model\": \"Mustang\",\n" +
                "  \"year\": 1964\n" +
                "}\n" +
                "mydict = dict(thisdict)\n" +
                "print(mydict)" +
                "```"
        },
    )
    .setTimestamp()
    .setFooter(`DevBot Python Documentation • ${prefix}py`);

module.exports = {
    name: "py-dictionary-copy",
    category: "Python",
    permissions: ["SEND_MESSAGES"],
    cooldown: "5s",
    testOnly: false,

    callback: ({ message, client }) => {
        message.channel.send(pystringEmbed);
    },
};
