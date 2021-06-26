const Discord = require("discord.js");
const { pycolor, prefix } = require("../../../config");

const pystringEmbed = new Discord.MessageEmbed()
    .setColor(pycolor)
    .setTitle("Python Lists")
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
                "mylist = [\"apple\", \"banana\", \"cherry\"]\n" +
                "```"
        },
        {
            name: "List",
            value: "Lists are used to store multiple items in a single variable.\n" +
                "\n" +
                "Lists are one of 4 built-in data types in Python used to store collections of data, the other 3 are Tuple, Set, and Dictionary, all with different qualities and usage.\n" +
                "\n" +
                "Lists are created using square brackets:\n" +
                "```py\n" +
                "thislist = [\"apple\", \"banana\", \"cherry\"]\n" +
                "print(thislist)" +
                "```"
        },
        {
            name: "List Items",
            value: "List items are ordered, changeable, and allow duplicate values.\n" +
                "\n" +
                "List items are indexed, the first item has index ``[0]``, the second item has index ``[1]`` etc.\n" +
                "\n"
        },
        {
            name: "Ordered",
            value: "When we say that lists are ordered, it means that the items have a defined order, and that order will not change.\n" +
                "\n" +
                "If you add new items to a list, the new items will be placed at the end of the list.\n" +
                "\n" +
                "```css\n" +
                "[ Note: There are some list methods that will change the order, but in general: the order of the items will not change. ]"
        },
        {
            name: "Changeable",
            value: "The list is changeable, meaning that we can change, add, and remove items in a list after it has been created.\n"
        },
        {
            name: "Allow Duplicates",
            value: "Since lists are indexed, lists can have items with the same value:\n" +
                "```py\n" +
                "thislist = [\"apple\", \"banana\", \"cherry\", \"apple\", \"cherry\"]\n" +
                "print(thislist)" +
                "```"
        },
        {
            name: "List Length",
            value: "To determine how many items a list has, use the ``len()`` function:\n" +
                "```py\n" +
                "thislist = [\"apple\", \"banana\", \"cherry\"]\n" +
                "print(len(thislist))" +
                "```"
        },
        {
            name: "List Items - Data Types",
            value: "List items can be of any data type:\n" +
                "```py\n" +
                "list1 = [\"apple\", \"banana\", \"cherry\"]\n" +
                "list2 = [1, 5, 7, 9, 3]\n" +
                "list3 = [True, False, False]" +
                "```\n" +
                "A list can contain different data types:\n" +
                "```py\n" +
                "list1 = [\"abc\", 34, True, 40, \"male\"]" +
                "```"
        },
        {
            name: "type()",
            value: "From Python's perspective, lists are defined as objects with the data type 'list':\n" +
                "```py\n" +
                "<class 'list'>" +
                "```py\n" +
                "mylist = [\"apple\", \"banana\", \"cherry\"]\n" +
                "print(type(mylist))" +
                "```"

        },
        {
            name: "The list() Constructor",
            value: "It is also possible to use the ``list()`` constructor when creating a new list.\n" +
                "```py\n" +
                "thislist = list((\"apple\", \"banana\", \"cherry\")) # note the double round-brackets\n" +
                "print(thislist)" +
                "```"

        },
        {
            name: "Python Collections (Arrays)",
            value: "There are four collection data types in the Python programming language:\n" +
                "•List is a collection which is ordered and changeable. Allows duplicate members.\n" +
                "•Tuple is a collection which is ordered and unchangeable. Allows duplicate members.\n" +
                "•Set is a collection which is unordered and unindexed. No duplicate members.\n" +
                "•Dictionary is a collection which is ordered* and changeable. No duplicate members." +
                "```yaml\n" +
                "*As of Python version 3.7, dictionaries are ordered. In Python 3.6 and earlier, dictionaries are unordered." +
                "```"
        },
    )
    .addField('Access List Items', '``dev py-list-access``', true)
    .addField('Change List Items', '``dev py-list-change``', true)
    .addField('Add List Items', '``dev py-list-add``', true)
    .addField('Remove List Items', '``dev py-list-remove``', true)
    .addField('Loop Lists', '``dev py-list-loop``', true)
    .addField('List Comprehension', '``dev py-list-comprehension``', true)
    .addField('Sort Lists', '``dev py-list-sort``', true)
    .addField('Copy Lists', '``dev py-list-copy``', true)
    .addField('Join Lists', '``dev py-list-join``', true)
    .addField('List Methods', '``dev py-list-methods``', true)
    .setTimestamp()
    .setFooter(`DevBot Python Documentation • ${prefix}py`);

module.exports = {
    name: "py-list",
    category: "Python",
    permissions: ["SEND_MESSAGES"],
    cooldown: "5s",
    testOnly: false,

    callback: ({ message, client }) => {
        message.channel.send(pystringEmbed);
    },
};
