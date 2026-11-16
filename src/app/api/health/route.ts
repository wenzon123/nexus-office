import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    name: "Nexus Office",
    status: "ok",
    version: "0.1.0",
    integrations: {
      supabaseConfigured: Boolean(process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY),
      agentRuntime: "not-connected",
    },
  });
}
