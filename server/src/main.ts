import * as ProjentryLib from "@projentry/lib";
import * as express from "express";
import * as path from "path";
import { app, socketIO, startServer } from "./init";
import { RpcListener } from "./rpc/rpc-listener";

socketIO.on("connection", RpcListener);

const publicDir = path.resolve(__dirname, "..", "public");
app.use(express.static("public"));

app.get("/test", async (req, res) => {
  ProjentryLib.initOnDir("/home/niyaz/Projects/work/GBSK_admin_front");
  const aliases = await ProjentryLib.findAliases();
  const imports = await ProjentryLib.findImports(
    ["src/**/*.{js,vue}"],
    aliases,
  );
  res.send(imports);
  // const graph = ProjentryLib.analyzeDependencies(imports);
  // res.send(graph);
});

app.get("*", (req, res) => {
  res.sendFile("index.html", {
    root: publicDir,
  });
});

startServer();
