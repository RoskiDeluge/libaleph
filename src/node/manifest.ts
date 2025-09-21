import type { Affordance, AgentManifest } from "../shared/types";

const manifest: AgentManifest = {
  protocolVersion: "1.0",
  service: { name: "DriveHub", base: "http://localhost:3000" },
  affordances: [
    {
      id: "testdrive.book",
      href: "/actions/testdrive.book",
      method: "POST",
      inputSchema: "https://schemas.example.com/testdrive.book@1.0.0",
      outputSchema: "https://schemas.example.com/task@1.0.0"
    }
  ]
};

// CommonJS exports
module.exports = { manifest };
module.exports.manifest = manifest;

// Print when run directly (Node/CommonJS-friendly)
if (require.main === module) {
  console.log(JSON.stringify(manifest, null, 2));
}
