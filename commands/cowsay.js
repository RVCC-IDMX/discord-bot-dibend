const cowsay = require('cowsay');
const { SlashCommandBuilder } = require('discord.js');

const say = cowsay.say({ text: 'Moo!' }).replaceAll('`', '\\`');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('cowsay')
    .setDescription('Draws a cow with a message!'),
  async execute(interaction) {
    await interaction.reply(`\`\`\`${say}\`\`\``);
  },
};
