"use client";

import { useState, type FormEvent } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const name = data.get("name") as string;
    const email = data.get("email") as string;
    const phone = (data.get("phone") as string) || "Nao informado";
    const interest = data.get("interest") as string;
    const message = data.get("message") as string;

    const whatsappMessage = encodeURIComponent(
      `Oi! Meu nome e ${name}.\nE-mail: ${email}\nTelefone: ${phone}\nInteresse: ${interest}\n\nMensagem: ${message}`
    );

    window.open(`https://wa.me/16177679456?text=${whatsappMessage}`, "_blank");

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      form.reset();
    }, 3000);
  }

  return (
    <section id="contato" className="py-24 md:py-28 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Info */}
          <div>
            <span className="block font-sans text-[0.65rem] font-semibold tracking-[4px] uppercase text-gold mb-4">
              Contato
            </span>
            <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-semibold text-charcoal leading-tight mb-6">
              Fale Conosco
            </h2>
            <p className="text-base text-warm-gray leading-relaxed mb-8">
              Quer participar dos nossos encontros? Tem duvidas? Quer trazer o
              Cafe com as Amigas para a sua comunidade? Entre em contato!
            </p>

            <div className="flex flex-col gap-6">
              <a
                href="https://wa.me/16177679456"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-5 p-5 bg-cream hover:bg-blush-light hover:translate-x-2 transition-all"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-charcoal text-gold shrink-0">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <div className="flex flex-col gap-0.5">
                  <strong className="text-[0.75rem] tracking-[1.5px] uppercase">
                    WhatsApp
                  </strong>
                  <span className="text-sm text-warm-gray">
                    +1 (617) 767-9456
                  </span>
                </div>
              </a>

              <a
                href="https://www.instagram.com/cafecamigas"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-5 p-5 bg-cream hover:bg-blush-light hover:translate-x-2 transition-all"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-charcoal text-gold shrink-0">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </div>
                <div className="flex flex-col gap-0.5">
                  <strong className="text-[0.75rem] tracking-[1.5px] uppercase">
                    Instagram
                  </strong>
                  <span className="text-sm text-warm-gray">@cafecamigas</span>
                </div>
              </a>

              <div className="flex items-center gap-5 p-5 bg-cream">
                <div className="w-12 h-12 flex items-center justify-center bg-charcoal text-gold shrink-0">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div className="flex flex-col gap-0.5">
                  <strong className="text-[0.75rem] tracking-[1.5px] uppercase">
                    Localizacao
                  </strong>
                  <span className="text-sm text-warm-gray">
                    Boston, Massachusetts
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-cream p-8 md:p-12">
            <form onSubmit={handleSubmit}>
              <h3 className="font-display text-xl font-semibold mb-8">
                Envie sua mensagem
              </h3>

              <div className="flex flex-col gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Seu nome"
                  required
                  className="w-full px-4 py-3.5 text-sm border border-black/10 bg-white text-charcoal outline-none focus:border-gold focus:ring-2 focus:ring-gold/10 transition-all"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Seu e-mail"
                  required
                  className="w-full px-4 py-3.5 text-sm border border-black/10 bg-white text-charcoal outline-none focus:border-gold focus:ring-2 focus:ring-gold/10 transition-all"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Seu telefone (WhatsApp)"
                  className="w-full px-4 py-3.5 text-sm border border-black/10 bg-white text-charcoal outline-none focus:border-gold focus:ring-2 focus:ring-gold/10 transition-all"
                />
                <select
                  name="interest"
                  required
                  defaultValue=""
                  className="w-full px-4 py-3.5 text-sm border border-black/10 bg-white text-charcoal outline-none focus:border-gold focus:ring-2 focus:ring-gold/10 transition-all cursor-pointer appearance-none bg-[url('data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2212%22 height=%2212%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22%236B6560%22 stroke-width=%222%22><polyline points=%226 9 12 15 18 9%22/></svg>')] bg-no-repeat bg-[right_16px_center] pr-10"
                >
                  <option value="" disabled>
                    Como podemos ajudar?
                  </option>
                  <option value="participar">
                    Quero participar dos encontros
                  </option>
                  <option value="evento">Quero saber sobre eventos</option>
                  <option value="oracao">Preciso de oracao</option>
                  <option value="voluntaria">Quero ser voluntaria</option>
                  <option value="outro">Outro assunto</option>
                </select>
                <textarea
                  name="message"
                  placeholder="Sua mensagem..."
                  rows={4}
                  required
                  className="w-full px-4 py-3.5 text-sm border border-black/10 bg-white text-charcoal outline-none focus:border-gold focus:ring-2 focus:ring-gold/10 transition-all resize-y min-h-[100px]"
                />
              </div>

              <button
                type="submit"
                className={`w-full mt-6 px-9 py-3.5 text-[0.8rem] font-semibold tracking-[2px] uppercase text-white transition-all ${
                  submitted
                    ? "bg-green-600"
                    : "bg-gold hover:bg-gold-dark hover:-translate-y-0.5"
                }`}
              >
                {submitted ? "Mensagem Enviada!" : "Enviar Mensagem"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
