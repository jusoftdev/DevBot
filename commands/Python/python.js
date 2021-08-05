const Discord = require('discord.js');
const { pycolor, prefix } = require("../../config.js");

const pythonEmbed = new Discord.MessageEmbed()
    .setColor(pycolor)
    .setTitle('Python 3.9 Topics')
    .setURL('https://docs.python.org/3/')
    .setAuthor('DevBot by JuSoft', 'https://cdn.discordapp.com/attachments/828176464041476111/852459976420229120/devbot-100.png')
    .setDescription('DevBot <:python:794178270211342346>  Documentation')
    .setThumbnail('https://img.icons8.com/color/2x/python.png')
    .addFields(
        { name: '<:start:852466478699511808> Getting Started', value: 'dev py-start' },
        { name: '<:next:852471014713589790> Python Syntax', value: 'dev py-syntax', inline: true },
        { name: 'Python Variables', value: 'dev py-variable', inline: true },

    )
    .addField('Python Data Types', 'dev py-datatypes', true,)
    .addFields(
        { name: '<:next:852471014713589790> Python Numbers', value: 'dev py-numbers', inline: true},
                { name: 'Python Casting', value: 'dev py-casting', inline: true},
                { name: 'Python Strings', value: 'dev py-string', inline: true},
    )
    .addFields(
        { name: '<:next:852471014713589790> Python Boolean', value: 'dev py-boolean', inline: true},
                { name: 'Python Operators', value: 'dev py-operator', inline: true},
                { name: 'Python Lists', value: 'dev py-list', inline: true},
    )
    .addFields(
        { name: '<:next:852471014713589790> Python Tuples', value: 'dev py-tuple', inline: true},
                { name: 'Python Sets', value: 'dev py-set', inline: true},
                { name: 'Python Dictionaries', value: 'dev py-dictionary', inline: true},
    )
    .addFields(
        { name: '<:next:852471014713589790> Python Conditions', value: 'dev py-condition', inline: true},
                { name: 'Python While Loops', value: 'dev py-while', inline: true},
                { name: 'Python For Loops', value: 'dev py-for', inline: true},
    )
    .addFields(
        { name: '<:next:852471014713589790> Python Functions', value: 'dev py-function', inline: true},
                { name: 'Python Lambda', value: 'dev py-lambda', inline: true},
                { name: 'Python Arrays', value: 'dev py-array', inline: true},
    )
    .addFields(
        { name: '<:next:852471014713589790> Python Classes/Objects', value: 'dev py-classes', inline: true},
                { name: 'Python Inheritance', value: 'dev py-inheritance', inline: true},
                { name: 'Python Iterators', value: 'dev py-iterators', inline: true},
    )
    .addFields(
        { name: '<:next:852471014713589790> Python Scope', value: 'dev py-scope', inline: true},
                { name: 'Python Modules', value: 'dev py-modules', inline: true},
                { name: 'Python Dates', value: 'dev py-dates', inline: true},
    )

const new_embed = new Discord.MessageEmbed()
    .setColor(pycolor)
    .addFields(
        { name: '<:next:852471014713589790> Python Math', value: 'dev py-math', inline: true},
        { name: 'Python JSON', value: 'dev py-json', inline: true},
        { name: 'Python RegEx', value: 'dev py-regex', inline: true},
    )
    .addFields(
        { name: '<:next:852471014713589790> Python PIP', value: 'dev py-pip', inline: true},
        { name: 'Python Try...Except', value: 'dev py-tryexcept', inline: true},
        { name: 'Python User Input', value: 'dev py-userinput', inline: true},
    )
    .addFields(
        { name: '<:next:852471014713589790> Python String Formatting', value: 'dev py-stringformatting', inline: true},
    )
    .setTimestamp()
    .setFooter(`DevBot Python Documentation • ${prefix}py`);

module.exports = {
    name: 'py',
    category: '',
    permissions: ['SEND_MESSAGES'],
    cooldown: '5s',
    testOnly: false,

    callback: ({ message, client }) => {
        message.channel.send(pythonEmbed)
        message.channel.send(new_embed)
    }
}
