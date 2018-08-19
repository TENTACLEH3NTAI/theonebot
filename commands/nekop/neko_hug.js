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
        var lewdPic = new discord.RichEmbed()
            .setDescription("Lewd Nekos provided by nekos.life")
        if (message.channel.nsfw === false) {
            nekoclient.hug().then((hug) => message.channel.sendEmbed(lewdPic)); //message.reply('here, take some hugs instead:  '+hug.url));
        }
        else{
            nekoclient.LewdNeko().then((LewdNeko) => message.reply(LewdNeko.neko));
        }
    }
}

module.exports = LewdCommand;
