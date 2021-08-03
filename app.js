// // Server Web
const _ex = require("express"),
  app = _ex(),
  port = 3000,
  home = require("./homepage/routerHomepage.js");

  app.use(port, (req, res) => {
    res.send("<h1> Bem vindo! </h1>")
    client.on (helper[2].comand('', 'Na página web')    
)});

// DISCORD
const Discord = require("discord.js"),
  client = new Discord.Client(),
  config = require("./HUEry/config.json"),
  helper = require("./HUEry/helper.js");

client.once("ready", () => console.log("Servidor Discord - online"));

client.login(config.BOT_TOKEN);

client.on("msg", msg => {
  let arr = message.content.split(" ");

    helper.forEach(x => {
    const {call, functionName, comand} = x
      if (`${call}${functionName}` == arr[0]){
        comand(msg)
      }
    })
  });


// Integrate