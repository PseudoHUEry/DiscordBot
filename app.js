const phase = require('./phases.js');

const Discord = require('discord.js'),
config = require('./config.json'),
client = new Discord.Client()
phases = require('./phases.js')
client.login(config.BOT_TOKEN);


client.on('message', message => {
    if(message.content == "!hello"){
        phase.forEach(x => message.channel.send(x))
    }
});


