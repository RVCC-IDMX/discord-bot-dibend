const {
  SlashCommandBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle,
} = require('discord.js');

const row = new ActionRowBuilder()
  .addComponents(
    new ButtonBuilder()
      .setCustomId('primary')
      .setLabel('Click me!')
      .setStyle(ButtonStyle.Primary),
  );
module.exports = {
  data: new SlashCommandBuilder()
    .setName('button')
    .setDescription('Replies with a message with a button!'),
  async execute(interaction) {
    await interaction.reply({ content: 'I think you should,', components: [row] });
  },
};
