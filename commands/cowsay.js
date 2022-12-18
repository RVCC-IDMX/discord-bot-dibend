const cowsay = require('cowsay');
const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('cowsay')
    .setDescription('Draws a cow with a message!')
    .addStringOption((option) => option.setName('input')
      .setDescription('The message for the cow to say').setMaxLength(25))
    .addStringOption((option) => option.setName('cow')
      .setDescription('The type of cow').setMaxLength(25)),
  async execute(interaction) {
    const cow = `${interaction.options.getString('cow')}`;
    cowsay.list(() => { }).then((cowList) => {
      const validCow = cowList.includes(`${cow}.cow`);
      if (validCow) {
        const say = `\`\`\`${cowsay.say({ text: interaction.options.getString('input'), f: `${cow}` }).replaceAll('`', '\\`')}\`\`\``;
        if (say.length <= 2000) {
          interaction.reply(say);
        } else {
          interaction.reply('Reply would be too long. Please try a different cow or shorter message.');
        }
      } else {
        interaction.reply('invalid cow. See a list of valid cows at https://github.com/piuccio/cowsay/tree/master/cows (don\'t include .cow in the cow name).');
      }
    });
  },
};
