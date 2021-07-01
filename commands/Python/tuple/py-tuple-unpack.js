const Discord = require("discord.js");
const { pycolor, prefix } = require("../../../config");

const pystringEmbed = new Discord.MessageEmbed()
    .setColor(pycolor)
    .setTitle("Python - Unpack Tuples")
    .setURL("https://docs.python.org/3/")
    .setAuthor(
        "DevBot by JuSoft",
        "https://cdn.discordapp.com/attachments/828176464041476111/852459976420229120/devbot-100.png"
    )
    .setThumbnail("https://img.icons8.com/color/2x/python.png")
    .addFields(
        {
            name: "Unpacking a Tuple\n",
            value:
                "When we create a tuple, we normally assign values to it. This is called \"packing\" a tuple:\n" +
                "```py\n" +
                "fruits = (\"apple\", \"banana\", \"cherry\")" +
                "```\n" +
                "But, in Python, we are also allowed to extract the values back into variables. This is called \"unpacking\":" +
                "```py\n" +
                "fruits = (\"apple\", \"banana\", \"cherry\")\n" +
                "\n" +
                "(green, yellow, red) = fruits\n" +
                "\n" +
                "print(green)\n" +
                "print(yellow)\n" +
                "print(red)" +
                "```\n" +
                "```css\n" +
                "[ Note: The number of variables must match the number of values in the tuple, if not, you must use an asterisk to collect the remaining values as a list. ]" +
                "```"
        },
        {
            name: "Using Asterisk",
            value: "If the number of variables is less than the number of values, you can add an * to the variable name and the values will be assigned to the variable as a list:\n" +
                "\n" +
                "```py\n" +
                "fruits = (\"apple\", \"banana\", \"cherry\", \"strawberry\", \"raspberry\")\n" +
                "\n" +
                "(green, yellow, *red) = fruits\n" +
                "\n" +
                "print(green)\n" +
                "print(yellow)\n" +
                "print(red)" +
                "```\n" +
                "If the asterisk is added to another variable name than the last, Python will assign values to the variable until the number of values left matches the number of variables left.\n" +
                "```py\n" +
                "fruits = (\"apple\", \"mango\", \"papaya\", \"pineapple\", \"cherry\")\n" +
                "\n" +
                "(green, *tropic, red) = fruits\n" +
                "\n" +
                "print(green)\n" +
                "print(tropic)\n" +
                "print(red)" +
                "```"
        },
    )
    .setTimestamp()
    .setFooter(`DevBot Python Documentation • ${prefix}py`);

module.exports = {
    name: "py-tuple-unpack",
    category: "Python",
    permissions: ["SEND_MESSAGES"],
    cooldown: "5s",
    testOnly: false,

    callback: ({ message, client }) => {
        message.channel.send(pystringEmbed);
    },
};
