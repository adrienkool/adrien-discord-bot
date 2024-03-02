// This is what has been added into this current file >>
const { Client, Events, GatewayIntentBits } = require('discord.js');
const { token } = require('./config.json');

// This is the new client with all of its intents >>
const client = new Client({ intents: GatewayIntentBits.Guilds });

// This is what will happen once the bot has successfully been turned on >>
client.once(Events.ClientReady, readyClient => {
    console.log(`${readyClient.user.username} Is online!`);
});

// This is where the bot logs into Discord >>
client.login(token);
