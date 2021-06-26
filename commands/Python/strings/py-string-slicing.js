const Discord = require("discord.js");
const { pycolor, prefix } = require("../../../config");

const pycastEmbed = new Discord.MessageEmbed()
    .setColor(pycolor)
    .setTitle("Python - Slicing Strings")
    .setURL("https://docs.python.org/3/")
    .setAuthor(
        "DevBot by JuSoft",
        "https://cdn.discordapp.com/attachments/828176464041476111/852459976420229120/devbot-100.png"
    )
    .setThumbnail("https://img.icons8.com/color/2x/python.png")
    .addFields(
        {
            name: "Slicing",
            value:
                "You can return a range of characters by using the slice syntax.\n" +
                "\n" +
                "Specify the start index and the end index, separated by a colon, to return a part of the string.\n" +
                "```py\n" +
                "b = \"Hello, World!\"\n" +
                "print(b[2:5])" +
                "```\n" +
                "```css\n" +
                "[ Note: The first character has index 0. ]" +
                "```"
        },
        {
            name: "Slice From the Start",
            value:
                "By leaving out the start index, the range will start at the first character:\n" +
                "```py\n" +
                "b = \"Hello, World!\"\n" +
                "print(b[:5])" +
                "```"
        },
        {
            name: "Slice To the End",
            value:
                "By leaving out the end index, the range will go to the end:\n" +
                "```py\n" +
                "b = \"Hello, World!\"\n" +
                "print(b[2:])" +
                "```"
        },
        {
            name: "Negative Indexing",
            value:
                "Use negative indexes to start the slice from the end of the string:\n" +
                "```py\n" +
                "a = \"Hello, World!\"\n" +
                "print(b[-5:-2])" +
                "```"
        },
    )
    .setTimestamp()
    .setFooter(`DevBot Python Documentation • ${prefix}py`);

module.exports = {
    name: "py-string-slicing",
    category: "Python",
    permissions: ["SEND_MESSAGES"],
    cooldown: "5s",
    testOnly: false,

    callback: ({ message, client }) => {
        message.channel.send(pycastEmbed);
    },
};
