const Discord = require("discord.js");
const { pycolor, prefix } = require("../../../config");

const pystringEmbed = new Discord.MessageEmbed()
    .setColor(pycolor)
    .setTitle("Python - Access Set Items")
    .setURL("https://docs.python.org/3/")
    .setAuthor(
        "DevBot by JuSoft",
        "https://cdn.discordapp.com/attachments/828176464041476111/852459976420229120/devbot-100.png"
    )
    .setThumbnail("https://img.icons8.com/color/2x/python.png")
    .addFields(
        {
            name: "Access Items",
            value:
                "You cannot access items in a set by referring to an index or a key.\n" +
                "\n" +
                "But you can loop through the set items using a ``for`` loop, or ask if a specified value is present in a set, by using the ``in`` keyword." +
                "```py\n" +
                "thisset = {\"apple\", \"banana\", \"cherry\"}\n" +
                "\n" +
                "for x in thisset:\n" +
                "  print(x)" +
                "```\n" +
                "```py\n" +
                "thisset = {\"apple\", \"banana\", \"cherry\"}\n" +
                "\n" +
                "print(\"banana\" in thisset)" +
                "```"
        },
        {
            name: "Change Items",
            value:
                "Once a set is created, you cannot change its items, but you can add new items.\n"
        },
    )
    .setTimestamp()
    .setFooter(`DevBot Python Documentation • ${prefix}py`);

module.exports = {
    name: "py-set-access",
    category: "Python",
    permissions: ["SEND_MESSAGES"],
    cooldown: "5s",
    testOnly: false,

    callback: ({ message, client }) => {
        message.channel.send(pystringEmbed);
    },
};
