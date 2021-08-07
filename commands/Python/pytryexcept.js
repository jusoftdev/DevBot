const Discord = require("discord.js");
const { pycolor, prefix } = require("../../config");

const pystringEmbed = new Discord.MessageEmbed()
    .setColor(pycolor)
    .setTitle("Python Try Except")
    .setURL("https://docs.python.org/3/")
    .setAuthor(
        "DevBot by JuSoft",
        "https://cdn.discordapp.com/attachments/828176464041476111/852459976420229120/devbot-100.png"
    )
    .setThumbnail("https://img.icons8.com/color/2x/python.png")
    .addFields(
        {
            name: "Try Except",
            value:
                "The `try` block lets you test a block of code for errors.\n" +
                "\n" +
                "The `except` block lets you handle the error.\n" +
                "\n" +
                "The `finally` block lets you execute code, regardless of the result of the try- and except blocks.\n"
        },
        {
            name: "Exception Handling",
            value:
                "When an error occurs, or exception as we call it, Python will normally stop and generate an error message.\n" +
                "\n" +
                "These exceptions can be handled using the `try` statement:\n" +
                "The try block will generate an exception, because `x` is not defined:\n" +
                "```py\n" +
                "try:\n" +
                "  print(x)\n" +
                "except:\n" +
                "  print(\"An exception occurred\")" +
                "```\n" +
                "Since the try block raises an error, the except block will be executed.\n" +
                "\n" +
                "Without the try block, the program will crash and raise an error:\n" +
                "This statement will raise an error, because `x` is not defined:\n" +
                "```py\n" +
                "print(x)" +
                "```"
        },
        {
            name: "Many Exceptions",
            value:
                "You can define as many exception blocks as you want, e.g. if you want to execute a special block of code for a special kind of error:\n" +
                "\n" +
                "```py\n" +
                "try:\n" +
                "  print(x)\n" +
                "except NameError:\n" +
                "  print(\"Variable x is not defined\")\n" +
                "except:\n" +
                "  print(\"Something else went wrong\")" +
                "```"
        },
        {
            name: "Else",
            value:
                "You can use the `else` keyword to define a block of code to be executed if no errors were raised:\n" +
                "```py\n" +
                "try:\n" +
                "  print(\"Hello\")\n" +
                "except:\n" +
                "  print(\"Something went wrong\")\n" +
                "else:\n" +
                "  print(\"Nothing went wrong\")" +
                "```"
        },
        {
            name: "Finally",
            value: "The `finally` block, if specified, will be executed regardless if the try block raises an error or not.\n" +
                "```py\n" +
                "try:\n" +
                "  print(x)\n" +
                "except:\n" +
                "  print(\"Something went wrong\")\n" +
                "finally:\n" +
                "  print(\"The 'try except' is finished\")" +
                "```\n" +
                "This can be useful to close objects and clean up resources:\n" +
                "```py\n" +
                "try:\n" +
                "  f = open(\"demofile.txt\")\n" +
                "  f.write(\"Lorem Ipsum\")\n" +
                "except:\n" +
                "  print(\"Something went wrong when writing to the file\")\n" +
                "finally:\n" +
                "  f.close()" +
                "```\n" +
                "The program can continue, without leaving the file object open.\n"
        },
        {
            name: "Raise an exception",
            value: "As a Python developer you can choose to throw an exception if a condition occurs.\n" +
                "\n" +
                "To throw (or raise) an exception, use the `raise` keyword.\n" +
                "```py\n" +
                "x = -1\n" +
                "\n" +
                "if x < 0:\n" +
                "  raise Exception(\"Sorry, no numbers below zero\")" +
                "```\n" +
                "The `raise` keyword is used to raise an exception.\n" +
                "\n" +
                "You can define what kind of error to raise, and the text to print to the user.\n" +
                "```py\n" +
                "x = \"hello\"\n" +
                "\n" +
                "if not type(x) is int:\n" +
                "  raise TypeError(\"Only integers are allowed\")" +
                "```"
        },
    )
    .setTimestamp()
    .setFooter(`DevBot Python Documentation • ${prefix}py`);

module.exports = {
    name: "py-tryexcept",
    category: "Python",
    permissions: ["SEND_MESSAGES"],
    cooldown: "5s",
    testOnly: false,

    callback: ({ message, client }) => {
        message.channel.send(pystringEmbed);
    },
};
