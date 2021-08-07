const Discord = require("discord.js");
const { pycolor, prefix } = require("../../config");

const pystringEmbed = new Discord.MessageEmbed()
    .setColor(pycolor)
    .setTitle("Python User Input")
    .setURL("https://docs.python.org/3/")
    .setAuthor(
        "DevBot by JuSoft",
        "https://cdn.discordapp.com/attachments/828176464041476111/852459976420229120/devbot-100.png"
    )
    .setThumbnail("https://img.icons8.com/color/2x/python.png")
    .addFields(
        {
            name: "User Input",
            value:
                "Python allows for user input.\n" +
                "\n" +
                "That means we are able to ask the user for input.\n" +
                "\n" +
                "The method is a bit different in Python 3.6 than Python 2.7.\n" +
                "\n" +
                "Python 3.6 uses the `input()` method.\n" +
                "\n" +
                "Python 2.7 uses the `raw_input()` method.\n" +
                "\n" +
                "The following example asks for the username, and when you entered the username, it gets printed on the screen:\n" +
                "*Python 3.6*" +
                "```py\n" +
                "username = input(\"Enter username:\")\n" +
                "print(\"Username is: \" + username)" +
                "```\n" +
                "*Python 2.7*" +
                "```py\n" +
                "username = raw_input(\"Enter username:\")\n" +
                "print(\"Username is: \" + username)" +
                "```\n" +
                "```css\n" +
                "[ Python stops executing when it comes to the input() function, and continues when the user has given some input. ]" +
                "```"
        }
    )
    .setTimestamp()
    .setFooter(`DevBot Python Documentation • ${prefix}py`);

module.exports = {
    name: "py-userinput",
    category: "Python",
    permissions: ["SEND_MESSAGES"],
    cooldown: "5s",
    testOnly: false,

    callback: ({ message, client }) => {
        message.channel.send(pystringEmbed);
    },
};
