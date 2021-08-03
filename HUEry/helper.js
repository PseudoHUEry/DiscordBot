const Discord = require('discord.js'),
client = new Discord.Client(),
config = require('./config.json'),
texts = require('./texts/texts.json'),
pteer = require('puppeteer'),


helper = [
    _game = {
        functionName: 'game',
        call: `${config.prefix}`,
        descricao:'',
        comand: function (msg) {
         msg.channel.send(`Fale uma frase com: ${texts.significado[Math.floor(Math.random() * texts.significado.length)].toUpperCase()}.`)
            }
        },
   
        _page = {
            functionName: '!page',
            call: `${config.prefix}`,
            descricao:'',
            comand: function (msg, arr) {

            console.log(`${this.functionName} está rodando.`)
                let scrap = async() => {
                    const browser = await pteer.launch({
                        headless: false
                    })
                
                const page = await browser.newPage()
                await page.goto(arr)
                await page.screenshot({
                    path: 'example.png'})
                browser.close()
                    return[]
            }
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
    
        _error = {
        comand: function (msg) {
            msg.channel.send(`Error: Verifique vosso comando.`)
        } 
    },   
]

module.exports = helper
