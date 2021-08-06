const Discord = require("discord.js");
const { pycolor, prefix } = require("../../config");

const pystringEmbed = new Discord.MessageEmbed()
    .setColor(pycolor)
    .setTitle("Python PIP")
    .setURL("https://docs.python.org/3/")
    .setAuthor(
        "DevBot by JuSoft",
        "https://cdn.discordapp.com/attachments/828176464041476111/852459976420229120/devbot-100.png"
    )
    .setThumbnail("https://img.icons8.com/color/2x/python.png")
    .addFields(
        {
            name: "What is PIP?",
            value:
                "PIP is a package manager for Python packages, or modules if you like.\n" +
                "\n" +
                "```css\n" +
                "[ Note: If you have Python version 3.4 or later, PIP is included by default. ]" +
                "```"
        },
        {
            name: "What is a Package?",
            value:
                "A package contains all the files you need for a module.\n" +
                "\n" +
                "Modules are Python code libraries you can include in your project.\n"
        },
        {
            name: "Check if PIP is Installed",
            value:
                "Navigate your command line to the location of Python's script directory, and type the following:\n" +
                "\n" +
                "```py\n" +
                "pip --version" +
                "```"
        },
        {
            name: "Install PIP",
            value:
                "If you do not have PIP installed, you can download and install it from this page: https://lnkdto.link/bRwYaj"
        },
        {
            name: "Download a Package",
            value: "Downloading a package is very easy.\n" +
                "\n" +
                "Open the command line interface and tell PIP to download the package you want.\n" +
                "\n" +
                "Navigate your command line to the location of Python's script directory, and type the following" +
                "```sh\n" +
                "pip install camelcase" +
                "```\n" +
                "Now you have downloaded and installed your first package!"
        },
        {
            name: "Using a Package",
            value: "Once the package is installed, it is ready to use.\n" +
                "\n" +
                "Import the \"camelcase\" package into your project.\n" +
                "```py\n" +
                "import camelcase\n" +
                "\n" +
                "c = camelcase.CamelCase()\n" +
                "\n" +
                "txt = \"hello world\"\n" +
                "\n" +
                "print(c.hump(txt))" +
                "```"
        },
        {
            name: "Find Packages",
            value: "Find more packages at https://pypi.org/.\n"
        },
        {
            name: "Remove a Package",
            value: "Use the `uninstall` command to remove a package:\n" +
                "```sh\n" +
                "pip uninstall camelcase" +
                "```\n" +
                "The PIP Package Manager will ask you to confirm that you want to remove the camelcase package.\n" +
                "Press `y` and the package will be removed.\n"
        },
        {
            name: "List Packages",
            value: "Use the list command to list all the packages installed on your system:\n" +
                "```sh\n" +
                "pip list\n" +
                "```"
        },
    )
    .setTimestamp()
    .setFooter(`DevBot Python Documentation • ${prefix}py`);

module.exports = {
    name: "py-pip",
    category: "Python",
    permissions: ["SEND_MESSAGES"],
    cooldown: "5s",
    testOnly: false,

    callback: ({ message, client }) => {
        message.channel.send(pystringEmbed);
    },
};
