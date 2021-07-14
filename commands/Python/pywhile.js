const Discord = require("discord.js");
const { pycolor, prefix } = require("../../config");

const pystringEmbed = new Discord.MessageEmbed()
    .setColor(pycolor)
    .setTitle("Python While Loops")
    .setURL("https://docs.python.org/3/")
    .setAuthor(
        "DevBot by JuSoft",
        "https://cdn.discordapp.com/attachments/828176464041476111/852459976420229120/devbot-100.png"
    )
    .setThumbnail("https://img.icons8.com/color/2x/python.png")
    .addFields(
        {
            name: "Python Loops",
            value:
                "Python has two primitive loop commands:\n" +
                "•``while`` loops\n" +
                "•``for`` loops"
        },
        {
            name: "The while Loop",
            value:
                "With the ``while`` loop we can execute a set of statements as long as a condition is true.\n" +
                "```py\n" +
                "i = 1\n" +
                "while i < 6:\n" +
                "  print(i)\n" +
                "  i += 1" +
                "```\n" +
                "```css\n" +
                "[ Note: remember to increment i, or else the loop will continue forever. ]\n" +
                "```" +
                "The ``while`` loop requires relevant variables to be ready, in this example we need to define an indexing variable, ``i``, which we set to 1."
        },
        {
            name: "The break Statement",
            value:
                "With the ``break`` statement we can stop the loop even if the while condition is true:\n" +
                "```py\n" +
                "i = 1\n" +
                "while i < 6:\n" +
                "  print(i)\n" +
                "  if i == 3:\n" +
                "    break\n" +
                "  i += 1" +
                "```\n"
        },
        {
            name: "The continue Statement",
            value:
                "With the ``continue`` statement we can stop the current iteration, and continue with the next:\n" +
                "```py\n" +
                "i = 0\n" +
                "while i < 6:\n" +
                "  i += 1\n" +
                "  if i == 3:\n" +
                "    continue\n" +
                "  print(i)" +
                "```"
        },
        {
            name: "The else Statement",
            value:
                "With the ``else`` statement we can run a block of code once when the condition no longer is true:\n" +
                "```py\n" +
                "i = 1\n" +
                "while i < 6:\n" +
                "  print(i)\n" +
                "  i += 1\n" +
                "else:\n" +
                "  print(\"i is no longer less than 6\")" +
                "```"
        },
    )
    .setTimestamp()
    .setFooter(`DevBot Python Documentation • ${prefix}py`);

module.exports = {
    name: "py-while",
    category: "Python",
    permissions: ["SEND_MESSAGES"],
    cooldown: "5s",
    testOnly: false,

    callback: ({ message, client }) => {
        message.channel.send(pystringEmbed);
    },
};
