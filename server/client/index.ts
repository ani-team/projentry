import { io, Socket } from "socket.io-client";
import { ManagerOptions } from "socket.io-client/build/manager";
import { SocketOptions } from "socket.io-client/build/socket";

const PROP = Symbol.for("RPC_PROP");
const CACHE = Symbol.for("RPC_CACHE");

type RpcTarget = {
  $socket: Socket;
  [PROP]: string[];
  [CACHE]: Map<string, any & RpcTarget>;
};
type ProxiedRpc = any & RpcTarget;

export default function <T>(
  hostString?: string,
  socketParams?: Partial<ManagerOptions & SocketOptions>,
  timeout = 15000,
): T {
  const socket = io(hostString, socketParams);
  const target: RpcTarget = {
    $socket: socket,
    [PROP]: [],
    [CACHE]: new Map(),
  };

  const proxyHandler: ProxyHandler<RpcTarget> = {
    get: function (target, prop) {
      if (typeof prop === "symbol" || prop.startsWith("$")) return target[prop];
      const propString = [...target[PROP], prop].join(".");
      if (target[CACHE].has(propString)) {
        return target[CACHE].get(propString);
      }
      const proxy = createRpcProxy(target, [...target[PROP], prop]);
      target[CACHE].set(propString, proxy);
      return proxy;
    },
    apply(target, thisArg: any, argArray: any[]): any {
      if (target[PROP].length === 0)
        throw new TypeError("rpc should not be called");

      return new Promise((resolve, reject) => {
        const timer = setTimeout(
          () => reject(new Error("RPC Request is timed out")),
          timeout,
        );
        socket.emit("socket-rpc", target[PROP], argArray, (result, error) => {
          clearTimeout(timer);
          if (error) reject(error);
          else resolve(result);
        });
      });
    },
  };

  function createRpcProxy(target: RpcTarget, prop: string[]): ProxiedRpc {
    return new Proxy(
      { ...target, [PROP]: prop },
      proxyHandler,
    ) as ProxiedRpc;
  }
  return createRpcProxy(target, []) as T;
}
