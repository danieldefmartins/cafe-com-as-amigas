const verses = [
  {
    ref: "v.25",
    text: '"A forca e a dignidade sao os seus vestidos, e ela sorri diante do futuro."',
  },
  {
    ref: "v.26",
    text: '"Ela fala com sabedoria, e a instrucao fiel esta na sua lingua."',
  },
  {
    ref: "v.30",
    text: '"A beleza e enganosa, e a formosura e passageira; mas a mulher que teme ao Senhor sera elogiada."',
  },
];

export default function Proverbs() {
  return (
    <section className="py-24 md:py-28 bg-blush-light border-y border-blush">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-20 items-start">
          {/* Left */}
          <div>
            <span className="block font-sans text-[0.65rem] font-semibold tracking-[4px] uppercase text-gold mb-4">
              Proverbios 31
            </span>
            <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-semibold text-charcoal leading-tight mb-5">
              A Mulher Virtuosa
            </h2>
            <p className="text-lg text-warm-gray leading-relaxed">
              No Cafe com as Amigas, acreditamos que toda mulher carrega dentro
              de si o potencial da mulher descrita em Proverbios 31 &mdash;
              forte, sabia, empreendedora, temente a Deus.
            </p>
          </div>

          {/* Right */}
          <div className="flex flex-col gap-8">
            {verses.map((v) => (
              <div key={v.ref} className="flex gap-5 items-start">
                <span className="font-display text-sm font-bold text-gold tracking-wide min-w-[36px] pt-1">
                  {v.ref}
                </span>
                <p className="font-serif text-lg italic text-charcoal leading-relaxed border-l-2 border-gold-light pl-5">
                  {v.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
