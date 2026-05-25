export default function Founder() {
  return (
    <section className="py-24 md:py-28 bg-charcoal text-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="block font-sans text-[0.65rem] font-semibold tracking-[4px] uppercase text-gold-light mb-4">
              Fundadora
            </span>
            <h2 className="font-display text-[clamp(2.5rem,5vw,4rem)] font-semibold italic text-white mb-8">
              Erica
            </h2>

            <blockquote className="font-serif italic text-xl text-gold-light leading-relaxed pl-6 border-l-2 border-gold mb-8">
              &ldquo;Deus me chamou para reunir mulheres e mostrar que existe um
              caminho de restauracao e proposito atraves da Sua Palavra.&rdquo;
            </blockquote>

            <p className="text-white/70 leading-relaxed mb-4">
              Mulher de fe, visionaria e apaixonada por conectar pessoas. Erica
              acredita que quando mulheres se reunem debaixo da direcao de Deus,
              vidas sao transformadas.
            </p>
            <p className="text-white/70 leading-relaxed">
              Com carisma natural e um coracao pastoral, ela lidera o Cafe com as
              Amigas com amor, verdade e a conviccao de que a Biblia tem a
              resposta para cada area da vida.
            </p>
          </div>

          {/* Image placeholder */}
          <div className="order-first md:order-last">
            <div className="aspect-[3/4] bg-gradient-to-br from-gold/15 to-gold/5 flex flex-col items-center justify-center gap-3 text-warm-gray-light border border-dashed border-gold/30">
              <span className="text-4xl opacity-40">&#9829;</span>
              <span className="text-[0.75rem] tracking-[2px] uppercase font-medium">
                Foto da Erica
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
