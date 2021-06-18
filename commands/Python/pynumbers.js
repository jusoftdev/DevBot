const Discord = require("discord.js");
const { pycolor, prefix } = require("../../config");

const pynumEmbed = new Discord.MessageEmbed()
    .setColor(pycolor)
    .setTitle("Python Numbers")
    .setURL("https://docs.python.org/3/")
    .setAuthor(
        "DevBot by JuSoft",
        "https://cdn.discordapp.com/attachments/828176464041476111/852459976420229120/devbot-100.png"
    )
    .setThumbnail("https://img.icons8.com/color/2x/python.png")
    .addFields(
        {
            name: "Python Numbers",
            value:
                "There are three numeric types in Python:\n" +
                "•``int``\n" +
                "•``float``\n" +
                "•``complex``\n" +
                "\n" +
                "Variables of numeric types are created when you assign a value to them:\n" +
                "```py\nx = 1    # int\n" +
                "y = 2.8  # float\n" +
                "z = 1j   # complex\n```" +
                "To verify the type of any object in Python, use the ``type()`` function:\n" +
                "```py\nprint(type(x))\n" +
                "print(type(y))\n" +
                "print(type(z))\n```"
        },
        {
            name: "Int",
            value:
                "Int, or integer, is a whole number, positive or negative, without decimals, of unlimited length." +
                "```py\nx = 1\n" +
                "y = 35656222554887711\n" +
                "z = -3255522\n" +
                "\n" +
                "print(type(x))\n" +
                "print(type(y))\n" +
                "print(type(z))```"
        },
        {
            name: "Float",
            value:
                "Float, or \"floating point number\" is a number, positive or negative, containing one or more decimals." +
                "```py\nx = 1.10\n" +
                "y = 1.0\n" +
                "z = -35.59\n" +
                "\n" +
                "print(type(x))\n" +
                "print(type(y))\n" +
                "print(type(z))```" +
                "Float can also be scientific numbers with an \"e\" to indicate the power of 10." +
                "```py\nx = 35e3\n" +
                "y = 12E4\n" +
                "z = -87.7e100\n" +
                "\n" +
                "print(type(x))\n" +
                "print(type(y))\n" +
                "print(type(z))```"
        },
        {
            name: "Complex",
            value:
                "Complex numbers are written with a \"j\" as the imaginary part:\n" +
                "```py\nx = 3+5j\n" +
                "y = 5j\n" +
                "z = -5j\n" +
                "\n" +
                "print(type(x))\n" +
                "print(type(y))\n" +
                "print(type(z))```"
        },
        {
            name: "Type Conversion",
            value:
                "You can convert from one type to another with the ``int(), float(), and complex()`` methods:\n" +
                "```py\nx = 1    # int\n" +
                "y = 2.8  # float\n" +
                "z = 1j   # complex\n" +
                "\n" +
                "#convert from int to float:\n" +
                "a = float(x)\n" +
                "\n" +
                "#convert from float to int:\n" +
                "b = int(y)\n" +
                "\n" +
                "#convert from int to complex:\n" +
                "c = complex(x)\n" +
                "\n" +
                "print(a)\n" +
                "print(b)\n" +
                "print(c)\n" +
                "\n" +
                "print(type(a))\n" +
                "print(type(b))\n" +
                "print(type(c))\n```" +
                "```ini\n[ Note: You cannot convert complex numbers into another number type. ]\n```"
        },
        {
            name: "Random Number",
            value:
                "Python does not have a ``random()`` function to make a random number, but Python has a built-in module called random that can be used to make random numbers:\n" +
                "```py\nimport random\n" +
                "\n" +
                "print(random.randrange(1, 10))```\n"
        },
    )
    .setTimestamp()
    .setFooter(`DevBot Python Documentation • ${prefix}py`);

module.exports = {
    name: "py-numbers",
    category: "Python",
    permissions: ["SEND_MESSAGES"],
    cooldown: "5s",
    testOnly: false,

    callback: ({ message, client }) => {
        message.channel.send(pynumEmbed);
    },
};
