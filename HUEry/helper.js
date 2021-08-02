const Discord = require('discord.js'),
client = new Discord.Client(),
config = require('./config.json'),
texts = require('./texts/texts.json'),

helper = {
    game: {
        functionName: 'game',
        call: `${config.prefix}`,
        descricao:'',
        comand: function (message) {
            if( message.content == `${this.call}${this.functionName}`) {
                message.channel.send(`Fale uma frase com: ${texts.significado[Math.floor(Math.random() * texts.significado.length)].toUpperCase()}.`)
            }
        }, 
    },
// Development,
    _log: {
        functionName: 'log',
        call: `${config.prefix}`,
        descricao:'',
        comand: function (){}
    },

}

module.exports = helper
