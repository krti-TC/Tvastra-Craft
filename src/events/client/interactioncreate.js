const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');

const fs = require("fs");
const mine = require('../../commands/tools/mine');

module.exports = {
    name: 'interactionCreate',
    async execute(interaction, client) {
        if (interaction.isChatInputCommand()) {
            const { commands } = client;
            const { commandName } = interaction;
            const command = commands.get(commandName);
            if (!command) return;
            try {
                await command.execute(interaction, client);
            } catch (error) {
                console.error(error);
                await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
            }
        } else if  (interaction.isButton()) {
            const { buttons } = client;
            const { customId } = interaction;
            const button = buttons.get(customId);
            if (!button) return new Error(`this is an error in button`);

            try {
                await button.execute(interaction, client);
            } catch (err) {
                console.error(err);
            }
        }

    },
};