const cpuStat = require("cpu-stat");
const moment = require("moment");
require("moment-duration-format");

const { MessageEmbed } = require("discord.js");

const { color } = require("../config.js");

module.exports = {
    name: 'stats',
    category: 'Extras',
    permissions: ['SEND_MESSAGES'],
    cooldown: '10s',
    testOnly: false,

    callback: ({message, client}) => {

        const { version } = require("discord.js")

        cpuStat.usagePercent(async function (err, percent, seconds) {
            if (err) {
                return console.log(err);
            }
            const duration = moment.duration(message.client.uptime).format("d[d] h[h] m[m]");

            const info = new MessageEmbed();
            info.setColor(color);
            info.setTitle(`Stats from \`${client.user.username}\``);
            info.setThumbnail(client.user.displayAvatarURL())
            info.setFooter(`Asked by ${message.author.tag}`, message.author.displayAvatarURL());
            info.setTimestamp()
            info.setDescription(`**[Server Status](https://status.racknerd.com)**`)
            info.addFields({
                    name: '<:ping:849054200172118046> Ping',
                    value: `┕\`${Math.round(client.ws.ping)}ms\``,
                    inline: true
                },{
                    name: ':clock1: Uptime',
                    value: `┕\`${duration}\``,
                    inline: true
                }, {
                    name: '<:pcram:849053866606592001> Memory',
                    value: `┕\`${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}mb\``,
                    inline: true
                })

            info.addFields({
                    name: ':homes: Servers',
                    value: `┕\`${client.guilds.cache.size}\``,
                    inline: true
                },
                {
                    name: ':busts_in_silhouette: Users',
                    value: `┕\`${client.users.cache.size}\``,
                    inline: true
                }, {
                    name: 'API Latency',
                    value: `┕\`${(message.client.ws.ping)}ms\``,
                    inline: true
                })
            info.addFields({
                name: '<:CPU:849056562492604436> CPU usage',
                value: `┕\`${percent.toFixed(2)}%\``,
                inline: true
            }, {
                name: '<:djs:849054699608604682> Discord.js',
                value: `┕\`v${version}\``,
                inline: true
            }, {
                name: '<:node:849055234830499880> Node',
                value: `┕\`${process.version}\``,
                inline: true
            })
            message.channel.send(info)
        })
    }
}
