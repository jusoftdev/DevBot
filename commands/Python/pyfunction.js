const Discord = require("discord.js");
const { pycolor, prefix } = require("../../config");

const pystringEmbed = new Discord.MessageEmbed()
    .setColor(pycolor)
    .setTitle("Python Functions")
    .setURL("https://docs.python.org/3/")
    .setAuthor(
        "DevBot by JuSoft",
        "https://cdn.discordapp.com/attachments/828176464041476111/852459976420229120/devbot-100.png"
    )
    .setThumbnail("https://img.icons8.com/color/2x/python.png")
    .addFields(
        {
            name: "Functions",
            value:
                "A function is a block of code which only runs when it is called.\n" +
                "\n" +
                "You can pass data, known as parameters, into a function.\n" +
                "\n" +
                "A function can return data as a result."
        },
        {
            name: "Creating a Function",
            value:
                "In Python a function is defined using the `def` keyword:\n" +
                "\n" +
                "```py\n" +
                "def my_function():\n" +
                "  print(\"Hello from a function\")" +
                "```\n"
        },
        {
            name: "Calling a Function",
            value:
                "To call a function, use the function name followed by parenthesis:\n" +
                "\n" +
                "```py\n" +
                "def my_function():\n" +
                "  print(\"Hello from a function\")\n" +
                "\n" +
                "my_function()" +
                "```\n"
        },
        {
            name: "Arguments",
            value:
                "Information can be passed into functions as arguments.\n" +
                "\n" +
                "Arguments are specified after the function name, inside the parentheses. You can add as many arguments as you want, just separate them with a comma.\n" +
                "\n" +
                "The following example has a function with one argument (fname). When the function is called, we pass along a first name, which is used inside the function to print the full name:" +
                "```py\n" +
                "def my_function(fname):\n" +
                "  print(fname + \" Refsnes\")\n" +
                "\n" +
                "my_function(\"Emil\")\n" +
                "my_function(\"Tobias\")\n" +
                "my_function(\"Linus\")" +
                "```\n" +
                "```css\n" +
                "[ Arguments are often shortened to args in Python documentations. ]" +
                "```"
        },
        {
            name: "Parameters or Arguments?",
            value:
                "The terms *parameter* and *argument* can be used for the same thing: information that are passed into a function.\n" +
                "```css\n" +
                "[ From a function's perspective:\n" +
                "\n" +
                "A parameter is the variable listed inside the parentheses in the function definition.\n" +
                "\n" +
                "An argument is the value that is sent to the function when it is called. ]\n" +
                "```"
        },
        {
            name: "Number of Arguments",
            value:
                "By default, a function must be called with the correct number of arguments. Meaning that if your function expects 2 arguments, you have to call the function with 2 arguments, not more, and not less.\n" +
                "\n" +
                "```py\n" +
                "def my_function(fname, lname):\n" +
                "  print(fname + \" \" + lname)\n" +
                "\n" +
                "my_function(\"Emil\", \"Refsnes\")" +
                "```\n" +
                "If you try to call the function with 1 or 3 arguments, you will get an error:\n" +
                "```py\n" +
                "def my_function(fname, lname):\n" +
                "  print(fname + \" \" + lname)\n" +
                "\n" +
                "my_function(\"Emil\")" +
                "``"
        },
        {
            name: "Arbitrary Arguments, *args",
            value:
                "If you do not know how many arguments that will be passed into your function, add a * before the parameter name in the function definition.\n" +
                "\n" +
                "This way the function will receive a tuple of arguments, and can access the items accordingly:\n" +
                "\n" +
                "```py\n" +
                "def my_function(*kids):\n" +
                "  print(\"The youngest child is \" + kids[2])\n" +
                "\n" +
                "my_function(\"Emil\", \"Tobias\", \"Linus\")" +
                "```\n" +
                "```css\n" +
                "[ Arbitrary Arguments are often shortened to *args in Python documentations. ]" +
                "```"
        },
        {
            name: "Keyword Arguments",
            value:
                "You can also send arguments with the key = value syntax.\n" +
                "\n" +
                "This way the order of the arguments does not matter." +
                "```py\n" +
                "def my_function(child3, child2, child1):\n" +
                "  print(\"The youngest child is \" + child3)\n" +
                "\n" +
                "my_function(child1 = \"Emil\", child2 = \"Tobias\", child3 = \"Linus\")" +
                "```"+
                "```css\n" +
                "[ The phrase Keyword Arguments are often shortened to kwargs in Python documentations. ]" +
                "```"
        },
        {
            name: "Arbitrary Keyword Arguments, **kwargs",
            value:
                "If you do not know how many keyword arguments that will be passed into your function, add two asterisk: `**` before the parameter name in the function definition.\n" +
                "\n" +
                "This way the function will receive a dictionary of arguments, and can access the items accordingly:" +
                "```py\n" +
                "def my_function(**kid):\n" +
                "  print(\"His last name is \" + kid[\"lname\"])\n" +
                "\n" +
                "my_function(fname = \"Tobias\", lname = \"Refsnes\")" +
                "```"+
                "```css\n" +
                "[ Arbitrary Kword Arguments are often shortened to **kwargs in Python documentations. ]" +
                "```"
        },
        {
            name: "Default Parameter Value",
            value:
                "The following example shows how to use a default parameter value.\n" +
                "\n" +
                "If we call the function without argument, it uses the default value:\n" +
                "\n" +
                "```py\n" +
                "def my_function(country = \"Norway\"):\n" +
                "  print(\"I am from \" + country)\n" +
                "\n" +
                "my_function(\"Sweden\")\n" +
                "my_function(\"India\")\n" +
                "my_function()\n" +
                "my_function(\"Brazil\")" +
                "```"
        },
        {
            name: "Passing a List as an Argument",
            value:
                "You can send any data types of argument to a function (string, number, list, dictionary etc.), and it will be treated as the same data type inside the function.\n" +
                "\n" +
                "E.g. if you send a List as an argument, it will still be a List when it reaches the function:" +
                "\n" +
                "```py\n" +
                "def my_function(food):\n" +
                "  for x in food:\n" +
                "    print(x)\n" +
                "\n" +
                "fruits = [\"apple\", \"banana\", \"cherry\"]\n" +
                "\n" +
                "my_function(fruits)" +
                "```"
        },
        {
            name: "Return Values",
            value:
                "To let a function return a value, use the `return` statement:" +
                "\n" +
                "```py\n" +
                "def my_function(x):\n" +
                "  return 5 * x\n" +
                "\n" +
                "print(my_function(3))\n" +
                "print(my_function(5))\n" +
                "print(my_function(9))" +
                "```"
        },
        {
            name: "The pass Statement",
            value:
                "`function` definitions cannot be empty, but if you for some reason have a `function` definition with no content, put in the `pass` statement to avoid getting an error." +
                "\n" +
                "```py\n" +
                "def myfunction():\n" +
                "  pass" +
                "```"
        },
        {
            name: "Recursion",
            value:
                "Python also accepts function recursion, which means a defined function can call itself.\n" +
                "\n" +
                "Recursion is a common mathematical and programming concept. It means that a function calls itself. This has the benefit of meaning that you can loop through data to reach a result.\n" +
                "\n" +
                "The developer should be very careful with recursion as it can be quite easy to slip into writing a function which never terminates, or one that uses excess amounts of memory or processor power. However, when written correctly recursion can be a very efficient and mathematically-elegant approach to programming.\n" +
                "\n" +
                "In this example, `tri_recursion()` is a function that we have defined to call itself (\"recurse\"). We use the `k` variable as the data, which decrements (`-1`) every time we recurse. The recursion ends when the condition is not greater than 0 (i.e. when it is 0).\n" +
                "\n" +
                "To a new developer it can take some time to work out how exactly this works, best way to find out is by testing and modifying it." +
                "\n"
        },
        {
            name: "Example",
            value:
                "```py\n" +
                "def tri_recursion(k):\n" +
                "  if(k > 0):\n" +
                "    result = k + tri_recursion(k - 1)\n" +
                "    print(result)\n" +
                "  else:\n" +
                "    result = 0\n" +
                "  return result\n" +
                "\n" +
                "print(\"\\n\\nRecursion Example Results\")\n" +
                "tri_recursion(6)" +
                "```"
        },
    )
    .setTimestamp()
    .setFooter(`DevBot Python Documentation • ${prefix}py`);

module.exports = {
    name: "py-function",
    category: "Python",
    permissions: ["SEND_MESSAGES"],
    cooldown: "5s",
    testOnly: false,

    callback: ({ message, client }) => {
        message.channel.send(pystringEmbed);
    },
};
