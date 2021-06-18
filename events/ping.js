const { prefix, color } = require("../config");

module.exports = (client) => {
    client.on('message', async message => {
        if (message.content.startsWith("<@!" + client.user.id + ">")) {
            message.reply(`Yessir, its me! My prefix is \`${prefix}\``)
        }
    })
}
