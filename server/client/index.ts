import { io, Socket } from "socket.io-client";
import { ManagerOptions } from "socket.io-client/build/manager";
import { SocketOptions } from "socket.io-client/build/socket";

export const SOCKET = Symbol.for("CLIENT_SOCKET");

type ProxiedRpc<T> = T & { [SOCKET]: Socket };

export default function <T>(
  hostString?: string,
  socketParams?: Partial<ManagerOptions & SocketOptions>,
): T {
  const socket = io(hostString, socketParams);
  function createRpcHandler(funcName: string) {
    return (...args) =>
      new Promise((resolve, reject) => {
        socket.emit("socket-rpc", funcName, args, (result, error) => {
          if (error) reject(error);
          else resolve(result);
        });
      });
  }
  return new Proxy(
    {
      [SOCKET]: socket,
    },
    {
      get: function (obj, prop) {
        if (typeof prop === "symbol" || prop.startsWith("$")) return obj[prop];
        return createRpcHandler(prop);
      },
    },
  ) as ProxiedRpc<T>;
}
