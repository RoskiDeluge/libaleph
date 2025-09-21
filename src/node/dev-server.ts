import type { IncomingMessage, ServerResponse } from "node:http";
const http = require("node:http");
const { manifest } = require("./manifest");

const PORT = 3000;

http
  .createServer((req: IncomingMessage, res: ServerResponse) => {
    if (req.method === "GET" && req.url === "/.well-known/agent") {
      const body = JSON.stringify(manifest);
      res.writeHead(200, {
        "Content-Type": "application/agent-manifest+json",
        "Cache-Control": "no-store",
        "Content-Length": Buffer.byteLength(body)
      });
      res.end(body);
      return;
    }

    // Handle affordance: POST /actions/testdrive.book
    if (req.method === "POST" && req.url === "/actions/testdrive.book") {
      let data = "";
      req.on("data", (chunk) => {
        data += chunk;
      });
      req.on("end", () => {
        const payload = JSON.parse(data || "{}");

        // Immediate stub: echo back a "task" resource
        const task = {
          id: "task-123",
          type: "testdrive.booking",
          status: "pending",
          input: payload,
        };

        res.writeHead(201, { "Content-Type": "application/json" });
        res.end(JSON.stringify(task));
      });
      return;
    }
    
    res.writeHead(404).end();
  })
  .listen(PORT, () => {
    console.log(`dev server → http://localhost:${PORT}/.well-known/agent`);
  });
