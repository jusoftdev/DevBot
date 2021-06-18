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
    }
}
