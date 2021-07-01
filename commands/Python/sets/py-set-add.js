const Discord = require("discord.js");
const { pycolor, prefix } = require("../../../config");

const pystringEmbed = new Discord.MessageEmbed()
    .setColor(pycolor)
    .setTitle("Python - Add Set Items")
    .setURL("https://docs.python.org/3/")
    .setAuthor(
        "DevBot by JuSoft",
        "https://cdn.discordapp.com/attachments/828176464041476111/852459976420229120/devbot-100.png"
    )
    .setThumbnail("https://img.icons8.com/color/2x/python.png")
    .addFields(
        {
            name: "Add Items",
            value:
                "Once a set is created, you cannot change its items, but you can add new items.\n" +
                "\n" +
                "To add one item to a set use the ``add()`` method." +
                "```py\n" +
                "thisset = {\"apple\", \"banana\", \"cherry\"}\n" +
                "\n" +
                "thisset.add(\"orange\")\n" +
                "\n" +
                "print(thisset)" +
                "```\n"
        },
        {
            name: "Add Sets",
            value:
                "To add items from another set into the current set, use the ``update()`` method.\n" +
                "```py\n" +
                "thisset = {\"apple\", \"banana\", \"cherry\"}\n" +
                "tropical = {\"pineapple\", \"mango\", \"papaya\"}\n" +
                "\n" +
                "thisset.update(tropical)\n" +
                "\n" +
                "print(thisset)" +
                "```"
        },
        {
            name: "Add Any Iterable",
            value:
                "The object in the ``update()`` method does not have to be a set, it can be any iterable object (tuples, lists, dictionaries etc.)..\n" +
                "```py\n" +
                "thisset = {\"apple\", \"banana\", \"cherry\"}\n" +
                "mylist = [\"kiwi\", \"orange\"]\n" +
                "\n" +
                "thisset.update(mylist)\n" +
                "\n" +
                "print(thisset)" +
                "```"
        },
    )
    .setTimestamp()
    .setFooter(`DevBot Python Documentation • ${prefix}py`);

module.exports = {
    name: "py-set-add",
    category: "Python",
    permissions: ["SEND_MESSAGES"],
    cooldown: "5s",
    testOnly: false,

    callback: ({ message, client }) => {
        message.channel.send(pystringEmbed);
    },
};
