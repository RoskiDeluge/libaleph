type Affordance = {
    id: string;
    href: string;
    method: "GET" | "POST";
    inputSchema?: string;
    outputSchema?: string;
};
type AgentManifest = {
    protocolVersion: string;
    service: {
        name: string;
        base: string;
    };
    affordances: Affordance[];
};
export type { Affordance, AgentManifest };
