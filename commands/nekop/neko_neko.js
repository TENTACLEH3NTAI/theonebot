const commando = require("discord.js-commando");
const neko = require("neko.js");
const discord = require("discord.js");
let nekoclient = new neko.Client();

class nekoCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'neko',
            group: 'nekop',
            memberName: 'neko',
            description: 'neko pics poggers'
        });
    }

    async run(message, args)
    {
        nekoclient.neko().then((neko) =>  message.channel.sendMessage({
            "embed": {
                title: "ain't nekos handsome?",
                "image": {
                "url": neko.neko,
                }
            }
    }));
    }
}

module.exports = nekoCommand;