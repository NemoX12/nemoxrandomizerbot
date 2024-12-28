const { Client, GatewayIntentBits, REST, Routes } = require("discord.js");
require("dotenv").config();

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

const token = process.env.BOT_TOKEN;
const clientId = process.env.CLIENT_ID;

const commands = [
  {
    name: "rand",
    description: "Generate a random number between two queries",
    options: [
      {
        name: "query1",
        type: 4,
        description: "First number (lower bound)",
        required: true,
      },
      {
        name: "query2",
        type: 4,
        description: "Second number (upper bound)",
        required: true,
      },
    ],
  },
];

const rest = new REST({ version: "10" }).setToken(token);

(async () => {
  try {
    console.log("Registering slash commands...");
    await rest.put(Routes.applicationCommands(clientId), { body: commands });
    console.log("Slash commands registered!");
  } catch (error) {
    console.error(error);
  }
})();

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isCommand()) return;

  const { commandName, options } = interaction;

  if (commandName === "rand") {
    const query1 = options.getInteger("query1");
    const query2 = options.getInteger("query2");

    if (query1 >= query2) {
      await interaction.reply(
        "The first number should be less than the second number."
      );
      return;
    }

    const randomNumber =
      Math.floor(Math.random() * (query2 - query1 + 1)) + query1;
    await interaction.reply(
      `Random number between ${query1} and ${query2}: ${randomNumber}`
    );
  }
});

client.login(token);
