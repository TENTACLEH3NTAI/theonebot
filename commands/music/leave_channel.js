const commando = require("discord.js-commando");

class LeaveChannelCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'leave',
            group: 'music',
            memberName: 'leave',
            description: 'leaves the voice channel of the commander'
        });
    }

    async run(message, args)
    {
        if(message.guild.voiceConnection)
        {
            message.guild.voiceConnection.disconnect();
        }
        else
        {
            message.reply("I must be in a voice channel to be able to leave!")
        }
    }
}

module.exports = LeaveChannelCommand;