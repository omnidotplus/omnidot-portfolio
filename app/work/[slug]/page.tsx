import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CaseStudy from "../../../components/work/CaseStudy";
import { projects, getProject } from "../../../lib/content";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Work — Omnidot" };
  return {
    title: `${project.title} — Omnidot`,
    description: project.summary,
    openGraph: {
      title: `${project.title} — Omnidot`,
      description: project.summary,
      images: [project.cover],
    },
  };
}

export default async function WorkPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  return <CaseStudy project={project} />;
}
