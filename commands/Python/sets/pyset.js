const Discord = require("discord.js");
const { pycolor, prefix } = require("../../../config");

const pystringEmbed = new Discord.MessageEmbed()
    .setColor(pycolor)
    .setTitle("Python Sets")
    .setURL("https://docs.python.org/3/")
    .setAuthor(
        "DevBot by JuSoft",
        "https://cdn.discordapp.com/attachments/828176464041476111/852459976420229120/devbot-100.png"
    )
    .setThumbnail("https://img.icons8.com/color/2x/python.png")
    .addFields(
        {
            name: "Python Sets",
            value:
                "```py\n" +
                "myset = {\"apple\", \"banana\", \"cherry\"}\n" +
                "```"
        },
        {
            name: "Set",
            value:
                "Sets are used to store multiple items in a single variable.\n" +
                "\n" +
                "Set is one of 4 built-in data types in Python used to store collections of data, the other 3 are List, Tuple, and Dictionary, all with different qualities and usage.\n" +
                "\n" +
                "A set is a collection which is both unordered and unindexed.\n" +
                "\n" +
                "Sets are written with curly brackets." +
                "```py\n" +
                "thisset = {\"apple\", \"banana\", \"cherry\"}\n" +
                "print(thisset)"+
                "```\n" +
                "```css\n" +
                "[ Note: Sets are unordered, so you cannot be sure in which order the items will appear. ]\n" +
                "```"
        },
        {
            name: "Set Items",
            value:
                "Set items are unordered, unchangeable, and do not allow duplicate values."
        },
        {
            name: "Unordered",
            value:
                "Unordered means that the items in a set do not have a defined order.\n" +
                "\n" +
                "Set items can appear in a different order every time you use them, and cannot be referred to by index or key."
        },
        {
            name: "Unchangeable",
            value:
                "Sets are unchangeable, meaning that we cannot change the items after the set has been created.\n" +
                "\n" +
                "```css\n" +
                "[ Once a set is created, you cannot change its items, but you can add new items. ]" +
                "```"
        },
        {
            name: "Duplicates Not Allowed",
            value:
                "Sets cannot have two items with the same value.\n" +
                "\n" +
                "```py\n" +
                "thisset = {\"apple\", \"banana\", \"cherry\", \"apple\"}\n" +
                "\n" +
                "print(thisset)" +
                "```"
        },
    )
    .addField('Access Tuple Items', '``dev py-set-access``', true)
    .addField('Update Tuples', '``dev py-set-add``', true)
    .addField('Unpack Tuples', '``dev py-set-remove``', true)
    .addField('Loop Tuples', '``dev py-set-loop``', true)
    .addField('Join Tuples', '``dev py-set-join``', true)
    .addField('Tuple Methods', '``dev py-set-methods``', true)
    .setTimestamp()
    .setFooter(`DevBot Python Documentation • ${prefix}py`);

module.exports = {
    name: "py-set",
    category: "Python",
    permissions: ["SEND_MESSAGES"],
    cooldown: "5s",
    testOnly: false,

    callback: ({ message, client }) => {
        message.channel.send(pystringEmbed);
    },
};
