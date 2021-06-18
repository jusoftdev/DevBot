const Discord = require("discord.js");
const { pycolor, prefix } = require("../../../config.js");

const pyvariableEmbed = new Discord.MessageEmbed()
    .setColor(pycolor)
    .setTitle("Python Variable Names")
    .setURL("https://docs.python.org/3/")
    .setAuthor(
        "DevBot by JuSoft",
        "https://cdn.discordapp.com/attachments/828176464041476111/852459976420229120/devbot-100.png"
    )
    .setThumbnail("https://img.icons8.com/color/2x/python.png")
    .addFields(
        {
            name: "Variable Names",
            value:
                "A variable can have a short name (like x and y) or a more descriptive name (age, carname, total_volume). Rules for Python variables:\n" +
                "•A variable name must start with a letter or the underscore character\n" +
                "•A variable name cannot start with a number\n" +
                "•A variable name can only contain alpha-numeric characters and underscores (A-z, 0-9, and _ )\n" +
                "•Variable names are case-sensitive (age, Age and AGE are three different variables)\n" +
                "\n" +
                "```py\nmyvar = \"Joe\"\n" +
                'myvar = "John"\n' +
                'my_var = "John"\n' +
                '_my_var = "John"\n' +
                'myVar = "John"\n' +
                'MYVAR = "John"\n' +
                'myvar2 = "John"\n```',
        },
        {
            name: "Multi Words Variable Names",
            value:
                "Variable names with more than one word can be difficult to read.\n" +
                "\n" +
                "There are several techniques you can use to make them more readable:\n" +
                "**Camel Case**\n" +
                "Each word, except the first, starts with a capital letter:" +
                "```py\nmyVariableName =  \"Joe\"\n```" +
                "**Pascal Case**\n" +
                "Each word starts with a capital letter:\n" +
                "```py\nMyVariableName =  \"Joe\"\n```" +
                "**Snake Case**\n" +
                "Each word is separated by an underscore character:\n" +
                "```py\nMyVariableName =  \"Joe\"\n```"
        },
    )
    .setTimestamp()
    .setFooter(`DevBot Python Documentation • ${prefix}py`);

module.exports = {
    name: "py-variable-names",
    category: "Python",
    permissions: ["SEND_MESSAGES"],
    cooldown: "5s",
    testOnly: false,

    callback: ({ message, client }) => {
        message.channel.send(pyvariableEmbed);
    },
};
