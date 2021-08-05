const Discord = require("discord.js");
const { pycolor, prefix } = require("../../config");

const pystringEmbed = new Discord.MessageEmbed()
    .setColor(pycolor)
    .setTitle("Python Modules")
    .setURL("https://docs.python.org/3/")
    .setAuthor(
        "DevBot by JuSoft",
        "https://cdn.discordapp.com/attachments/828176464041476111/852459976420229120/devbot-100.png"
    )
    .setThumbnail("https://img.icons8.com/color/2x/python.png")
    .addFields(
        {
            name: "What is a Module?",
            value:
                "Consider a module to be the same as a code library.\n" +
                "\n" +
                "A file containing a set of functions you want to include in your application.\n"
        },
        {
            name: "Create a Module",
            value:
                "To create a module just save the code you want in a file with the file extension `.py:\n" +
                "\n" +
                "*Save this code in a file named `mymodule.py`*" +
                "```py\n" +
                "def greeting(name):\n" +
                "  print(\"Hello, \" + name)" +
                "```"
        },
        {
            name: "Use a module",
            value:
                "Now we can use the module we just created, by using the `import statement:\n" +
                "\n" +
                "```py\n" +
                "import mymodule\n" +
                "\n" +
                "mymodule.greeting(\"Jonathan\")" +
                "```\n" +
                "```css" +
                "[ Note: When using a function from a module, use the syntax: module_name.function_name. ]" +
                "```"
        },
        {
            name: "Variables in Module",
            value:
                "The module can contain functions, as already described, but also variables of all types (arrays, dictionaries, objects etc):" +
                "```py\n" +
                "person1 = {\n" +
                "  \"name\": \"John\",\n" +
                "  \"age\": 36,\n" +
                "  \"country\": \"Norway\"\n" +
                "}"+
                "```\n" +
                "```py\n" +
                "import mymodule\n" +
                "\n" +
                "a = mymodule.person1[\"age\"]\n" +
                "print(a)" +
                "```"
        },
        {
            name: "Naming a Module",
            value: "You can name the module file whatever you like, but it must have the file extension `.py`"
        },
        {
            name: "Re-naming a Module",
            value: "You can create an alias when you import a module, by using the `as` keyword:\n" +
                "```py\n" +
                "import mymodule as mx\n" +
                "\n" +
                "a = mx.person1[\"age\"]\n" +
                "print(a)" +
                "```"
        },
        {
            name: "Built-in Modules",
            value: "There are several built-in modules in Python, which you can import whenever you like.\n" +
                "```py\n" +
                "import platform\n" +
                "\n" +
                "x = platform.system()\n" +
                "print(x)" +
                "```"
        },
        {
            name: "Using the dir() Functions",
            value: "There is a built-in function to list all the function names (or variable names) in a module. The `dir()` function:\n" +
                "```py\n" +
                "import platform\n" +
                "\n" +
                "x = dir(platform)\n" +
                "print(x)" +
                "```\n" +
                "```css" +
                "[ Note: The dir() function can be used on all modules, also the ones you create yourself. ]" +
                "```"
        },
        {
            name: "Import From Modules",
            value: "You can choose to import only parts from a module, by using the `from` keyword.\n" +
                "```py\n" +
                "def greeting(name):\n" +
                "  print(\"Hello, \" + name)\n" +
                "\n" +
                "person1 = {\n" +
                "  \"name\": \"John\",\n" +
                "  \"age\": 36,\n" +
                "  \"country\": \"Norway\"\n" +
                "}" +
                "```\n" +
                "```py\n" +
                "from mymodule import person1\n" +
                "\n" +
                "print (person1[\"age\"])" +
                "```" +
                "```py\n" +
                "Note: When importing using the from keyword, do not use the module name when referring to elements in the module. Example: person1[\"age\"], not mymodule.person1[\"age\"]" +
                "```"
        },
    )
    .setTimestamp()
    .setFooter(`DevBot Python Documentation • ${prefix}py`);

module.exports = {
    name: "py-modules",
    category: "Python",
    permissions: ["SEND_MESSAGES"],
    cooldown: "5s",
    testOnly: false,

    callback: ({ message, client }) => {
        message.channel.send(pystringEmbed);
    },
};
