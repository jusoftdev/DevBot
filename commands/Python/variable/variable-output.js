const Discord = require("discord.js");
const { pycolor, prefix } = require("../../../config.js");

const pyvariableEmbed = new Discord.MessageEmbed()
    .setColor(pycolor)
    .setTitle("Python - Output Variables")
    .setURL("https://docs.python.org/3/")
    .setAuthor(
        "DevBot by JuSoft",
        "https://cdn.discordapp.com/attachments/828176464041476111/852459976420229120/devbot-100.png"
    )
    .setThumbnail("https://img.icons8.com/color/2x/python.png")
    .addFields(
        {
            name: "Output Variables",
            value:
                "The Python ``print`` statement is often used to output variables.\n" +
                "To combine both text and a variable, Python uses the ``+`` character:\n" +
                "\n" +
                "```py\nx = \"awesome\"\n" +
                'print("Python & JuSoft are " + x)\n```' +
                '\n' +
                'You can also use the ``+`` character to add a variable to another variable:\n' +
                '```py\nx = "Python is "\n' +
                'y = "awesome"\n' +
                'z =  x + y\n' +
                'print(z)\n```' +
                '\n' +
                'For numbers, the ``+`` character works as a mathematical operator:' +
                '```py\nx = 5\n' +
                'y = 10\n' +
                'print(x + y)```'

        },
    )
    .setTimestamp()
    .setFooter(`DevBot Python Documentation • ${prefix}py`);

module.exports = {
    name: "py-variable-output",
    category: "Python",
    permissions: ["SEND_MESSAGES"],
    cooldown: "5s",
    testOnly: false,

    callback: ({ message, client }) => {
        message.channel.send(pyvariableEmbed);
    },
};
