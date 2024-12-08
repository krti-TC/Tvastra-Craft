const { SlashCommandBuilder } = require(`discord.js`);

module.exports = {
    data: new SlashCommandBuilder()
        .setName('support')
        .setDescription(`If you want any help click on me`),
        async execute(interaction, client) {
            const embed = new EmbedBuilder()
            .setTitle('support')
            .setDescription(`Ok , I'm here to help you with anything you need. What's on your mind?`)
            .setColor(0x18e1ee)
            .setFooter({
                text: 'please wait i am not in update',
              });
    
            await interaction.reply({
                embeds: [embed]
            });
        },


};