const Discord = require("discord.js");
const { pycolor, prefix } = require("../../../config");

const pystringEmbed = new Discord.MessageEmbed()
    .setColor(pycolor)
    .setTitle("Python - Copy Lists")
    .setURL("https://docs.python.org/3/")
    .setAuthor(
        "DevBot by JuSoft",
        "https://cdn.discordapp.com/attachments/828176464041476111/852459976420229120/devbot-100.png"
    )
    .setThumbnail("https://img.icons8.com/color/2x/python.png")
    .addFields(
        {
            name: "Copy a List",
            value:
                "You cannot copy a list simply by typing list2 = list1, because: list2 will only be a reference to list1, and changes made in list1 will automatically also be made in list2.\n" +
                "\n" +
                "There are ways to make a copy, one way is to use the built-in List method copy().\n" +
                "```py\n" +
                "thislist = [\"apple\", \"banana\", \"cherry\"]\n" +
                "mylist = thislist.copy()\n" +
                "print(mylist)\n" +
                "```\n" +
                "Another way to make a copy is to use the built-in method ``list()``." +
                "```py\n" +
                "thislist = [\"apple\", \"banana\", \"cherry\"]\n" +
                "mylist = list(thislist)\n" +
                "print(mylist)" +
                "```"
        },

    )
    .setTimestamp()
    .setFooter(`DevBot Python Documentation • ${prefix}py`);

module.exports = {
    name: "py-list-copy",
    category: "Python",
    permissions: ["SEND_MESSAGES"],
    cooldown: "5s",
    testOnly: false,

    callback: ({ message, client }) => {
        message.channel.send(pystringEmbed);
    },
};
