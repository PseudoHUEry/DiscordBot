const Discord = require('discord.js'),
client = new Discord.Client(),
config = require('./config.json'),
texts = require('./texts/texts.json'),


helper = [
    _game = {
        functionName: 'game',
        call: `${config.prefix}`,
        descricao:'',
        comand: function (msg) {
         msg.channel.send(`Fale uma frase com: ${texts.significado[Math.floor(Math.random() * texts.significado.length)].toUpperCase()}.`)
            }
        },
    // Utilidades
    
    _help = {
        functionName: 'help',
        call: `${config.prefix}`,
        descricao:'',
        comand: function (msg) {
            msg.author.send(`Commands; \n ${this._game.functionName.toUpperCase()}: ${this._game.descricao} \n ${this._help.functionName.toUpperCase()}: ${this._help.descricao}`)
        }  
    },   
]

module.exports = helper
