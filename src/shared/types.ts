export type Affordance = {
  id: string;
  href: string;
  method: "GET" | "POST";
  inputSchema?: string;
  outputSchema?: string;
};

export type AgentManifest = {
  protocolVersion: string;
  service: { name: string; base: string };
  affordances: Affordance[];
};
