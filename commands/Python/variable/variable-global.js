const Discord = require("discord.js");
const { pycolor, prefix } = require("../../../config.js");

const pyvariableEmbed = new Discord.MessageEmbed()
    .setColor(pycolor)
    .setTitle("Python - Global Variables")
    .setURL("https://docs.python.org/3/")
    .setAuthor(
        "DevBot by JuSoft",
        "https://cdn.discordapp.com/attachments/828176464041476111/852459976420229120/devbot-100.png"
    )
    .setThumbnail("https://img.icons8.com/color/2x/python.png")
    .addFields(
        {
            name: "Global Variables",
            value:
                "Variables that are created outside of a function (as in all of the examples above) are known as global variables.\n" +
                "Global variables can be used by everyone, both inside of functions and outside.\n" +
                "\n" +
                "```py\nx = \"awesome\"\n" +
                'def myfunc():\n' +
                'print("Python & JuSoft are " + x)\n' +
                'myfunc()\n```' +
                '\n' +
                'If you create a variable with the same name inside a function, this variable will be local, and can only be used inside the function.' +
                'The global variable with the same name will remain as it was, global and with the original value.' +
                '```py\nx = \"awesome\"\n' +
                'def myfunc():\n' +
                'x = "fantastic"\n' +
                'print("Python is " + x)\n' +
                'myfunc()\n' +
                'print("Python is " + x)```'
        },
        {
            name: "The global Keyword",
            value:
                "Normally, when you create a variable inside a function, that variable is local, and can only be used inside that function.\n" +
                "\n" +
                "To create a global variable inside a function, you can use the ``global`` keyword.\n" +
                "\n" +
                "```py\ndef myfunc():\n" +
                "  global x\n" +
                "  x = \"fantastic\"\n" +
                "\n" +
                "myfunc()\n" +
                "\n" +
                "print(\"Python is \" + x)\n```" +
                "\n" +
                "Also, use the ``global`` keyword if you want to change a global variable inside a function." +
                "\n" +
                "```py\nx = \"awesome\"\n" +
                "\n" +
                "def myfunc():\n" +
                "global x\n" +
                "x = \"fantastic\"\n" +
                "\n" +
                "myfunc()\n" +
                "\n" +
                "print(\"Python is \" + x)```\n"
        },
    )
    .setTimestamp()
    .setFooter(`DevBot Python Documentation • ${prefix}py`);

module.exports = {
    name: "py-variable-global",
    category: "Python",
    permissions: ["SEND_MESSAGES"],
    cooldown: "5s",
    testOnly: false,

    callback: ({ message, client }) => {
        message.channel.send(pyvariableEmbed);
    },
};
