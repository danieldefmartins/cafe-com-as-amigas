const pillars = [
  {
    number: "01",
    title: "Espiritual",
    verse:
      '"Buscai primeiro o Reino de Deus e a sua justica, e todas essas coisas vos serao acrescentadas."',
    verseRef: "Mateus 6:33",
    text: "Cura interior, libertacao e restauracao da identidade em Cristo. Momentos de oracao, louvor e mergulho profundo na Palavra de Deus para cada estacao da vida.",
    features: [
      "Estudo biblico direcionado",
      "Momentos de oracao e cura",
      "Libertacao e restauracao",
      "Comunhao genuina",
    ],
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Pessoal",
    verse:
      '"Pois somos feitura de Deus, criados em Cristo Jesus para boas obras, as quais Deus preparou de antemao para que nos andassemos nelas."',
    verseRef: "Efesios 2:10",
    text: "Autoconhecimento a luz da Biblia, saude emocional, relacionamentos saudaveis e descoberta do proposito divino. Com acompanhamento de profissionais da area.",
    features: [
      "Saude emocional e mental",
      "Relacionamentos restaurados",
      "Identidade em Cristo",
      "Acompanhamento profissional",
    ],
    featured: true,
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Profissional",
    verse:
      '"Tudo o que fizerem, facam de todo o coracao, como para o Senhor, e nao para os homens."',
    verseRef: "Colossenses 3:23",
    text: "Networking, mentoria e capacitacao profissional com base nos principios biblicos. Porque Deus tambem se importa com o seu trabalho e sua prosperidade.",
    features: [
      "Networking entre mulheres",
      "Mentoria profissional",
      "Capacitacao e treinamento",
      "Principios biblicos nos negocios",
    ],
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
  },
];

export default function Pillars() {
  return (
    <section id="pilares" className="py-24 md:py-28 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-[700px] mx-auto mb-16">
          <span className="block font-sans text-[0.65rem] font-semibold tracking-[4px] uppercase text-gold mb-4">
            Nossos Pilares
          </span>
          <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-semibold text-charcoal leading-tight mb-4">
            Tres areas. Um fundamento.
            <br />
            A Palavra de Deus.
          </h2>
          <p className="font-serif italic text-lg text-warm-gray leading-relaxed">
            &ldquo;Toda a Escritura e inspirada por Deus e util para o ensino,
            para a repreensao, para a correcao e para a instrucao na
            justica.&rdquo; &mdash; 2 Timoteo 3:16
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-[500px] md:max-w-none mx-auto">
          {pillars.map((pillar) => (
            <div
              key={pillar.number}
              className={`p-12 relative transition-all duration-300 border border-transparent hover:-translate-y-2 hover:shadow-[0_16px_60px_rgba(0,0,0,0.15)] hover:border-gold-light ${
                pillar.featured
                  ? "bg-charcoal text-white"
                  : "bg-cream"
              }`}
            >
              {pillar.featured && (
                <span className="absolute top-0 right-8 bg-gold text-white text-[0.6rem] font-semibold tracking-[2px] uppercase px-4 py-2">
                  Central
                </span>
              )}

              <span
                className={`block font-display text-5xl font-extrabold text-gold leading-none mb-5 ${
                  pillar.featured ? "opacity-20" : "opacity-30"
                }`}
              >
                {pillar.number}
              </span>

              <div className="text-gold mb-6">{pillar.icon}</div>

              <h3 className="font-display text-2xl font-semibold mb-4">
                {pillar.title}
              </h3>

              <p
                className={`font-serif italic text-[0.95rem] leading-relaxed mb-5 ${
                  pillar.featured ? "text-gold-light" : "text-warm-gray"
                }`}
              >
                {pillar.verse}
                <br />
                <em className="text-sm">&mdash; {pillar.verseRef}</em>
              </p>

              <p
                className={`text-[0.95rem] leading-relaxed mb-6 ${
                  pillar.featured ? "text-white/70" : "text-warm-gray"
                }`}
              >
                {pillar.text}
              </p>

              <ul className="flex flex-col gap-2.5">
                {pillar.features.map((feature) => (
                  <li
                    key={feature}
                    className={`text-sm pl-5 relative before:content-[''] before:absolute before:left-0 before:top-2 before:w-2 before:h-px before:bg-gold ${
                      pillar.featured
                        ? "text-white/60"
                        : "text-warm-gray"
                    }`}
                  >
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
