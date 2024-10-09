const { SlashCommandBuilder, EmbedBuilder, Embed } = require(`discord.js`);

module.exports = {
    data: new SlashCommandBuilder()
        .setName('about')
        .setDescription(`about the bot`),
    async execute(interaction, client) {
        const embed = new EmbedBuilder()
        .setTitle('About the Bot')
        .setDescription(`in future i will tell who i am`)
        .setColor(0x18e1ee)

        await interaction.reply({
            embeds: [embed]
        })
    },


};