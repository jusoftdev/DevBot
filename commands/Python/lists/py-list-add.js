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
            name: "Append Items",
            value:
                "To add an item to the end of the list, use the ``append()`` method:\n" +
                "```py\n" +
               "thislist = [\"apple\", \"banana\", \"cherry\"]\n" +
                "thislist.append(\"orange\")\n" +
                "print(thislist)\n"+
                "```"
        },
        {
            name: "Insert Items",
            value: "To insert a list item at a specified index, use the ``insert()`` method.\n" +
                "\n" +
                "The ``insert()`` method inserts an item at the specified index:\n" +
                "```py\n" +
                "thislist = [\"apple\", \"banana\", \"cherry\"]\n" +
                "thislist.insert(1, \"orange\")\n" +
                "print(thislist)\n" +
                "```\n" +
                "```css\n" +
                "[ Note: As a result of the examples above, the lists will now contain 4 items. ]\n" +
                "```\n"
        },
        {
            name: "Extend List",
            value: "To append elements from another list to the current list, use the ``extend()`` method.\n" +
                "```py\n" +
                "thislist = [\"apple\", \"banana\", \"cherry\"]\n" +
                "tropical = [\"mango\", \"pineapple\", \"papaya\"]\n" +
                "thislist.extend(tropical)\n" +
                "print(thislist)\n" +
                "```\n" +
                "The elements will be added to the end of the list.\n" +
                "\n"
        },
        {
            name: "Add Any Iterable",
            value: "The ``extend()`` method does not have to append lists, you can add any iterable object (tuples, sets, dictionaries etc.).\n" +
                "```py\n" +
                "thislist = [\"apple\", \"banana\", \"cherry\"]\n" +
                "thistuple = (\"kiwi\", \"orange\")\n" +
                "thislist.extend(thistuple)\n" +
                "print(thislist)\n" +
                "```\n"
        },
    )
    .setTimestamp()
    .setFooter(`DevBot Python Documentation • ${prefix}py`);

module.exports = {
    name: "py-list-add",
    category: "Python",
    permissions: ["SEND_MESSAGES"],
    cooldown: "5s",
    testOnly: false,

    callback: ({ message, client }) => {
        message.channel.send(pystringEmbed);
    },
};
