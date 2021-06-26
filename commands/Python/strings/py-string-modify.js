const Discord = require("discord.js");
const { pycolor, prefix } = require("../../../config");

const pycastEmbed = new Discord.MessageEmbed()
    .setColor(pycolor)
    .setTitle("Python - Modify Strings")
    .setURL("https://docs.python.org/3/")
    .setAuthor(
        "DevBot by JuSoft",
        "https://cdn.discordapp.com/attachments/828176464041476111/852459976420229120/devbot-100.png"
    )
    .setThumbnail("https://img.icons8.com/color/2x/python.png")
    .addFields(
        {
            name: "Modify Strings",
            value:
                "Python has a set of built-in methods that you can use on strings.\n"
        },
        {
            name: "Upper Case",
            value:
                "By leaving out the start index, the range will start at the first character:\n" +
                "```py\n" +
                "a = \"Hello, World!\"\n" +
                "print(a.upper()" +
                "```"
        },
        {
            name: "Lower Case",
            value:
                "By leaving out the end index, the range will go to the end:\n" +
                "```py\n" +
                "a = \"Hello, World!\"\n" +
                "print(a.lower())" +
                "```"
        },
        {
            name: "Remove Whitespace",
            value:
                "Whitespace is the space before and/or after the actual text, and very often you want to remove this space.\n" +
                "```py\n" +
                "a = \" Hello, World! \"\n" +
                "print(a.strip()) # returns \"Hello, World!\"" +
                "```"
        },
        {
            name: "Replace String",
            value:
                "Whitespace is the space before and/or after the actual text, and very often you want to remove this space.\n" +
                "```py\n" +
                "a = \"Hello, World!\"\n" +
                "print(a.replace(\"H\", \"J\"))" +
                "```"
        },
        {
            name: "Split String",
            value:
                "The ``split()`` method returns a list where the text between the specified separator becomes the list items.\n" +
                "```py\n" +
                "a = \"Hello, World!\"\n" +
                "print(a.split(\",\")) # returns ['Hello', ' World!']" +
                "```"
        },
    )
    .setTimestamp()
    .setFooter(`DevBot Python Documentation • ${prefix}py`);

module.exports = {
    name: "py-string-modify",
    category: "Python",
    permissions: ["SEND_MESSAGES"],
    cooldown: "5s",
    testOnly: false,

    callback: ({ message, client }) => {
        message.channel.send(pycastEmbed);
    },
};
