const Discord = require('discord.js');
const { pycolor, prefix } = require("../config.js");

module.exports = {
    name: 'invite',
    category: 'About',
    permissions: ['SEND_MESSAGES'],
    cooldown: '5s',
    testOnly: false,

    callback: ({ message, client }) => {
        message.channel.send("http://jsft.be/devbot")
    }
}
