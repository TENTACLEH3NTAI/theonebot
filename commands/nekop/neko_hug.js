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
            var hugPic = new discord.RichEmbed()
            .setDescription("here, take some hugs intead")
            .setColor("0xff5ffd")
            .setThumbnail(hug.url)
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
            var lewdPic = new discord.RichEmbed()
            .setDescription("Lewd Nekos provided by nekos.life")
            .setColor("0xff5ffd")
            .setThumbnail(LewdNeko.neko)
            nekoclient.LewdNeko().then((LewdNeko) => message.channel.sendMessage({
                "embed": {
                        title: 'Enjoy your hentai',
                        "image": {
                        "url": LewdNeko.neko,
                        }
                    }
                }));      //message.channel.sendEmbed(lewdPic));
        }
    }
}

module.exports = LewdCommand;
