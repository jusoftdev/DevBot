const Discord = require("discord.js");
const { pycolor, prefix } = require("../../../config");

const pystringEmbed = new Discord.MessageEmbed()
    .setColor(pycolor)
    .setTitle("Python - List Comprehension")
    .setURL("https://docs.python.org/3/")
    .setAuthor(
        "DevBot by JuSoft",
        "https://cdn.discordapp.com/attachments/828176464041476111/852459976420229120/devbot-100.png"
    )
    .setThumbnail("https://img.icons8.com/color/2x/python.png")
    .addFields(
        {
            name: "List Comprehension",
            value:
                "List comprehension offers a shorter syntax when you want to create a new list based on the values of an existing list.\n" +
                "\n" +
                "Example:\n" +
                "\n" +
                "Based on a list of fruits, you want a new list, containing only the fruits with the letter \"a\" in the name.\n" +
                "\n" +
                "Without list comprehension you will have to write a ``for`` statement with a conditional test inside:" +
                "```py\n" +
                "fruits = [\"apple\", \"banana\", \"cherry\", \"kiwi\", \"mango\"]\n" +
                "newlist = []\n" +
                "\n" +
                "for x in fruits:\n" +
                "  if \"a\" in x:\n" +
                "    newlist.append(x)\n" +
                "\n" +
                "print(newlist)\n" +
                "```\n" +
                "With list comprehension you can do all that with only one line of code:\n" +
                "```py\n" +
                "fruits = [\"apple\", \"banana\", \"cherry\", \"kiwi\", \"mango\"]\n" +
                "\n" +
                "newlist = [x for x in fruits if \"a\" in x]\n" +
                "\n" +
                "print(newlist)" +
                "```"
        },
        {
            name: "The Syntax",
            value: "```py\n" +
                "newlist = [expression for item in iterable if condition == True]" +
                "```\n" +
                "The return value is a new list, leaving the old list unchanged."
        },
        {
            name: "Condition",
            value: "The condition is like a filter that only accepts the items that valuate to ``True``.\n" +
                "```py\n" +
                "newlist = [x for x in fruits if x != \"apple\"]" +
                "```\n" +
                "The condition if x != \"apple\"  will return True for all elements other than \"apple\", making the new list contain all fruits except \"apple\".\n" +
                "\n" +
                "The condition is optional and can be omitted:\n" +
                "```py\n" +
                "newlist = [x for x in fruits]\n" +
                "```"
        },
        {
            name: "Iterable",
            value: "The iterable can be any iterable object, like a list, tuple, set etc.\n" +
                "```py\n" +
                "newlist = [x for x in range(10)]" +
                "```\n" +
                "```py\n" +
                "newlist = [x for x in range(10) if x < 5]\n" +
                "```\n"
        },
        {
            name: "Expression",
            value: "The expression is the current item in the iteration, but it is also the outcome, which you can manipulate before it ends up like a list item in the new list:\n" +
                "```py\n" +
                "newlist = [x.upper() for x in fruits]" +
                "```\n" +
                "You can set the outcome to whatever you like:\n" +
                "```py\n" +
                "newlist = ['hello' for x in fruits]\n" +
                "```\n" +
                "The expression can also contain conditions, not like a filter, but as a way to manipulate the outcome:\n" +
                "```py\n" +
                "newlist = [x if x != \"banana\" else \"orange\" for x in fruits]\n" +
                "```\n" +
                "The expression in the example above says:\n" +
                "\"Return the item if it is not banana, if it is banana return orange\".\n"
        },
    )
    .setTimestamp()
    .setFooter(`DevBot Python Documentation • ${prefix}py`);

module.exports = {
    name: "py-list-comprehension",
    category: "Python",
    permissions: ["SEND_MESSAGES"],
    cooldown: "5s",
    testOnly: false,

    callback: ({ message, client }) => {
        message.channel.send(pystringEmbed);
    },
};
