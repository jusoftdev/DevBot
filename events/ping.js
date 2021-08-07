const { prefix, color } = require("../config");

module.exports = (client) => {
    client.on('message', async message => {
        if (message.content.startsWith("<@!" + client.user.id + ">")) {
            message.reply(`<:bot:872774084331712512> | Hello World! My prefix is \`\`dev\`\` -  type dev help for more information (╯°□°）╯︵ ┻━┻`)
        }
    })
}
