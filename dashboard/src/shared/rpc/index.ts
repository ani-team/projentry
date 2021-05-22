import SocketRpc from "@projentry/client-rpc";
import { Rpc } from "@projentry/server/dist/rpc/types";

export default SocketRpc<Rpc>("localhost:8082");
