const ws = require('ws');
const moment = require('moment');
const Discord = require("discord.js");

const DISCORD_BOT_TOKEN = process.env.DISCORD_BOT_TOKEN;
const WebSocketServer = ws.Server;
const wss = new WebSocketServer({ port: 8081 });
const bot = new Discord.Client();

bot.login(DISCORD_BOT_TOKEN);

wss.on('connection', ((ws) => {
  console.info(moment().format('LTS') + ': connected');
  ws.on('message', ((message) => {
    console.info(moment().format('LTS') + ': ' + message);
    bot.channels.cache.get("765951948162859022").send(message);
    // TODO: or json object
    wss.clients.forEach(function each(client) {
      if (client !== ws) {
        client.send(message);
      }
    });
  }));
}));

