# Matrix bot with deno

![image](https://github.com/sigmaSd/deno-matrix-bot/assets/22427111/66bc72cf-4ecc-45ea-8ddc-6857a795de9b)

## Usage

- Copy `config.sample.ts` to `config.ts`
- Adding the missing values to `config.ts`
- Run the bot with `deno run --allow-net bot.ts`
- You can now message the bot and it will evaluate the code with js eval (after
  you manually join the bot to your sever)

**Warning**

The example uses javascript eval so the access token can easily leak, don't
share this bot, use it on your private servers, its just for demo

## More Info

- You need a matrix bot, for that create a new user accunt on matrix that you
  will dedicate to the bot. (you can you browser private mode)
- Copy the access token and the bot name from element ui and add them to
  `config.ts`
- Invite the bot to your server, manually open the bot account and accept the
  invite
- Thats it now you can run the bot and it will respond to mentions
- To revoke a token in case of a leak, run the client with the token and use
  `client.logout()`. To get a new token use the element ui
  
 ## Example
 checkout https://github.com/sigmaSd/matrix-bot-1/ for a more advanced bot example
