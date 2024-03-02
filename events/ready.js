// This is what has been added into this current file >>
const { Events } = require('discord.js');

// This is the ready event listener >>
module.exports = {
    name: Events.ClientReady,
    once: true,
    execute(client) {
        console.log(`${readyClient} Is online!`);
    },
};
