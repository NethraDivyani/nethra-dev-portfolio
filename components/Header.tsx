"use client";

const navItems = [
  { label: "about", href: "#about" },
  { label: "skills", href: "#skills" },
  { label: "projects", href: "#projects" },
  { label: "contact", href: "#contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-[880px] items-center justify-between px-7 py-4">
        <div className="whitespace-nowrap font-mono text-sm text-text">
          <span className="text-amber">nethra@dev</span>
          <span>:~$</span>
          <span className="ml-[3px] inline-block h-[14px] w-[7px] animate-blink bg-teal align-[-2px]" />
        </div>
        <nav>
          <ul className="hidden gap-6 sm:flex">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="font-mono text-[13px] text-text-muted transition-colors hover:text-amber"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
