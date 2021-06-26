const Discord = require("discord.js");
const { pycolor, prefix } = require("../../../config");

const pycastEmbed = new Discord.MessageEmbed()
    .setColor(pycolor)
    .setTitle("Python Strings")
    .setURL("https://docs.python.org/3/")
    .setAuthor(
        "DevBot by JuSoft",
        "https://cdn.discordapp.com/attachments/828176464041476111/852459976420229120/devbot-100.png"
    )
    .setThumbnail("https://img.icons8.com/color/2x/python.png")
    .addFields(
        {
            name: "Strings",
            value:
                "Strings in python are surrounded by either single quotation marks, or double quotation marks.\n" +
                "\n" +
                "``'hello'`` is the same as ``\"hello\"``\n" +
                "\n" +
                "```py\n" +
                "print(\"Hello\")\n" +
                "print('Hello') \n" +
                "```"
        },
        {
            name: "Assign String to a Variable",
            value:
                "Assigning a string to a variable is done with the variable name followed by an equal sign and the string:\n" +
                "```py\n" +
                "a = \"Hello\"\n" +
                "print(a)" +
                "```"
        },
        {
            name: "Multiline Strings",
            value:
                "You can assign a multiline string to a variable by using three quotes:\n" +
                "```py\n" +
                "a = \"\"\"Lorem ipsum dolor sit amet,\n" +
                "consectetur adipiscing elit,\n" +
                "sed do eiusmod tempor incididunt\n" +
                "ut labore et dolore magna aliqua.\"\"\"\n" +
                "print(a)" +
                "```\n" +
                "Or three single quotes:\n" +
                "```py\n" +
                "a = '''Lorem ipsum dolor sit amet,\n" +
                "consectetur adipiscing elit,\n" +
                "sed do eiusmod tempor incididunt\n" +
                "ut labore et dolore magna aliqua.'''\n" +
                "print(a)" +
                "```"
        },
        {
            name: "Strings are Arrays",
            value:
                "Like many other popular programming languages, strings in Python are arrays of bytes representing unicode characters.\n" +
                "\n" +
                "However, Python does not have a character data type, a single character is simply a string with a length of 1.\n" +
                "\n" +
                "Square brackets can be used to access elements of the string.\n" +
                "```py\n" +
                "a = \"Hello, World!\"\n" +
                "print(a[1])" +
                "```"
        },
        {
            name: "Looping Through a String",
            value:
                "Since strings are arrays, we can loop through the characters in a string, with a ``for`` loop.\n" +
                "```py\n" +
                "for x in \"banana\":\n" +
                "  print(x)" +
                "```"
        },
        {
            name: "String Length",
            value:
                "To get the length of a string, use the ``len()`` function.\n" +
                "```py\n" +
                "a = \"Hello, World!\"\n" +
                "print(len(a))" +
                "```"
        },
        {
            name: "Check String",
            value:
                "To check if a certain phrase or character is present in a string, we can use the keyword ``in``.\n" +
                "```py\n" +
                "txt = \"The best things in life are free!\"\n" +
                "print(\"free\" in txt)" +
                "```\n" +
                "Use it in an if statement:" +
                "```py\n" +
                "txt = \"The best things in life are free!\"\n" +
                "if \"free\" in txt:\n" +
                "  print(\"Yes, 'free' is present.\")" +
                "```"
        },
        {
            name: "Check if NOT",
            value:
                "To check if a certain phrase or character is NOT present in a string, we can use the keyword ``not in``.\n" +
                "```py\n" +
                "txt = \"The best things in life are free!\"\n" +
                "print(\"expensive\" not in txt)" +
                "```\n" +
                "Use it in an if statement:\n" +
                "```py\n" +
                "txt = \"The best things in life are free!\"\n" +
                "if \"expensive\" not in txt:\n" +
                "  print(\"Yes, 'expensive' is NOT present.\")" +
                "```"
        },
    )
    .addField('Slicing Strings', '``dev py-string-slicing``', true)
    .addField('Modify Strings', '``dev py-string-modify``', true)
    .addField('Concatenate Strings', '``dev py-string-concatenate``', true)
    .addField('Format Strings', '``dev py-string-format``', true)
    .addField('Escape Characters', '``dev py-string-escape``', true)
    .addField('String Methods', '``dev py-string-methods``', true)
    .setTimestamp()
    .setFooter(`DevBot Python Documentation • ${prefix}py`);

module.exports = {
    name: "py-string",
    category: "Python",
    permissions: ["SEND_MESSAGES"],
    cooldown: "5s",
    testOnly: false,

    callback: ({ message, client }) => {
        message.channel.send(pycastEmbed);
    },
};
