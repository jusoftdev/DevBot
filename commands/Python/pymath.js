const Discord = require("discord.js");
const { pycolor, prefix } = require("../../config");

const pystringEmbed = new Discord.MessageEmbed()
    .setColor(pycolor)
    .setTitle("Python Math")
    .setURL("https://docs.python.org/3/")
    .setAuthor(
        "DevBot by JuSoft",
        "https://cdn.discordapp.com/attachments/828176464041476111/852459976420229120/devbot-100.png"
    )
    .setThumbnail("https://img.icons8.com/color/2x/python.png")
    .addFields(
        {
            name: "Python Math",
            value:
                "Python has a set of built-in math functions, including an extensive math module, that allows you to perform mathematical tasks on numbers\n"
        },
        {
            name: "Built-in Math Functions",
            value:
                "The `min()` and `max()` functions can be used to find the lowest or highest value in an iterable:\n" +
                "```py\n" +
                "x = min(5, 10, 25)\n" +
                "y = max(5, 10, 25)\n" +
                "\n" +
                "print(x)\n" +
                "print(y)" +
                "```\n" +
                "The `abs()` function returns the absolute (positive) value of the specified number:\n" +
                "```py\n" +
                "x = abs(-7.25)\n" +
                "\n" +
                "print(x)" +
                "```\n" +
                "The `pow(x, y)\ function returns the value of x to the power of y (xy).\n" +
                "```py\n" +
                "x = pow(4, 3)\n" +
                "\n" +
                "print(x)" +
                "```"
        },
        {
            name: "The Math Module",
            value:
                "Python has also a built-in module called `math`, which extends the list of mathematical functions.\n" +
                "\n" +
                "To use it, you must import the `math module:\n" +
                "```py\n" +
                "import math" +
                "```\n" +
                "When you have imported the `math` module, you can start using methods and constants of the module.\n" +
                "\n" +
                "The `math.sqrt()` method for example, returns the square root of a number:\n" +
                "```py\n" +
                "import math\n" +
                "\n" +
                "x = math.sqrt(64)\n" +
                "\n" +
                "print(x)" +
                "```\n" +
                "The `math.ceil()` method rounds a number upwards to its nearest integer, and the `math.floor()` method rounds a number downwards to its nearest integer, and returns the result:\n" +
                "```py\n" +
                "import math\n" +
                "\n" +
                "x = math.ceil(1.4)\n" +
                "y = math.floor(1.4)\n" +
                "\n" +
                "print(x) # returns 2\n" +
                "print(y) # returns 1" +
                "```\n" +
                "The `math.pi` constant, returns the value of PI (3.14...):\n" +
                "```py\n" +
                "import math\n" +
                "\n" +
                "x = math.pi\n" +
                "\n" +
                "print(x)" +
                "```"
        },
        {
            name: "The strftime() Method",
            value:
                "The `datetime` object has a method for formatting date objects into readable strings.\n" +
                "\n" +
                "The method is called `strftime()`, and takes one parameter, format, to specify the `format of the returned string:" +
                "```py\n" +
                "import datetime\n" +
                "\n" +
                "x = datetime.datetime(2021, 8, 6)\n" +
                "\n" +
                "print(x.strftime(\"%B\"))" +
                "```"
        },
        {
            name: "Reference",
            value: "A reference of all the legal format codes:"
        },
    )
    .setTimestamp()
    .setFooter(`DevBot Python Documentation • ${prefix}py`);

module.exports = {
    name: "py-math",
    category: "Python",
    permissions: ["SEND_MESSAGES"],
    cooldown: "5s",
    testOnly: false,

    callback: ({ message, client }) => {
        message.channel.send(pystringEmbed);
    },
};
