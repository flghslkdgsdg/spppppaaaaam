const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("552612635019837443")
setInterval(function() {
channel.send(`**Alven Spam, Alven Spam, Alven Spam, Alven Spam, Alven Spam, Alven Spam, Alven Spam, Alven Spam, Alven Spam, Alven Spam, Alven Spam, Alven Spam, Alven Spam, ** ,`);
}, 30)
})

client.on('message', message => {
 if(message.author.id !== "557289550779645953" )return;

let command = "3say"

if (!message.content.startsWith(command) || message.author.bot ) return;
const args = message.content.slice(command.length).split(/ +/g).join(" ");
var array = [`${args}`];
var str = array.join(' ');
if (message.content.startsWith(command)) {
message.channel.send(`${args}`);
}
  
});
client.login(process.env.BOT_TOKEN);
