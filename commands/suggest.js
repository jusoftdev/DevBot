const {prefix} = require("../config");
const {MessageEmbed} = require("discord.js");
module.exports = {
    name: 'suggest',
    category: '',
    permissions: ['SEND_MESSAGES'],
    cooldown: '5s',
    testOnly: false,

    callback: ({ message, client }) => {
        if (message.author.bot) return;
        if (message.content.indexOf(prefix) !== 0) return;

        const args = message.content.slice(prefix.length).trim().split(/ +/g);
        if (message.author.bot) return;

        if(!args.length) {
            return message.channel.send("<:bot:872774084331712512> | Please provide a suggestion for Discord Assistant")
        }

        let channel = client.channels.cache.get('873476674761654293')


        if(!channel) {
            return message.channel.send("<:bot:872774084331712512> | There is no channel for Bot Suggestions")
        }


        let embed = new MessageEmbed()
            .setAuthor("SUGGESTION: " + message.author.tag, message.author.avatarURL())
            .setThumbnail(message.author.avatarURL())
            .setColor("#ff2050")
            .setDescription(args.join(" "))
            .setTimestamp()


        channel.send(embed).then(m => {
            m.react("✅")
            m.react("❌")
        }).catch(err => {})



        message.channel.send("Your suggestion for DevBot got submitted, so get some coffee and chill out").catch(err => {})
    }
}
