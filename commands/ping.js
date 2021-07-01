const { MessageEmbed } = require('discord.js');
const { color, prefix, invitelink, dc, votelink } = require('.././config');

const moment = require("moment");
require("moment-duration-format");

module.exports = {
    name: 'ping',
    category: 'Extras',
    permissions: ['SEND_MESSAGES'],
    cooldown: '5s',
    testOnly: false,

    callback: ({ message, client }) => {

        const duration = moment.duration(message.client.uptime).format("d[d] h[h] m[m]");
        const embed = new MessageEmbed()
            embed.setColor(color)
            embed.setAuthor("DevBot - JuSoft Powered", "https://cdn.discordapp.com/attachments/828176464041476111/852459976420229120/devbot-100.png", "http://jsft.be/discord")
            embed.setDescription(`
            My prefix in **${message.guild.name}** - \`${prefix}\`
            To access all my commands - \`${prefix}help\`
            Project developed by **[JuSoft](https://jusoft.dev)**`)
            embed.addFields({
                name: 'Total Members',
                value: `┕\`${client.users.cache.size}\``,
                inline: true,
            },{
                name: 'Total Servers',
                value: `┕\`${client.guilds.cache.size}\``,
                inline: true,
            },{
                name: 'Total Commands',
                value: `┕\`idk\``,
                inline: true,
            })
            embed.addFields({
                name: `${client.user.username} Invite Link`,
                value: `[[Invite Me](${invitelink})]`,
                inline: true,
            },{
                name: 'Support Server',
                value: `[[JuSoft Dev](${dc})]`,
                inline: true,
            },{
                name: 'Vote Me',
                value: `[[VOTE ME](${votelink})]`,
                inline: true,
            })

            embed.setThumbnail(client.user.displayAvatarURL({ dynamic: true }))

            embed.setFooter(`⏳ Uptime: ${duration}`)

        message.channel.send(embed)
    }
}
