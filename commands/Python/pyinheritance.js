const Discord = require("discord.js");
const { pycolor, prefix } = require("../../config");

const pystringEmbed = new Discord.MessageEmbed()
    .setColor(pycolor)
    .setTitle("Python Inheritance")
    .setURL("https://docs.python.org/3/")
    .setAuthor(
        "DevBot by JuSoft",
        "https://cdn.discordapp.com/attachments/828176464041476111/852459976420229120/devbot-100.png"
    )
    .setThumbnail("https://img.icons8.com/color/2x/python.png")
    .addFields(
        {
            name: "Python Inheritance",
            value:
                "Inheritance allows us to define a class that inherits all the methods and properties from another class.\n" +
                "\n" +
                "**Parent class** is the class being inherited from, also called base class.\n" +
                "\n" +
                "**Child class** is the class that inherits from another class, also called derived class.\n" +
                "\n"
        },
        {
            name: "Create a Parent Class",
            value:
                "Any class can be a parent class, so the syntax is the same as creating any other class:" +
                "\n" +
                "```py\n" +
                "class Person:\n" +
                "  def __init__(self, fname, lname):\n" +
                "    self.firstname = fname\n" +
                "    self.lastname = lname\n" +
                "\n" +
                "  def printname(self):\n" +
                "    print(self.firstname, self.lastname)\n" +
                "\n" +
                "#Use the Person class to create an object, and then execute the printname method:\n" +
                "\n" +
                "x = Person(\"John\", \"Doe\")\n" +
                "x.printname()" +
                "```\n"
        },
        {
            name: "Create a Child Class",
            value:
                "To create a class that inherits the functionality from another class, send the parent class as a parameter when creating the child class:\n" +
                "\n" +
                "```py\n" +
                "class Student(Person):\n" +
                "  pass" +
                "```\n" +
                "```css" +
                "[ Note: Use the pass keyword when you do not want to add any other properties or methods to the class. ]" +
                "```" +
                "Now the Student class has the same properties and methods as the Person class." +
                "```py\n" +
                "x = Student(\"Mike\", \"Olsen\")\n" +
                "x.printname()" +
                "```"
        },
        {
            name: "Add the __init__() Function",
            value:
                "So far we have created a child class that inherits the properties and methods from its parent.\n" +
                "\n" +
                "We want to add the `__init__()` function to the child class (instead of the `pass` keyword)." +
                "```py\n" +
                "class Student(Person):\n" +
                "  def __init__(self, fname, lname):\n" +
                "    #add properties etc." +
                "```\n" +
                "To keep the inheritance of the parent's `__init__()` function, add a call to the parent's `__init__()` function:\n" +
                "```py\n" +
                "class Student(Person):\n" +
                "  def __init__(self, fname, lname):\n" +
                "    Person.__init__(self, fname, lname)" +
                "```\n" +
                "Now we have successfully added the __init__() function, and kept the inheritance of the parent class, and we are ready to add functionality in the `__init__()` function."
        },
        {
            name: "Add the __init__() Function",
            value: "```css\n" +
                "[ Note: The __init__() function is called automatically every time the class is being used to create a new object. ]" +
                "```\n" +
                "When you add the ``__init__()`` function, the child class will no longer inherit the parent's ``__init__()`` function." +
                "```css\n" +
                "[ Note: The child's __init__() function overrides the inheritance of the parent's __init__() function. ]" +
                "```\n"
        },
        {
            name: "Use the super() Function",
            value:
                "Python also has a `super()` function that will make the child class inherit all the methods and properties from its parent:\n" +
                "\n" +
                "```py\n" +
                "class Student(Person):\n" +
                "  def __init__(self, fname, lname):\n" +
                "    super().__init__(fname, lname)" +
                "```\n" +
                "By using the `super()` function, you do not have to use the name of the parent element, it will automatically inherit the methods and properties from its parent."
        },
        {
            name: "Add Properties",
            value:
                "```py\n" +
                "class Student(Person):\n" +
                "  def __init__(self, fname, lname):\n" +
                "    super().__init__(fname, lname)\n" +
                "    self.graduationyear = 2021" +
                "```\n" +
                "In the example below, the year `2021` should be a variable, and passed into the `Student` class when creating student objects. To do so, add another parameter in the __init__() function:" +
                "```py\n" +
                "class Student(Person):\n" +
                "  def __init__(self, fname, lname, year):\n" +
                "    super().__init__(fname, lname)\n" +
                "    self.graduationyear = year\n" +
                "\n" +
                "x = Student(\"Mike\", \"Olsen\", 2021)" +
                "```\n"
        },
        {
            name: "Add Methods",
            value:
                "```py\n" +
                "class Student(Person):\n" +
                "  def __init__(self, fname, lname, year):\n" +
                "    super().__init__(fname, lname)\n" +
                "    self.graduationyear = year\n" +
                "\n" +
                "  def welcome(self):\n" +
                "    print(\"Welcome\", self.firstname, self.lastname, \"to the class of\", self.graduationyear)" +
                "```\n" +
                "If you add a method in the child class with the same name as a function in the parent class, the inheritance of the parent method will be overridden."
        },
    )
    .setTimestamp()
    .setFooter(`DevBot Python Documentation • ${prefix}py`);

module.exports = {
    name: "py-inheritance",
    category: "Python",
    permissions: ["SEND_MESSAGES"],
    cooldown: "5s",
    testOnly: false,

    callback: ({ message, client }) => {
        message.channel.send(pystringEmbed);
    },
};
