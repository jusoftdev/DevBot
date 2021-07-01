const Discord = require("discord.js");
const { pycolor, prefix } = require("../../../config");

const pystringEmbed = new Discord.MessageEmbed()
    .setColor(pycolor)
    .setTitle("Python - Join Tuples")
    .setURL("https://docs.python.org/3/")
    .setAuthor(
        "DevBot by JuSoft",
        "https://cdn.discordapp.com/attachments/828176464041476111/852459976420229120/devbot-100.png"
    )
    .setThumbnail("https://img.icons8.com/color/2x/python.png")
    .addFields(
        {
            name: "Join Two Tuples\n",
            value:
                "To join two or more tuples you can use the ``+`` operator:\n" +
                "```py\n" +
                "tuple1 = (\"a\", \"b\" , \"c\")\n" +
                "tuple2 = (1, 2, 3)\n" +
                "\n" +
                "tuple3 = tuple1 + tuple2\n" +
                "print(tuple3)\n" +
                "```\n"
        },
        {
            name: "Multiply Tuples",
            value: "If you want to multiply the content of a tuple a given number of times, you can use the ``*`` operator:\n" +
                "\n" +
                "```py\n" +
                "fruits = (\"apple\", \"banana\", \"cherry\")\n" +
                "mytuple = fruits * 2\n" +
                "\n" +
                "print(mytuple)" +
                "```"
        },
    )
    .setTimestamp()
    .setFooter(`DevBot Python Documentation • ${prefix}py`);

module.exports = {
    name: "py-tuple-join",
    category: "Python",
    permissions: ["SEND_MESSAGES"],
    cooldown: "5s",
    testOnly: false,

    callback: ({ message, client }) => {
        message.channel.send(pystringEmbed);
    },
};
