export default function Podcast() {
  return (
    <section id="podcast" className="py-24 md:py-28 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="block font-sans text-[0.65rem] font-semibold tracking-[4px] uppercase text-gold mb-4">
              Podcast
            </span>
            <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-semibold text-charcoal leading-tight mb-6">
              Cafe com as Amigas
              <br />
              <em className="text-gold">Podcast</em>
            </h2>
            <p className="text-base text-warm-gray leading-relaxed mb-4">
              Conversas reais, com profundidade biblica, sobre os temas que toda
              mulher enfrenta no dia a dia. Transmitido pela{" "}
              <strong className="text-charcoal">Brazilian Times TV</strong>.
            </p>
            <p className="text-base text-warm-gray leading-relaxed mb-6">
              Assista pelo computador, celular ou Smart TV. A Palavra de Deus
              acessivel onde voce estiver.
            </p>

            <div className="flex gap-3 flex-wrap mb-8">
              {["Computador", "Celular", "Smart TV"].map((p) => (
                <span
                  key={p}
                  className="text-[0.65rem] font-semibold tracking-[2px] uppercase px-5 py-2 border border-charcoal text-charcoal"
                >
                  {p}
                </span>
              ))}
            </div>

            <a
              href="https://www.braziliantimes.com/tv"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-charcoal text-white px-9 py-3.5 text-[0.8rem] font-semibold tracking-[2px] uppercase hover:bg-charcoal-light hover:-translate-y-0.5 transition-all"
            >
              Assistir Agora
            </a>
          </div>

          {/* Image placeholder */}
          <div className="aspect-square bg-gradient-to-br from-charcoal to-charcoal-light flex flex-col items-center justify-center gap-3 border border-dashed border-gold/30">
            <span className="text-6xl opacity-40 text-gold">&#127911;</span>
            <span className="text-[0.75rem] tracking-[2px] uppercase font-medium text-gold-light">
              Podcast Cover
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
