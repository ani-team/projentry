#!/usr/bin/env node

import * as express from "express";
import * as path from "path";
import { app, socketIO, startServer } from "./init";
import { RpcListener } from "./rpc/rpc-listener";

socketIO.on("connection", RpcListener);

const publicDir = path.resolve(__dirname, "..", "public");
app.use(express.static(publicDir));

app.get("*", (req, res) => {
  res.sendFile("index.html", {
    root: publicDir,
  });
});

startServer();
