const Discord = require("discord.js");
const { pycolor, prefix } = require("../../../config");

const pystringEmbed = new Discord.MessageEmbed()
    .setColor(pycolor)
    .setTitle("Python - Change List Items")
    .setURL("https://docs.python.org/3/")
    .setAuthor(
        "DevBot by JuSoft",
        "https://cdn.discordapp.com/attachments/828176464041476111/852459976420229120/devbot-100.png"
    )
    .setThumbnail("https://img.icons8.com/color/2x/python.png")
    .addFields(
        {
            name: "Change Item Value",
            value:
                "To change the value of a specific item, refer to the index number:\n" +
                "```py\n" +
                "thislist = [\"apple\", \"banana\", \"cherry\"]\n" +
                "thislist[1] = \"blackcurrant\"\n" +
                "print(thislist)" +
                "```"
        },
        {
            name: "Change a Range of Item Values",
            value: "To change the value of items within a specific range, define a list with the new values, and refer to the range of index numbers where you want to insert the new values:\n" +
                "```py\n" +
                "thislist = [\"apple\", \"banana\", \"cherry\", \"orange\", \"kiwi\", \"mango\"]\n" +
                "thislist[1:3] = [\"blackcurrant\", \"watermelon\"]\n" +
                "print(thislist)" +
                "```\n" +
                "If you insert more items than you replace, the new items will be inserted where you specified, and the remaining items will move accordingly:\n" +
                "thislist = [\"apple\", \"banana\", \"cherry\"]\n" +
                "thislist[1:2] = [\"blackcurrant\", \"watermelon\"]\n" +
                "print(thislist)\n" +
                "```\n" +
                "```css\n" +
                "[ Note: The length of the list will change when the number of items inserted does not match the number of items replaced. ]\n" +
                "```\n" +
                "If you insert less items than you replace, the new items will be inserted where you specified, and the remaining items will move accordingly:\n" +
                "```py\n" +
                "thislist = [\"apple\", \"banana\", \"cherry\"]\n" +
                "thislist[1:3] = [\"watermelon\"]\n" +
                "print(thislist)\n" +
                "```"
        },
        {
            name: "Insert Items",
            value: "To insert a new list item, without replacing any of the existing values, we can use the ``insert()`` method.\n" +
                "\n" +
                "The ``insert()`` method inserts an item at the specified index:\n" +
                "```py\n" +
                "thislist = [\"apple\", \"banana\", \"cherry\"]\n" +
                "thislist.insert(2, \"watermelon\")\n" +
                "print(thislist)\n"+
                "```\n" +
                "```css\n" +
                "[ Note: As a result of the example above, the list will now contain 4 items. ]\n" +
                "```\n"
        },
    )
    .setTimestamp()
    .setFooter(`DevBot Python Documentation • ${prefix}py`);

module.exports = {
    name: "py-list-change",
    category: "Python",
    permissions: ["SEND_MESSAGES"],
    cooldown: "5s",
    testOnly: false,

    callback: ({ message, client }) => {
        message.channel.send(pystringEmbed);
    },
};
