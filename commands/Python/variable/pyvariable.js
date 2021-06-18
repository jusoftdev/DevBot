const Discord = require("discord.js");
const { pycolor, prefix } = require("../../../config.js");

const pyvariableEmbed = new Discord.MessageEmbed()
    .setColor(pycolor)
    .setTitle("Python Variables")
    .setURL("https://docs.python.org/3/")
    .setAuthor(
        "DevBot by JuSoft",
        "https://cdn.discordapp.com/attachments/828176464041476111/852459976420229120/devbot-100.png"
    )
    .setThumbnail("https://img.icons8.com/color/2x/python.png")
    .addFields(
        {
            name: "Creating Variables",
            value:
                "Python has no command for declaring a variable.\n" +
                "\n" +
                "A variable is created the moment you first assign a value to it.\n" +
                "\n" +
                "```py\nx = 5\n" +
                'y = "Jnsp"\n' +
                "print(x)\n" +
                "print(y)```",
        },
        {
            name: "Casting",
            value:
                "If you want to specify the data type of a variable, this can be done with casting." +
                "```py\nx = str(3)    # x will be '3'\n" +
                "y = int(3)    # y will be 3" +
                "z = float(3)  # z will be 3.0```",
        },
        {
            name: "Get the Type",
            value:
                "You can get the data type of a variable with the type() function.\n" +
                "```py\nx = 5\n" +
                'y = "Joe"\n' +
                "print(type(x))\n" +
                "print(type(y))```",
        },
        {
            name: "Single or Double Quotes?",
            value:
                "String variables can be declared either by using single or double quotes:\n" +
                '```py\nx = "John"\n' +
                "# is the same as\n" +
                "x = 'John'```",
        },
        {
            name: "Case-Sensitive",
            value:
                "Variable names are case-sensitive.\n" +
                "\n" +
                "```py\na = 4\n" +
                'A = "Karl"\n' +
                "#A will not overwrite a\n```",
        }

    )
    .addField('Variables - Assign Multiple Values', '``dev py-variable-multiple``', true)
    .addField('Variable Names', '``dev py-variable-names``', true)
    .addField('Output Variables', '``dev py-variable-output``', true)
    .addField('Global Variables', '``dev py-variable-global``', true)
    .setTimestamp()
    .setFooter(`DevBot Python Documentation • ${prefix}py`);

module.exports = {
    name: "py-variable",
    category: "Python",
    permissions: ["SEND_MESSAGES"],
    cooldown: "5s",
    testOnly: false,

    callback: ({ message, client }) => {
        message.channel.send(pyvariableEmbed);
    },
};
