const items = [
  { number: "2024", label: "Fundado em\nOutubro" },
  { number: "3", label: "Pilares de\nTransformacao" },
  { number: "1", label: "Unico\nFundamento: Jesus" },
  { number: "\u221E", label: "Amor de Deus\nPara Voce" },
];

export default function MagazineStrip() {
  return (
    <section className="bg-charcoal py-12 border-y border-gold/20">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-2 md:flex md:justify-center md:items-center md:gap-12">
          {items.map((item, i) => (
            <div key={i} className="flex items-center gap-12">
              <div className="text-center flex flex-col gap-2 py-4">
                <span className="font-display text-[2.5rem] font-bold text-gold leading-none">
                  {item.number}
                </span>
                <span className="font-sans text-[0.65rem] font-medium tracking-[2px] uppercase text-white/50 leading-snug whitespace-pre-line">
                  {item.label}
                </span>
              </div>
              {i < items.length - 1 && (
                <div className="hidden md:block w-px h-[50px] bg-gold/20" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
