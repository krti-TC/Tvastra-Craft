const { SlashCommandBuilder, EmbedBuilder, Embed } = require(`discord.js`);

module.exports = {
    data: new SlashCommandBuilder()
        .setName('mine')
        .setDescription(`if you want to mine,Click on this`),
    async execute(interaction, client) {
        const embed = new EmbedBuilder()
        .setTitle('Mining')
        .setDescription(`now mining will not work, So please wait for some time ${client} `)
        .setColor(0x18e1ee)
        .setFooter({
            text: 'Mining is not working now',
          });

        await interaction.reply({
            embeds: [embed]
        });
    },
}