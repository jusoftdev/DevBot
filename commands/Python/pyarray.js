const Discord = require("discord.js");
const { pycolor, prefix } = require("../../config");

const pystringEmbed = new Discord.MessageEmbed()
    .setColor(pycolor)
    .setTitle("Python Arrays")
    .setURL("https://docs.python.org/3/")
    .setAuthor(
        "DevBot by JuSoft",
        "https://cdn.discordapp.com/attachments/828176464041476111/852459976420229120/devbot-100.png"
    )
    .setThumbnail("https://img.icons8.com/color/2x/python.png")
    .addFields(
        {
            name: "Arrays",
            value:
                "```css\n" +
                "[ Note: Python does not have built-in support for Arrays, but Python Lists can be used instead. ]" +
                "```\n" +
                "```css\n" +
                "[ Note: This shows you how to use LISTS as ARRAYS, however, to work with arrays in Python you will have to import a library, like the NumPy library. ]" +
                "```\n" +
                "Arrays are used to store multiple values in one single variable:\n" +
                "```py\n" +
                "cars = [\"Ford\", \"Volvo\", \"BMW\"]" +
                "```"
        },
        {
            name: "What is an Array?",
            value:
                "An array is a special variable, which can hold more than one value at a time.\n" +
                "\n" +
                "If you have a list of items (a list of car names, for example), storing the cars in single variables could look like this:" +
                "```py\n" +
                "car1 = \"Ford\"\n" +
                "car2 = \"Volvo\"\n" +
                "car3 = \"BMW\"" +
                "```\n" +
                "However, what if you want to loop through the cars and find a specific one? And what if you had not 3 cars, but 300?\n" +
                "\n" +
                "The solution is an array!\n" +
                "\n" +
                "An array can hold many values under a single name, and you can access the values by referring to an index number."
        },
        {
            name: "Access the Elements of an Array",
            value:
                "You refer to an array element by referring to the index number.\n" +
                "```py\n" +
                "x = cars[0]" +
                "```\n" +
                "```py\n" +
                "cars[0] = \"Toyota\"" +
                "```"
        },
        {
            name: "The Length of an Array",
            value:
                "Use the ``len()`` method to return the length of an array (the number of elements in an array).\n" +
                "```py\n" +
                "x = len(cars)" +
                "```\n" +
                "```css\n" +
                "[ Note: The length of an array is always one more than the highest array index. ]" +
                "```"
        },
        {
            name: "Looping Array Elements",
            value:
                "You can use the ``for in`` loop to loop through all the elements of an array.\n" +
                "```py\n" +
                "for x in cars:\n" +
                "  print(x)" +
                "```"
        },
        {
            name: "Adding Array Elements",
            value:
                "You can use the ``append()`` method to add an element to an array.\n" +
                "```py\n" +
                "cars.append(\"Porsche\")" +
                "```"
        },
        {
            name: "Removing Array Elements",
            value:
                "You can use the ``pop()`` method to remove an element from the array.\n" +
                "```py\n" +
                "cars.pop(1)" +
                "```\n" +
                "You can also use the ``remove()`` method to remove an element from the array.\n" +
                "```py\n" +
                "cars.remove(\"Volvo\")" +
                "```\n" +
                "```css\n" +
                "[ Note: The list's remove() method only removes the first occurrence of the specified value. ]" +
                "```"
        },
        {
            name: "Array Methods",
            value:
                "Python has a set of built-in methods that you can use on lists/arrays.\n" +
                "```css\n" +
                "[ Note: Python does not have built-in support for Arrays, but Python Lists can be used instead. ]" +
                "```"
        },
    )
    .setImage("https://i.imgur.com/8rqsfNx.png")
    .setTimestamp()
    .setFooter(`DevBot Python Documentation • ${prefix}py`);

module.exports = {
    name: "py-array",
    category: "Python",
    permissions: ["SEND_MESSAGES"],
    cooldown: "5s",
    testOnly: false,

    callback: ({ message, client }) => {
        message.channel.send(pystringEmbed);
    },
};
