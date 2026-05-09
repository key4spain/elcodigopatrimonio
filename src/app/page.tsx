"use client";

import { useState, useEffect } from "react";

// ─── Links ────────────────────────────────────────────────────────────────────

const LINKS = {
  instagram: "https://www.instagram.com/elcodigopatrimonio/",
  tiktok: "https://www.tiktok.com/@el.codigo.patrimonio",
  youtube: "https://www.youtube.com/@TheDiaryOfACEO",
  kick: "https://kick.com/elcodigopatrimonio",
  lyfion: "https://www.lyf-ion.com",
} as const;

const NAV_LINKS = [
  { label: "Inicio", href: "#inicio" },
  { label: "Canales", href: "#canales" },
  { label: "Podcast", href: "#podcast" },
  { label: "Magazine", href: "#magazine" },
  { label: "Sobre nosotros", href: "#nosotros" },
  { label: "Contacto", href: "#contacto" },
];

// ─── SVG Icons ────────────────────────────────────────────────────────────────

function IconInstagram() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-5 h-5"
      aria-hidden
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4.5" />
      <circle cx="17.5" cy="6.5" r="0.7" fill="currentColor" stroke="none" />
    </svg>
  );
}

function IconTikTok() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-5 h-5"
      aria-hidden
    >
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05A6.34 6.34 0 003.15 15.3a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.93a8.27 8.27 0 004.84 1.55V7.03a4.84 4.84 0 01-1.07-.34z" />
    </svg>
  );
}

function IconYouTube() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-5 h-5"
      aria-hidden
    >
      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

function IconKick() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-5 h-5"
      aria-hidden
    >
      <path d="M5 3h3.5v7.2L14.2 3H18.5L12.3 11.8 19 21h-4.5L9.2 14V21H5V3z" />
    </svg>
  );
}

function IconArrow() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-3 h-3"
      aria-hidden
    >
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

// ─── Decorative helpers ───────────────────────────────────────────────────────

function GoldDivider() {
  return (
    <div className="flex items-center justify-center gap-4">
      <div
        className="h-px w-14"
        style={{ background: "linear-gradient(90deg, transparent, #c8a45e)" }}
      />
      <div
        className="w-1.5 h-1.5 rotate-45 shrink-0"
        style={{ background: "#c8a45e" }}
      />
      <div
        className="h-px w-14"
        style={{ background: "linear-gradient(90deg, #c8a45e, transparent)" }}
      />
    </div>
  );
}

// ─── Sub-components ───────────────────────────────────────────────────────────

interface ChannelCardProps {
  platform: string;
  href: string;
  icon: React.ReactNode;
  handle: string;
  text: string;
}

function ChannelCard({ platform, href, icon, handle, text }: ChannelCardProps) {
  return (
    <div className="channel-card flex flex-col h-full">
      <div className="mb-5" style={{ color: "#c8a45e" }}>
        {icon}
      </div>
      <p className="section-label mb-1">{platform}</p>
      <p
        className="text-sm font-medium mb-3"
        style={{ color: "#f0ebe0", fontFamily: "var(--font-playfair)" }}
      >
        {handle}
      </p>
      <p
        className="text-sm leading-relaxed mb-6 flex-1"
        style={{ color: "rgba(201, 195, 181, 0.65)" }}
      >
        {text}
      </p>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="channel-cta mt-auto"
      >
        Seguir <IconArrow />
      </a>
    </div>
  );
}

interface FeatureCardProps {
  title: string;
  desc: string;
}

function FeatureCard({ title, desc }: FeatureCardProps) {
  return (
    <div className="feature-card">
      <div
        className="w-7 h-px mb-4"
        style={{ background: "#c8a45e" }}
      />
      <p
        className="text-sm font-semibold mb-2 section-heading"
        style={{ fontSize: "0.9375rem" }}
      >
        {title}
      </p>
      <p className="text-xs leading-relaxed" style={{ color: "rgba(201, 195, 181, 0.58)" }}>
        {desc}
      </p>
    </div>
  );
}

interface ValueCardProps {
  label: string;
  number: string;
}

function ValueCard({ label, number }: ValueCardProps) {
  return (
    <div className="value-card">
      <span
        className="text-xs font-mono block mb-3"
        style={{ color: "rgba(200, 164, 94, 0.5)" }}
      >
        {number}
      </span>
      <p
        className="text-base font-semibold section-heading"
        style={{ fontSize: "1.0625rem" }}
      >
        {label}
      </p>
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const socialButtons = [
    { label: "Instagram", href: LINKS.instagram, icon: <IconInstagram /> },
    { label: "TikTok", href: LINKS.tiktok, icon: <IconTikTok /> },
    { label: "YouTube", href: LINKS.youtube, icon: <IconYouTube /> },
    { label: "Kick", href: LINKS.kick, icon: <IconKick /> },
  ];

  return (
    <div
      className="min-h-screen"
      style={{ background: "#050c1a", color: "#f0ebe0" }}
    >
      {/* ─── NAVIGATION ─────────────────────────────────────────────────────── */}
      <header
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          transition: "padding 300ms ease, background 300ms ease, border-color 300ms ease, backdrop-filter 300ms ease",
          padding: scrolled ? "0.75rem 0" : "1.375rem 0",
          background: scrolled ? "rgba(5, 12, 26, 0.96)" : "transparent",
          backdropFilter: scrolled ? "blur(14px)" : "none",
          borderBottom: scrolled
            ? "1px solid rgba(200, 164, 94, 0.12)"
            : "1px solid transparent",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#inicio"
            className="shrink-0"
            style={{
              fontFamily: "var(--font-playfair)",
              color: "#c8a45e",
              fontSize: "1.0625rem",
              fontWeight: 600,
              letterSpacing: "0.02em",
              textDecoration: "none",
            }}
          >
            El Código Patrimonio
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8" role="navigation">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} className="nav-link">
                {link.label}
              </a>
            ))}
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col justify-center gap-1.5 w-9 h-9 shrink-0"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuOpen}
          >
            <span
              style={{
                display: "block",
                width: "22px",
                height: "1.5px",
                background: "#c8a45e",
                transition: "transform 280ms ease, opacity 280ms ease",
                transform: menuOpen
                  ? "rotate(45deg) translate(2px, 4.5px)"
                  : "none",
              }}
            />
            <span
              style={{
                display: "block",
                width: "22px",
                height: "1.5px",
                background: "#c8a45e",
                transition: "opacity 280ms ease",
                opacity: menuOpen ? 0 : 1,
              }}
            />
            <span
              style={{
                display: "block",
                width: "22px",
                height: "1.5px",
                background: "#c8a45e",
                transition: "transform 280ms ease, opacity 280ms ease",
                transform: menuOpen
                  ? "rotate(-45deg) translate(2px, -4.5px)"
                  : "none",
              }}
            />
          </button>
        </div>

        {/* Mobile menu */}
        <div
          style={{
            maxHeight: menuOpen ? "400px" : "0",
            overflow: "hidden",
            transition: "max-height 300ms ease",
            background: "rgba(5, 12, 26, 0.98)",
            borderTop: menuOpen ? "1px solid rgba(200, 164, 94, 0.12)" : "1px solid transparent",
          }}
        >
          <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="nav-link py-2.5"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </header>

      {/* ─── HERO ───────────────────────────────────────────────────────────── */}
      <section
        id="inicio"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          background:
            "linear-gradient(145deg, #03080f 0%, #060d1c 35%, #0b1929 65%, #050c1a 100%)",
        }}
      >
        {/* Radial gold glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 75% 55% at 50% 42%, rgba(200, 164, 94, 0.065) 0%, transparent 68%)",
          }}
        />
        {/* Vertical accent lines */}
        <div
          className="absolute left-8 top-0 w-px h-full hidden lg:block"
          style={{
            background:
              "linear-gradient(180deg, transparent 0%, rgba(200, 164, 94, 0.18) 40%, rgba(200, 164, 94, 0.18) 60%, transparent 100%)",
          }}
        />
        <div
          className="absolute right-8 top-0 w-px h-full hidden lg:block"
          style={{
            background:
              "linear-gradient(180deg, transparent 0%, rgba(200, 164, 94, 0.18) 40%, rgba(200, 164, 94, 0.18) 60%, transparent 100%)",
          }}
        />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center pt-28 pb-24">
          {/* Top eyebrow */}
          <p className="section-label mb-8 block">
            Plataforma de contenido premium
          </p>

          {/* Main headline */}
          <h1
            className="font-bold leading-none mb-7"
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "clamp(2.6rem, 8vw, 5.5rem)",
              color: "#f0ebe0",
              letterSpacing: "-0.01em",
            }}
          >
            El Código{" "}
            <span style={{ color: "#c8a45e" }}>Patrimonio</span>
          </h1>

          <div className="mb-7">
            <GoldDivider />
          </div>

          {/* Subheadline */}
          <p
            className="mb-6 leading-relaxed"
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "clamp(1.1rem, 3vw, 1.6rem)",
              color: "rgba(201, 195, 181, 0.85)",
              fontWeight: 400,
            }}
          >
            Negocios, inversión y crecimiento personal con una mirada global.
          </p>

          {/* Supporting text */}
          <p
            className="max-w-2xl mx-auto mb-12 leading-relaxed"
            style={{
              fontSize: "clamp(0.9rem, 2vw, 1.0625rem)",
              color: "rgba(201, 195, 181, 0.62)",
              lineHeight: 1.8,
            }}
          >
            Una plataforma de contenido premium para personas que quieren
            entender mejor el dinero, el patrimonio, los mercados, la
            disciplina y las decisiones que construyen una vida con más
            dirección.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap justify-center gap-3">
            {socialButtons.map((btn) => (
              <a
                key={btn.label}
                href={btn.href}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-social"
              >
                {btn.icon}
                {btn.label}
              </a>
            ))}
          </div>

          {/* Scroll indicator */}
          <div className="mt-20 flex flex-col items-center gap-2">
            <span
              className="section-label"
              style={{ opacity: 0.45, fontSize: "0.6rem", letterSpacing: "0.36em" }}
            >
              Descubrir
            </span>
            <div
              className="w-px h-8 pulse-line"
              style={{ background: "#c8a45e" }}
            />
          </div>
        </div>
      </section>

      {/* ─── CHANNELS ───────────────────────────────────────────────────────── */}
      <section
        id="canales"
        className="py-24 px-6"
        style={{ background: "#070e1f" }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="section-label mb-4 block">Presencia digital</p>
            <h2
              className="section-heading mb-5"
              style={{ fontSize: "clamp(1.7rem, 4vw, 2.8rem)" }}
            >
              Síguenos en nuestros canales
            </h2>
            <GoldDivider />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <ChannelCard
              platform="Instagram"
              href={LINKS.instagram}
              icon={<IconInstagram />}
              handle="@elcodigopatrimonio"
              text="Ideas visuales, frases, análisis y contenido premium sobre patrimonio, negocios y crecimiento."
            />
            <ChannelCard
              platform="TikTok"
              href={LINKS.tiktok}
              icon={<IconTikTok />}
              handle="@el.codigo.patrimonio"
              text="Conceptos claros sobre dinero, inversión, disciplina, mentalidad y decisiones inteligentes."
            />
            <ChannelCard
              platform="YouTube"
              href={LINKS.youtube}
              icon={<IconYouTube />}
              handle="TheDiaryOfACEO"
              text="Inspiración global, entrevistas, historias de éxito y conversaciones de alto valor."
            />
            <ChannelCard
              platform="Kick"
              href={LINKS.kick}
              icon={<IconKick />}
              handle="elcodigopatrimonio"
              text="Un canal preparado para directos, comunidad y nuevos formatos de contenido premium."
            />
          </div>
        </div>
      </section>

      {/* ─── PODCAST ────────────────────────────────────────────────────────── */}
      <section
        id="podcast"
        className="py-24 px-6"
        style={{ background: "#050c1a" }}
      >
        <div className="max-w-7xl mx-auto">
          {/* Badge */}
          <div className="flex justify-center mb-10">
            <span className="badge">En preparación</span>
          </div>

          <div className="text-center mb-14">
            <p className="section-label mb-4 block">Próximamente</p>
            <h2
              className="section-heading mb-6"
              style={{ fontSize: "clamp(1.7rem, 4vw, 2.8rem)" }}
            >
              Podcast premium en preparación
            </h2>

            <p
              className="section-quote mb-7"
              style={{ fontSize: "clamp(1.25rem, 3.5vw, 2.1rem)" }}
            >
              Conversaciones con personas que construyen el mundo.
            </p>
            <div className="mb-8">
              <GoldDivider />
            </div>
            <p
              className="max-w-3xl mx-auto leading-relaxed"
              style={{
                fontSize: "clamp(0.9rem, 2vw, 1.05rem)",
                color: "rgba(201, 195, 181, 0.72)",
                lineHeight: 1.85,
              }}
            >
              El Código Patrimonio prepara un formato de podcast con
              empresarios, inversores, fundadores, pensadores y voces
              relevantes del mundo de los negocios. Una visión internacional,
              con conversaciones en diferentes idiomas y subtítulos en español
              para acercar ideas globales a nuestra comunidad.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
            <FeatureCard
              title="Empresarios globales"
              desc="Voces de líderes empresariales de todo el mundo con experiencia real de mercado."
            />
            <FeatureCard
              title="Inversores y fundadores"
              desc="Perspectivas de quienes construyen, escalan y financian proyectos globales."
            />
            <FeatureCard
              title="Voces internacionales"
              desc="Conversaciones en diferentes idiomas del mundo, sin fronteras de idioma."
            />
            <FeatureCard
              title="Subtítulos en español"
              desc="Acceso pleno a ideas globales para toda la comunidad hispanohablante."
            />
            <FeatureCard
              title="Ideas aplicables"
              desc="Contenido con valor práctico e intelectual real, no motivacional vacío."
            />
            <FeatureCard
              title="Conversaciones de alto valor"
              desc="Formato largo, profundo, editado con estándares de máxima calidad."
            />
          </div>
        </div>
      </section>

      {/* ─── MAGAZINE ───────────────────────────────────────────────────────── */}
      <section
        id="magazine"
        className="py-24 px-6"
        style={{ background: "#070e1f" }}
      >
        <div className="max-w-7xl mx-auto">
          {/* Badge */}
          <div className="flex justify-center mb-10">
            <span className="badge">En desarrollo</span>
          </div>

          <div className="text-center mb-14">
            <p className="section-label mb-4 block">Publicación premium</p>
            <h2
              className="section-heading mb-6"
              style={{ fontSize: "clamp(1.7rem, 4vw, 2.8rem)" }}
            >
              Revista y periódico de negocios
            </h2>

            <p
              className="section-quote mb-7"
              style={{ fontSize: "clamp(1.25rem, 3.5vw, 2.1rem)" }}
            >
              Análisis propio, lectura de mercado y visión patrimonial.
            </p>
            <div className="mb-8">
              <GoldDivider />
            </div>
            <p
              className="max-w-3xl mx-auto leading-relaxed"
              style={{
                fontSize: "clamp(0.9rem, 2vw, 1.05rem)",
                color: "rgba(201, 195, 181, 0.72)",
                lineHeight: 1.85,
              }}
            >
              Estamos construyendo una futura publicación digital con análisis,
              opinión, predicciones y lectura propia sobre negocios, mercados
              globales, inversión, patrimonio, tecnología, oportunidades y
              movimientos que pueden marcar el futuro económico.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
            <FeatureCard
              title="Mercados globales"
              desc="Lectura e interpretación de los mercados financieros internacionales."
            />
            <FeatureCard
              title="Predicciones y tendencias"
              desc="Análisis prospectivo sobre lo que puede venir en economía y negocios."
            />
            <FeatureCard
              title="Patrimonio e inversión"
              desc="Estrategias y filosofía para construir patrimonio real a largo plazo."
            />
            <FeatureCard
              title="Tecnología y negocios"
              desc="La intersección entre innovación tecnológica y oportunidad económica."
            />
            <FeatureCard
              title="Opinión y análisis propio"
              desc="Nuestra visión independiente sobre los movimientos que importan."
            />
            <FeatureCard
              title="Cultura financiera"
              desc="Conocimiento que cambia fundamentalmente la forma de pensar el dinero."
            />
          </div>
        </div>
      </section>

      {/* ─── ABOUT ──────────────────────────────────────────────────────────── */}
      <section
        id="nosotros"
        className="py-24 px-6"
        style={{ background: "#050c1a" }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="section-label mb-4 block">La marca</p>
            <h2
              className="section-heading mb-5"
              style={{ fontSize: "clamp(1.7rem, 4vw, 2.8rem)" }}
            >
              Sobre nosotros
            </h2>
            <div className="mb-8">
              <GoldDivider />
            </div>
            <p
              className="max-w-3xl mx-auto leading-relaxed"
              style={{
                fontSize: "clamp(0.9rem, 2vw, 1.05rem)",
                color: "rgba(201, 195, 181, 0.75)",
                lineHeight: 1.9,
              }}
            >
              El Código Patrimonio nace para crear una comunidad que piense
              mejor, invierta con más criterio y entienda el valor desde una
              perspectiva más amplia. No se trata solo de dinero: se trata de
              estrategia, disciplina, conocimiento, crecimiento personal y
              lectura inteligente del mundo.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
            <ValueCard label="Patrimonio" number="01" />
            <ValueCard label="Estrategia" number="02" />
            <ValueCard label="Disciplina" number="03" />
            <ValueCard label="Crecimiento" number="04" />
            <ValueCard label="Visión global" number="05" />
            <ValueCard label="Criterio" number="06" />
          </div>
        </div>
      </section>

      {/* ─── FUTURE SIGNAL ──────────────────────────────────────────────────── */}
      <section className="py-20 px-6" style={{ background: "#070e1f" }}>
        <div className="max-w-2xl mx-auto text-center">
          <p
            className="section-label mb-5 block"
            style={{ opacity: 0.65 }}
          >
            Horizonte
          </p>
          <h2
            className="section-heading mb-5"
            style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.2rem)" }}
          >
            Más formatos llegarán después
          </h2>
          <div className="mb-7">
            <GoldDivider />
          </div>
          <p
            className="mb-8 leading-relaxed"
            style={{
              fontSize: "clamp(0.9rem, 2vw, 1.0rem)",
              color: "rgba(201, 195, 181, 0.62)",
              lineHeight: 1.85,
            }}
          >
            Además del podcast y la publicación digital, el ecosistema podrá
            evolucionar hacia directos, comunidad privada, eventos, formatos
            audiovisuales y nuevas señales de comunicación.
          </p>
          <p
            style={{
              fontSize: "0.8rem",
              color: "rgba(201, 195, 181, 0.3)",
              letterSpacing: "0.03em",
            }}
          >
            FM Frequency — una señal de comunicación en exploración para el
            futuro.
          </p>
        </div>
      </section>

      {/* ─── FOOTER ─────────────────────────────────────────────────────────── */}
      <footer
        id="contacto"
        className="py-14 px-6"
        style={{
          background: "#03080f",
          borderTop: "1px solid rgba(200, 164, 94, 0.12)",
        }}
      >
        <div className="max-w-7xl mx-auto">
          {/* Top row */}
          <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8 mb-10">
            {/* Brand */}
            <div>
              <p
                className="font-semibold mb-1"
                style={{
                  fontFamily: "var(--font-playfair)",
                  color: "#c8a45e",
                  fontSize: "1.125rem",
                  letterSpacing: "0.02em",
                }}
              >
                El Código Patrimonio
              </p>
              <p
                style={{
                  fontSize: "0.72rem",
                  color: "rgba(201, 195, 181, 0.35)",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                }}
              >
                Negocios · Inversión · Patrimonio · Crecimiento
              </p>
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-7">
              {socialButtons.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="footer-icon"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div
            className="w-full h-px mb-8"
            style={{ background: "rgba(200, 164, 94, 0.08)" }}
          />

          {/* Bottom row */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-3">
            <p
              className="text-center md:text-left"
              style={{
                fontSize: "0.78rem",
                color: "rgba(201, 195, 181, 0.32)",
                lineHeight: 1.7,
              }}
            >
              El Código Patrimonio © 2026. Una marca independiente de negocios,
              inversión, patrimonio y crecimiento personal.
            </p>
            <p style={{ fontSize: "0.78rem", color: "rgba(201, 195, 181, 0.28)", whiteSpace: "nowrap" }}>
              Desarrollado en el ecosistema{" "}
              <a
                href={LINKS.lyfion}
                target="_blank"
                rel="noopener noreferrer"
                className="lyfion-link"
              >
                Lyfion
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
