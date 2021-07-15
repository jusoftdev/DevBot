const Discord = require("discord.js");
const { pycolor, prefix } = require("../../config");

const pystringEmbed = new Discord.MessageEmbed()
    .setColor(pycolor)
    .setTitle("Python Lambda")
    .setURL("https://docs.python.org/3/")
    .setAuthor(
        "DevBot by JuSoft",
        "https://cdn.discordapp.com/attachments/828176464041476111/852459976420229120/devbot-100.png"
    )
    .setThumbnail("https://img.icons8.com/color/2x/python.png")
    .addFields(
        {
            name: "Python Functions",
            value:
                "A lambda function is a small anonymous function.\n" +
                "\n" +
                "A lambda function can take any number of arguments, but can only have one expression."
        },
        {
            name: "Syntax",
            value:
                "```py\n" +
                "lambda arguments : expression" +
                "```\n" +
                "The expression is executed and the result is returned:\n" +
                "```py\n" +
                "x = lambda a : a + 10\n" +
                "print(x(5))" +
                "```\n" +
                "Lambda functions can take any number of arguments:\n" +
                "```py\n" +
                "x = lambda a, b : a * b\n" +
                "print(x(5, 6))" +
                "```\n" +
                "```py\n" +
                "x = lambda a, b, c : a + b + c\n" +
                "print(x(5, 6, 2))" +
                "```"
        },
        {
            name: "Why Use Lambda Functions?",
            value:
                "The power of lambda is better shown when you use them as an anonymous function inside another function.\n" +
                "\n" +
                "Say you have a function definition that takes one argument, and that argument will be multiplied with an unknown number:\n" +
                "```py\n" +
                "def myfunc(n):\n" +
                "  return lambda a : a * n" +
                "```\n" +
                "Use that function definition to make a function that always doubles the number you send in:\n" +
                "```py\n" +
                "def myfunc(n):\n" +
                "  return lambda a : a * n\n" +
                "\n" +
                "mydoubler = myfunc(2)\n" +
                "\n" +
                "print(mydoubler(11))" +
                "```\n" +
                "Or, use the same function definition to make a function that always triples the number you send in:\n" +
                "```py\n" +
                "def myfunc(n):\n" +
                "  return lambda a : a * n\n" +
                "\n" +
                "mytripler = myfunc(3)\n" +
                "\n" +
                "print(mytripler(11))" +
                "```\n" +
                "Or, use the same function definition to make both functions, in the same program:\n" +
                "```py\n" +
                "def myfunc(n):\n" +
                "  return lambda a : a * n\n" +
                "\n" +
                "mydoubler = myfunc(2)\n" +
                "mytripler = myfunc(3)\n" +
                "\n" +
                "print(mydoubler(11))\n" +
                "print(mytripler(11))" +
                "```\n" +
                "```css\n" +
                "[ Use lambda functions when an anonymous function is required for a short period of time. ]" +
                "```"
        },
    )
    .setTimestamp()
    .setFooter(`DevBot Python Documentation • ${prefix}py`);

module.exports = {
    name: "py-lambda",
    category: "Python",
    permissions: ["SEND_MESSAGES"],
    cooldown: "5s",
    testOnly: false,

    callback: ({ message, client }) => {
        message.channel.send(pystringEmbed);
    },
};
