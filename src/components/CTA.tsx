export default function CTA() {
  return (
    <section
      className="relative py-28 md:py-32 text-center overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #B76E79 0%, #9B5460 50%, #7A3F4A 100%)",
      }}
    >
      {/* Pattern overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><defs><pattern id='d' width='30' height='30' patternUnits='userSpaceOnUse'><circle cx='15' cy='15' r='1' fill='rgba(255,255,255,0.05)'/></pattern></defs><rect width='100' height='100' fill='url(%23d)'/></svg>")`,
        }}
      />

      <div className="relative z-10 max-w-[700px] mx-auto px-6">
        <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-semibold text-white mb-8">
          Deus tem algo para voce
        </h2>
        <p className="font-serif text-xl italic text-white/90 leading-relaxed mb-2">
          &ldquo;Mas os que esperam no Senhor renovarao as suas forcas, subirao com
          asas como aguias; correrao e nao se cansarao; caminharao e nao se
          fatigarao.&rdquo;
        </p>
        <span className="block font-sans text-[0.75rem] font-semibold tracking-[3px] uppercase text-gold-light mb-8">
          Isaias 40:31
        </span>
        <p className="text-base text-white/80 leading-relaxed mb-10">
          Se voce e uma mulher na regiao de Boston buscando cura, libertacao,
          proposito e um encontro real com Jesus &mdash; o Cafe com as Amigas e o
          seu lugar.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a
            href="https://wa.me/16177679456?text=Oi!%20Quero%20saber%20mais%20sobre%20o%20Cafe%20com%20as%20Amigas"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-charcoal px-12 py-4 text-[0.85rem] font-semibold tracking-[2px] uppercase hover:bg-gold hover:text-white hover:shadow-[0_8px_25px_rgba(0,0,0,0.2)] transition-all"
          >
            Fale com a Gente no WhatsApp
          </a>
          <a
            href="https://www.instagram.com/cafecamigas"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border-[1.5px] border-white/50 text-white px-12 py-4 text-[0.85rem] font-semibold tracking-[2px] uppercase hover:bg-white hover:text-charcoal transition-all"
          >
            Siga no Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
