const { SlashCommandBuilder, EmbedBuilder, Embed, ActionRowBuilder, ButtonBuilder, ButtonStyle, Component  } = require(`discord.js`);

module.exports = {
    data: new SlashCommandBuilder()
        .setName('mine')
        .setDescription(`if you want to mine,Click on this`),
    async execute(interaction, client) {
        const embed = new EmbedBuilder()
            .setTitle('Mining')
            .setDescription(`now mining will not work, So please wait for some time `)
            .setColor(0x18e1ee)
            .setThumbnail('https://i.imgur.com/6zQpQ6C.png')
            .addFields(
                { name: 'Mining', value: 'Mining is not working now' },
            )
        const button = new ButtonBuilder()
            .setCustomId('mine')
            .setLabel('mine')
            .setStyle(ButtonStyle.Danger);    


        await interaction.reply({
            embeds: [embed],
            components: [new ActionRowBuilder().addComponents(button)]
        });
    },
}