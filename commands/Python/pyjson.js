const Discord = require("discord.js");
const { pycolor, prefix } = require("../../config");

const pystringEmbed = new Discord.MessageEmbed()
    .setColor(pycolor)
    .setTitle("Python JSON")
    .setURL("https://docs.python.org/3/")
    .setAuthor(
        "DevBot by JuSoft",
        "https://cdn.discordapp.com/attachments/828176464041476111/852459976420229120/devbot-100.png"
    )
    .setThumbnail("https://img.icons8.com/color/2x/python.png")
    .addFields(
        {
            name: "Python JSON",
            value:
                "JSON is a syntax for storing and exchanging data.\n" +
                "\n" +
                "JSON is text, written with JavaScript object notation.\n"
        },
        {
            name: "JSON in Python",
            value:
                "Python has a built-in package called `json`, which can be used to work with JSON data.\n" +
                "```py\n" +
                "import json" +
                "```"
        },
        {
            name: "Parse JSON - Convert from JSON to Python",
            value:
                "If you have a JSON string, you can parse it by using the `json.loads()` method.\n" +
                "\n" +
                "```css\n" +
                "[ The result will be a Python dictionary (dev py-dictionary) ]" +
                "```\n" +
                "```py\n" +
                "import json\n" +
                "\n" +
                "# some JSON:\n" +
                "x =  '{ \"name\":\"John\", \"age\":30, \"city\":\"New York\"}'\n" +
                "\n" +
                "# parse x:\n" +
                "y = json.loads(x)\n" +
                "\n" +
                "# the result is a Python dictionary:\n" +
                "print(y[\"age\"])\n" +
                "```"
        },
        {
            name: "Convert from Python to JSON",
            value:
                "If you have a Python object, you can convert it into a JSON string by using the `json.dumps()` method.\n" +
                "```py\n" +
                "import json\n" +
                "\n" +
                "# a Python object (dict):\n" +
                "x = {\n" +
                "  \"name\": \"John\",\n" +
                "  \"age\": 30,\n" +
                "  \"city\": \"New York\"\n" +
                "}\n" +
                "\n" +
                "# convert into JSON:\n" +
                "y = json.dumps(x)\n" +
                "\n" +
                "# the result is a JSON string:\n" +
                "print(y)" +
                "```\n" +
                "You can convert Python objects of the following types, into JSON strings:\n" +
                "•dict\n" +
                "•list\n" +
                "•tuple\n" +
                "•string\n" +
                "•int\n" +
                "•float\n" +
                "•True\n" +
                "•False\n" +
                "•None\n" +
                "```py\n" +
                "import json\n" +
                "\n" +
                "print(json.dumps({\"name\": \"John\", \"age\": 30}))\n" +
                "print(json.dumps([\"apple\", \"bananas\"]))\n" +
                "print(json.dumps((\"apple\", \"bananas\")))\n" +
                "print(json.dumps(\"hello\"))\n" +
                "print(json.dumps(42))\n" +
                "print(json.dumps(31.76))\n" +
                "print(json.dumps(True))\n" +
                "print(json.dumps(False))\n" +
                "print(json.dumps(None))" +
                "```\n" +
                "When you convert from Python to JSON, Python objects are converted into the JSON (JavaScript) equivalent *(see attachment)*\n"
        },
        {
            name: "Convert from Python to JSON",
            value: "```py\n" +
                "import json\n" +
                "\n" +
                "x = {\n" +
                "  \"name\": \"John\",\n" +
                "  \"age\": 30,\n" +
                "  \"married\": True,\n" +
                "  \"divorced\": False,\n" +
                "  \"children\": (\"Ann\",\"Billy\"),\n" +
                "  \"pets\": None,\n" +
                "  \"cars\": [\n" +
                "    {\"model\": \"BMW 230\", \"mpg\": 27.5},\n" +
                "    {\"model\": \"Ford Edge\", \"mpg\": 24.1}\n" +
                "  ]\n" +
                "}\n" +
                "\n" +
                "print(json.dumps(x))" +
                "```"
        },
        {
            name: "Format the Result",
            value: "The example above prints a JSON string, but it is not very easy to read, with no indentations and line breaks.\n" +
                "\n" +
                "The `json.dumps()` method has parameters to make it easier to read the result:" +
                "```py\n" +
                "json.dumps(x, indent=4)" +
                "```\n" +
                "You can also define the separators, default value is (\", \", \": \"), which means using a comma and a space to separate each object, and a colon and a space to separate keys from values:\n" +
                "```py\n" +
                "json.dumps(x, indent=4, separators=(\". \", \" = \"))" +
                "```"
        },
        {
            name: "Order the Result",
            value: "The `json.dumps()` method has parameters to order the keys in the result:\n" +
                "\n" +
                "The `json.dumps()` method has parameters to make it easier to read the result:" +
                "```py\n" +
                "json.dumps(x, indent=4, sort_keys=True)" +
                "```"
        },
    )
    .setTimestamp()
    .setFooter(`DevBot Python Documentation • ${prefix}py`);

module.exports = {
    name: "py-json",
    category: "Python",
    permissions: ["SEND_MESSAGES"],
    cooldown: "5s",
    testOnly: false,

    callback: ({ message, client }) => {
        message.channel.send(pystringEmbed);
    },
};
