const Discord = require("discord.js");
const { pycolor, prefix } = require("../../../config");

const pystringEmbed = new Discord.MessageEmbed()
    .setColor(pycolor)
    .setTitle("Python - Access Tuple Items")
    .setURL("https://docs.python.org/3/")
    .setAuthor(
        "DevBot by JuSoft",
        "https://cdn.discordapp.com/attachments/828176464041476111/852459976420229120/devbot-100.png"
    )
    .setThumbnail("https://img.icons8.com/color/2x/python.png")
    .addFields(
        {
            name: "Access Tuple Items\n",
            value:
                "You can access tuple items by referring to the index number, inside square brackets:\n" +
                "```py\n" +
                "thistuple = (\"apple\", \"banana\", \"cherry\")\n" +
                "print(thistuple[1])\n" +
                "```\n"
        },
        {
            name: "Negative Indexing",
            value: "Negative indexing means start from the end.\n" +
                "\n" +
                "``-1`` refers to the last item, ``-2`` refers to the second last item etc.\n" +
                "```py\n" +
                "thistuple = (\"apple\", \"banana\", \"cherry\")\n" +
                "print(thistuple[-1])\n" +
                "```"
        },
        {
            name: "Range of Indexes",
            value: "You can specify a range of indexes by specifying where to start and where to end the range.\n" +
                "\n" +
                "When specifying a range, the return value will be a new tuple with the specified items.\n" +
                "```py\n" +
                "thistuple = (\"apple\", \"banana\", \"cherry\", \"orange\", \"kiwi\", \"melon\", \"mango\")\n" +
                "print(thistuple[2:5])\n" +
                "```\n" +
                "```css\n" +
                "[ Note: The search will start at index 2 (included) and end at index 5 (not included). ]\n" +
                "\n" +
                "Remember that the first item has index 0." +
                "```\n" +
                "By leaving out the start value, the range will start at the first item:\n" +
                "```py\n" +
                "thistuple = (\"apple\", \"banana\", \"cherry\", \"orange\", \"kiwi\", \"melon\", \"mango\")\n" +
                "print(thistuple[:4])" +
                "```\n" +
                "By leaving out the end value, the range will go on to the end of the list:\n" +
                "```py\n" +
                "thistuple = (\"apple\", \"banana\", \"cherry\", \"orange\", \"kiwi\", \"melon\", \"mango\")\n" +
                "print(thistuple[2:])" +
                "```"

        },
        {
            name: "Range of Negative Indexes",
            value: "Specify negative indexes if you want to start the search from the end of the tuple:\n" +
                "```py\n" +
                "thistuple = (\"apple\", \"banana\", \"cherry\", \"orange\", \"kiwi\", \"melon\", \"mango\")\n" +
                "print(thistuple[-4:-1])" +
                "```"
        },
        {
            name: "Check if Item Exists",
            value: "To determine if a specified item is present in a tuple use the in keyword:\n" +
                "```py\n" +
                "thistuple = (\"apple\", \"banana\", \"cherry\")\n" +
                "if \"apple\" in thistuple:\n" +
                "  print(\"Yes, 'apple' is in the fruits tuple\")" +
                "```"
        },
    )
    .setTimestamp()
    .setFooter(`DevBot Python Documentation • ${prefix}py`);

module.exports = {
    name: "py-tuple-access",
    category: "Python",
    permissions: ["SEND_MESSAGES"],
    cooldown: "5s",
    testOnly: false,

    callback: ({ message, client }) => {
        message.channel.send(pystringEmbed);
    },
};
