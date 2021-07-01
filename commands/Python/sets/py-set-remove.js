const Discord = require("discord.js");
const { pycolor, prefix } = require("../../../config");

const pystringEmbed = new Discord.MessageEmbed()
    .setColor(pycolor)
    .setTitle("Python - Remove Set Items")
    .setURL("https://docs.python.org/3/")
    .setAuthor(
        "DevBot by JuSoft",
        "https://cdn.discordapp.com/attachments/828176464041476111/852459976420229120/devbot-100.png"
    )
    .setThumbnail("https://img.icons8.com/color/2x/python.png")
    .addFields(
        {
            name: "Remove Item",
            value:
                "To remove an item in a set, use the ``remove()``, or the ``discard()`` method.\n" +
                "\n" +
                "thisset = {\"apple\", \"banana\", \"cherry\"}\n" +
                "\n" +
                "thisset.remove(\"banana\")\n" +
                "\n" +
                "print(thisset)" +
                "```\n" +
                "```css\n" +
                "[ Note: If the item to remove does not exist, remove() will raise an error. ]\n" +
                "```\n" +
                "```py\n" +
                "thisset = {\"apple\", \"banana\", \"cherry\"}\n" +
                "\n" +
                "thisset.discard(\"banana\")\n" +
                "\n" +
                "print(thisset)" +
                "```\n" +
                "```css\n" +
                "[ Note: If the item to remove does not exist, discard() will NOT raise an error. ]\n" +
                "```\n" +
                "You can also use the ``pop()`` method to remove an item, but this method will remove the last item. Remember that sets are unordered, so you will not know what item that gets removed.\n" +
                "\n" +
                "The return value of the ``pop()`` method is the removed item.\n" +
                "```py\n" +
                "thisset = {\"apple\", \"banana\", \"cherry\"}\n" +
                "\n" +
                "x = thisset.pop()\n" +
                "\n" +
                "print(x)\n" +
                "\n" +
                "print(thisset)" +
                "```\n"
        },
        {
            name: "Remove Item",
            value:
                "```css\n" +
                "[ Note: Sets are unordered, so when using the pop() method, you do not know which item that gets removed. ]" +
                "```\n" +
                "```py\n" +
                "thisset = {\"apple\", \"banana\", \"cherry\"}\n" +
                "\n" +
                "thisset.clear()\n" +
                "\n" +
                "print(thisset)" +
                "```\n" +
                "```py\n" +
                "thisset = {\"apple\", \"banana\", \"cherry\"}\n" +
                "\n" +
                "del thisset\n" +
                "\n" +
                "print(thisset)" +
                "```"
        },
    )
    .setTimestamp()
    .setFooter(`DevBot Python Documentation • ${prefix}py`);

module.exports = {
    name: "py-set-remove",
    category: "Python",
    permissions: ["SEND_MESSAGES"],
    cooldown: "5s",
    testOnly: false,

    callback: ({ message, client }) => {
        message.channel.send(pystringEmbed);
    },
};
