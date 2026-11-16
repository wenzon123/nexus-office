import { notFound } from "next/navigation";
import { SectionPage } from "@/components/section-page";

const sections = ["office", "agents", "departments", "tasks", "approvals", "communication", "activity", "finance", "settings"];

export function generateStaticParams() {
  return sections.map((section) => ({ section }));
}

export default async function WorkspaceSection({ params }: { params: Promise<{ section: string }> }) {
  const { section } = await params;
  if (!sections.includes(section)) notFound();
  return <SectionPage section={section} />;
}
