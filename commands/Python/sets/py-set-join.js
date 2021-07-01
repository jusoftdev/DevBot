const Discord = require("discord.js");
const { pycolor, prefix } = require("../../../config");

const pystringEmbed = new Discord.MessageEmbed()
    .setColor(pycolor)
    .setTitle("Python - Join Sets")
    .setURL("https://docs.python.org/3/")
    .setAuthor(
        "DevBot by JuSoft",
        "https://cdn.discordapp.com/attachments/828176464041476111/852459976420229120/devbot-100.png"
    )
    .setThumbnail("https://img.icons8.com/color/2x/python.png")
    .addFields(
        {
            name: "Join Two Sets",
            value:
                "There are several ways to join two or more sets in Python.\n" +
                "\n" +
                "You can use the ``union()`` method that returns a new set containing all items from both sets, or the ``update()´` method that inserts all the items from one set into another:\n" +
                "\n" +
                "```py\n" +
                "set1 = {\"a\", \"b\" , \"c\"}\n" +
                "set2 = {1, 2, 3}\n" +
                "\n" +
                "set3 = set1.union(set2)\n" +
                "print(set3)" +
                "```\n" +
                "```py\n" +
                "set1 = {\"a\", \"b\" , \"c\"}\n" +
                "set2 = {1, 2, 3}\n" +
                "\n" +
                "set1.update(set2)\n" +
                "print(set1)" +
                "```\n" +
                "```css\n" +
                "[ Note: Both union() and update() will exclude any duplicate items. ]\n" +
                "```"
        },
        {
            name: "Keep ONLY the Duplicates",
            value:
                "The ``intersection_update()`` method will keep only the items that are present in both sets.\n" +
                "\n" +
                "```py\n" +
                "x = {\"apple\", \"banana\", \"cherry\"}\n" +
                "y = {\"duckduckgo\", \"github\", \"apple\"}\n" +
                "\n" +
                "x.intersection_update(y)\n" +
                "\n" +
                "print(x)" +
                "```\n" +
                "The ``intersection()`` method will return a new set, that only contains the items that are present in both sets.\n" +
                "```py\n" +
                "x = {\"apple\", \"banana\", \"cherry\"}\n" +
                "y = {\"duckduckgo\", \"github\", \"apple\"}\n" +
                "\n" +
                "z = x.intersection(y)\n" +
                "\n" +
                "print(z)" +
                "```"
        },
        {
            name: "Keep All, But NOT the Duplicates",
            value:
                "The ``symmetric_difference_update()`` method will keep only the elements that are NOT present in both sets.\n" +
                "\n" +
                "```py\n" +
                "x = {\"apple\", \"banana\", \"cherry\"}\n" +
                "y = {\"duckduckgo\", \"github\", \"apple\"}\n" +
                "\n" +
                "x.symmetric_difference_update(y)\n" +
                "\n" +
                "print(x)" +
                "```\n" +
                "The ``symmetric_difference()`` method will return a new set, that contains only the elements that are NOT present in both sets.\n" +
                "```py\n" +
                "x = {\"apple\", \"banana\", \"cherry\"}\n" +
                "y = {\"duckduckgo\", \"github\", \"apple\"}\n" +
                "\n" +
                "z = x.symmetric_difference(y)\n" +
                "\n" +
                "print(z)" +
                "```"
        },
    )
    .setTimestamp()
    .setFooter(`DevBot Python Documentation • ${prefix}py`);

module.exports = {
    name: "py-set-join",
    category: "Python",
    permissions: ["SEND_MESSAGES"],
    cooldown: "5s",
    testOnly: false,

    callback: ({ message, client }) => {
        message.channel.send(pystringEmbed);
    },
};
