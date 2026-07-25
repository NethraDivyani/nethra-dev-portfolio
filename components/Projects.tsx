import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionLabel from "./SectionLabel";
import SectionReveal from "./SectionReveal";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="border-b border-line px-7 py-[70px]">
      <div className="mx-auto max-w-[880px]">
        <SectionLabel index="03" label="projects" />
        <h2 className="mb-[34px] font-display text-[clamp(1.5rem,3vw,2rem)] font-semibold">
          Build log
        </h2>

        <div className="relative before:absolute before:bottom-2 before:left-[9px] before:top-2 before:w-px before:bg-line">
          <div className="space-y-[30px]">
            {projects.map((project, i) => (
              <SectionReveal key={project.slug} delay={i * 0.06}>
                <div className="relative pl-10">
                  <span className="absolute left-1 top-1.5 h-[11px] w-[11px] rounded-full border-2 border-amber bg-bg" />
                  <Link
                    href={`/projects/${project.slug}`}
                    className="group block rounded-[10px] border border-line bg-surface p-5 transition-colors hover:border-amber hover:bg-surface-hover"
                  >
                    <div className="mb-2 flex flex-wrap items-baseline gap-2.5">
                      <span className="font-mono text-xs text-teal">
                        #{project.hash}
                      </span>
                      <span className="font-display text-[1.12rem] font-semibold">
                        {project.title}
                      </span>
                    </div>
                    <p className="mb-3.5 text-[0.95rem] text-text-muted">
                      {project.summary}
                    </p>
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div className="flex flex-wrap gap-[7px]">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-[5px] border border-line bg-bg-alt px-[9px] py-1 font-mono text-[11.5px] text-text"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <span className="inline-flex items-center gap-1.5 font-mono text-[12.5px] text-amber transition-colors group-hover:text-amber-light group-hover:underline">
                        Read case study
                        <ArrowRight size={13} />
                      </span>
                    </div>
                  </Link>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
