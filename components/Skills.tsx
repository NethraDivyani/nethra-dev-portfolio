import SectionLabel from "./SectionLabel";
import SectionReveal from "./SectionReveal";
import { skillGroups } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="border-b border-line px-7 py-[70px]">
      <div className="mx-auto max-w-[880px]">
        <SectionLabel index="02" label="skills" />
        <h2 className="mb-[34px] font-display text-[clamp(1.5rem,3vw,2rem)] font-semibold">
          Stack
        </h2>

        <div className="grid grid-cols-1 gap-[18px] sm:grid-cols-2">
          {skillGroups.map((group, i) => (
            <SectionReveal key={group.title} delay={i * 0.05}>
              <div className="rounded-[10px] border border-line bg-surface p-[22px]">
                <h3 className="mb-3.5 font-mono text-[12.5px] uppercase tracking-[0.06em] text-teal">
                  {group.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-[5px] border border-line bg-bg-alt px-[11px] py-[6px] font-mono text-[12.5px] text-text transition-colors hover:border-amber hover:text-amber"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
