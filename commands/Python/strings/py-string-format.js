const Discord = require("discord.js");
const { pycolor, prefix } = require("../../../config");

const pystringEmbed = new Discord.MessageEmbed()
    .setColor(pycolor)
    .setTitle("Python - Format - Strings")
    .setURL("https://docs.python.org/3/")
    .setAuthor(
        "DevBot by JuSoft",
        "https://cdn.discordapp.com/attachments/828176464041476111/852459976420229120/devbot-100.png"
    )
    .setThumbnail("https://img.icons8.com/color/2x/python.png")
    .addFields(
        {
            name: "String Format",
            value:
                "As we learned in the Python Variables chapter, we cannot combine strings and numbers like this:\n" +
                "```py\n" +
                "age = 15\n" +
                "txt = \"My name is Julian, I am \" + age\n" +
                "print(txt)" +
                "```\n" +
                "But we can combine strings and numbers by using the ``format()`` method!\n" +
                "\n" +
                "The ``format()`` method takes the passed arguments, formats them, and places them in the string where the placeholders {} are:" +
                "```py\n" +
                "age = 19\n" +
                "txt = \"My name is Joe, and I am {}\"\n" +
                "print(txt.format(age))" +
                "\n"
        },
        {
            name: "String Format",
            value:
                "The ``format()`` method takes unlimited number of arguments, and are placed into the respective placeholders:\n" +
                "```py\n" +
                "quantity = 3\n" +
                "itemno = 567\n" +
                "price = 49.95\n" +
                "myorder = \"I want {} pieces of item {} for {} dollars.\"\n" +
                "print(myorder.format(quantity, itemno, price))" +
                "```\n" +
                "You can use index numbers {0} to be sure the arguments are placed in the correct placeholders:\n" +
                "```py\n" +
                "quantity = 3\n" +
                "itemno = 567\n" +
                "price = 49.95\n" +
                "myorder = \"I want to pay {2} dollars for {0} pieces of item {1}.\"\n" +
                "print(myorder.format(quantity, itemno, price))" +
                "```"
        },
    )
    .setTimestamp()
    .setFooter(`DevBot Python Documentation • ${prefix}py`);

module.exports = {
    name: "py-string-format",
    category: "Python",
    permissions: ["SEND_MESSAGES"],
    cooldown: "5s",
    testOnly: false,

    callback: ({ message, client }) => {
        message.channel.send(pystringEmbed);
    },
};
