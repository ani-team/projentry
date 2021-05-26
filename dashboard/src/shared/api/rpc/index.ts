import SocketRpc from "@projentry/client-rpc";
import { Rpc } from "@projentry/server/dist/rpc/types";

const rpc = SocketRpc<Rpc>("http://localhost:8082");
(window as any).rpc = rpc;
// eslint-disable-next-line no-console
console.log(
    "%c> rpc.configs.getPackageJson().then(console.log)",
    "line-height: 22px; font: 16px monospace; color: rgb(10 60 233 / 77%);",
);
// eslint-disable-next-line no-console
rpc.configs.getPackageJson().then(console.log);

// // @ts-ignore
// // rpc.configs.getConfig().then(console.log).catch(console.error).finally(console.warn)
// // !!! FIXME
// rpc.configs.getConfig().load("../.projentryrc.js");

export default rpc;
