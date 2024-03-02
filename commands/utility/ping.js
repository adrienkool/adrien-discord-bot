// This is what has been added into this current file >>
const { SlashCommandBuilder } = require('discord.js');

// This is the "astats" slash-command >>
module.exports = {
    data: new SlashCommandBuilder()
        .setName('astats')
        .setDescription("I'll show you my current stats!"),
    async execute(interaction) {
        await interaction.reply("*This is currently down.*");
    },
};
