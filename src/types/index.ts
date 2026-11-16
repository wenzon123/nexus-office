export type AgentStatus = "idle" | "working" | "waiting" | "paused" | "error";
export type TaskStatus = "draft" | "queued" | "running" | "review" | "blocked" | "completed" | "failed";
export type ApprovalStatus = "pending" | "approved" | "rejected" | "cancelled";

export interface AgentProfile {
  id: string;
  name: string;
  role: string;
  department: string;
  description: string;
  status: AgentStatus;
  model?: string;
  permissions: string[];
}

export interface WorkspaceTask {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
  assignedAgentId?: string;
  requiresApproval: boolean;
  createdAt: string;
}
