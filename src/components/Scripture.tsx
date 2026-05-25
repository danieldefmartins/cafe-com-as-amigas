import Image from "next/image";

const cards = [
  {
    title: "Para a Mulher Cansada",
    verse:
      '"Ele da forca ao cansado e aumenta as forcas do que nao tem nenhum vigor."',
    ref: "Isaias 40:29",
  },
  {
    title: "Para a Mulher Ansiosa",
    verse:
      '"Nao andem ansiosos por coisa alguma, mas em tudo, pela oracao e suplicas, e com acao de gracas, apresentem seus pedidos a Deus."',
    ref: "Filipenses 4:6",
  },
  {
    title: "Para a Mulher que Busca Proposito",
    verse:
      '"Porque sou eu que conheco os planos que tenho para voces, diz o Senhor, planos de faze-los prosperar e nao de causar dano, planos de dar a voces esperanca e um futuro."',
    ref: "Jeremias 29:11",
  },
  {
    title: "Para a Mulher Ferida",
    verse: '"Ele sara os de coracao quebrantado e lhes pensa as feridas."',
    ref: "Salmos 147:3",
  },
];

export default function Scripture() {
  return (
    <section
      id="palavra"
      className="relative py-28 md:py-32 overflow-hidden"
    >
      {/* Background image */}
      <Image
        src="/images/prayer-embrace.jpg"
        alt="Momento de oracao"
        fill
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/80 z-[1]" />

      {/* Cross pattern overlay */}
      <div
        className="absolute inset-0 z-[2]"
        style={{
          backgroundImage: `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'><defs><pattern id='cross' width='40' height='40' patternUnits='userSpaceOnUse'><line x1='20' y1='10' x2='20' y2='30' stroke='rgba(198,166,100,0.05)' stroke-width='1'/><line x1='10' y1='20' x2='30' y2='20' stroke='rgba(198,166,100,0.05)' stroke-width='1'/></pattern></defs><rect width='200' height='200' fill='url(%23cross)'/></svg>")`,
        }}
      />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 text-center">
        <span className="block font-sans text-[0.65rem] font-semibold tracking-[4px] uppercase text-gold-light mb-4">
          A Palavra Viva
        </span>
        <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-semibold text-white mb-12">
          A Biblia e o nosso fundamento
        </h2>

        {/* Main verse with decorative frame */}
        <div className="decorative-frame max-w-[800px] mx-auto mb-16 p-12 md:p-16">
          <p className="font-serif text-[clamp(1.1rem,2vw,1.4rem)] italic text-gold-light leading-relaxed">
            &ldquo;Porque a Palavra de Deus e viva, e eficaz, e mais cortante do que
            qualquer espada de dois gumes, e penetra ate ao ponto de dividir
            alma e espirito, juntas e medulas, e e apta para discernir os
            pensamentos e propositos do coracao.&rdquo;
          </p>
          <span className="block mt-5 font-sans text-[0.75rem] font-semibold tracking-[3px] uppercase text-gold">
            Hebreus 4:12
          </span>
        </div>

        {/* Scripture cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1000px] mx-auto">
          {cards.map((card) => (
            <div
              key={card.ref}
              className="p-8 text-left border border-gold/10 hover:border-gold/30 hover:bg-gold/5 transition-all"
            >
              <h4 className="font-sans text-[0.7rem] font-semibold tracking-[1.5px] uppercase text-gold mb-4">
                {card.title}
              </h4>
              <p className="font-serif italic text-base text-white/70 leading-relaxed mb-3">
                {card.verse}
              </p>
              <span className="font-sans text-[0.7rem] font-medium text-gold-dark tracking-wide">
                {card.ref}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
