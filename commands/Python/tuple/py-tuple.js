const Discord = require("discord.js");
const { pycolor, prefix } = require("../../../config");

const pystringEmbed = new Discord.MessageEmbed()
    .setColor(pycolor)
    .setTitle("Python Tuples")
    .setURL("https://docs.python.org/3/")
    .setAuthor(
        "DevBot by JuSoft",
        "https://cdn.discordapp.com/attachments/828176464041476111/852459976420229120/devbot-100.png"
    )
    .setThumbnail("https://img.icons8.com/color/2x/python.png")
    .addFields(
        {
            name: "Python Lists",
            value:
                "```py\n" +
                "mytuple = (\"apple\", \"banana\", \"cherry\")\n" +
                "```"
        },
        {
            name: "Tuple",
            value: "Tuples are used to store multiple items in a single variable.\n" +
                "\n" +
                "Tuple is one of 4 built-in data types in Python used to store collections of data, the other 3 are List, Set, and Dictionary, all with different qualities and usage.\n" +
                "\n" +
                "A tuple is a collection which is ordered and **unchangeable**.\n" +
                "\n" +
                "Tuples are written with round brackets.\n" +
                "```py\n" +
                "thistuple = (\"apple\", \"banana\", \"cherry\")\n" +
                "print(thistuple)\n" +
                "```"
        },
        {
            name: "Tuple Items",
            value: "Tuple items are ordered, unchangeable, and allow duplicate values.\n" +
                "\n" +
                "Tuple items are indexed, the first item has index [0], the second item has index [1] etc.\n"

        },
        {
            name: "Ordered",
            value: "When we say that tuples are ordered, it means that the items have a defined order, and that order will not change.\n"
        },
        {
            name: "Unchangeable",
            value: "Tuples are unchangeable, meaning that we cannot change, add or remove items after the tuple has been created.\n"
        },
        {
            name: "Allow Duplicates",
            value: "Since tuples are indexed, they can have items with the same value:\n" +
                "```py\n" +
                "thistuple = (\"apple\", \"banana\", \"cherry\", \"apple\", \"cherry\")\n" +
                "print(thistuple)\n" +
                "```"
        },
        {
            name: "Tuple Length",
            value: "To determine how many items a tuple has, use the ``len()`` function:\n" +
                "```py\n" +
                "thistuple = (\"apple\", \"banana\", \"cherry\")\n" +
                "print(len(thistuple))\n" +
                "```"
        },
        {
            name: "Create Tuple With One Item",
            value: "To create a tuple with only one item, you have to add a comma after the item, otherwise Python will not recognize it as a tuple.\n" +
                "```py\n" +
                "thistuple = (\"apple\",)\n" +
                "print(type(thistuple))\n" +
                "\n" +
                "#NOT a tuple\n" +
                "thistuple = (\"apple\")\n" +
                "print(type(thistuple))\n" +
                "```"
        },
        {
            name: "Tuple Items - Data Types",
            value: "Tuple items can be of any data type:\n" +
                "```py\n" +
                "tuple1 = (\"apple\", \"banana\", \"cherry\")\n" +
                "tuple2 = (1, 5, 7, 9, 3)\n" +
                "tuple3 = (True, False, False)\n" +
                "```\n" +
                "A tuple can contain different data types:\n" +
                "```py\n" +
                "tuple1 = (\"abc\", 34, True, 40, \"male\")\n" +
                "```"

        },
        {
            name: "type()",
            value: "From Python's perspective, tuples are defined as objects with the data type 'tuple':\n" +
                "\n" +
                "```py\n" +
                "<class 'tuple'>\n" +
                "```\n" +
                "```py\n" +
                "mytuple = (\"apple\", \"banana\", \"cherry\")\n" +
                "print(type(mytuple))\n" +
                "```"

        },
        {
            name: "The tuple() Constructor",
            value: "It is also possible to use the ``tuple()`` constructor to make a tuple.\n" +
                "```py\n" +
                "thistuple = tuple((\"apple\", \"banana\", \"cherry\")) # note the double round-brackets\n" +
                "print(thistuple)\n" +
                "```"
        },
        {
            name: "Python Collections (Arrays)",
            value: "There are four collection data types in the Python programming language:\n" +
                "•List is a collection which is ordered and changeable. Allows duplicate members.\n" +
                "•Tuple is a collection which is ordered and unchangeable. Allows duplicate members.\n" +
                "•Set is a collection which is unordered and unindexed. No duplicate members.\n" +
                "•Dictionary is a collection which is ordered* and changeable. No duplicate members." +
                "```yaml\n " +
                "*As of Python version 3.7, dictionaries are ordered. In Python 3.6 and earlier, dictionaries are unordered.\n" +
                "```\n" +
                    "When choosing a collection type, it is useful to understand the properties of that type.\n" +
                    "Choosing the right type for a particular data set could mean retention of meaning, and, it could mean an increase in efficiency or security."
        },
    )
    .addField('Access Tuple Items', '``dev py-tuple-access``', true)
    .addField('Update Tuples', '``dev py-tuple-update``', true)
    .addField('Unpack Tuples', '``dev py-tuple-unpack``', true)
    .addField('Loop Tuples', '``dev py-tuple-loop``', true)
    .addField('Join Tuples', '``dev py-tuple-join``', true)
    .addField('Tuple Methods', '``dev py-tuple-methods``', true)
    .setTimestamp()
    .setFooter(`DevBot Python Documentation • ${prefix}py`);

module.exports = {
    name: "py-tuple",
    category: "Python",
    permissions: ["SEND_MESSAGES"],
    cooldown: "5s",
    testOnly: false,

    callback: ({ message, client }) => {
        message.channel.send(pystringEmbed);
    },
};
