const commando = require("discord.js-commando");
const neko = require("neko.js");
const discord = require("discord.js");
let nekoclient = new neko.Client();

class KissCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'kiss',
            group: 'nekop',
            memberName: 'kiss',
            description: 'sum luv <3'
        });
    }

    async run(message, args)
    {
        nekoclient.kiss().then((kiss) =>  message.channel.sendMessage({
            "embed": {
                title: "luv yall",
                "image": {
                "url": kiss.url,
                }
            }
    }));
    }
}

module.exports = KissCommand;