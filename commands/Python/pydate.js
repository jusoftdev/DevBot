const Discord = require("discord.js");
const { pycolor, prefix } = require("../../config");

const pystringEmbed = new Discord.MessageEmbed()
    .setColor(pycolor)
    .setTitle("Python Datetime")
    .setURL("https://docs.python.org/3/")
    .setAuthor(
        "DevBot by JuSoft",
        "https://cdn.discordapp.com/attachments/828176464041476111/852459976420229120/devbot-100.png"
    )
    .setThumbnail("https://img.icons8.com/color/2x/python.png")
    .addFields(
        {
            name: "Python Dates",
            value:
                "A date in Python is not a data type of its own, but we can import a module named `datetime` to work with dates as date objects.\n" +
                "```py\n" +
                "import datetime\n" +
                "\n" +
                "x = datetime.datetime.now()\n" +
                "print(x)" +
                "```"
        },
        {
            name: "Date Output",
            value:
                "When we execute the code from the example above the result will be:\n" +
                "```\n" +
                "2021-08-06 11:32:39.906747" +
                "```" +
                "The date contains year, month, day, hour, minute, second, and microsecond.\n" +
                "\n" +
                "The `datetime` module has many methods to return information about the date object.\n" +
                "\n" +
                "Here are a few examples, you will learn more about them later in this chapter:" +
                "```py\n" +
                "import datetime\n" +
                "\n" +
                "x = datetime.datetime.now()\n" +
                "\n" +
                "print(x.year)\n" +
                "print(x.strftime(\"%A\"))" +
                "```"
        },
        {
            name: "Creating Date Objects",
            value:
                "To create a date, we can use the `datetime()` class (constructor) of the datetime module.\n" +
                "\n" +
                "The `datetime()` class requires three parameters to create a date: year, month, day.\n" +
                "\n" +
                "```py\n" +
                "import datetime\n" +
                "\n" +
                "x = datetime.datetime(2020, 5, 17)\n" +
                "\n" +
                "print(x)" +
                "```\n" +
                "The `datetime()` class also takes parameters for time and timezone (hour, minute, second, microsecond, tzone), but they are optional, and has a default value of `0`, (`None for timezone)."
        },
        {
            name: "The strftime() Method",
            value:
                "The `datetime` object has a method for formatting date objects into readable strings.\n" +
                "\n" +
                "The method is called `strftime()`, and takes one parameter, format, to specify the `format of the returned string:" +
                "```py\n" +
                "import datetime\n" +
                "\n" +
                "x = datetime.datetime(2021, 8, 6)\n" +
                "\n" +
                "print(x.strftime(\"%B\"))" +
                "```"
        },
        {
            name: "Reference",
            value: "A reference of all the legal format codes:"
        },
    )
    .setImage("https://i.imgur.com/aNJd2wW.png")
    .setTimestamp()
    .setFooter(`DevBot Python Documentation • ${prefix}py`);

module.exports = {
    name: "py-dates",
    category: "Python",
    permissions: ["SEND_MESSAGES"],
    cooldown: "5s",
    testOnly: false,

    callback: ({ message, client }) => {
        message.channel.send(pystringEmbed);
    },
};
