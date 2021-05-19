import { app, socketIO, startServer } from "./init";
import logger from "./lib/logger";
import * as ProjentryLib from "@projentry/lib";
import * as exported from "./exported";

socketIO.on("connection", (socket) => {
  logger.debug(`${socket.id} is connected`);
  socket.on("socket-rpc", (funcName, args, callback) => {
    if (typeof callback !== "function") {
      // not an acknowledgement
      return socket.disconnect();
    }
    console.log(funcName, args, callback);
    const func = exported[funcName];
    if (!func) {
      callback([undefined, new Error(`Cannot find function ${funcName}`)]);
      return;
    }

    const result = func(...args);
    if (result instanceof Promise) {
      result
        .then((promiseResult) => callback([promiseResult]))
        .catch((err) => callback([undefined, err]));
      return;
    }
    callback(result);
  });
});

app.get("/", async (req, res) => {
  ProjentryLib.initOnDir("/home/niyaz/Projects/work/GBSK_admin_front");
  const aliases = await ProjentryLib.findAliases();
  const imports = await ProjentryLib.findImports(
    ["src/**/*.{js,vue}"],
    aliases,
  );
  res.send(imports);
});

startServer();
