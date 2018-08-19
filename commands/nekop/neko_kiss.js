const commando = require("discord.js-commando");
const neko = require("neko.js");
const discord = require("discord.js");
let nekoclient = new neko.Client();

class LizardCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'lizard',
            group: 'nekop',
            memberName: 'lizard',
            description: 'lmao'
        });
    }

    async run(message, args)
    {
        nekoclient.lizard().then((lizard) =>  message.channel.sendMessage({
            "embed": {
                title: "what am I doing with my life",
                "image": {
                "url": lizard.url,
                }
            }
    }));
    }
}

module.exports = LizardCommand;