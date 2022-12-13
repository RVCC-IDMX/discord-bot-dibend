const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('xmr')
    .setDescription('Replies with BlastMining.net Monero Mining Stats'),
  async execute(interaction) {
    await interaction.reply('Pong!');
  },
};
