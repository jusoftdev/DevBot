const Discord = require("discord.js");
const { pycolor, prefix } = require("../../../config");

const pystringEmbed = new Discord.MessageEmbed()
    .setColor(pycolor)
    .setTitle("Python Dictionaries")
    .setURL("https://docs.python.org/3/")
    .setAuthor(
        "DevBot by JuSoft",
        "https://cdn.discordapp.com/attachments/828176464041476111/852459976420229120/devbot-100.png"
    )
    .setThumbnail("https://img.icons8.com/color/2x/python.png")
    .addFields(
        {
            name: "Python Dictionaries",
            value:
                "```py\n" +
                "thisdict = {\n" +
                "  \"brand\": \"Ford\",\n" +
                "  \"model\": \"Mustang\",\n" +
                "  \"year\": 1964\n" +
                "}" +
                "```"
        },
        {
            name: "Dictionary",
            value:
                "Dictionaries are used to store data values in key:value pairs.\n" +
                "\n" +
                "A dictionary is a collection which is ordered*, changeable and does not allow duplicates\n" +
                "```css\n" +
                "[ As of Python version 3.7, dictionaries are ordered. In Python 3.6 and earlier, dictionaries are unordered. ] \n" +
                "```\n" +
                "Dictionaries are written with curly brackets, and have keys and values:\n" +
                "```py\n" +
                "thisdict = {\n" +
                "  \"brand\": \"Ford\",\n" +
                "  \"model\": \"Mustang\",\n" +
                "  \"year\": 1964\n" +
                "}\n" +
                "print(thisdict)" +
                "```\n"
        },
        {
            name: "Dictionary Items",
            value:
                "Dictionary items are ordered, changeable, and does not allow duplicates.\n" +
                "\n" +
                "Dictionary items are presented in key:value pairs, and can be referred to by using the key name.\n" +
                "\n" +
                "```py\n" +
                "thisdict = {\n" +
                "  \"brand\": \"Ford\",\n" +
                "  \"model\": \"Mustang\",\n" +
                "  \"year\": 1964\n" +
                "}\n" +
                "print(thisdict[\"brand\"])" +
                "```"
        },
        {
            name: "Ordered or Unordered?",
            value:
                "```css\n" +
                "As of Python version 3.7, dictionaries are ordered. In Python 3.6 and earlier, dictionaries are unordered." +
                "```" +
                "When we say that dictionaries are ordered, it means that the items have a defined order, and that order will not change.\n" +
                "\n" +
                "Unordered means that the items does not have a defined order, you cannot refer to an item by using an index."
        },
        {
            name: "Unchangeable",
            value:
                "Dictionaries are changeable, meaning that we can change, add or remove items after the dictionary has been created.\n" +
                "\n"
        },
        {
            name: "Duplicates Not Allowed",
            value:
                "Dictionaries cannot have two items with the same key:\n" +
                "\n" +
                "```py\n" +
                "thisdict = {\n" +
                "  \"brand\": \"Ford\",\n" +
                "  \"model\": \"Mustang\",\n" +
                "  \"year\": 1964,\n" +
                "  \"year\": 2020\n" +
                "}\n" +
                "print(thisdict)" +
                "```"
        },
        {
            name: "Dictionary Length",
            value:
                "To determine how many items a dictionary has, use the ``len()`` function:\n" +
                "\n" +
                "```py\n" +
                "print(len(thisdict))" +
                "```"
        },
        {
            name: "Dictionary Items - Data Types",
            value:
                "The values in dictionary items can be of any data type:\n" +
                "\n" +
                "```py\n" +
                "thisdict = {\n" +
                "  \"brand\": \"Ford\",\n" +
                "  \"electric\": False,\n" +
                "  \"year\": 1964,\n" +
                "  \"colors\": [\"red\", \"white\", \"blue\"]\n" +
                "}" +
                "```"
        },
        {
            name: "type()",
            value:
                "From Python's perspective, dictionaries are defined as objects with the data type 'dict':" +
                "\n" +
                "```py\n" +
                "<class 'dict'>" +
                "```\n" +
                "" +
                "```py\n" +
                "thisdict = {\n" +
                "  \"brand\": \"Ford\",\n" +
                "  \"model\": \"Mustang\",\n" +
                "  \"year\": 1964\n" +
                "}\n" +
                "print(type(thisdict))" +
                "```"
        },
        {
            name: "Python Collections (Arrays)",
            value:
                "There are four collection data types in the Python programming language:\n" +
                "• List is a collection which is ordered and changeable. Allows duplicate members.\n" +
                "• Tuple is a collection which is ordered and unchangeable. Allows duplicate members.\n" +
                "• Set is a collection which is unordered and unindexed. No duplicate members.\n" +
                "• Dictionary is a collection which is ordered and changeable. No duplicate members.\n" +
                "When choosing a collection type, it is useful to understand the properties of that type. Choosing the right type for a particular data set could mean retention of meaning, and, it could mean an increase in efficiency or security."
        },
    )
    .addField('Access Dictionary Items', '``dev py-dictionary-access``', true)
    .addField('Change Dictionary Items', '``dev py-dictionary-change``', true)
    .addField('Add Dictionary Items', '``dev py-dictionary-add``', true)
    .addField('Remove Dictionary Items', '``dev py-dictionary-remove``', true)
    .addField('Loop Dictionaries', '``dev py-dictionary-loop``', true)
    .addField('Copy Dictionaries', '``dev py-dictionary-copy``', true)
    .addField('Nested Dictionaries', '``dev py-dictionary-nested``', true)
    .addField('Dictionary Methods', '``dev py-dictionary-methods``', true)
    .setTimestamp()
    .setFooter(`DevBot Python Documentation • ${prefix}py`);

module.exports = {
    name: "py-dictionary",
    category: "Python",
    permissions: ["SEND_MESSAGES"],
    cooldown: "5s",
    testOnly: false,

    callback: ({ message, client }) => {
        message.channel.send(pystringEmbed);
    },
};
