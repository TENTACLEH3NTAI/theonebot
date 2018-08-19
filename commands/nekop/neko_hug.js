const commando = require("discord.js-commando");
const neko = require("neko.js");
const discord = require("discord.js");
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
            nekoclient.hug().then((hug) =>  message.channel.sendMessage({
                "embed": {
                    title: 'here, take some hugs intead',
                    "image": {
                    "url": hug.url,
                    }
                }
        }));
        }
        else{
            nekoclient.LewdNeko().then((LewdNeko) => message.channel.sendMessage({
                "embed": {
                        title: 'Enjoy your hentai',
                        "image": {
                        "url": LewdNeko.neko,
                        }
                    }
                }));
        }
    }
}

module.exports = LewdCommand;
