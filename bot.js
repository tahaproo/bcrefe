const Discord = require("discord.js");
const client = new Discord.Client();
client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Admin Bot- Script By : Black Shop`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : Black Shop ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`Black Shop`,"http://twitch.tv/Black Shop")
client.user.setStatus("dnd")
});

c
client.on('message', message => {
            if(!message.channel.guild) return;
let args = message.content.split(' ').slice(1).join(' ');
if (message.content.startsWith('-bc')){
 if (message.author.id !== '346066545107009537') return message.reply('** هذا الأمر فقط لصاحب البوت و شكراًً **')
 if(!message.author.id === '346066545107009537') return;
message.channel.sendMessage('جار ارسال الرسالة |✅')
client.users.forEach(m =>{
m.sendMessage(args)
})
}
});
 
 
client.login(process.env.BOT_TOKEN);// لا تغير فيها شيء
