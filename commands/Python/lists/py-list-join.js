const Discord = require("discord.js");
const { pycolor, prefix } = require("../../../config");

const pystringEmbed = new Discord.MessageEmbed()
    .setColor(pycolor)
    .setTitle("Python - Join Lists")
    .setURL("https://docs.python.org/3/")
    .setAuthor(
        "DevBot by JuSoft",
        "https://cdn.discordapp.com/attachments/828176464041476111/852459976420229120/devbot-100.png"
    )
    .setThumbnail("https://img.icons8.com/color/2x/python.png")
    .addFields(
        {
            name: "Join Two Lists",
            value:
                "There are several ways to join, or concatenate, two or more lists in Python.\n" +
                "\n" +
                "One of the easiest ways are by using the ``+`` operator." +
                "```py\n" +
                "list1 = [\"a\", \"b\", \"c\"]\n" +
                "list2 = [1, 2, 3]\n" +
                "\n" +
                "list3 = list1 + list2\n" +
                "print(list3)\n" +
                "```\n" +
                "Another way to join two lists is by appending all the items from list2 into list1, one by one:" +
                "```py\n" +
                "list1 = [\"a\", \"b\" , \"c\"]\n" +
                "list2 = [1, 2, 3]\n" +
                "\n" +
                "for x in list2:\n" +
                "  list1.append(x)\n" +
                "\n" +
                "print(list1)" +
                "```\n" +
                "Or you can use the ``extend()`` method, which purpose is to add elements from one list to another list:\n" +
                "```py\n" +
                "list1 = [\"a\", \"b\" , \"c\"]\n" +
                "list2 = [1, 2, 3]\n" +
                "\n" +
                "list1.extend(list2)\n" +
                "print(list1)\n" +
                "```"
        },

    )
    .setTimestamp()
    .setFooter(`DevBot Python Documentation • ${prefix}py`);

module.exports = {
    name: "py-list-join",
    category: "Python",
    permissions: ["SEND_MESSAGES"],
    cooldown: "5s",
    testOnly: false,

    callback: ({ message, client }) => {
        message.channel.send(pystringEmbed);
    },
};
