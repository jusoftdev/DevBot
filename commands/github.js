const Discord = require('discord.js');
const { pycolor, prefix } = require("../config.js");

const githubEmbed = new Discord.MessageEmbed()
    .setColor(pycolor)
    .setTitle('GitHub Repository')
    .setURL('https://github.com/jusoftdev/DevBot/')
    .setAuthor('DevBot by JuSoft', 'https://cdn.discordapp.com/attachments/828176464041476111/852459976420229120/devbot-100.png')
    .setThumbnail('https://cdn.discordapp.com/attachments/828176464041476111/858434305645477908/492259724079792138.png')
    .addFields(
        { name: '<:code:858600742382600202>', value: 'Contribute to the project or just have a look at the code' },
    )
    .setTimestamp()
    .setFooter(`DevBot by JuSoft • ${prefix}help`);

module.exports = {
    name: 'github',
    category: 'About',
    permissions: ['SEND_MESSAGES'],
    cooldown: '5s',
    testOnly: false,

    callback: ({ message, client }) => {
        message.channel.send(githubEmbed)
    }
}
