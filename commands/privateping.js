const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('privateping')
    .setDescription('Replies with Pong!'),
  async execute(interaction) {
    await interaction.reply({ content: 'Secret Pong!', ephemeral: true });
  },
};
