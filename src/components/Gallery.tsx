import Image from "next/image";

const photos = [
  { src: "/images/networking.jpg", alt: "Networking entre mulheres", span: "col-span-2" },
  { src: "/images/prayer-two-women.jpg", alt: "Momento de oracao", span: "" },
  { src: "/images/worship-hands.jpg", alt: "Adoracao", span: "" },
  { src: "/images/venue-food-spread.jpg", alt: "Mesa de cafe", span: "col-span-2" },
  { src: "/images/erica-leading.jpg", alt: "Erica liderando", span: "" },
  { src: "/images/meeting-home.jpg", alt: "Encontro em casa", span: "" },
  { src: "/images/prayer-hands.jpg", alt: "Maos em oracao", span: "" },
  { src: "/images/women-listening.jpg", alt: "Mulheres ouvindo a Palavra", span: "" },
  { src: "/images/teaching-food.jpg", alt: "Ensino e comunhao", span: "col-span-2" },
  { src: "/images/speaker-presenting.jpg", alt: "Palestrante apresentando", span: "" },
  { src: "/images/photobooth.jpg", alt: "Momento especial", span: "" },
  { src: "/images/worship-leading.jpg", alt: "Louvor e adoracao", span: "" },
  { src: "/images/prayer-group-food.jpg", alt: "Oracao em grupo", span: "col-span-2" },
  { src: "/images/speaker-lounge.jpg", alt: "Evento no lounge", span: "" },
  { src: "/images/women-seated.jpg", alt: "Mulheres reunidas", span: "" },
  { src: "/images/worship-singing.jpg", alt: "Cantando louvores", span: "" },
];

export default function Gallery() {
  return (
    <section id="galeria" className="py-24 md:py-28 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center max-w-[700px] mx-auto mb-16">
          <span className="block font-sans text-[0.65rem] font-semibold tracking-[4px] uppercase text-gold mb-4">
            Galeria
          </span>
          <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-semibold text-charcoal leading-tight mb-4">
            Momentos que marcam
          </h2>
          <p className="font-serif italic text-lg text-warm-gray">
            Cada foto conta uma historia de fe, conexao e transformacao.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {photos.map((photo, i) => (
            <div
              key={i}
              className={`relative overflow-hidden group cursor-pointer ${photo.span} aspect-[4/3]`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes={photo.span ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 50vw, 25vw"}
              />
              <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/40 transition-all duration-500 flex items-end">
                <p className="text-white text-sm font-medium p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  {photo.alt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
