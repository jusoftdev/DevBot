const Discord = require("discord.js");
const { pycolor, prefix } = require("../../config");

const pystringEmbed = new Discord.MessageEmbed()
    .setColor(pycolor)
    .setTitle("Python Classes and Objects")
    .setURL("https://docs.python.org/3/")
    .setAuthor(
        "DevBot by JuSoft",
        "https://cdn.discordapp.com/attachments/828176464041476111/852459976420229120/devbot-100.png"
    )
    .setThumbnail("https://img.icons8.com/color/2x/python.png")
    .addFields(
        {
            name: "Python Classes/Objects",
            value:
                "Python is an object oriented programming language.\n" +
                "\n" +
                "Almost everything in Python is an object, with its properties and methods.\n" +
                "\n" +
                "A Class is like an object constructor, or a \"blueprint\" for creating objects."
        },
        {
            name: "Create a Class",
            value:
                "To create a class, use the keyword `class`:" +
                "\n" +
                "```py\n" +
                "class MyClass:\n" +
                "  x = 5" +
                "```\n"
        },
        {
            name: "Create Object",
            value:
                "Now we can use the class named MyClass to create objects:\n" +
                "\n" +
                "```py\n" +
                "p1 = MyClass()\n" +
                "print(p1.x)" +
                "```\n"
        },
        {
            name: "The __init__() Function",
            value:
                "The examples above are classes and objects in their simplest form, and are not really useful in real life applications.\n" +
                "\n" +
                "To understand the meaning of classes we have to understand the built-in __init__() function.\n" +
                "\n" +
                "All classes have a function called __init__(), which is always executed when the class is being initiated.\n" +
                "\n" +
                "Use the __init__() function to assign values to object properties, or other operations that are necessary to do when the object is being created:\n" +
                "```py\n" +
                "class Person:\n" +
                "  def __init__(self, name, age):\n" +
                "    self.name = name\n" +
                "    self.age = age\n" +
                "\n" +
                "p1 = Person(\"John\", 36)\n" +
                "\n" +
                "print(p1.name)\n" +
                "print(p1.age)" +
                "```\n" +
                "```css\n" +
                "[ Note: The __init__() function is called automatically every time the class is being used to create a new object. ]" +
                "```"
        },
        {
            name: "Object Methods",
            value:
                "Objects can also contain methods. Methods in objects are functions that belong to the object.\n" +
                "\n" +
                "Let us create a method in the Person class:\n" +
                "\n" +
                "```py\n" +
                "class Person:\n" +
                "  def __init__(self, name, age):\n" +
                "    self.name = name\n" +
                "    self.age = age\n" +
                "\n" +
                "  def myfunc(self):\n" +
                "    print(\"Hello my name is \" + self.name)\n" +
                "\n" +
                "p1 = Person(\"John\", 36)\n" +
                "p1.myfunc()" +
                "```\n" +
                "```css\n" +
                "[ Note: The self parameter is a reference to the current instance of the class, and is used to access variables that belong to the class. ]\n" +
                "```"
        },
        {
            name: "The self Parameter",
            value:
                "The `self` parameter is a reference to the current instance of the class, and is used to access variables that belongs to the class.\n" +
                "\n" +
                "It does not have to be named `self` , you can call it whatever you like, but it has to be the first parameter of any function in the class:" +
                "\n" +
                "```py\n" +
                "class Person:\n" +
                "  def __init__(mysillyobject, name, age):\n" +
                "    mysillyobject.name = name\n" +
                "    mysillyobject.age = age\n" +
                "\n" +
                "  def myfunc(abc):\n" +
                "    print(\"Hello my name is \" + abc.name)\n" +
                "\n" +
                "p1 = Person(\"John\", 36)\n" +
                "p1.myfunc()" +
                "```"
        },
        {
            name: "Modify Object Properties",
            value:
                "You can modify properties on objects like this:\n" +
                "This way the function will receive a tuple of arguments, and can access the items accordingly:\n" +
                "\n" +
                "```py\n" +
                "p1.age = 40" +
                "```\n"
        },
        {
            name: "Delete Object Properties",
            value:
                "You can delete properties on objects by using the `del` keyword:\n" +
                "\n" +
                "This way the order of the arguments does not matter." +
                "```py\n" +
                "del p1.age\n" +
                "```"
        },
        {
            name: "Delete Objects",
            value:
                "You can delete objects by using the del keyword:\n" +
                "```py\n" +
                "del p1\n" +
                "```"
        },
        {
            name: "The pass Statement",
            value:
                "class definitions cannot be empty, but if you for some reason have a class definition with no content, put in the pass statement to avoid getting an error.\n" +
                "\n" +
                "```py\n" +
                "class Person:\n" +
                "  pass" +
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
    name: "py-classes",
    category: "Python",
    permissions: ["SEND_MESSAGES"],
    cooldown: "5s",
    testOnly: false,

    callback: ({ message, client }) => {
        message.channel.send(pystringEmbed);
    },
};
