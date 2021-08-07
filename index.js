const Discord = require('discord.js');
const client = new Discord.Client();
require('discord-buttons')(client);
require('./buttons')(client);

const WOKCommands = require('wokcommands');

const { color, prefix, token } = require("./config.js");
const {pycolor} = require("./config");

const version = "v.1.3.2"

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
    "made with discordjs",
    "dev py",
    "invert binary tree",
    "Error 404 :>",
    "nothing"
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
            embed1.setColor(pycolor)
            embed1.setFooter('1/2')
            embed1.setTimestamp()
            embed1.addFields(
                {
                    name: "<:github:858434402307538984> GitHub",
                    value: `┕\`${embprefix} github\``,
                    inline: true,
                },
                {
                    name: "<:bot:872774084331712512> Invite",
                    value: `┕\`${embprefix} invite\``,
                    inline: true,
                })
            embed1.addFields(
                {
                    name: "<:info:858603728441180170> Ping",
                    value: `┕\`${embprefix} ping\``,
                    inline: true,
                },
                {
                    name: "<:connection:866000655307374623> Statistics",
                    value: `┕\`${embprefix} stats\``,
                    inline: true,
                },
                {
                    name: "<:plus:858599381943058442> Suggestions",
                    value: `┕\`${embprefix} suggest\``,
                    inline: true,
                })

            const embed2 = new Discord.MessageEmbed()
            embed2.setTitle("Commands for " + client.user.username)
            embed2.setColor(pycolor)
            embed2.setFooter('2/2')
            embed2.setTimestamp()
            embed2.addFields(
                {
                    name: "<:python:794178270211342346> Python Documentation",
                    value: `┕\`${embprefix} py\``,
                    inline: true,
                },
                {
                    name: "<:git:873471940818526209> Git Documentation",
                    value: `┕\`Coming soon\``,
                    inline: true,
                },
                {
                    name: "<:js:873470844817514507> JavaScript Documentation",
                    value: `┕\`Coming soon\``,
                    inline: true,
                })
            embed2.addFields({
                    name: "<:html:873471941179232266> HTML Documentation",
                    value: `┕\`Coming soon\``,
                    inline: true,
                },
                {
                    name: "<:css:873471941229568050> CSS Documentation",
                    value: `┕\`Coming soon\``,
                    inline: true,
                },
                {
                    name: "<:go:873471941409906728> Go Documentation",
                    value: `┕\`Coming soon\``,
                    inline: true,
                })

            message.channel.createSlider(message.author.id, [embed1, embed2]);
    }
});

client.on('guildCreate', guild => {
    guild.systemChannel.send("https://i.imgur.com/z3wU2tF.png")
});

client.login(token);