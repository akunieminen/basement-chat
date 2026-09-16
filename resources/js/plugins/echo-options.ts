import type { BroadcastDriver, EchoOptions } from "laravel-echo";

const container = document.querySelector(".basement-chat-box");
const echoOptions = JSON.parse(
  container?.getAttribute("data-echo-options") ?? "{}",
) as EchoOptions<BroadcastDriver> & { broadcaster: BroadcastDriver };

export default echoOptions;
