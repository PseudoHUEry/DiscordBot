const Discord = require('discord.js'),
client = new Discord.Client(),
config = require('./config.json'),
texts = require('./texts/texts.json')

client.login(config.BOT_TOKEN)

client.on('message', message => {
    if( message.content == `${config.prefix}ola`) {
        message.channel.send("Primeiramente, bom dia!" && "Vai tomar no Cu!")
    }
})

client.on('message', message => {
    if( message.content == `${config.prefix}game`) {
        message.channel.send(`Fale uma frase com: ${texts.significado[Math.floor(Math.random() * texts.significado.length)].toUpperCase()}.`)
    }
})