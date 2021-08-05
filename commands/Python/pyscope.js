const Discord = require("discord.js");
const { pycolor, prefix } = require("../../config");

const pystringEmbed = new Discord.MessageEmbed()
    .setColor(pycolor)
    .setTitle("Python Scope")
    .setURL("https://docs.python.org/3/")
    .setAuthor(
        "DevBot by JuSoft",
        "https://cdn.discordapp.com/attachments/828176464041476111/852459976420229120/devbot-100.png"
    )
    .setThumbnail("https://img.icons8.com/color/2x/python.png")
    .addFields(
        {
            name: "Python Scope",
            value:
                "A variable is only available from inside the region it is created. This is called **scope**.\n"
        },
        {
            name: "Local Scope",
            value:
                "A variable created inside a function belongs to the local scope of that function, and can only be used inside that function.\n" +
                "\n" +
                "```py\n" +
                "def myfunc():\n" +
                "  x = 300\n" +
                "  print(x)\n" +
                "\n" +
                "myfunc()" +
                "```"
        },
        {
            name: "Function Inside Function",
            value:
                "As explained in the example above, the variable `x` is not available outside the function, but it is available for any function inside the function:\n" +
                "\n" +
                "```py\n" +
                "def myfunc():\n" +
                "  x = 300\n" +
                "  def myinnerfunc():\n" +
                "    print(x)\n" +
                "  myinnerfunc()\n" +
                "\n" +
                "myfunc()" +
                "```\n"
        },
        {
            name: "Global Scope",
            value:
                "A variable created in the main body of the Python code is a global variable and belongs to the global scope.\n" +
                "\n" +
                "Global variables are available from within any scope, global and local." +
                "```py\n" +
                "x = 300\n" +
                "\n" +
                "def myfunc():\n" +
                "  print(x)\n" +
                "\n" +
                "myfunc()\n" +
                "\n" +
                "print(x)" +
                "```"
        },
        {
            name: "Naming Variables",
            value: "If you operate with the same variable name inside and outside of a function, Python will treat them as two separate variables, one available in the global scope (outside the function) and one available in the local scope (inside the function):\n" +
                "```py" +
                "x = 300\n" +
                "\n" +
                "def myfunc():\n" +
                "  x = 200\n" +
                "  print(x)\n" +
                "\n" +
                "myfunc()\n" +
                "\n" +
                "print(x)" +
                "```"
        },
        {
            name: "Global Keyword",
            value: "If you need to create a global variable, but are stuck in the local scope, you can use the ``global`` keyword.\n" +
                "\n" +
                "The ``global`` keyword makes the variable global.\n" +
                "```py" +
                "x = 300\n" +
                "\n" +
                "def myfunc():\n" +
                "  x = 200\n" +
                "  print(x)\n" +
                "\n" +
                "myfunc()\n" +
                "\n" +
                "print(x)" +
                "```\n" +
                "Also, use the `global` keyword if you want to make a change to a global variable inside a function." +
                "```py\n" +
                "x = 300\n" +
                "\n" +
                "def myfunc():\n" +
                "  global x\n" +
                "  x = 200\n" +
                "\n" +
                "myfunc()\n" +
                "\n" +
                "print(x)" +
                "```"
        },
    )
    .setTimestamp()
    .setFooter(`DevBot Python Documentation • ${prefix}py`);

module.exports = {
    name: "py-scope",
    category: "Python",
    permissions: ["SEND_MESSAGES"],
    cooldown: "5s",
    testOnly: false,

    callback: ({ message, client }) => {
        message.channel.send(pystringEmbed);
    },
};
