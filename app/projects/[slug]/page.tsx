import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { projects } from "@/lib/data";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return {};
  return {
    title: `${project.title} — Nethra Divyani`,
    description: project.summary,
  };
}

export default function CaseStudyPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) notFound();

  const index = projects.findIndex((p) => p.slug === params.slug);
  const next = projects[(index + 1) % projects.length];

  return (
    <>
      <Header />
      <main className="px-7 py-[70px]">
        <div className="mx-auto max-w-[720px]">
          <Link
            href="/#projects"
            className="mb-10 inline-flex items-center gap-2 font-mono text-[13px] text-text-muted transition-colors hover:text-amber"
          >
            <ArrowLeft size={14} />
            back to build log
          </Link>

          <div className="mb-3 flex items-center gap-2.5 font-mono text-xs text-teal">
            <span>#{project.hash}</span>
            <span className="text-text-faint">·</span>
            <span>{project.role}</span>
          </div>

          <h1 className="mb-5 font-display text-[clamp(2rem,5vw,2.8rem)] font-bold leading-[1.1] tracking-tight">
            {project.title}
          </h1>

          <p className="mb-10 max-w-[560px] text-[1.05rem] text-text-muted">
            {project.summary}
          </p>

          <div className="mb-10 flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-[5px] border border-line bg-bg-alt px-[11px] py-[6px] font-mono text-[12.5px] text-text"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="space-y-8">
            <section className="rounded-[10px] border border-line bg-surface p-7">
              <h2 className="mb-3 font-mono text-[12.5px] uppercase tracking-[0.06em] text-amber">
                Problem
              </h2>
              <p className="text-text-muted">{project.problem}</p>
            </section>

            <section className="rounded-[10px] border border-line bg-surface p-7">
              <h2 className="mb-3 font-mono text-[12.5px] uppercase tracking-[0.06em] text-amber">
                Approach
              </h2>
              <p className="text-text-muted">{project.approach}</p>
            </section>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-between gap-6 border-t border-line pt-8">
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-amber bg-amber px-[22px] py-3 font-mono text-[13.5px] font-semibold text-[#12100A] transition-all hover:-translate-y-px hover:bg-amber-light"
            >
              View repo
              <ArrowUpRight size={14} />
            </a>

            <Link
              href={`/projects/${next.slug}`}
              className="group inline-flex items-center gap-2 font-mono text-[13px] text-text-muted transition-colors hover:text-teal"
            >
              Next: {next.title}
              <ArrowUpRight
                size={14}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
