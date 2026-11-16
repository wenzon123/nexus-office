"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Activity, Bot, Building2, CheckSquare, ChevronDown, Command, LayoutDashboard,
  Menu, MessageSquare, Settings, ShieldCheck, Sparkles, Users, X, Wallet,
} from "lucide-react";
import { useState } from "react";

const groups = [
  { label: "WORKSPACE", items: [
    { label: "Visão geral", href: "/", icon: LayoutDashboard },
    { label: "Escritório", href: "/office", icon: Building2 },
    { label: "Funcionários", href: "/agents", icon: Bot },
    { label: "Departamentos", href: "/departments", icon: Users },
  ]},
  { label: "OPERAÇÕES", items: [
    { label: "Tarefas", href: "/tasks", icon: CheckSquare },
    { label: "Aprovações", href: "/approvals", icon: ShieldCheck, count: "3" },
    { label: "Comunicação", href: "/communication", icon: MessageSquare },
    { label: "Atividade", href: "/activity", icon: Activity },
  ]},
  { label: "GESTÃO", items: [
    { label: "Financeiro", href: "/finance", icon: Wallet },
    { label: "Configurações", href: "/settings", icon: Settings },
  ]},
];

export function WorkspaceShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const sidebar = <aside className="flex h-full w-[252px] flex-col border-r border-line bg-[#0d1119]">
    <div className="flex h-[76px] items-center gap-3 border-b border-line px-5">
      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-violet-400 to-indigo-600 text-white shadow-glow"><Command size={19}/></div>
      <div><div className="text-sm font-semibold tracking-wide text-white">NEXUS <span className="text-violet-300">OFFICE</span></div><div className="mt-0.5 text-[9px] uppercase tracking-[.2em] text-slate-500">AI company workspace</div></div>
    </div>
    <div className="border-b border-line p-4">
      <button className="flex w-full items-center gap-3 rounded-xl border border-line bg-panel p-3 text-left">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-violet-400/15 text-violet-200"><Building2 size={15}/></div>
        <div className="min-w-0 flex-1"><div className="truncate text-xs font-medium text-slate-200">Minha empresa</div><div className="text-[10px] text-slate-500">Workspace principal</div></div>
        <ChevronDown size={14} className="text-slate-500"/>
      </button>
    </div>
    <nav className="flex-1 space-y-6 overflow-y-auto px-3 py-5">
      {groups.map((group) => <div key={group.label}><div className="mb-2 px-3 text-[9px] font-semibold tracking-[.2em] text-slate-600">{group.label}</div><div className="space-y-1">{group.items.map((item) => { const Icon = item.icon; const active = pathname === item.href; return <Link key={item.href} href={item.href} onClick={() => setMobileOpen(false)} className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-xs transition ${active ? "bg-violet-400/10 font-medium text-violet-200" : "text-slate-400 hover:bg-white/[.04] hover:text-slate-200"}`}><Icon size={16}/><span className="flex-1">{item.label}</span>{item.count && <span className="rounded-md bg-amber-400/10 px-1.5 py-0.5 text-[10px] text-amber-300">{item.count}</span>}</Link>; })}</div></div>)}
    </nav>
    <div className="border-t border-line p-4">
      <div className="flex items-center gap-3 rounded-xl bg-panel p-3"><div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-amber-200 to-orange-400 text-xs font-bold text-slate-900">F</div><div className="min-w-0 flex-1"><div className="text-xs font-medium text-slate-200">Fundador</div><div className="text-[10px] text-slate-500">Administrador</div></div><span className="h-2 w-2 rounded-full bg-emerald-400"/></div>
    </div>
  </aside>;

  return <div className="min-h-screen bg-canvas text-slate-100">
    <div className="hidden lg:fixed lg:inset-y-0 lg:flex">{sidebar}</div>
    {mobileOpen && <div className="fixed inset-0 z-50 flex lg:hidden"><button aria-label="Fechar menu" onClick={() => setMobileOpen(false)} className="absolute inset-0 bg-black/70"/><div className="relative z-10">{sidebar}</div><button aria-label="Fechar" onClick={() => setMobileOpen(false)} className="absolute right-4 top-4 z-20 text-white"><X/></button></div>}
    <div className="lg:pl-[252px]">
      <header className="sticky top-0 z-30 flex h-[76px] items-center justify-between border-b border-line bg-[#090b10]/85 px-4 backdrop-blur-xl md:px-8">
        <div className="flex items-center gap-3"><button onClick={() => setMobileOpen(true)} className="rounded-lg p-2 text-slate-400 hover:bg-panel lg:hidden"><Menu size={19}/></button><div><div className="text-xs font-medium text-slate-200">Workspace principal</div><div className="mt-1 text-[10px] text-slate-500">Nexus Office <span className="mx-1 text-slate-700">/</span> {pathname === "/" ? "Visão geral" : pathname.slice(1).replaceAll("-", " ")}</div></div></div>
        <div className="flex items-center gap-3"><div className="hidden items-center gap-2 rounded-lg border border-line bg-panel px-3 py-2 text-[10px] text-slate-500 sm:flex"><Sparkles size={13} className="text-violet-300"/> IA pronta para configuração</div><div className="flex h-8 w-8 items-center justify-center rounded-full border border-line bg-panel text-xs font-semibold text-violet-200">F</div></div>
      </header>
      <main className="mx-auto max-w-[1440px] px-4 py-7 md:px-8 md:py-9">{children}</main>
      <footer className="border-t border-line px-8 py-5 text-center text-[10px] text-slate-600">NEXUS OFFICE · FUNDADOR NO CONTROLE · V0.1.0</footer>
    </div>
  </div>;
}
