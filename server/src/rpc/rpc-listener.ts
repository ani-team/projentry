import { Socket } from "socket.io";
import * as exported from "../exported";

export const RpcListener = (socket: Socket) => {
  socket.on("socket-rpc", (propNames: string[], args, callback) => {
    if (typeof callback !== "function") {
      // not an acknowledgement
      return socket.disconnect();
    }
    const func = propNames.reduce((callee, prop) => callee?.[prop], exported);

    if (!func) {
      callback(
        undefined,
        new Error(`Cannot find function rpc.${propNames.join(".")}`),
      );
      return;
    }

    const result = func(...args);
    if (result instanceof Promise) {
      result
        .then((promiseResult) => callback(promiseResult))
        .catch((err) => callback(undefined, err));
      return;
    }
    callback(result);
  });
};
