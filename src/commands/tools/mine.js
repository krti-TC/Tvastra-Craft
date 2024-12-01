const { SlashCommandBuilder, EmbedBuilder, Embed, ActionRowBuilder, ButtonBuilder, ButtonStyle, Component  } = require(`discord.js`);

module.exports = {
    data: new SlashCommandBuilder()
        .setName('work')
        .setDescription(`if you want to do work,Click on this`),
    async execute(interaction, client) {
        const embed = new EmbedBuilder()
            .setTitle('work')
            .setDescription(`now there is no work ,So please wait for some time `)
            .setColor(0x18e1ee)
            .setThumbnail(client.user?.displayAvatarURL() ?? 'default_avatar_url')
            .addFields(
                { name: 'no work', value: 'this is new bot so it take time' },
            )
        const mine = new ButtonBuilder()
            .setCustomId('mine')
            .setLabel('mine')
            .setStyle(ButtonStyle.Danger);    
        
            const chop = new ButtonBuilder()
            .setCustomId('chop')
            .setLabel('chop')
            .setStyle(ButtonStyle.Danger);    
    

        await interaction.reply({
            embeds: [embed],
            components: [new ActionRowBuilder().addComponents(mine)],
            components: [new ActionRowBuilder().addComponents(chop)]
        });
    },
}