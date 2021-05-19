import SocketRpc from "@projentry/client-rpc";

type RpcObject = {
    testFunc: (a: number, b: number) => number;
};

export default SocketRpc<RpcObject>("localhost:8082");
