const Discord = require("discord.js");
const { pycolor, prefix } = require("../../../config");

const pystringEmbed = new Discord.MessageEmbed()
    .setColor(pycolor)
    .setTitle("Python - Add List Items")
    .setURL("https://docs.python.org/3/")
    .setAuthor(
        "DevBot by JuSoft",
        "https://cdn.discordapp.com/attachments/828176464041476111/852459976420229120/devbot-100.png"
    )
    .setThumbnail("https://img.icons8.com/color/2x/python.png")
    .addFields(
        {
            name: "Remove Specified Item",
            value:
                "The ``remove()`` method removes the specified item.\n" +
                "```py\n" +
                "thislist = [\"apple\", \"banana\", \"cherry\"]\n" +
                "thislist.remove(\"banana\")\n" +
                "print(thislist)\n" +
                "```"
        },
        {
            name: "Remove Specified Index",
            value: "The ``pop()`` method removes the specified index.\n" +
                "\n" +
                "The ``insert()`` method inserts an item at the specified index:\n" +
                "```py\n" +
                "thislist = [\"apple\", \"banana\", \"cherry\"]\n" +
                "thislist.pop(1)\n" +
                "print(thislist)\n" +
                "```\n" +
                "If you do not specify the index, the pop() method removes the last item." +
                "```py\n" +
                "thislist = [\"apple\", \"banana\", \"cherry\"]\n" +
                "thislist.pop()\n" +
                "print(thislist)\n" +
                "```\n" +
                "The ``del`` keyword also removes the specified index:\n" +
                "```py\n" +
                "thislist = [\"apple\", \"banana\", \"cherry\"]\n" +
                "del thislist[0]\n" +
                "print(thislist)" +
                "```\n" +
                "The ``del`` keyword can also delete the list completely.\n" +
                "```py\n" +
                "thislist = [\"apple\", \"banana\", \"cherry\"]\n" +
                "del thislist\n" +
                "```"

        },
        {
            name: "Clear the List",
            value: "The clear() method empties the list.\n" +
                "\n" +
                "The list still remains, but it has no content.\n" +
                "```py\n" +
                "thislist = [\"apple\", \"banana\", \"cherry\"]\n" +
                "thislist.clear()\n" +
                "print(thislist)\n" +
                "```\n" +
                "The elements will be added to the end of the list.\n" +
                "\n"
        },
    )
    .setTimestamp()
    .setFooter(`DevBot Python Documentation • ${prefix}py`);

module.exports = {
    name: "py-list-remove",
    category: "Python",
    permissions: ["SEND_MESSAGES"],
    cooldown: "5s",
    testOnly: false,

    callback: ({ message, client }) => {
        message.channel.send(pystringEmbed);
    },
};
