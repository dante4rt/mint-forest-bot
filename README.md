# Mint Forest Bot

Mint Forest Bot is a tool for claiming and injecting energy into MintChain's forest ecosystem.

## Installation

1. Clone the repository:

```bash
git clone https://github.com/dante4rt/mint-forest-bot.git
```

2. Install dependencies:

```bash
cd mint-forest-bot
npm install
```

## Usage

To run the bot, execute the following command:

```bash
npm start
```

## Configuration

1. Create a `accounts.json` file in the root directory of the project.
2. Add your MintChain API tokens to the `accounts.json` file in the following format:

```json
[
  "Bearer xxx",
  "Bearer xxx",
  ...
]
```

Note: You can obtain your MintChain API tokens by registering on the MintChain platform and retrieving them from your account settings.

### Accessing Authorization Token

To access the Authorization token required for the `accounts.json` file, follow these steps:

1. Open your web browser and go to the MintChain website.
2. Log in to your account.
3. Open the developer tools by pressing `F12` or right-clicking on the page and selecting "Inspect" or "Inspect Element".
4. Navigate to the "Network" tab.
5. Perform a request that requires authentication, such as refreshing the page or accessing a protected resource.
6. Look for the request in the list of network requests.
7. Click on the request to view its details.
8. In the request headers section, you should see an "Authorization" header with a value starting with "Bearer". Copy this value and paste it into the `accounts.json` file.

Ensure that you keep your API tokens secure and do not share them with anyone else.
