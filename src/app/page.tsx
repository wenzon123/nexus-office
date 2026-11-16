"use client";

import { useState } from "react";
import {
  ArrowUpRight, Bot, CheckCircle2, Clock3, Command, Plus, Sparkles,
  TrendingUp, Users, Wallet, Activity, MoreHorizontal, ChevronRight,
} from "lucide-react";

const stats = [
  { label: "Agentes ativos", value: "06", note: "Equipe configurada", icon: Bot, tone: "violet" },
  { label: "Tarefas em andamento", value: "12", note: "4 aguardando revisão", icon: Activity, tone: "blue" },
  { label: "Aprovações pendentes", value: "03", note: "Precisam da sua atenção", icon: CheckCircle2, tone: "amber" },
  { label: "Orçamento mensal", value: "R$ 0", note: "Nenhum gasto registrado", icon: Wallet, tone: "green" },
];

const agents = [
  { name: "Atlas", role: "CEO · Coordenação", initials: "AT", status: "Planejando", color: "violet", task: "Organizando prioridades da empresa" },
  { name: "Maya", role: "Pesquisa · Estratégia", initials: "MY", status: "Disponível", color: "rose", task: "Pronta para receber uma tarefa" },
  { name: "Theo", role: "Engenharia · Produto", initials: "TH", status: "Disponível", color: "blue", task: "Pronto para receber uma tarefa" },
  { name: "Luna", role: "Marketing · Crescimento", initials: "LU", status: "Disponível", color: "amber", task: "Pronta para receber uma tarefa" },
];

const activities = [
  { title: "Workspace criado", detail: "A estrutura inicial do Nexus Office está pronta.", time: "Agora", icon: Sparkles },
  { title: "Equipe inicial configurada", detail: "6 cargos disponíveis para configuração.", time: "Hoje", icon: Users },
  { title: "Centro de aprovações preparado", detail: "Ações externas exigirão sua autorização.", time: "Hoje", icon: CheckCircle2 },
];

export default function DashboardPage() {
  const [goal, setGoal] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function submitGoal() {
    if (!goal.trim()) return;
    setSubmitted(true);
  }

  return (
    <div className="space-y-8">
      <section className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
        <div>
          <div className="mb-3 flex items-center gap-2 text-xs font-medium uppercase tracking-[.2em] text-violet-300">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> Workspace privado
          </div>
          <h1 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">Bom dia, fundador.</h1>
          <p className="mt-2 max-w-xl text-sm leading-6 text-slate-400">Sua empresa começa aqui. Defina uma direção e acompanhe o trabalho da equipe em um só lugar.</p>
        </div>
        <div className="flex items-center gap-2 rounded-xl border border-line bg-panel px-3 py-2 text-xs text-slate-400">
          <Clock3 size={14} /> Segunda-feira, 16 de novembro
        </div>
      </section>

      <section className="relative overflow-hidden rounded-2xl border border-violet-400/20 bg-gradient-to-br from-[#1c1a35] via-[#17182a] to-[#111722] p-5 shadow-glow md:p-7">
        <div className="absolute -right-16 -top-24 h-64 w-64 rounded-full bg-violet-500/10 blur-3xl" />
        <div className="relative grid gap-6 lg:grid-cols-[1fr_320px] lg:items-center">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-violet-300/20 bg-violet-300/10 px-3 py-1 text-[11px] font-medium text-violet-200"><Sparkles size={13} /> CENTRAL DE COMANDO</div>
            <h2 className="max-w-xl text-2xl font-semibold text-white">Qual é o próximo objetivo da empresa?</h2>
            <p className="mt-2 max-w-lg text-sm leading-6 text-slate-400">Descreva o que deseja alcançar. O CEO poderá transformar sua visão em um plano de trabalho para sua aprovação.</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-black/20 p-3">
            <textarea value={goal} onChange={(e) => { setGoal(e.target.value); setSubmitted(false); }} placeholder="Ex.: Pesquisar oportunidades para lançar nosso primeiro produto..." className="min-h-24 w-full resize-none bg-transparent text-sm text-white outline-none placeholder:text-slate-500" />
            <div className="flex items-center justify-between border-t border-white/10 pt-3">
              <span className="text-[10px] text-slate-500">Nenhuma ação externa será executada.</span>
              <button onClick={submitGoal} className="inline-flex items-center gap-2 rounded-lg bg-violet-500 px-3 py-2 text-xs font-semibold text-white transition hover:bg-violet-400"><Plus size={14} /> Criar objetivo</button>
            </div>
            {submitted && <p className="mt-2 text-xs text-emerald-300">Objetivo anotado nesta demonstração. A execução será conectada na próxima etapa.</p>}
          </div>
        </div>
      </section>

      <section className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((item) => {
          const Icon = item.icon;
          return <div key={item.label} className="rounded-xl border border-line bg-panel p-4">
            <div className="flex items-center justify-between"><span className="text-xs text-slate-400">{item.label}</span><span className={`rounded-lg p-2 ${item.tone === "violet" ? "bg-violet-400/10 text-violet-300" : item.tone === "blue" ? "bg-sky-400/10 text-sky-300" : item.tone === "amber" ? "bg-amber-400/10 text-amber-300" : "bg-emerald-400/10 text-emerald-300"}`}><Icon size={16} /></span></div>
            <div className="mt-4 text-3xl font-semibold tracking-tight text-white">{item.value}</div>
            <div className="mt-1 text-[11px] text-slate-500">{item.note}</div>
          </div>;
        })}
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.25fr_.75fr]">
        <div className="rounded-xl border border-line bg-panel">
          <div className="flex items-center justify-between border-b border-line px-5 py-4"><div><h3 className="text-sm font-semibold text-white">Equipe em destaque</h3><p className="mt-1 text-xs text-slate-500">Seus principais agentes</p></div><a href="/agents" className="text-xs text-violet-300 hover:text-violet-200">Ver equipe <ChevronRight className="inline" size={13}/></a></div>
          <div className="divide-y divide-line">
            {agents.map((agent) => <div key={agent.name} className="flex items-center gap-3 px-5 py-4">
              <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-xs font-semibold ${agent.color === "violet" ? "bg-violet-400/15 text-violet-200" : agent.color === "rose" ? "bg-rose-400/15 text-rose-200" : agent.color === "blue" ? "bg-sky-400/15 text-sky-200" : "bg-amber-400/15 text-amber-200"}`}>{agent.initials}</div>
              <div className="min-w-0 flex-1"><div className="text-sm font-medium text-slate-100">{agent.name}</div><div className="text-xs text-slate-500">{agent.role}</div><div className="mt-1 truncate text-[11px] text-slate-400">{agent.task}</div></div>
              <span className="rounded-full border border-line px-2 py-1 text-[10px] text-slate-400">{agent.status}</span>
            </div>)}
          </div>
        </div>
        <div className="rounded-xl border border-line bg-panel">
          <div className="flex items-center justify-between border-b border-line px-5 py-4"><div><h3 className="text-sm font-semibold text-white">Atividade recente</h3><p className="mt-1 text-xs text-slate-500">O que está acontecendo</p></div><MoreHorizontal size={17} className="text-slate-500"/></div>
          <div className="space-y-5 p-5">
            {activities.map((item) => { const Icon = item.icon; return <div key={item.title} className="flex gap-3"><div className="rounded-lg bg-slate-800 p-2 text-violet-300"><Icon size={15}/></div><div className="min-w-0 flex-1"><div className="text-xs font-medium text-slate-200">{item.title}</div><p className="mt-1 text-[11px] leading-5 text-slate-500">{item.detail}</p></div><span className="whitespace-nowrap text-[10px] text-slate-600">{item.time}</span></div>; })}
          </div>
          <div className="mx-5 border-t border-line py-4 text-[11px] text-slate-500">Os eventos reais serão registrados no histórico de auditoria.</div>
        </div>
      </section>

      <section className="flex flex-col justify-between gap-3 rounded-xl border border-line bg-panel p-5 sm:flex-row sm:items-center">
        <div className="flex items-center gap-3"><div className="rounded-xl bg-emerald-400/10 p-3 text-emerald-300"><TrendingUp size={18}/></div><div><h3 className="text-sm font-medium text-white">Autonomia supervisionada</h3><p className="mt-1 text-xs text-slate-500">Ações sensíveis permanecem bloqueadas até sua aprovação.</p></div></div>
        <a href="/approvals" className="inline-flex items-center gap-2 text-xs font-medium text-violet-300 hover:text-violet-200">Central de aprovações <ArrowUpRight size={14}/></a>
      </section>
    </div>
  );
}
