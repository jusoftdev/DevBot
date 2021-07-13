const Discord = require("discord.js");
const { pycolor, prefix } = require("../../config");

const pystringEmbed = new Discord.MessageEmbed()
    .setColor(pycolor)
    .setTitle("Python If ... Else")
    .setURL("https://docs.python.org/3/")
    .setAuthor(
        "DevBot by JuSoft",
        "https://cdn.discordapp.com/attachments/828176464041476111/852459976420229120/devbot-100.png"
    )
    .setThumbnail("https://img.icons8.com/color/2x/python.png")
    .addFields(
        {
            name: "Python Conditions and If statements",
            value:
                "•Python supports the usual logical conditions from mathematics:\n" +
                "•Equals: ``a == b``\n" +
                "•Not Equals: ``a != b``\n" +
                "•Less than: ``a < b``\n" +
                "•Less than or equal to: ``a <= b``\n" +
                "•Greater than: ``a > b``\n" +
                "•Greater than or equal to: ``a >= b``\n" +
                "\n" +
                "These conditions can be used in several ways, most commonly in \"if statements\" and loops.\n" +
                "An \"if statement\" is written by using the ``if`` keyword.\n" +
                "```py\n" +
                "a = 33\n" +
                "b = 200\n" +
                "if b > a:\n" +
                "  print(\"b is greater than a\")" +
                "```\n" +
                "In this example we use two variables, ``a`` and ``b``, which are used as part of the if statement to test whether ``b`` is greater than ``a``. As a is ``33``, and ``b`` is ``200``, we know that 200 is greater than 33, and so we print to screen that \"b is greater than a\"."
        },
        {
            name: "Indentation",
            value:
                "Python relies on indentation (whitespace at the beginning of a line) to define scope in the code. Other programming languages often use curly-brackets for this purpose.\n" +
                "\n" +
                "If statement, without indentation (will raise an error):" +
                "```py\n" +
                "a = 33\n" +
                "b = 200\n" +
                "if b > a:\n" +
                "print(\"b is greater than a\") # you will get an error" +
                "```\n"
        },
        {
            name: "Elif",
            value:
                "The ``elif`` keyword is pythons way of saying \"if the previous conditions were not true, then try this condition.\n" +
                "\n" +
                "a = 33\n" +
                "b = 33\n" +
                "if b > a:\n" +
                "  print(\"b is greater than a\")\n" +
                "elif a == b:\n" +
                "  print(\"a and b are equal\")" +
                "```\n" +
                "In this example ``a`` is equal to ``b``, so the first condition is not true, but the ``elif`` condition is true, so we print to screen that \"a and b are equal\"."
        },
        {
            name: "Else",
            value:
                "The ``else`` keyword catches anything which isn't caught by the preceding conditions.\n" +
                "\n" +
                "a = 200\n" +
                "b = 33\n" +
                "if b > a:\n" +
                "  print(\"b is greater than a\")\n" +
                "elif a == b:\n" +
                "  print(\"a and b are equal\")\n" +
                "else:\n" +
                "  print(\"a is greater than b\")" +
                "```\n" +
                "In this example ``a`` is greater than ``b``, so the first condition is not true, also the ´`elif`` condition is not true, so we go to the ``else`` condition and print to screen that \"a is greater than b\".\n" +
                "\n" +
                "You can also have an ``else`` without the ``elif``:" +
                "```py\n" +
                "a = 200\n" +
                "b = 33\n" +
                "if b > a:\n" +
                "  print(\"b is greater than a\")\n" +
                "else:\n" +
                "  print(\"b is not greater than a\")" +
                "```"
        },
        {
            name: "Short Hand If",
            value:
                "If you have only one statement to execute, you can put it on the same line as the if statement.\n" +
                "```py\n" +
                "if a > b: print(\"a is greater than b\")" +
                "```"
        },
        {
            name: "Short Hand If ... Else",
            value:
                "f you have only one statement to execute, one for if, and one for else, you can put it all on the same line:\n" +
                "```py\n" +
                "a = 2\n" +
                "b = 330\n" +
                "print(\"A\") if a > b else print(\"B\")" +
                "``\n" +
                "````css\n" +
                "[ This technique is known as Ternary Operators, or Conditional Expressions. ]\n" +
                "You can also have multiple else statements on the same line:\n" +
                "```py\n" +
                "a = 330\n" +
                "b = 330\n" +
                "print(\"A\") if a > b else print(\"=\") if a == b else print(\"B\")" +
                "```"
        },
        {
            name: "And",
            value:
                "The ``and`` keyword is a logical operator, and is used to combine conditional statements:\n" +
                "```py\n" +
                "a = 200\n" +
                "b = 33\n" +
                "c = 500\n" +
                "if a > b and c > a:\n" +
                "  print(\"Both conditions are True\")" +
                "```"
        },
        {
            name: "Or",
            value:
                "The ``or`` keyword is a logical operator, and is used to combine conditional statements:\n" +
                "```py\n" +
                "a = 200\n" +
                "b = 33\n" +
                "c = 500\n" +
                "if a > b or a > c:\n" +
                "  print(\"At least one of the conditions is True\")" +
                "```"
        },
        {
            name: "Nested If",
            value:
                "You can have ``if`` statements inside ``if`` statements, this is called nested ``if`` statements.\n" +
                "```py\n" +
                "x = 41\n" +
                "\n" +
                "if x > 10:\n" +
                "  print(\"Above ten,\")\n" +
                "  if x > 20:\n" +
                "    print(\"and also above 20!\")\n" +
                "  else:\n" +
                "    print(\"but not above 20.\")" +
                "```"
        },
        {
            name: "The pass Statement",
            value:
                "``if`` statements cannot be empty, but if you for some reason have an ``if`` statement with no content, put in the ``pass`` statement to avoid getting an error.\n" +
                "```py\n" +
                "a = 33\n" +
                "b = 200\n" +
                "\n" +
                "if b > a:\n" +
                "  pass" +
                "```"
        },
    )
    .setTimestamp()
    .setFooter(`DevBot Python Documentation • ${prefix}py`);

module.exports = {
    name: "py-condition",
    category: "Python",
    permissions: ["SEND_MESSAGES"],
    cooldown: "5s",
    testOnly: false,

    callback: ({ message, client }) => {
        message.channel.send(pystringEmbed);
    },
};
