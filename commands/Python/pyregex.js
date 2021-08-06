const Discord = require("discord.js");
const { pycolor, prefix } = require("../../config");

const pystringEmbed = new Discord.MessageEmbed()
    .setColor(pycolor)
    .setTitle("Python RegEx")
    .setURL("https://docs.python.org/3/")
    .setAuthor(
        "DevBot by JuSoft",
        "https://cdn.discordapp.com/attachments/828176464041476111/852459976420229120/devbot-100.png"
    )
    .setThumbnail("https://img.icons8.com/color/2x/python.png")
    .addFields(
        {
            name: "Python RegEx",
            value:
                "A RegEx, or Regular Expression, is a sequence of characters that forms a search pattern.\n" +
                "\n" +
                "RegEx can be used to check if a string contains the specified search pattern."
        },
        {
            name: "RegEx Module",
            value:
                "Python has a built-in package called `re, which can be used to work with Regular Expressions.\n" +
                "Import the `re` module:" +
                "```py\n" +
                "import re" +
                "```"
        },
        {
            name: "RegEx in Python",
            value:
                "When you have imported the `re` module, you can start using regular expressions:\n" +
                "\n" +
                "```py\n" +
                "import re\n" +
                "\n" +
                "txt = \"The rain in Spain\"\n" +
                "x = re.search(\"^The.*Spain$\", txt)" +
                "```"
        },
        {
            name: "RegEx Functions",
            value:
                "The `re module offers a set of functions that allows us to search a string for a match: *(attachment)*\n"
        },
        {
            name: "Metacharacters",
            value: "Metacharacters are characters with a special meaning: *(attachment)*\n"
        },
        {
            name: "Special Sequences",
            value: "A special sequence is a `\` followed by one of the characters in the list below, and has a special meaning: *(attachment)*\n"
        },
        {
            name: "Sets",
            value: "A set is a set of characters inside a pair of square brackets `[]` with a special meaning: *(attachment)*\n"
        },
        {
            name: "The findall() Function",
            value: "The `findall()` function returns a list containing all matches.\n" +
                "```py\n" +
                "import re\n" +
                "\n" +
                "txt = \"The rain in Spain\"\n" +
                "x = re.findall(\"ai\", txt)\n" +
                "print(x)" +
                "```\n" +
                "The list contains the matches in the order they are found.\n" +
                "\n" +
                "If no matches are found, an empty list is returned:" +
                "```py\n" +
                "import re\n" +
                "\n" +
                "txt = \"The rain in Spain\"\n" +
                "x = re.findall(\"Portugal\", txt)\n" +
                "print(x)" +
                "```"
        },
        {
            name: "The search() Function",
            value: "The `search()` function searches the string for a match, and returns a __Match object__ if there is a match.\n" +
                "\n" +
                "If there is more than one match, only the first occurrence of the match will be returned:\n" +
                "```py\n" +
                "import re\n" +
                "\n" +
                "txt = \"The rain in Spain\"\n" +
                "x = re.search(\"\\s\", txt)\n" +
                "\n" +
                "print(\"The first white-space character is located in position:\", x.start())" +
                "```\n" +
                "If no matches are found, the value `None` is returned:\n" +
                "```py\n" +
                "import re\n" +
                "\n" +
                "txt = \"The rain in Spain\"\n" +
                "x = re.search(\"Portugal\", txt)\n" +
                "print(x)" +
                "```"
        },
        {
            name: "The split() Function",
            value: "The `split()` function returns a list where the string has been split at each match:\n" +
                "\n" +
                "```py\n" +
                "import re\n" +
                "\n" +
                "txt = \"The rain in Spain\"\n" +
                "x = re.split(\"\\s\", txt)\n" +
                "print(x)" +
                "```\n" +
                "You can control the number of occurrences by specifying the `maxsplit` parameter\n" +
                "```py\n" +
                "import re\n" +
                "\n" +
                "txt = \"The rain in Spain\"\n" +
                "x = re.split(\"\\s\", txt, 1)\n" +
                "print(x)" +
                "```"
        },
        {
            name: "The sub() Function",
            value: "The `sub()` function replaces the matches with the text of your choice:\n" +
                "\n" +
                "```py\n" +
                "import re\n" +
                "\n" +
                "txt = \"The rain in Spain\"\n" +
                "x = re.sub(\"\\s\", \"9\", txt)\n" +
                "print(x)" +
                "```\n" +
                "You can control the number of replacements by specifying the `count` parameter:\n" +
                "```py\n" +
                "import re\n" +
                "\n" +
                "txt = \"The rain in Spain\"\n" +
                "x = re.sub(\"\\s\", \"9\", txt, 2)\n" +
                "print(x)" +
                "```"
        },
        {
            name: "Match Object",
            value: "A Match Object is an object containing information about the search and the result.\n" +
                "```css\n" +
                "[ Note: If there is no match, the value None will be returned, instead of the Match Object. ]" +
                "```" +
                "\n" +
                "```py\n" +
                "import re\n" +
                "\n" +
                "txt = \"The rain in Spain\"\n" +
                "x = re.search(\"ai\", txt)\n" +
                "print(x) #this will print an object" +
                "```\n" +
                "The Match object has properties and methods used to retrieve information about the search, and the result:\n" +
                "\n" +
                "`.span()` returns a tuple containing the start-, and end positions of the match.\n" +
                "`.string` returns the string passed into the function\n" +
                "`.group()` returns the part of the string where there was a match\n"
        },
        {
            name: "Match Object",
            value: "```py\n" +
                "import re\n" +
                "\n" +
                "txt = \"The rain in Spain\"\n" +
                "x = re.search(r\"\\bS\\w+\", txt)\n" +
                "print(x.span())" +
                "```\n" +
                "```py\n" +
                "import re\n" +
                "\n" +
                "txt = \"The rain in Spain\"\n" +
                "x = re.search(r\"\\bS\\w+\", txt)\n"+
                "print(x.string)" +
                "```\n" +
                "```py\n" +
                "import re\n" +
                "\n" +
                "txt = \"The rain in Spain\"\n" +
                "x = re.search(r\"\\bS\\w+\", txt)\n" +
                "print(x.group())" +
                "```\n" +
                "```css\n" +
                "[ Note: If there is no match, the value None will be returned, instead of the Match Object. ]" +
                "```"
        },
    )
    .setImage("https://i.imgur.com/qqJ2bf8.png")
    .setTimestamp()
    .setFooter(`DevBot Python Documentation • ${prefix}py`);

module.exports = {
    name: "py-regex",
    category: "Python",
    permissions: ["SEND_MESSAGES"],
    cooldown: "5s",
    testOnly: false,

    callback: ({ message, client }) => {
        message.channel.send(pystringEmbed);
    },
};
