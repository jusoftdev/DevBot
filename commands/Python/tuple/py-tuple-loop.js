const Discord = require("discord.js");
const { pycolor, prefix } = require("../../../config");

const pystringEmbed = new Discord.MessageEmbed()
    .setColor(pycolor)
    .setTitle("Python - Loop Tuples")
    .setURL("https://docs.python.org/3/")
    .setAuthor(
        "DevBot by JuSoft",
        "https://cdn.discordapp.com/attachments/828176464041476111/852459976420229120/devbot-100.png"
    )
    .setThumbnail("https://img.icons8.com/color/2x/python.png")
    .addFields(
        {
            name: "Loop Through a Tuple\n",
            value:
                "You can loop through the tuple items by using a ``for`` loop.\n" +
                "```py\n" +
                "thistuple = (\"apple\", \"banana\", \"cherry\")\n" +
                "for x in thistuple:\n" +
                "  print(x)" +
                "```\n"
        },
        {
            name: "Loop Through the Index Numbers",
            value: "You can also loop through the tuple items by referring to their index number.\n" +
                "\n" +
                "Use the ``range()`` and ``len()`` functions to create a suitable iterable.\n" +
                "\n" +
                "```py\n" +
                "thistuple = (\"apple\", \"banana\", \"cherry\")\n" +
                "for i in range(len(thistuple)):\n" +
                "  print(thistuple[i])" +
                "```"
        },
        {
            name: "Using a While Loop",
            value: "You can loop through the list items by using a ``while`` loop.\n" +
                "\n" +
                "Use the ``len()`` function to determine the length of the tuple, then start at 0 and loop your way through the tuple items by refering to their indexes.\n" +
                "\n" +
                "Remember to increase the index by 1 after each iteration." +
                "\n" +
                "```py\n" +
                "thistuple = (\"apple\", \"banana\", \"cherry\")\n" +
                "i = 0\n" +
                "while i < len(thistuple):\n" +
                "  print(thistuple[i])\n" +
                "  i = i + 1" +
                "```"
        },
    )
    .setTimestamp()
    .setFooter(`DevBot Python Documentation • ${prefix}py`);

module.exports = {
    name: "py-tuple-loop",
    category: "Python",
    permissions: ["SEND_MESSAGES"],
    cooldown: "5s",
    testOnly: false,

    callback: ({ message, client }) => {
        message.channel.send(pystringEmbed);
    },
};
