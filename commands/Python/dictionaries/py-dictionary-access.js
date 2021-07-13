const Discord = require("discord.js");
const { pycolor, prefix } = require("../../../config");

const pystringEmbed = new Discord.MessageEmbed()
    .setColor(pycolor)
    .setTitle("Python - Access Dictionary Items")
    .setURL("https://docs.python.org/3/")
    .setAuthor(
        "DevBot by JuSoft",
        "https://cdn.discordapp.com/attachments/828176464041476111/852459976420229120/devbot-100.png"
    )
    .setThumbnail("https://img.icons8.com/color/2x/python.png")
    .addFields(
        {
            name: "Accessing Items",
            value:
                "You can access the items of a dictionary by referring to its key name, inside square brackets:\n" +
                "```py\n" +
                "thisdict = {\n" +
                "  \"brand\": \"Ford\",\n" +
                "  \"model\": \"Mustang\",\n" +
                "  \"year\": 1964\n" +
                "}\n" +
                "x = thisdict[\"model\"]" +
                "```\n" +
                "There is also a method called ``get()`` that will give you the same result:\n" +
                "```py\n" +
                "x = thisdict.get(\"model\")\n" +
                "```"
        },
        {
            name: "Get Keys",
            value:
                "The ``keys()`` method will return a list of all the keys in the dictionary.\n" +
                "\n" +
                "```py\n" +
                "x = thisdict.keys()" +
                "```\n" +
                "The list of the keys is a view of the dictionary, meaning that any changes done to the dictionary will be reflected in the keys list.\n" +
                "```py\n" +
                "car = {\n" +
                "\"brand\": \"Ford\",\n" +
                "\"model\": \"Mustang\",\n" +
                "\"year\": 1964\n" +
                "}\n" +
                "\n" +
                "x = car.keys()\n" +
                "\n" +
                "print(x) #before the change\n" +
                "\n" +
                "car[\"color\"] = \"white\"\n" +
                "\n" +
                "print(x) #after the change" +
                "```"
        },
        {
            name: "Get Values",
            value:
                "The ``values()`` method will return a list of all the values in the dictionary.\n" +
                "\n" +
                "```py\n" +
                "x = thisdict.values()" +
                "```\n" +
                "The list of the values is a view of the dictionary, meaning that any changes done to the dictionary will be reflected in the values list.\n" +
                "```py\n" +
                "car = {\n" +
                "\"brand\": \"Ford\",\n" +
                "\"model\": \"Mustang\",\n" +
                "\"year\": 1964\n" +
                "}\n" +
                "\n" +
                "x = car.values()\n" +
                "\n" +
                "print(x) #before the change\n" +
                "\n" +
                "car[\"year\"] = 2020\n" +
                "\n" +
                "print(x) #after the change" +
                "```\n" +
                "```py\n" +
                "car = {\n" +
                "\"brand\": \"Ford\",\n" +
                "\"model\": \"Mustang\",\n" +
                "\"year\": 1964\n" +
                "}\n" +
                "\n" +
                "x = car.values()\n" +
                "\n" +
                "print(x) #before the change\n" +
                "\n" +
                "car[\"color\"] = \"red\"\n" +
                "\n" +
                "print(x) #after the change" +
                "```"
        },
        {
            name: "Get Items",
            value:
                "The ``items()`` method will return each item in a dictionary, as tuples in a list.\n" +
                "\n" +
                "```py\n" +
                "x = thisdict.items()\n" +
                "```\n" +
                "The returned list is a view of the items of the dictionary, meaning that any changes done to the dictionary will be reflected in the items list.\n" +
                "```py\n" +
                "car = {\n" +
                "\"brand\": \"Ford\",\n" +
                "\"model\": \"Mustang\",\n" +
                "\"year\": 1964\n" +
                "}\n" +
                "\n" +
                "x = car.items()\n" +
                "\n" +
                "print(x) #before the change\n" +
                "\n" +
                "car[\"year\"] = 2020\n" +
                "\n" +
                "print(x) #after the change" +
                "```\n" +
                "```py\n" +
                "car = {\n" +
                "\"brand\": \"Ford\",\n" +
                "\"model\": \"Mustang\",\n" +
                "\"year\": 1964\n" +
                "}\n" +
                "\n" +
                "x = car.items()\n" +
                "\n" +
                "print(x) #before the change\n" +
                "\n" +
                "car[\"color\"] = \"red\"\n" +
                "\n" +
                "print(x) #after the change" +
                "```"
        },
        {
            name: "Check if Key Exists",
            value:
                "To determine if a specified key is present in a dictionary use the in keyword:\n" +
                "```py\n" +
                "thisdict = {\n" +
                "  \"brand\": \"Ford\",\n" +
                "  \"model\": \"Mustang\",\n" +
                "  \"year\": 1964\n" +
                "}\n" +
                "if \"model\" in thisdict:\n" +
                "  print(\"Yes, 'model' is one of the keys in the thisdict dictionary\")" +
                "```"
        },
    )
    .setTimestamp()
    .setFooter(`DevBot Python Documentation • ${prefix}py`);

module.exports = {
    name: "py-dictionary-access",
    category: "Python",
    permissions: ["SEND_MESSAGES"],
    cooldown: "5s",
    testOnly: false,

    callback: ({ message, client }) => {
        message.channel.send(pystringEmbed);
    },
};
