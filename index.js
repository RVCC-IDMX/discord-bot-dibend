const fs = require('node:fs');
const path = require('node:path');
const {
  Client, Collection, Events, GatewayIntentBits, EmbedBuilder,
} = require('discord.js');
const { token } = require('./config.json');

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.commands = new Collection();
const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter((file) => file.endsWith('.js'));

// eslint-disable-next-line no-restricted-syntax
for (const file of commandFiles) {
  const filePath = path.join(commandsPath, file);
  // eslint-disable-next-line import/no-dynamic-require, global-require
  const command = require(filePath);
  client.commands.set(command.data.name, command);
}

client.once(Events.ClientReady, () => {
  console.log('Ready!');
});

client.on(Events.InteractionCreate, async (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  const command = client.commands.get(interaction.commandName);

  if (!command) return;

  try {
    await command.execute(interaction);
  } catch (error) {
    console.error(error);
    await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
  }
});

client.on(Events.InteractionCreate, (interaction) => {
  if (!interaction.isButton()) return;
  const embed = new EmbedBuilder()
    .setColor(0x0099FF)
    .setTitle('Blast Crypto Mining')
    .setURL('https://blastmining.net')
    .setAuthor({ name: 'David DiBenedetto', iconURL: 'https://www.njweb.solutions/nj.png', url: 'https://njweb.solutions' })
    .setDescription('Blast Crypto Mining, Home Crypto Miner')
    .setThumbnail('https://www.njweb.solutions/rigs/4.jpg')
    .setTimestamp();

  interaction.reply({ embeds: [embed] });
});

client.login(token);
