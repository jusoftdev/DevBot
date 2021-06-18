const Discord = require("discord.js");
const { pycolor, prefix } = require("../../../config.js");

const pyvariablemultiEmbed = new Discord.MessageEmbed()
    .setColor(pycolor)
    .setTitle("Python Variables - Assign Multiple Values")
    .setURL("https://docs.python.org/3/")
    .setAuthor(
        "DevBot by JuSoft",
        "https://cdn.discordapp.com/attachments/828176464041476111/852459976420229120/devbot-100.png"
    )
    .setThumbnail("https://img.icons8.com/color/2x/python.png")
    .addFields(
        {
            name: "Many Values to Multiple Variables",
            value:
                "Python allows you to assign values to multiple variables in one line:\n" +
                "\n" +
                "```py\nx, y, z = \"JuSoft\", \"Rope\", \"Decryptor\"\n" +
                'print(x)\n' +
                "print(y)\n" +
                "print(z)\n```",
        },
        {
            name: "One Value to Multiple Variables",
            value:
                "And you can assign the same value to multiple variables in one line:" +
                "```py\nx = y = z = \"Orange\"\n" +
                "print(x)\n" +
                "print(y)\n" +
                "print(z)\n```",
        },
        {
            name: "Unpack a Collection",
            value:
                "If you have a collection of values in a list, tuple etc. Python allows you extract the values into variables. This is called unpacking.\n" +
                "```py\nfruits = [\"apple\", \"banana\", \"cherry\"]\n" +
                'x, y, z = fruits\n' +
                "print(x)\n" +
                "print(y)\n" +
                "print(z)\n```",
        },
    )
    .setTimestamp()
    .setFooter(`DevBot Python Documentation • ${prefix}py`);

module.exports = {
    name: "py-variable-multiple",
    category: "Python",
    permissions: ["SEND_MESSAGES"],
    cooldown: "5s",
    testOnly: false,

    callback: ({ message, client }) => {
        message.channel.send(pyvariablemultiEmbed);
    },
};
