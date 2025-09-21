import type { AgentManifest } from "../shared/types"; // types only

class TestDriveAgent extends HTMLElement {
  // In a real app you'd fetch the manifest; here we just show the shape
  static affordances: AgentManifest["affordances"] = [
    { id: "testdrive.book", href: "/actions/testdrive.book", method: "POST" }
  ];

  connectedCallback() {
    console.log("Agent component attached", TestDriveAgent.affordances);
  }
}
customElements.define("agent-testdrive", TestDriveAgent);

// CommonJS export
module.exports = { TestDriveAgent };
