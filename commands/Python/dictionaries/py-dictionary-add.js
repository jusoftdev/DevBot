const Discord = require("discord.js");
const { pycolor, prefix } = require("../../../config");

const pystringEmbed = new Discord.MessageEmbed()
    .setColor(pycolor)
    .setTitle("Python - Add Dictionary Items")
    .setURL("https://docs.python.org/3/")
    .setAuthor(
        "DevBot by JuSoft",
        "https://cdn.discordapp.com/attachments/828176464041476111/852459976420229120/devbot-100.png"
    )
    .setThumbnail("https://img.icons8.com/color/2x/python.png")
    .addFields(
        {
            name: "Adding Items",
            value:
                "Adding an item to the dictionary is done by using a new index key and assigning a value to it:\n" +
                "```py\n" +
                "thisdict = {\n" +
                "  \"brand\": \"Ford\",\n" +
                "  \"model\": \"Mustang\",\n" +
                "  \"year\": 1964\n" +
                "}\n" +
                "thisdict[\"color\"] = \"red\"\n" +
                "print(thisdict)" +
                "```"
        },
        {
            name: "Update Dictionary",
            value:
                "The ``update()`` method will update the dictionary with the items from a given argument. If the item does not exist, the item will be added.\n" +
                "\n" +
                "The argument must be a dictionary, or an iterable object with key:value pairs." +
                "```py\n" +
                "thisdict = {\n" +
                "  \"brand\": \"Ford\",\n" +
                "  \"model\": \"Mustang\",\n" +
                "  \"year\": 1964\n" +
                "}\n" +
                "thisdict.update({\"color\": \"red\"})" +
                "```"
        },
    )
    .setTimestamp()
    .setFooter(`DevBot Python Documentation • ${prefix}py`);

module.exports = {
    name: "py-dictionary-add",
    category: "Python",
    permissions: ["SEND_MESSAGES"],
    cooldown: "5s",
    testOnly: false,

    callback: ({ message, client }) => {
        message.channel.send(pystringEmbed);
    },
};
