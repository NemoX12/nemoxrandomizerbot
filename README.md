# NemoXRandomizer Bot

This bot generates a random number between two user-provided values using a simple slash command.

## Features

- The bot listens for a command `/rand` that accepts two numeric inputs (`query1` and `query2`).
- It generates a random number between the two values, provided that `query1` is less than `query2`.

## Setup

1. Clone the repository to your local machine.

   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. Install dependencies.

   ```bash
   npm install
   ```

3. Create a .env file in the root of the project and add the following variables:

   ```bash
   BOT_TOKEN=your-bot-token
   CLIENT_ID=your-client-id
   ```

   Replace your-bot-token with your bot’s token, and your-client-id with your application’s client ID from the Discord Developer Portal.

4. Register the slash commands with Discord’s API.
   ```bash
   node index.js
   ```

## Commands

- /rand - Generate a random number between two specified values.
  - query1: First number (lower bound) (required)
  - query2: Second number (upper bound) (required)

## License

This project is licensed under the [MIT License]().

## Acknowledgments

[Discord.js Documentation](https://discord.js.org/docs)

[dotenv Documentation](https://www.dotenv.org/docs/)
