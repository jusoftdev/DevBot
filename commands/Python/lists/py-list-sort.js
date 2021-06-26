const Discord = require("discord.js");
const { pycolor, prefix } = require("../../../config");

const pystringEmbed = new Discord.MessageEmbed()
    .setColor(pycolor)
    .setTitle("Python - Sort Lists")
    .setURL("https://docs.python.org/3/")
    .setAuthor(
        "DevBot by JuSoft",
        "https://cdn.discordapp.com/attachments/828176464041476111/852459976420229120/devbot-100.png"
    )
    .setThumbnail("https://img.icons8.com/color/2x/python.png")
    .addFields(
        {
            name: "Sort List Alphanumerically",
            value:
                "List objects have a ``sort()`` method that will sort the list alphanumerically, ascending, by default:\n" +
                "```py\n" +
                "thislist = [\"orange\", \"mango\", \"kiwi\", \"pineapple\", \"banana\"]\n" +
                "thislist.sort()\n" +
                "print(thislist)" +
                "```\n" +
                "```py\n" +
                "thislist = [100, 50, 65, 82, 23]\n" +
                "thislist.sort()\n" +
                "print(thislist)\n" +
                "```"
        },
        {
            name: "Sort Descending",
            value:"To sort descending, use the keyword argument ``reverse = True``:" +
                "```py\n" +
                "thislist = [\"orange\", \"mango\", \"kiwi\", \"pineapple\", \"banana\"]\n" +
                "thislist.sort(reverse = True)\n" +
                "print(thislist)\n" +
                "```\n" +
                "```py\n" +
                "thislist = [100, 50, 65, 82, 23]\n" +
                "thislist.sort(reverse = True)\n" +
                "print(thislist)\n" +
                "```"
        },
    )
    .setTimestamp()
    .setFooter(`DevBot Python Documentation • ${prefix}py`);

module.exports = {
    name: "py-list-sort",
    category: "Python",
    permissions: ["SEND_MESSAGES"],
    cooldown: "5s",
    testOnly: false,

    callback: ({ message, client }) => {
        message.channel.send(pystringEmbed);
    },
};
