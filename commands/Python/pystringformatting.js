const Discord = require("discord.js");
const { pycolor, prefix } = require("../../config");

const pystringEmbed = new Discord.MessageEmbed()
    .setColor(pycolor)
    .setTitle("Python String Formatting")
    .setURL("https://docs.python.org/3/")
    .setAuthor(
        "DevBot by JuSoft",
        "https://cdn.discordapp.com/attachments/828176464041476111/852459976420229120/devbot-100.png"
    )
    .setThumbnail("https://img.icons8.com/color/2x/python.png")
    .addFields(
        {
            name: "String Formatting",
            value:
                "To make sure a string will display as expected, we can format the result with the `format()` method.\n"
        },
        {
            name: "String format()",
            value:
                "The format() method allows you to format selected parts of a string.\n" +
                "\n" +
                "Sometimes there are parts of a text that you do not control, maybe they come from a database, or user input?\n" +
                "\n" +
                "To control such values, add placeholders (curly brackets {}) in the text, and run the values through the format() method:\n" +
                "\n" +
                "```py\n" +
                "price = 49\n" +
                "txt = \"The price is {} dollars\"\n" +
                "print(txt.format(price))" +
                "```\n" +
                "You can add parameters inside the curly brackets to specify how to convert the value:\n" +
                "\n" +
                "```py\n" +
                "txt = \"The price is {:.2f} dollars\"" +
                "```"
        },
        {
            name: "Multiple Values",
            value:
                "If you want to use more values, just add more values to the format() method:\n" +
                "```py\n" +
                "print(txt.format(price, itemno, count))" +
                "```\n" +
                "And add more placeholders:\n" +
                "```py\n" +
                "quantity = 3\n" +
                "itemno = 567\n" +
                "price = 49\n" +
                "myorder = \"I want {} pieces of item number {} for {:.2f} dollars.\"\n" +
                "print(myorder.format(quantity, itemno, price))" +
                "```"
        },
        {
            name: "Index Numbers",
            value:
                "You can use index numbers (a number inside the curly brackets `{0}) to be sure the values are placed in the correct placeholders:\n" +
                "```py\n" +
                "quantity = 3\n" +
                "itemno = 567\n" +
                "price = 49\n" +
                "myorder = \"I want {0} pieces of item number {1} for {2:.2f} dollars.\"\n" +
                "print(myorder.format(quantity, itemno, price))" +
                "```\n" +
                "Also, if you want to refer to the same value more than once, use the index number:\n" +
                "```py\n" +
                "age = 36\n" +
                "name = \"John\"\n" +
                "txt = \"His name is {1}. {1} is {0} years old.\"\n" +
                "print(txt.format(age, name))" +
                "```"
        },
        {
            name: "Named Indexes",
            value:
                "You can also use named indexes by entering a name inside the curly brackets {carname}, but then you must use names when you pass the parameter values txt.format(carname = \"Audi\"):\n" +
                "```py\n" +
                "myorder = \"I have a {carname}, it is a {model}.\"\n" +
                "print(myorder.format(carname = \"Audi\", model = \"R8\"))" +
                "```"
        },
    )
    .setTimestamp()
    .setFooter(`DevBot Python Documentation • ${prefix}py`);

module.exports = {
    name: "py-stringformatting",
    category: "Python",
    permissions: ["SEND_MESSAGES"],
    cooldown: "5s",
    testOnly: false,

    callback: ({ message, client }) => {
        message.channel.send(pystringEmbed);
    },
};
