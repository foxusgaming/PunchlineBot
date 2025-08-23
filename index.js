const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

const punchlines = [
  "La vie est courte, mange le dessert en premier !",
  "J'ai pas de plan, juste des punchlines.",
  "Qui dort dîne, qui boit trinque."
];

client.on('ready', () => {
  console.log(`Connecté en tant que ${client.user.tag}`);
});

client.on('messageCreate', message => {
  if(message.content === '!punch') {
    const random = Math.floor(Math.random() * punchlines.length);
    message.channel.send(punchlines[random]);
  }
});

client.login(process.env.DISCORD_TOKEN);
