const commando = require("discord.js-commando");
const neko = require("neko.js");
let nekoclient = new neko.Client();

class LewdCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'lewd',
            group: 'nekop',
            memberName: 'lewd',
            description: 'Lewd nekos poggers'
        });
    }

    async run(message, args)
    {
        if (message.channel.nsfw === false) {
            nekoclient.hug().then((hug) => message.reply(hug.url));
        }
        else{
            nekoclient.LewdNeko().then((LewdNeko) => message.reply(LewdNeko.neko));
        }
    }
}

module.exports = LewdCommand;
