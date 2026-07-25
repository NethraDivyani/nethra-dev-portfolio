import SectionLabel from "./SectionLabel";
import SectionReveal from "./SectionReveal";

export default function About() {
  return (
    <section id="about" className="border-b border-line px-7 py-[70px]">
      <div className="mx-auto max-w-[880px]">
        <SectionLabel index="01" label="about" />
        <h2 className="mb-[34px] font-display text-[clamp(1.5rem,3vw,2rem)] font-semibold">
          README.md
        </h2>

        <SectionReveal>
          <div className="overflow-hidden rounded-[10px] border border-line bg-surface">
            <div className="flex items-center gap-2 border-b border-line bg-bg-alt px-[18px] py-[10px] font-mono text-xs text-text-faint">
              <span className="h-[9px] w-[9px] rounded-full bg-[#e5605a]" />
              <span className="h-[9px] w-[9px] rounded-full bg-[#e6b350]" />
              <span className="h-[9px] w-[9px] rounded-full bg-[#57c785]" />
              <span className="ml-1.5">README.md</span>
            </div>
            <div className="space-y-4 p-7 text-text-muted">
              <p>
                <strong className="font-semibold text-text">
                  Nethra Divyani
                </strong>{" "}
                — Software Engineering Graduate (BSc Hons), currently focused
                on building practical, AI, and full-stack projects and
                picking up new tools as the problem demands it.
              </p>
              <p>
                Past work spans e-commerce and booking-style front ends, a
                database-backed billing system, and a Python project
                exploring flood prediction — a mix that reflects a genuine
                interest in both traditional software engineering and applied
                data work.
              </p>
              <p>
                Currently looking for opportunities to build production-grade
                software, learn from experienced teams, and keep growing as
                an engineer.
              </p>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
