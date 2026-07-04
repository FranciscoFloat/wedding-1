import { Countdown } from "@/components/wedding/Countdown";
import { RSVPForm } from "@/components/wedding/RSVPForm";
import { SmoothScroll } from "@/components/wedding/SmoothScroll";
import { useEffect, useState } from "react";
import Lottie from "lottie-react";


/* Section wrapper — carries `reveal-section` hook for GSAP ScrollTrigger. */
function Section({
  id,
  children,
  className = "",
}: {
  id: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`reveal-section relative w-full px-6 sm:px-10 ${className}`}
    >
      {children}
    </section>
  );
}

/* Lottie Bottom (Full Width Pinned) */
function LottieBottom({ url, className = "" }: { url: string; className?: string }) {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    fetch(url).then(r => r.json()).then(setData).catch(console.error);
  }, [url]);

  if (!data) {
    return <div className={`py-10 sm:py-16 ${className}`} />;
  }

  return (
    <div className={`absolute bottom-0 left-0 w-full pointer-events-none z-0 mix-blend-multiply opacity-80 flex items-end justify-center ${className}`}>
      <div className="w-[150%] sm:w-full -ml-[25%] sm:ml-0 flex justify-center origin-bottom scale-110 sm:scale-100">
        <Lottie
          animationData={data}
          loop
          autoplay
          style={{ width: "100%", height: "auto" }}
        />
      </div>
    </div>
  );
}

/* Lottie Decoration (Absolute) */
function LottieDecoration({ url, className, loop = true }: { url: string; className: string; loop?: boolean }) {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    fetch(url).then(r => r.json()).then(setData).catch(console.error);
  }, [url]);

  if (!data) return null;

  return (
    <div className={`animate-on-scroll absolute pointer-events-none z-0 ${className}`}>
      <Lottie
        animationData={data}
        loop={loop}
        autoplay
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
}

function Ornament() {
  return (
    <div className="flex items-center justify-center gap-4 my-6">
      <span className="h-px w-12 bg-gold/60" />
      <svg width="10" height="10" viewBox="0 0 10 10" className="text-gold">
        <circle cx="5" cy="5" r="2" fill="currentColor" />
      </svg>
      <span className="h-px w-12 bg-gold/60" />
    </div>
  );
}

/* -------- Hero -------- */
function Hero() {
  return (
    <section id="inicio" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <div className="parallax-bg absolute inset-0 w-full h-[120%] -top-[10%]">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/generame_un_video_de_estas_dos.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-ink/40 mix-blend-multiply" />
        </div>
      </div>

      <div className="relative z-10 text-center px-4 flex flex-col items-center">
        <p className="animate-on-scroll text-xs sm:text-sm uppercase tracking-[0.4em] text-cream mb-8 drop-shadow-md">
          14 · Junio · 2026
        </p>

        <h1 className="animate-on-scroll font-serif text-6xl sm:text-8xl md:text-9xl leading-[0.95] text-cream drop-shadow-lg">
          Sofía
          <span className="block italic text-gold text-4xl sm:text-6xl md:text-7xl my-3 sm:my-4 drop-shadow-md">
            &
          </span>
          Mateo
        </h1>

        <div className="animate-on-scroll flex items-center justify-center gap-4 my-6 drop-shadow-md">
          <span className="h-px w-12 bg-gold/60" />
          <svg width="10" height="10" viewBox="0 0 10 10" className="text-gold">
            <circle cx="5" cy="5" r="2" fill="currentColor" />
          </svg>
          <span className="h-px w-12 bg-gold/60" />
        </div>

        <p className="animate-on-scroll max-w-md text-sm sm:text-base text-cream/90 leading-relaxed mt-4 drop-shadow-md">
          Tenemos el honor de invitarte a celebrar el día en que unimos nuestras vidas.
        </p>

        <a
          href="#rsvp"
          className="animate-on-scroll mt-12 inline-flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-cream border-b border-gold pb-1 hover:text-gold transition-colors drop-shadow-md"
        >
          Confirmar asistencia
          <span aria-hidden>↓</span>
        </a>
      </div>
    </section>
  );
}

/* -------- Story -------- */
function Story() {
  return (
    <Section id="historia" className="py-24 sm:py-32 relative">
      <LottieDecoration url="/lotties/Floral Animated Design.json" className="-bottom-20 -right-10 w-96 h-96 sm:w-[600px] sm:h-[600px] opacity-70 mix-blend-multiply" />

      <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto relative z-10">
        <div className="animate-on-scroll relative h-[500px] sm:h-[700px] w-full rounded-2xl overflow-hidden shadow-2xl">
           <div 
             className="parallax-item absolute inset-0 w-full h-[120%] -top-[10%] bg-cover bg-[75%_center]"
             data-speed="0.15"
             style={{ backgroundImage: "url('/images/pexels-pham-hoang-kha-1582786-8671896.jpg')" }}
           />
        </div>
        <div>
          <div className="mb-12">
            <p className="animate-on-scroll text-xs uppercase tracking-[0.3em] text-gold mb-4">
              Nuestra historia
            </p>
            <h2 className="animate-on-scroll font-serif text-4xl sm:text-6xl text-ink">
              Cómo empezó todo
            </h2>
          </div>

          <div className="grid gap-12 sm:gap-16">
            {[
              {
                year: "2019",
                title: "El primer encuentro",
                text: "Un café en una tarde de otoño se convirtió en una conversación de horas. Desde ese momento supimos que había algo distinto.",
              },
              {
                year: "2022",
                title: "Un hogar juntos",
                text: "Decidimos compartir cada mañana, cada viaje y cada pequeña rutina. La vida se sintió más suave a dos.",
              },
              {
                year: "2025",
                title: "La propuesta",
                text: "Frente al mar, sin testigos ni ruido. Solo nosotros y una promesa que hoy queremos celebrar contigo.",
              },
            ].map((item) => (
              <div
                key={item.year}
                className="animate-on-scroll grid grid-cols-[auto_1fr] gap-6 sm:gap-10 items-start"
              >
                <div className="font-serif italic text-3xl sm:text-4xl text-gold min-w-0">
                  {item.year}
                </div>
                <div className="min-w-0">
                  <h3 className="font-serif text-xl sm:text-2xl text-ink mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

/* -------- Details + Countdown -------- */
function Details() {
  return (
    <Section id="detalles" className="py-24 sm:py-32 bg-secondary/40 relative">
      <LottieDecoration url="/lotties/Floral frame.json" className="top-0 right-0 w-80 h-80 sm:w-[500px] sm:h-[500px] opacity-70 mix-blend-multiply" />
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4">
          Detalles del evento
        </p>
        <h2 className="font-serif text-4xl sm:text-6xl text-ink mb-4">
          Sábado, 14 de junio
        </h2>
        <p className="text-muted-foreground mb-16">
          Reserva la fecha. Los detalles aquí abajo.
        </p>

        <div className="mb-20">
          <Countdown />
        </div>

        <div className="grid sm:grid-cols-2 gap-10 sm:gap-16 text-left">
          <div className="animate-on-scroll border-t border-gold/40 pt-8">
            <p className="text-xs uppercase tracking-[0.3em] text-gold mb-3">
              Ceremonia
            </p>
            <h3 className="font-serif text-2xl sm:text-3xl text-ink mb-3">
              Hacienda San Isidro
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              17:00 h · Camino del Roble 24
              <br />
              Valle de Bravo, México
            </p>
          </div>
          <div className="animate-on-scroll border-t border-gold/40 pt-8">
            <p className="text-xs uppercase tracking-[0.3em] text-gold mb-3">
              Recepción
            </p>
            <h3 className="font-serif text-2xl sm:text-3xl text-ink mb-3">
              Jardín del Encino
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              19:30 h · Cena, baile y celebración
              <br />
              Código: Formal — tonos tierra
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}

/* -------- RSVP -------- */
function RSVP() {
  return (
    <Section id="rsvp" className="py-24 sm:py-32 relative">
      <div className="max-w-2xl mx-auto text-center mb-14 relative z-10">
        <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4">
          Confirmación
        </p>
        <h2 className="font-serif text-4xl sm:text-6xl text-ink mb-4">
          Acompáñanos
        </h2>
        <p className="text-muted-foreground">
          Por favor confirma tu asistencia antes del 1 de mayo de 2026.
        </p>
      </div>
      <RSVPForm />
    </Section>
  );
}

/* -------- Gallery -------- */
function Gallery() {
  const images = [
    { src: "/images/pexels-pham-hoang-kha-1582786-3217456.jpg", span: "sm:col-span-2 sm:row-span-2 aspect-[4/5] sm:aspect-square", speed: "0.15" },
    { src: "/images/pexels-pham-hoang-kha-1582786-3347411.jpg", span: "aspect-square", speed: "0.08" },
    { src: "/images/pexels-pham-hoang-kha-1582786-8325802.jpg", span: "aspect-square", speed: "0.2" },
    { src: "/images/pexels-pham-hoang-kha-1582786-8325803.jpg", span: "sm:col-span-2 aspect-[2/1]", speed: "0.1" },
    { src: "/images/pexels-pham-hoang-kha-1582786-8325804.jpg", span: "aspect-square", speed: "0.25" },
  ];

  return (
    <Section id="galeria" className="py-24 sm:py-32 relative overflow-hidden">
      <LottieDecoration url="/lotties/Confetti.json" className="inset-0 w-full h-[150%] -top-[25%] opacity-80 pointer-events-none" loop={false} />
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14 relative z-10">
          <p className="animate-on-scroll text-xs uppercase tracking-[0.3em] text-gold mb-4">
            Galería
          </p>
          <h2 className="animate-on-scroll font-serif text-4xl sm:text-6xl text-ink">
            Momentos nuestros
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6 relative z-10">
          {images.map((it, i) => (
            <div
              key={i}
              className={`gallery-img ${it.span} relative overflow-hidden rounded-xl shadow-lg`}
            >
              <div 
                className="parallax-item absolute inset-0 w-full h-[130%] -top-[15%] bg-cover bg-center"
                data-speed={it.speed}
                style={{ backgroundImage: `url('${it.src}')` }}
              />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* -------- Map -------- */
function MapSection() {
  return (
    <Section id="mapa" className="py-0 px-0">
      <div className="text-center py-16 px-6">
        <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4">
          Cómo llegar
        </p>
        <h2 className="font-serif text-4xl sm:text-6xl text-ink">
          Encuéntranos
        </h2>
      </div>
      <div className="w-full h-[70vh] min-h-[420px] bg-secondary">
        <iframe
          title="Ubicación de la boda"
          src="https://www.google.com/maps?q=Valle+de+Bravo,+Mexico&output=embed"
          className="w-full h-full grayscale contrast-105"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </Section>
  );
}

function Footer() {
  return (
    <footer className="relative py-16 text-center border-t border-border/60 overflow-hidden bg-secondary/30">
      <LottieBottom url="/lotties/weddingfloral.json" className="opacity-80" />
      <div className="relative z-10">
        <div className="font-serif italic text-2xl text-gold">S & M</div>
        <p className="mt-3 text-xs uppercase tracking-[0.3em] text-muted-foreground">
          Con amor · 14.06.2026
        </p>
      </div>
    </footer>
  );
}

/* Lottie Inline (In-Flow) */
function LottieInline({ url, className = "" }: { url: string; className?: string }) {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    fetch(url).then(r => r.json()).then(setData).catch(console.error);
  }, [url]);

  if (!data) {
    return <div className={`py-10 sm:py-16 ${className}`} />;
  }

  return (
    <div className={`animate-on-scroll pointer-events-none z-0 ${className}`}>
      <Lottie
        animationData={data}
        loop
        autoplay
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
}

/* -------- Gifts -------- */
function Gifts() {
  return (
    <Section id="regalos" className="py-24 sm:py-32 max-w-4xl mx-auto text-center relative">
      <LottieDecoration url="/lotties/Piggy Bank - Dancing.json" className="-bottom-20 right-0 sm:-right-10 w-48 h-48 sm:w-64 sm:h-64 opacity-90" />
      
      <div className="mb-12 relative z-10">
        <div className="flex justify-center mb-6">
          <LottieInline url="/lotties/Wedding Couple Animation.json" className="w-48 h-48 sm:w-56 sm:h-56 opacity-90" />
        </div>
        <p className="animate-on-scroll text-xs uppercase tracking-[0.3em] text-gold mb-4">
          Mesa de Regalos
        </p>
        <h2 className="animate-on-scroll font-serif text-4xl sm:text-6xl text-ink mb-6">
          Un empujoncito...
        </h2>
        <p className="animate-on-scroll text-sm sm:text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto">
          Honestamente, ¡tu presencia es el mejor regalo que podríamos pedir! Pero si sientes ese impulso incontrolable de consentirnos, ayudarnos a que no nos toque lavar los platos en la luna de miel (o a pagar esta fiestota), aquí te dejamos nuestra cuenta. ¡Prometemos brindar por ti y quererte aún más!
        </p>
      </div>

      <div className="animate-on-scroll relative z-10 inline-block text-left bg-secondary/20 border border-gold/30 rounded-2xl p-8 sm:p-12 shadow-sm">
        <p className="text-xs uppercase tracking-[0.3em] text-gold mb-6 text-center">
          Datos Bancarios
        </p>
        <div className="space-y-4 text-sm sm:text-base text-ink">
          <div className="flex justify-between gap-8 border-b border-border/50 pb-3">
            <span className="text-muted-foreground">Banco:</span>
            <span className="font-medium">El banco de tu preferencia</span>
          </div>
          <div className="flex justify-between gap-8 border-b border-border/50 pb-3">
            <span className="text-muted-foreground">Titulares:</span>
            <span className="font-medium">Sofía y Mateo</span>
          </div>
          <div className="flex justify-between gap-8 border-b border-border/50 pb-3">
            <span className="text-muted-foreground">Cuenta:</span>
            <span className="font-medium tabular-nums tracking-wider">0123 4567 89</span>
          </div>
          <div className="flex justify-between gap-8 pb-1">
            <span className="text-muted-foreground">CLABE:</span>
            <span className="font-medium tabular-nums tracking-wider">012 345 6789 0123 4567</span>
          </div>
        </div>
      </div>
    </Section>
  );
}

/* -------- Header -------- */
function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Historia", href: "#historia" },
    { name: "Detalles", href: "#detalles" },
    { name: "Regalos", href: "#regalos" },
    { name: "Asistencia", href: "#rsvp" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? "py-4 bg-background/90 backdrop-blur-md shadow-sm border-b border-border/40" : "py-6 bg-transparent"}`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <a href="#inicio" className="font-serif italic text-2xl text-gold drop-shadow-sm hover:opacity-80 transition-opacity">
          S & M
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-xs uppercase tracking-[0.2em] transition-colors hover:text-gold text-ink/80 drop-shadow-sm`}
            >
              {link.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

export function WeddingLanding() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header />
      <SmoothScroll />
      <Hero />
      <Story />
      <Details />
      <Gifts />
      <RSVP />
      <Gallery />
      <MapSection />
      <Footer />
    </main>
  );
}
