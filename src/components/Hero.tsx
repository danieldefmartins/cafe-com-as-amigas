import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center text-center overflow-hidden"
    >
      {/* Background image */}
      <Image
        src="/images/hero-group.jpg"
        alt="Cafe com as Amigas - grupo de mulheres"
        fill
        className="object-cover"
        priority
        quality={85}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60 z-[1]" />
      {/* Pattern overlay */}
      <div
        className="absolute inset-0 opacity-30 z-[2]"
        style={{
          backgroundImage: `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><defs><pattern id='p' width='20' height='20' patternUnits='userSpaceOnUse'><circle cx='1' cy='1' r='0.5' fill='rgba(198,166,100,0.12)'/></pattern></defs><rect width='100' height='100' fill='url(%23p)'/></svg>")`,
        }}
      />

      <div className="relative z-10 px-6 py-32 max-w-[800px]">
        <p className="font-sans text-[0.7rem] font-medium tracking-[4px] uppercase text-gold mb-6">
          Boston, Massachusetts
        </p>

        <h1 className="mb-6">
          <span className="block font-display text-[clamp(3rem,8vw,6rem)] font-extrabold tracking-wider text-white leading-none">
            Cafe
          </span>
          <span className="block font-display text-[clamp(1.8rem,4vw,3rem)] font-normal italic text-gold-light tracking-wide">
            com as Amigas
          </span>
        </h1>

        {/* Divider */}
        <div className="flex items-center justify-center gap-4 my-7">
          <span className="w-15 h-px bg-gold/50" />
          <span className="text-gold text-xl">&#10045;</span>
          <span className="w-15 h-px bg-gold/50" />
        </div>

        <p className="font-sans text-base font-light tracking-[3px] uppercase text-white/80 mb-7 leading-loose">
          Um encontro real com Jesus.
          <br className="hidden sm:block" />
          Cura. Libertacao. Proposito.
        </p>

        <p className="font-serif text-lg italic text-gold-light/85 mb-10 leading-relaxed">
          &ldquo;Vinde a mim, todos os que estais cansados e sobrecarregados,
          <br className="hidden sm:block" />
          e eu vos aliviarei.&rdquo; &mdash; Mateus 11:28
        </p>

        <div className="flex gap-4 justify-center flex-wrap">
          <a
            href="#sobre"
            className="inline-block bg-gold text-white px-9 py-3.5 text-[0.8rem] font-semibold tracking-[2px] uppercase hover:bg-gold-dark hover:translate-y-[-2px] hover:shadow-[0_8px_25px_rgba(198,166,100,0.35)] transition-all"
          >
            Conheca o Movimento
          </a>
          <a
            href="#eventos"
            className="inline-block border-[1.5px] border-white text-white px-9 py-3.5 text-[0.8rem] font-semibold tracking-[2px] uppercase hover:bg-white hover:text-charcoal transition-all"
          >
            Proximo Evento
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center z-10 text-white/40 text-[0.65rem] tracking-[2px] uppercase">
        <span>Descubra mais</span>
        <div className="w-px h-10 bg-gradient-to-b from-gold to-transparent mx-auto mt-2 animate-pulse" />
      </div>
    </section>
  );
}
