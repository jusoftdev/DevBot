const Discord = require("discord.js");
const { pycolor, prefix } = require("../../config");

const pynumEmbed = new Discord.MessageEmbed()
    .setColor(pycolor)
    .setTitle("Python Casting")
    .setURL("https://docs.python.org/3/")
    .setAuthor(
        "DevBot by JuSoft",
        "https://cdn.discordapp.com/attachments/828176464041476111/852459976420229120/devbot-100.png"
    )
    .setThumbnail("https://img.icons8.com/color/2x/python.png")
    .addFields(
        {
            name: "Python Casting",
            value:
                "There may be times when you want to specify a type on to a variable. This can be done with casting." +
                " Python is an object-orientated language, and as such it uses classes to define data types, including its primitive types.\n" +
                "Casting in python is therefore done using constructor functions:\n" +
                "•``int() - constructs an integer number from an integer literal, a float literal (by removing all decimals), or a string literal (providing the string represents a whole number)``\n" +
                "•``float()`` - constructs a float number from an integer literal, a float literal or a string literal (providing the string represents a float or an integer)\n" +
                "•``str()`` - constructs a string from a wide variety of data types, including strings, integer literals and float literals\n" +
                "\n"
        },
        {
            name: "Integers:",
            value:
                "```py\nx = int(1)   # x will be 1\n" +
                "y = int(2.8) # y will be 2\n" +
                "z = int(\"3\") # z will be 3\n```"
        },
        {
            name: "Floats:",
            value:
                "```py\nx = float(1)     # x will be 1.0\n" +
                "y = float(2.8)   # y will be 2.8\n" +
                "z = float(\"3\")   # z will be 3.0\n" +
                "w = float(\"4.2\") # w will be 4.2\n```"
        },
        {
            name: "Strings:",
            value:
                "```py\nx = str(\"s1\") # x will be 's1'\n" +
                "y = str(2)    # y will be '2'\n" +
                "z = str(3.0)  # z will be '3.0'```"
        },
    )
    .setTimestamp()
    .setFooter(`DevBot Python Documentation • ${prefix}py`);

module.exports = {
    name: "py-casting",
    category: "Python",
    permissions: ["SEND_MESSAGES"],
    cooldown: "5s",
    testOnly: false,

    callback: ({ message, client }) => {
        message.channel.send(pynumEmbed);
    },
};
