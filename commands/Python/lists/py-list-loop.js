const Discord = require("discord.js");
const { pycolor, prefix } = require("../../../config");

const pystringEmbed = new Discord.MessageEmbed()
    .setColor(pycolor)
    .setTitle("Python - Loop Lists")
    .setURL("https://docs.python.org/3/")
    .setAuthor(
        "DevBot by JuSoft",
        "https://cdn.discordapp.com/attachments/828176464041476111/852459976420229120/devbot-100.png"
    )
    .setThumbnail("https://img.icons8.com/color/2x/python.png")
    .addFields(
        {
            name: "Loop Through a List",
            value:
                "You can loop through the list items by using a ``for`` loop:\n" +
                "```py\n" +
                "thislist = [\"apple\", \"banana\", \"cherry\"]\n" +
                "for x in thislist:\n" +
                "  print(x)\n" +
                "```"
        },
        {
            name: "Loop Through the Index Numbers",
            value: "You can also loop through the list items by referring to their index number.\n" +
                "\n" +
                "Use the ``range()`` and ``len()`` functions to create a suitable iterable.\n" +
                "The iterable created in the example above is [0, 1, 2]."
        },
        {
            name: "Using a While Loop",
            value: "You can loop through the list items by using a ``while`` loop.\n" +
                "\n" +
                "Use the ``len()`` function to determine the length of the list, then start at 0 and loop your way through the list items by refering to their indexes.\n" +
                "\n" +
                "Remember to increase the index by 1 after each iteration.\n" +
                "\n" +
                "The list still remains, but it has no content.\n" +
                "```py\n" +
                "thislist = [\"apple\", \"banana\", \"cherry\"]\n" +
                "i = 0\n" +
                "while i < len(thislist):\n" +
                "  print(thislist[i])\n" +
                "  i = i + 1\n" +
                "```\n"
        },
        {
            name: "Looping Using List Comprehension",
            value: "List Comprehension offers the shortest syntax for looping through lists:\n" +
                "```py\n" +
                "thislist = [\"apple\", \"banana\", \"cherry\"]\n" +
                "[print(x) for x in thislist]\n" +
                "```\n"
        },
    )
    .setTimestamp()
    .setFooter(`DevBot Python Documentation • ${prefix}py`);

module.exports = {
    name: "py-list-loop",
    category: "Python",
    permissions: ["SEND_MESSAGES"],
    cooldown: "5s",
    testOnly: false,

    callback: ({ message, client }) => {
        message.channel.send(pystringEmbed);
    },
};
