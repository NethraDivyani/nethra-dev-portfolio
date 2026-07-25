import SectionLabel from "./SectionLabel";
import SectionReveal from "./SectionReveal";
import { socials } from "@/lib/data";

export default function Contact() {
  return (
    <section id="contact" className="px-7 py-[70px]">
      <div className="mx-auto max-w-[880px]">
        <SectionLabel index="04" label="contact" />
        <h2 className="mb-[34px] font-display text-[clamp(1.5rem,3vw,2rem)] font-semibold">
          Get in touch
        </h2>

        <SectionReveal>
          <div className="rounded-[10px] border border-line bg-surface p-[34px]">
            <div className="mb-4 flex items-center gap-2 font-mono text-[13px] text-teal">
              <span className="h-2 w-2 rounded-full bg-teal shadow-[0_0_8px_#4FD1C5]" />
              ready to connect
            </div>
            <h3 className="mb-3 font-display text-[clamp(1.4rem,3vw,2rem)] font-semibold">
              Let&rsquo;s build something.
            </h3>
            <p className="mb-[26px] max-w-[480px] text-text-muted">
              Open to internships, junior roles, and collaboration on
              interesting software projects. Reach out through any of the
              links below.
            </p>
            <div className="flex flex-wrap gap-3.5">
              <a
                href={`mailto:${socials.email}`}
                className="inline-flex items-center gap-2 rounded-md border border-amber bg-amber px-[22px] py-3 font-mono text-[13.5px] font-semibold text-[#12100A] transition-all hover:-translate-y-px hover:bg-amber-light"
              >
                ✉ Email me
              </a>
              <a
                href={socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-line px-[22px] py-3 font-mono text-[13.5px] text-text transition-colors hover:border-teal hover:text-teal"
              >
                GitHub ↗
              </a>
              <a
                href={socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-line px-[22px] py-3 font-mono text-[13.5px] text-text transition-colors hover:border-teal hover:text-teal"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
