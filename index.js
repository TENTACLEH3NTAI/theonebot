const Commando = require("discord.js-commando");
const randomLink = require('random-link');
const neko = require("neko.js");
const bot = new Commando.Client({
    commandPrefix: 'Don'
});
let nekoclient = new neko.Client();

bot.registry.registerGroup("music","Music");
bot.registry.registerGroup("nekop","nekop");
bot.registry.registerGroup("Kaori","Kaori");
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + "/commands");

global.servers = {};

bot.on('ready', () => {
    console.log(`Logged in as ${bot.user.tag}!`);
  });

bot.on('message', function(message){
    if(message.content.toLowerCase().includes("link pls".toLowerCase())){
        message.reply(randomLink());
        message.delete()
    }

    if(message.content.toLowerCase().includes("was ist heute geschehen".toLowerCase())){
        message.reply("deine mum");
    }

    if(message.content === '!play') {
            const channel = message.member.voiceChannel;
            channel.join()
            message.delete()
            .then(connection => console.log('Connected!'))
            .catch(console.error);
    }

    if(message.content === '!die'){
        if(message.member.roles.find("name", "God")){
            message.reply("yes my lord")
            message.delete()
            bot.destroy();
        }
    }
    
    if(message.content.toLowerCase().includes("loli".toLowerCase())){
        message.reply("FBI OPEN UP", {files: ["http://i.imgur.com/YRi9JaT.gif"]});
    }
    
    if(message.content.toLowerCase().includes("this is so sad".toLowerCase())){
        message.reply("Can we hit children in traffic?", {files: ["https://goo.gl/3V1i1e"]});
    }
    
    if(message.content.toLowerCase().includes("hentai".toLowerCase())&&message.content.toLowerCase().includes("pls".toLowerCase())||message.content.toLowerCase().includes("hentai".toLowerCase())&&message.content.toLowerCase().includes("please".toLowerCase())){
        if (message.channel.nsfw === false) {
            return message.reply(":warning: This channel isn't marked as NSFW.");
        }
        else{
            nekoclient.LewdNeko().then((LewdNeko) => message.reply(LewdNeko.neko));
        }
    }

    if(message.content.toLowerCase().includes("joke".toLowerCase())){
        nekoclient.why().then((why) => message.reply(why.why));
    }
});

bot.login(process.env.token);
