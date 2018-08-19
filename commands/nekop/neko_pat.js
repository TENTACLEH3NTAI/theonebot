const commando = require("discord.js-commando");
const neko = require("neko.js");
const discord = require("discord.js");
let nekoclient = new neko.Client();

class PatCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'pat',
            group: 'nekop',
            memberName: 'pat',
            description: 'well done <3'
        });
    }

    async run(message, args)
    {
        nekoclient.pat().then((pat) =>  message.channel.sendMessage({
            "embed": {
                title: "well done <3",
                "image": {
                "url": pat.url,
                }
            }
    }));
    }
}

module.exports = PatCommand;