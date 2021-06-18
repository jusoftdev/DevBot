const Discord = require("discord.js");
const { pycolor, prefix } = require("../../config");

const pyvariableEmbed = new Discord.MessageEmbed()
    .setColor(pycolor)
    .setTitle("Python Data Types")
    .setURL("https://docs.python.org/3/")
    .setAuthor(
        "DevBot by JuSoft",
        "https://cdn.discordapp.com/attachments/828176464041476111/852459976420229120/devbot-100.png"
    )
    .setThumbnail("https://img.icons8.com/color/2x/python.png")
    .addFields(
        {
            name: "Built-in Data Types",
            value:
                "In programming, data type is an important concept.\n" +
                "\n" +
                "Variables can store data of different types, and different types can do different things.\n" +
                "\n" +
                "Python has the following data types built-in by default, in these categories:\n" +
                "\n" +
                "Text Type:\t``str``\n" +
                "Numeric Types:\t``int, float, complex``\n" +
                "Sequence Types:\t``list, tuple, range``\n" +
                "Mapping Type:\t``dict``\n" +
                "Set Types:\t``set, frozenset\n``" +
                "Boolean Type:\t``bool``\n" +
                "Binary Types:\t``bytes, bytearray, memoryview``"
        },
        {
            name: "Getting the Data Type",
            value:
                "You can get the data type of any object by using the ``type()`` function:" +
                "```py\nx = 5\n" +
                "print(type(x))```",
        },
        {
            name: "Setting the Data Type",
            value:
                "In Python, the data type is set when you assign a value to a variable:"
        },
        {
            name: "Setting the Specific Data Type",
            value:
                "If you want to specify the data type, you can use the following constructor functions:\n"
        },
    )
    .setImage("https://i.imgur.com/Lsfh8Uo.png") // hello
    .setTimestamp()
    .setFooter(`DevBot Python Documentation • ${prefix}py`);

module.exports = {
    name: "py-datatypes",
    category: "Python",
    permissions: ["SEND_MESSAGES"],
    cooldown: "5s",
    testOnly: false,

    callback: ({ message, client }) => {
        message.channel.send(pyvariableEmbed);
    },
};
