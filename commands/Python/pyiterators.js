const Discord = require("discord.js");
const { pycolor, prefix } = require("../../config");

const pystringEmbed = new Discord.MessageEmbed()
    .setColor(pycolor)
    .setTitle("Python Iterators")
    .setURL("https://docs.python.org/3/")
    .setAuthor(
        "DevBot by JuSoft",
        "https://cdn.discordapp.com/attachments/828176464041476111/852459976420229120/devbot-100.png"
    )
    .setThumbnail("https://img.icons8.com/color/2x/python.png")
    .addFields(
        {
            name: "Python Iterators",
            value:
                "An iterator is an object that contains a countable number of values.\n" +
                "\n" +
                "An iterator is an object that can be iterated upon, meaning that you can traverse through all the values.\n" +
                "\n" +
                "Technically, in Python, an iterator is an object which implements the iterator protocol, which consist of the methods `__iter__()` and `__next__()."
        },
        {
            name: "Iterator vs Iterable",
            value:
                "Lists, tuples, dictionaries, and sets are all iterable objects. They are iterable containers which you can get an iterator from.\n" +
                "\n" +
                "All these objects have a `iter()` method which is used to get an iterator" +
                "\n" +
                "```py\n" +
                "mytuple = (\"apple\", \"banana\", \"cherry\")\n" +
                "myit = iter(mytuple)\n" +
                "\n" +
                "print(next(myit))\n" +
                "print(next(myit))\n" +
                "print(next(myit))" +
                "```\n" +
                "Even strings are iterable objects, and can return an iterator:\n" +
                "```py\n" +
                "mystr = \"banana\"\n" +
                "myit = iter(mystr)\n" +
                "\n" +
                "print(next(myit))\n" +
                "print(next(myit))\n" +
                "print(next(myit))\n" +
                "print(next(myit))\n" +
                "print(next(myit))\n" +
                "print(next(myit))" +
                "```"
        },
        {
            name: "Looping Through an Iterator",
            value:
                "We can also use a `for loop to iterate through an iterable object:\n" +
                "\n" +
                "```py\n" +
                "mytuple = (\"apple\", \"banana\", \"cherry\")\n" +
                "\n" +
                "for x in mytuple:\n" +
                "  print(x)" +
                "```\n" +
                "```py\n" +
                "mystr = \"banana\"\n" +
                "\n" +
                "for x in mystr:\n" +
                "  print(x)" +
                "```\n" +
                "The `for` loop actually creates an iterator object and executes the next() method for each loop."
        },
        {
            name: "Create an Iterator",
            value:
                "To create an object/class as an iterator you have to implement the methods `__iter__()` and `__next__()` to your object.\n" +
                "\n" +
                "As you have learned in the Python Classes/Objects chapter, all classes have a function called `__init__()`, which allows you to do some initializing when the object is being created.\n" +
                "\n" +
                "The `__iter__()` method acts similar, you can do operations (initializing etc.), but must always return the iterator object itself.\n" +
                "\n" +
                "The `__next__()` method also allows you to do operations, and must return the next item in the sequence.\n" +
                "```py\n" +
                "class MyNumbers:\n" +
                "  def __iter__(self):\n" +
                "    self.a = 1\n" +
                "    return self\n" +
                "\n" +
                "  def __next__(self):\n" +
                "    x = self.a\n" +
                "    self.a += 1\n" +
                "    return x\n" +
                "\n" +
                "myclass = MyNumbers()\n" +
                "myiter = iter(myclass)\n" +
                "\n" +
                "print(next(myiter))\n" +
                "print(next(myiter))\n" +
                "print(next(myiter))\n" +
                "print(next(myiter))\n" +
                "print(next(myiter))"
        },
        {
            name: "StopIteration",
            value: "The example above would continue forever if you had enough next() statements, or if it was used in a `for` loop.\n" +
                "\n" +
                "To prevent the iteration to go on forever, we can use the `StopIteration` statement.\n" +
                "\n" +
                "In the `__next__()` method, we can add a terminating condition to raise an error if the iteration is done a specified number of times:\n" +
                "```py\n" +
                "class MyNumbers:\n" +
                "  def __iter__(self):\n" +
                "    self.a = 1\n" +
                "    return self\n" +
                "\n" +
                "  def __next__(self):\n" +
                "    if self.a <= 20:\n" +
                "      x = self.a\n" +
                "      self.a += 1\n" +
                "      return x\n" +
                "    else:\n" +
                "      raise StopIteration\n" +
                "\n" +
                "myclass = MyNumbers()\n" +
                "myiter = iter(myclass)\n" +
                "\n" +
                "for x in myiter:\n" +
                "  print(x)" +
                "```"
        },
    )
    .setTimestamp()
    .setFooter(`DevBot Python Documentation • ${prefix}py`);

module.exports = {
    name: "py-iterators",
    category: "Python",
    permissions: ["SEND_MESSAGES"],
    cooldown: "5s",
    testOnly: false,

    callback: ({ message, client }) => {
        message.channel.send(pystringEmbed);
    },
};
