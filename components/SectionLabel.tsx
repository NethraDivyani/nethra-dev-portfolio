export default function SectionLabel({
  index,
  label,
}: {
  index: string;
  label: string;
}) {
  return (
    <div className="mb-2.5 flex items-center gap-2.5 font-mono text-[12.5px] uppercase tracking-[0.08em] text-amber">
      {index} / {label}
      <span className="h-px flex-1 bg-line" />
    </div>
  );
}
