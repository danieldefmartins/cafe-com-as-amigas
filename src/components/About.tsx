export default function About() {
  return (
    <section id="sobre" className="py-24 md:py-28 bg-cream">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="mb-16">
          <span className="block font-sans text-[0.65rem] font-semibold tracking-[4px] uppercase text-gold mb-4">
            Nossa Historia
          </span>
          <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-semibold text-charcoal leading-tight">
            Mais do que um cafe.
            <br />
            Um chamado.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Image placeholder */}
          <div>
            <div className="aspect-[4/5] bg-gradient-to-br from-blush to-cream-dark flex flex-col items-center justify-center gap-3 text-warm-gray-light border border-dashed border-gold-light">
              <span className="text-4xl opacity-40">&#9733;</span>
              <span className="text-[0.75rem] tracking-[2px] uppercase font-medium">
                Foto do Grupo
              </span>
            </div>
            <p className="mt-3 text-[0.7rem] tracking-[2px] uppercase text-warm-gray-light text-center">
              Desde outubro de 2024
            </p>
          </div>

          {/* Content */}
          <div>
            <blockquote className="font-serif italic text-xl text-warm-gray leading-relaxed pl-6 border-l-2 border-gold mb-8">
              &ldquo;Onde estiverem dois ou tres reunidos em meu nome, ali eu estou no
              meio deles.&rdquo;
              <cite className="block mt-3 text-sm not-italic font-sans font-medium text-gold-dark tracking-wider">
                &mdash; Mateus 18:20
              </cite>
            </blockquote>

            <p className="text-base text-warm-gray leading-relaxed mb-5">
              O <strong className="text-charcoal">Cafe com as Amigas</strong>{" "}
              nasceu em outubro de 2024 com apenas 12 mulheres que
              compartilhavam um desejo em comum: um encontro verdadeiro com Deus
              e entre elas mesmas.
            </p>
            <p className="text-base text-warm-gray leading-relaxed mb-5">
              O que comecou como uma reuniao simples se transformou em um
              movimento poderoso de{" "}
              <em>cura, libertacao e acompanhamento</em>, fundamentado
              inteiramente na Palavra de Deus &mdash; a Biblia Sagrada.
            </p>
            <p className="text-base text-warm-gray leading-relaxed mb-8">
              Aqui, cada mulher e acolhida como e, e direcionada ao proposito
              que Deus tem para sua vida nas areas{" "}
              <strong className="text-charcoal">
                espiritual, pessoal e profissional
              </strong>
              , com a ajuda de profissionais comprometidos com a fe.
            </p>

            <a
              href="#pilares"
              className="font-sans text-[0.8rem] font-semibold tracking-[1.5px] uppercase text-gold-dark inline-flex items-center gap-2 hover:text-charcoal hover:gap-3.5 transition-all"
            >
              Conheca nossos pilares &rarr;
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
