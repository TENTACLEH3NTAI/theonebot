/*const commando = require("discord.js-commando");
const Kaori = require("kaori");
const kaori = new Kaori();
const discord = require("discord.js");
let nekoclient = new neko.Client();

class CatCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'cat',
            group: 'Kaori',
            memberName: 'cat',
            description: 'end my life'
        });
    }

    async run(message, args)
    {
		
		kaori.search('danbooru', { tags: ['cat'], limit: 1, random: true })
			.then(images => message.channel.sendMessage({
            "embed": {
                title: "nyan nyan!",
                "image": {
                "url": images[0].common.fileURL,
                }
				}
			}))
			.catch(err => console.error(err));
	}
}



module.exports = CatCommand;
*/
