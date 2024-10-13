

module.exports = {
    data: {
        name: 'mine'
    },
    async execute(interaction, client) {
        await interaction.reply({
            Text: 'lets do mine'
        });
    } 
};