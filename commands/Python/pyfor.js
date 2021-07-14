const Discord = require("discord.js");
const { pycolor, prefix } = require("../../config");

const pystringEmbed = new Discord.MessageEmbed()
    .setColor(pycolor)
    .setTitle("Python For Loops")
    .setURL("https://docs.python.org/3/")
    .setAuthor(
        "DevBot by JuSoft",
        "https://cdn.discordapp.com/attachments/828176464041476111/852459976420229120/devbot-100.png"
    )
    .setThumbnail("https://img.icons8.com/color/2x/python.png")
    .addFields(
        {
            name: "Python For Loops",
            value:
                "A ``for`` loop is used for iterating over a sequence (that is either a list, a tuple, a dictionary, a set, or a string).\n" +
                "\n" +
                "This is less like the ``for`` keyword in other programming languages, and works more like an iterator method as found in other object-orientated programming languages.\n" +
                "\n" +
                "With the ``for`` loop we can execute a set of statements, once for each item in a list, tuple, set etc.\n" +
                "```py\n" +
                "fruits = [\"apple\", \"banana\", \"cherry\"]\n" +
                "for x in fruits:\n" +
                "  print(x)" +
                "```\n" +
                "The ``for`` loop does not require an indexing variable to set beforehand."
        },
        {
            name: "Looping Through a String",
            value:
                "Even strings are iterable objects, they contain a sequence of characters:\n" +
                "```py\n" +
                "for x in \"banana\":\n" +
                "  print(x)" +
                "```"
        },
        {
            name: "The break Statement",
            value:
                "With the ``break`` statement we can stop the loop before it has looped through all the items:\n" +
                "```py\n" +
                "fruits = [\"apple\", \"banana\", \"cherry\"]\n" +
                "for x in fruits:\n" +
                "  print(x)\n" +
                "  if x == \"banana\":\n" +
                "    break" +
                "```\n" +
                "```py\n" +
                "fruits = [\"apple\", \"banana\", \"cherry\"]\n" +
                "for x in fruits:\n" +
                "  if x == \"banana\":\n" +
                "    break\n" +
                "  print(x)" +
                "```"
        },
        {
            name: "The continue Statement",
            value:
                "With the ``continue`` statement we can stop the current iteration of the loop, and continue with the next:\n" +
                "```py\n" +
                "fruits = [\"apple\", \"banana\", \"cherry\"]\n" +
                "for x in fruits:\n" +
                "  if x == \"banana\":\n" +
                "    continue\n" +
                "  print(x)" +
                "```"
        },
        {
            name: "The range() Function",
            value:
                "To loop through a set of code a specified number of times, we can use the ``range()`` function,\n" +
                "The ``range()`` function returns a sequence of numbers, starting from 0 by default, and increments by 1 (by default), and ends at a specified number.\n" +
                "```py\n" +
                "for x in range(6):\n" +
                "  print(x)" +
                "```\n" +
                "```css\n" +
                "[ Note that range(6) is not the values of 0 to 6, but the values 0 to 5. ]" +
                "```\n" +
                "The ``range()`` function defaults to 0 as a starting value, however it is possible to specify the starting value by adding a parameter: ``range(2, 6)``, which means values from 2 to 6 (but not including 6):\n" +
                "```py\n" +
                "for x in range(2, 6):\n" +
                "  print(x)" +
                "```\n" +
                "The ``range()`` function defaults to increment the sequence by 1, however it is possible to specify the increment value by adding a third parameter: ``range(2, 30, 3)``:\n" +
                "```py\n" +
                "for x in range(2, 30, 3):\n" +
                "  print(x)" +
                "```"
        },
        {
            name: "Else in For Loop",
            value:
                "The ``else`` keyword in a ``for`` loop specifies a block of code to be executed when the loop is finished:\n" +
                "```py\n" +
                "for x in range(6):\n" +
                "  print(x)\n" +
                "else:\n" +
                "  print(\"Finally finished!\")" +
                "```\n" +
                "```css\n" +
                "[ Note: The else block will NOT be executed if the loop is stopped by a break statement. ]\n" +
                "```py\n" +
                "for x in range(6):\n" +
                "  if x == 3: break\n" +
                "  print(x)\n" +
                "else:\n" +
                "  print(\"Finally finished!\")" +
                "```"
        },
        {
            name: "Nested Loops",
            value:
                "A nested loop is a loop inside a loop.\n" +
                "\n" +
                "The \"inner loop\" will be executed one time for each iteration of the \"outer loop\":\n" +
                "```py\n" +
                "adj = [\"red\", \"big\", \"tasty\"]\n" +
                "fruits = [\"apple\", \"banana\", \"cherry\"]\n" +
                "\n" +
                "for x in adj:\n" +
                "  for y in fruits:\n" +
                "    print(x, y)" +
                "```"
        },
        {
            name: "The pass Statement",
            value:
                "``for`` loops cannot be empty, but if you for some reason have a ``for`` loop with no content, put in the ``pass`` statement to avoid getting an error.\n" +
                "```py\n" +
                "for x in [0, 1, 2]:\n" +
                "  pass" +
                "```"
        },
    )
    .setTimestamp()
    .setFooter(`DevBot Python Documentation • ${prefix}py`);

module.exports = {
    name: "py-for",
    category: "Python",
    permissions: ["SEND_MESSAGES"],
    cooldown: "5s",
    testOnly: false,

    callback: ({ message, client }) => {
        message.channel.send(pystringEmbed);
    },
};
