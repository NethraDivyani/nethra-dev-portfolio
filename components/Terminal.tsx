"use client";

import { useEffect, useState } from "react";
import { roles } from "@/lib/data";

export default function Terminal() {
  const [text, setText] = useState("");
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mq.matches);
    if (mq.matches) {
      setText(roles[0]);
      return;
    }

    let roleIndex = 0;
    let charIndex = 0;
    let deleting = false;
    let timeoutId: ReturnType<typeof setTimeout>;

    const tick = () => {
      const current = roles[roleIndex];
      if (!deleting) {
        charIndex++;
        setText(current.slice(0, charIndex));
        if (charIndex === current.length) {
          deleting = true;
          timeoutId = setTimeout(tick, 1400);
          return;
        }
      } else {
        charIndex--;
        setText(current.slice(0, charIndex));
        if (charIndex === 0) {
          deleting = false;
          roleIndex = (roleIndex + 1) % roles.length;
        }
      }
      timeoutId = setTimeout(tick, deleting ? 35 : 65);
    };

    timeoutId = setTimeout(tick, 400);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="mb-7 min-h-[1.6em] font-mono text-[clamp(0.95rem,2vw,1.15rem)] text-text-muted">
      {text}
      {!reduceMotion && (
        <span className="ml-[2px] inline-block w-[9px] animate-blink bg-amber align-middle">
          &nbsp;
        </span>
      )}
    </div>
  );
}
