const Discord = require("discord.js");
const { pycolor, prefix } = require("../../../config");

const pystringEmbed = new Discord.MessageEmbed()
    .setColor(pycolor)
    .setTitle("Python - Nested Dictionaries")
    .setURL("https://docs.python.org/3/")
    .setAuthor(
        "DevBot by JuSoft",
        "https://cdn.discordapp.com/attachments/828176464041476111/852459976420229120/devbot-100.png"
    )
    .setThumbnail("https://img.icons8.com/color/2x/python.png")
    .addFields(
        {
            name: "Nested Dictionaries",
            value:
                "A dictionary can contain dictionaries, this is called nested dictionaries." +
                "```py\n" +
                "myfamily = {\n" +
                "  \"child1\" : {\n" +
                "    \"name\" : \"Emil\",\n" +
                "    \"year\" : 2004\n" +
                "  },\n" +
                "  \"child2\" : {\n" +
                "    \"name\" : \"Tobias\",\n" +
                "    \"year\" : 2007\n" +
                "  },\n" +
                "  \"child3\" : {\n" +
                "    \"name\" : \"Linus\",\n" +
                "    \"year\" : 2011\n" +
                "  }\n" +
                "}" +
                "```\n" +
                "Or, if you want to add three dictionaries into a new dictionary:\n" +
                "```py\n" +
                "child1 = {\n" +
                "  \"name\" : \"Emil\",\n" +
                "  \"year\" : 2004\n" +
                "}\n" +
                "child2 = {\n" +
                "  \"name\" : \"Tobias\",\n" +
                "  \"year\" : 2007\n" +
                "}\n" +
                "child3 = {\n" +
                "  \"name\" : \"Linus\",\n" +
                "  \"year\" : 2011\n" +
                "}\n" +
                "\n" +
                "myfamily = {\n" +
                "  \"child1\" : child1,\n" +
                "  \"child2\" : child2,\n" +
                "  \"child3\" : child3\n" +
                "}" +
                "```"
        },
    )
    .setTimestamp()
    .setFooter(`DevBot Python Documentation • ${prefix}py`);

module.exports = {
    name: "py-dictionary-nested",
    category: "Python",
    permissions: ["SEND_MESSAGES"],
    cooldown: "5s",
    testOnly: false,

    callback: ({ message, client }) => {
        message.channel.send(pystringEmbed);
    },
};
