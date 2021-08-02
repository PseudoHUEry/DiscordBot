//Server Web
const _ex = require('express'),
app = _ex(),
port = 3000,
home = require('./homepage/routerHomepage.js')

app.use('/', (req , res) => res.send('<title> Bem vindo!</title>'))
app.listen(port, () => console.log('Servidor Web - online'))

// DISCORD
const Discord = require('discord.js'),
client = new Discord.Client(),
config = require('./HUEry/config.json'),
helper = require('./HUEry/helper.js')

client.once('ready', () => console.log('Servidor Discord - online'))

client.login(config.BOT_TOKEN)

client.on("message", message => {
    let valid = message.content.split(' ')
    }
)

    