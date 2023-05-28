import matrix from "npm:matrix-js-sdk";
import { access_token, bot_user, homeserver } from "./config.ts";

const client = matrix.createClient({
  baseUrl: homeserver,
  accessToken: access_token,
  userId: bot_user,
});

// assumes bot_user has this format `@my-bot:matrix.org`
const bot_name = bot_user.slice(1).split(":")[0];
// @ts-ignore NOTE: why does this not type check
client.on("event", async (event: matrix.MatrixEvent) => {
  if (event.getType() === "m.room.message") {
    const message: string | undefined = event.event.content?.body;
    if (message?.startsWith(bot_name)) {
      const input = message
        .replace(bot_name, "")
        // optional `:`
        .replace(
          /^ *:/,
          "",
        ).trim();
      console.log("input:", input);
      const roomId = event.getRoomId();
      if (roomId) {
        await client.sendMessage(roomId, {
          msgtype: "m.notice",
          body: evaljs(input),
        });
      }
    }
  }
});

await client.startClient();
console.log("Client Started");

// deno-lint-ignore no-explicit-any
function evaljs(param: any) {
  try {
    return String(eval(param));
  } catch (e) {
    return String(e);
  }
}
