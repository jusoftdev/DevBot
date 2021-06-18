const Discord = require('discord.js');
const { pycolor, prefix } = require("../../config.js");

const pystartEmbed = new Discord.MessageEmbed()
    .setColor(pycolor)
    .setTitle('Getting Started with Python')
    .setURL('https://docs.python.org/3/')
    .setAuthor('DevBot by JuSoft', 'https://cdn.discordapp.com/attachments/828176464041476111/852459976420229120/devbot-100.png')
    .setThumbnail('https://img.icons8.com/color/2x/python.png')
    .addFields(
        { name: 'Hello World', value: '```py\nprint(\"hello world\")```' },
    )
    .setTimestamp()
    .setFooter(`DevBot Python Documentation • ${prefix}py`);

module.exports = {
    name: 'py-start',
    category: 'Python',
    permissions: ['SEND_MESSAGES'],
    cooldown: '5s',
    testOnly: false,

    callback: ({ message, client }) => {
        message.channel.send(pystartEmbed)
    }
}
