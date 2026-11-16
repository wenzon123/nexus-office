# Nexus Office

An AI-powered virtual company workspace. The first release establishes the product foundation: dashboard, departments, agent directory, tasks, approvals, activity feed, and Supabase integration points.

## Requirements
- Node.js 20.9+
- npm

## Local development
```bash
npm install
cp .env.example .env.local
npm run dev
```
Open http://localhost:3000.

## Environment
Supabase is optional for the UI preview. Set `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` to enable the database client. Never expose a service-role key in browser code.

## Current scope
This foundation uses clearly marked demo data for the workspace UI. Agent execution, persistent task orchestration, authentication, and approval enforcement are subsequent implementation milestones; the interface does not pretend those systems are already running.

## Product principles
- The founder remains the final authority.
- External side effects require explicit approval.
- Every agent action must be auditable.
- Secrets belong in environment variables, never in source control.
