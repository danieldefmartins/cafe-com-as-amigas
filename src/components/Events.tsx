export default function Events() {
  return (
    <section id="eventos" className="py-24 md:py-28 bg-cream">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-[700px] mx-auto mb-16">
          <span className="block font-sans text-[0.65rem] font-semibold tracking-[4px] uppercase text-gold mb-4">
            Eventos
          </span>
          <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-semibold text-charcoal leading-tight mb-4">
            Experiencias que transformam
          </h2>
          <p className="font-serif italic text-lg text-warm-gray">
            Cada encontro e uma oportunidade de Deus tocar a sua vida de maneira
            sobrenatural.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Featured Event */}
          <div className="bg-white border border-black/5 hover:shadow-[0_8px_40px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all md:row-span-2 relative overflow-hidden">
            <span className="absolute top-4 left-4 bg-gold text-white text-[0.6rem] font-semibold tracking-[2px] uppercase px-4 py-1.5 z-10">
              Proximo Evento
            </span>
            <div className="h-[280px] bg-gradient-to-br from-blush to-cream-dark flex flex-col items-center justify-center gap-3 text-warm-gray-light border-b border-black/5">
              <span className="text-4xl opacity-40">&#10047;</span>
              <span className="text-[0.75rem] tracking-[2px] uppercase font-medium">
                Imagem do Evento
              </span>
            </div>
            <div className="p-8">
              <h3 className="font-display text-2xl font-semibold tracking-wider mb-2">
                DESPERTAR
              </h3>
              <p className="font-serif italic text-base text-gold-dark mb-4">
                &ldquo;Prepare-se. Algo sobrenatural vai acontecer.&rdquo;
              </p>
              <p className="text-[0.95rem] text-warm-gray leading-relaxed mb-5">
                Um evento de cura espiritual e restauracao de identidade para
                mulheres brasileiras em Boston. Venha experimentar o poder da
                Palavra de Deus em sua vida.
              </p>
              <div className="flex gap-6 mb-6">
                <div className="flex items-center gap-2 text-sm text-warm-gray">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gold">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                  Em breve
                </div>
                <div className="flex items-center gap-2 text-sm text-warm-gray">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gold">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  Boston, MA
                </div>
              </div>
              <a
                href="https://wa.me/16177679456?text=Quero%20saber%20mais%20sobre%20o%20proximo%20evento"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gold text-white px-9 py-3.5 text-[0.8rem] font-semibold tracking-[2px] uppercase hover:bg-gold-dark hover:-translate-y-0.5 transition-all"
              >
                Quero Participar
              </a>
            </div>
          </div>

          {/* Monthly Meetings */}
          <div className="bg-white border border-black/5 hover:shadow-[0_8px_40px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all overflow-hidden">
            <div className="h-[160px] bg-gradient-to-br from-blush to-cream-dark flex flex-col items-center justify-center gap-3 text-warm-gray-light border-b border-black/5">
              <span className="text-4xl opacity-40">&#9834;</span>
              <span className="text-[0.75rem] tracking-[2px] uppercase font-medium">
                Encontros
              </span>
            </div>
            <div className="p-8">
              <h3 className="font-display text-xl font-semibold mb-3">
                Encontros Mensais
              </h3>
              <p className="text-[0.95rem] text-warm-gray leading-relaxed mb-4">
                Reunioes intimas com estudo da Palavra, oracao, louvor e comunhao
                entre mulheres. Um espaco seguro para compartilhar e crescer na
                fe.
              </p>
              <p className="font-serif italic text-sm text-warm-gray-light leading-relaxed border-t border-black/5 pt-4">
                &ldquo;Nao deixemos de reunir-nos como igreja, segundo o costume de
                alguns, mas encorajemo-nos uns aos outros.&rdquo; &mdash; Hebreus 10:25
              </p>
            </div>
          </div>

          {/* Trips */}
          <div className="bg-white border border-black/5 hover:shadow-[0_8px_40px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all overflow-hidden">
            <div className="h-[160px] bg-gradient-to-br from-blush to-cream-dark flex flex-col items-center justify-center gap-3 text-warm-gray-light border-b border-black/5">
              <span className="text-4xl opacity-40">&#10024;</span>
              <span className="text-[0.75rem] tracking-[2px] uppercase font-medium">
                Passeios
              </span>
            </div>
            <div className="p-8">
              <h3 className="font-display text-xl font-semibold mb-3">
                Passeios & Experiencias
              </h3>
              <p className="text-[0.95rem] text-warm-gray leading-relaxed mb-4">
                Momentos de descanso e conexao fora do ambiente comum. Passeios
                planejados para fortalecer lacos e celebrar a vida que Deus nos
                deu.
              </p>
              <p className="font-serif italic text-sm text-warm-gray-light leading-relaxed border-t border-black/5 pt-4">
                &ldquo;Este e o dia que o Senhor fez; regozijemo-nos e alegremo-nos
                nele.&rdquo; &mdash; Salmos 118:24
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
