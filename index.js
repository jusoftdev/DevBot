const Discord = require('discord.js');
const client = new Discord.Client();
require('discord-buttons')(client);
require('./buttons')(client);

const WOKCommands = require('wokcommands');

const { color, prefix, token } = require("./config.js");

const version = "v.1.1.2"

const activities_list = [
    "dev help | "+version,
    "</> by JuSoft",
    "with Discord Assistant",
    "with ModMail",
    "dev py",
    "PyCharm",
    "WebStorm",
    "jusoft.dev",
    "dev help",
    version,
    "dev changelog",
    "made with discordjs"
];

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    setInterval(() => {
        const index = Math.floor(Math.random() * (activities_list.length - 1) + 1); // generates a random number between 1 and the length of the activities array list (in this case 5).
        client.user.setActivity(activities_list[index], { type: 'PLAYING' }); // sets bot's activities to one of the phrases in the arraylist.
    }, 10000); // Runs this every 10 seconds.
});

/*client.on('message', msg => {
    if (msg.content === prefix + 'ping') {
        msg.reply('Pong!');
    }
});*/

client.on('ready', () => {
    const wok = new WOKCommands(client, {
        commandsDir: 'commands',
        featuresDir: 'events',
        showWarns: false,
        del: -1,
        defaultLanguage: "english",
        ignoreBots: true,
        testServers: ['828176463597404161'],
        disabledDefaultCommands: [
            'help',
            'command',
            'language',
            'prefix',
            'requiredrole'
        ]
    })
        .setDefaultPrefix(prefix)
        .setColor
})


client.on("message", async (message) => {
    if (message.content === (prefix + "help")) {

        const embprefix = 'dev'

            const embed1 = new Discord.MessageEmbed()
            embed1.setTitle("Commands for " + client.user.username)
            embed1.setColor(color)
            embed1.setFooter('1/5')
            embed1.setTimestamp()
            embed1.addFields(
                {
                    name: "<:python:794178270211342346> Python",
                    value: `┕\`${embprefix} py\``,
                    inline: true,
                },
                {
                    name: "Dance",
                    value: `┕\`${embprefix} dance\``,
                    inline: true,
                },
                {
                    name: "Chillhop",
                    value: `┕\`${embprefix} chillhop\``,
                    inline: true,
                })
            embed1.addFields(
                {
                    name: "First Dance",
                    value: `┕\`${embprefix} firstdance\``,
                    inline: true,
                },
                {
                    name: "Rap Best",
                    value: `┕\`${embprefix} rapbest\``,
                    inline: true,
                },
                {
                    name: "Rap First",
                    value: `┕\`${embprefix} rapfirst\``,
                    inline: true,
                })

            const embed2 = new Discord.MessageEmbed()
            embed2.setTitle("Radio Channels For `zapbot`")
            embed2.setColor(color)
            embed2.setFooter('2/5')
            embed2.setTimestamp()
            embed2.addFields(
                {
                    name: "Greatest Hits",
                    value: `┕\`${embprefix} ghits\``,
                    inline: true,
                },
                {
                    name: "Hardstyle",
                    value: `┕\`${embprefix} hardstyle\``,
                    inline: true,
                },
                {
                    name: "HipHop",
                    value: `┕\`${embprefix} hiphop\``,
                    inline: true,
                })
            embed2.addFields(
                {
                    name: "Hits 2021",
                    value: `┕\`${embprefix} hits21\``,
                    inline: true,
                },
                {
                    name: "Hits History",
                    value: `┕\`${embprefix} hitshistory\``,
                    inline: true,
                },
                {
                    name: "US only Rap",
                    value: `┕\`${embprefix} usrap\``,
                    inline: true,
                })

            const embed3 = new Discord.MessageEmbed()
            embed3.setTitle("Radio Channels For `zapbot`")
            embed3.setColor(color)
            embed3.setFooter('3/5')
            embed3.setTimestamp()
            embed3.addFields(
                {
                    name: "Mainstage",
                    value: `┕\`${embprefix} mainstage\``,
                    inline: true,
                },
                {
                    name: "Mashup",
                    value: `┕\`${embprefix} mashup\``,
                    inline: true,
                },
                {
                    name: "Monstercat",
                    value: `┕\`${embprefix} monstercat\``,
                    inline: true,
                })

            embed3.addFields(
                {
                    name: "Music&Chill",
                    value: `┕\`${embprefix} m&c\``,
                    inline: true,
                },
                {
                    name: "New Pop",
                    value: `┕\`${embprefix} newpop\``,
                    inline: true,
                },
                {
                    name: "Party Hard",
                    value: `┕\`${embprefix} partyhard\``,
                    inline: true,
                })

            const embed4 = new Discord.MessageEmbed()
            embed4.setTitle("Radio Channels For `zapbot`")
            embed4.setColor(color)
            embed4.setFooter('4/5')
            embed4.setTimestamp()
            embed4.addFields(
                {
                    name: "Robin Schulz",
                    value: `┕\`${embprefix} robinschulz\``,
                    inline: true,
                },
                {
                    name: "The Beach",
                    value: `┕\`${embprefix} thebeach\``,
                    inline: true,
                },
                {
                    name: "The Club",
                    value: `┕\`${embprefix} theclub\``,
                    inline: true,
                })

            embed4.addFields(
                {
                    name: "DJ Mag",
                    value: `┕\`${embprefix} djmag\``,
                    inline: true,
                },
                {
                    name: "The Sun",
                    value: `┕\`${embprefix} sun\``,
                    inline: true,
                },
                {
                    name: "Top 100 Charts",
                    value: `┕\`${embprefix} top100\``,
                    inline: true,
                })

            const embed5 = new Discord.MessageEmbed()
            embed5.setTitle('Extra Commands')
            embed5.setColor(color)
            embed5.setFooter('5/5')
            embed5.setTimestamp()
            embed5.addFields(
                {
                    name: 'Invite',
                    value: `┕\`${embprefix} invite\``,
                    inline: true,
                }, {
                    name: 'Stops Music',
                    value: `┕\`${embprefix} stop\``,
                    inline: true,
                }, {
                    name: 'Suggest a URL',
                    value: `┕\`${embprefix} suggest\``,
                    inline: true,
                })
            embed5.addFields({
                name: 'Stats of zap',
                value: `┕\`${embprefix} stats\``,
                inline: true,
            }, {
                name: 'Would You Rather',
                value: `┕\`${embprefix} wyr\``,
                inline: true,
            }, {
                name: 'Now Playing',
                value: `┕\`coming soon :>\``,
                inline: true,
            })

            message.channel.createSlider(message.author.id, [embed1, embed2, embed3, embed4, embed5]);
    }
});

client.login(token);
