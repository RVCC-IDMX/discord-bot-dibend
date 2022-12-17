const {
  SlashCommandBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle,
} = require('discord.js');

const row = new ActionRowBuilder()
  .addComponents(
    new ButtonBuilder()
      .setCustomId('primary')
      .setLabel('Click me!')
      .setStyle(ButtonStyle.Primary),
    new ButtonBuilder()
      .setLabel('Source Code')
      .setURL('https://github.com/RVCC-IDMX/discord-bot-dibend')
      .setStyle(ButtonStyle.Link),
  );
module.exports = {
  data: new SlashCommandBuilder()
    .setName('guide')
    .setDescription('Replies with a message with a guide!'),
  async execute(interaction) {
    await interaction.reply(
      {
        content: `
          Welcome to the Blast Crypto Mining Discord Server and Bot

          You can see a full list of commands by typing / in the input box

          You can see all my live mining stats at https://BlastMining.net`,
        components: [row],
      },
    );
  },
};
