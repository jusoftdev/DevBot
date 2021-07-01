const Discord = require("discord.js");
const { pycolor, prefix } = require("../../../config");

const pystringEmbed = new Discord.MessageEmbed()
    .setColor(pycolor)
    .setTitle("Python - Update Tuples")
    .setURL("https://docs.python.org/3/")
    .setAuthor(
        "DevBot by JuSoft",
        "https://cdn.discordapp.com/attachments/828176464041476111/852459976420229120/devbot-100.png"
    )
    .setThumbnail("https://img.icons8.com/color/2x/python.png")
    .addFields(
        {
            name: "Update Tuples\n",
            value:
                "You can access tuple items by referring to the index number, inside square brackets:\n" +
                "Tuples are unchangeable, meaning that you cannot change, add, or remove items once the tuple is created.\n" +
                "\n" +
                "But there are some workarounds." +
                "```\n"
        },
        {
            name: "Change Tuple Values",
            value: "Once a tuple is created, you cannot change its values. Tuples are **unchangeable**, or **immutable** as it also is called.\n" +
                "\n" +
                "But there is a workaround. You can convert the tuple into a list, change the list, and convert the list back into a tuple.\n" +
                "```py\n" +
                "x = (\"apple\", \"banana\", \"cherry\")\n" +
                "y = list(x)\n" +
                "y[1] = \"kiwi\"\n" +
                "x = tuple(y)\n" +
                "\n" +
                "print(x)" +
                "```"
        },
        {
            name: "Add Items",
            value: "Since tuples are immutable, they do not have a build-in ``append()`` method, but there are other ways to add items to a tuple.\n" +
                "\n" +
                "**1. Convert into a list:** Just like the workaround for changing a tuple, you can convert it into a list, add your item(s), and convert it back into a tuple." +
                "```py\n" +
                "thistuple = (\"apple\", \"banana\", \"cherry\")\n" +
                "y = list(thistuple)\n" +
                "y.append(\"orange\")\n" +
                "thistuple = tuple(y)" +
                "```\n" +
                "**2. Add tuple to a tuple**. You are allowed to add tuples to tuples, so if you want to add one item, (or many), create a new tuple with the item(s), and add it to the existing tuple:\n" +
                "```py\n" +
                "thistuple = (\"apple\", \"banana\", \"cherry\")\n" +
                "y = (\"orange\",)\n" +
                "thistuple += y\n" +
                "\n" +
                "print(thistuple)" +
                "```\n" +
                "```css\n" +
                "[ Note: When creating a tuple with only one item, remember to include a comma after the item, otherwise it will not be identified as a tuple. ]" +
                "```"

        },
        {
            name: "Remove Items",
            value: "```css\n" +
                "[ Note: You cannot remove items in a tuple. ]" +
                "```\n" +
                "Tuples are **unchangeable**, so you cannot remove items from it, but you can use the same workaround as we used for changing and adding tuple items:" +
                "```py\n" +
                "thistuple = (\"apple\", \"banana\", \"cherry\")\n" +
                "y = list(thistuple)\n" +
                "y.remove(\"apple\")\n" +
                "thistuple = tuple(y)" +
                "```\n" +
                "Or you can delete the tuple completely:\n" +
                "```py\n" +
                "thistuple = (\"apple\", \"banana\", \"cherry\")\n" +
                "del thistuple\n" +
                "print(thistuple) #this will raise an error because the tuple no longer exists" +
                "```"
        },
    )
    .setTimestamp()
    .setFooter(`DevBot Python Documentation • ${prefix}py`);

module.exports = {
    name: "py-tuple-update",
    category: "Python",
    permissions: ["SEND_MESSAGES"],
    cooldown: "5s",
    testOnly: false,

    callback: ({ message, client }) => {
        message.channel.send(pystringEmbed);
    },
};
