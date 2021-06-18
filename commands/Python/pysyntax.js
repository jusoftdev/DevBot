const Discord = require('discord.js');
const { pycolor, prefix } = require("../../config.js");

const pysyntaxEmbed = new Discord.MessageEmbed()
    .setColor(pycolor)
    .setTitle('Getting familiar with Python Syntax')
    .setURL('https://docs.python.org/3/')
    .setAuthor('DevBot by JuSoft', 'https://cdn.discordapp.com/attachments/828176464041476111/852459976420229120/devbot-100.png')
    .setThumbnail('https://img.icons8.com/color/2x/python.png')
    .addFields(
        { name: 'Python Indentation', value: 'Indentation refers to the spaces at the beginning of a code line.\n' +
                '\n' +
                'Where in other programming languages the indentation in code is for readability only, the indentation in Python is very important.\n' +
                '\n' +
                'Python uses indentation to indicate a block of code.```py\nif 5 > 2:\n' +
                '  print("Five is greater than two!")```' },
                { name: 'Python Variables', value: 'In Python, variables are created when you assign a value to it:' +
                        '```py\nx = 5\n' +
                'y = "Hello, World!"```' +
                        'Python has no command for declaring a variable.\n' +
                        '\n' +
                        'You will learn more about variables with ``dev py-variable``'

                },
        { name: 'Python Comments', value: 'Python has commenting capability for the purpose of in-code documentation.\n' +
                '\n' +
                'Comments start with a #, and Python will render the rest of the line as a comment:' +
                '```py\n#This is a comment.\n' +
                '  print("Hello, World!")```'

        },
    )
    .setTimestamp()
    .setFooter(`DevBot Python Documentation • ${prefix}py`);

module.exports = {
    name: 'py-syntax',
    category: 'Python',
    permissions: ['SEND_MESSAGES'],
    cooldown: '5s',
    testOnly: false,

    callback: ({ message, client }) => {
        message.channel.send(pysyntaxEmbed)
    }
}
