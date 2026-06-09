"use client";

import { useState, useEffect, useCallback } from "react";

const slides = [
  {
    id: 1,
    badge: "South Asia's Agriculture Network",
    headline: "Where Fields Meet\nMemory & Heritage",
    subheadline:
      "SANGAM unites agricultural museums, farmers, and scholars across India, Pakistan, Bangladesh, Nepal, Sri Lanka, Bhutan, Afghanistan & the Maldives to preserve the living heritage of South Asian farming.",
    cta1: { label: "Explore the Network", href: "#about" },
    cta2: { label: "Join SANGAM", href: "#join" },
    accent: "#5C8A2E",
    tag: "8 Nations · One Harvest",
    visual: "fields",
  },
  {
    id: 2,
    badge: "SANGAM Heritage Film Festival",
    headline: "Celebrating Kisan\nDiwas 2026",
    subheadline:
      "The SANGAM Agriculture Heritage Film Festival runs December 21–23, 2026, on National Farmers' Day. A confluence of documentary, folk memory, and cinematic storytelling rooted in the soil.",
    cta1: { label: "Learn About the Festival", href: "#programmes" },
    cta2: { label: "Submit Your Film", href: "#join" },
    accent: "#C8860A",
    tag: "Dec 21–23, 2026",
    visual: "festival",
  },
  {
    id: 3,
    badge: "Agricultural Museums",
    headline: "Museums That\nLive & Breathe",
    subheadline:
      "From Anupam Paul Rice Museum in Bengal to Babulal Dahiya Museum in MP — SANGAM's member museums hold the seeds of a thousand-year agricultural tradition. Discover their stories.",
    cta1: { label: "Visit Our Museums", href: "#museum" },
    cta2: { label: "Become a Partner", href: "#join" },
    accent: "#2E6B5E",
    tag: "Anupam Paul · Syed Gani Khan · Babulal Dahiya",
    visual: "museum",
  },
  {
    id: 4,
    badge: "Scouting Agricultural Heritage",
    headline: "Documenting the\nLand's Memory",
    subheadline:
      "Heritage documentation projects in Bundelkhand and Greater NOIDA are mapping India's vanishing agricultural traditions — seeds, tools, rituals, and the wisdom that holds it all together.",
    cta1: { label: "Explore Heritage Work", href: "#heritage" },
    cta2: { label: "CIMA 2023 Exhibition", href: "#conference" },
    accent: "#7B3F1A",
    tag: "Bundelkhand · Greater NOIDA",
    visual: "land",
  },
];

// SVG illustration patterns for each slide
function SlideVisual({ type, accent }) {
  if (type === "fields") {
    return (
      <svg viewBox="0 0 600 480" className="hero__visual-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="sky1" cx="50%" cy="0%" r="80%">
            <stop offset="0%" stopColor="#b8dba0" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#1a3a0a" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="earth1" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={accent} stopOpacity="0.18" />
            <stop offset="100%" stopColor="#1a3a0a" stopOpacity="0.55" />
          </linearGradient>
        </defs>
        {/* Layered hills */}
        <ellipse cx="300" cy="520" rx="420" ry="180" fill="url(#earth1)" />
        <ellipse cx="300" cy="470" rx="340" ry="130" fill={accent} opacity="0.13" />
        {/* Rice paddy rows */}
        {[380, 400, 418, 435, 451, 466].map((y, i) => (
          <ellipse key={i} cx="300" cy={y} rx={180 - i * 12} ry={6} fill={accent} opacity={0.08 + i * 0.04} />
        ))}
        {/* Wheat stalks */}
        {Array.from({ length: 22 }).map((_, i) => {
          const x = 60 + i * 22 + (i % 3) * 6;
          const h = 90 + (i % 5) * 18;
          return (
            <g key={i} transform={`translate(${x}, ${430 - h})`}>
              <line x1="0" y1="0" x2="0" y2={h} stroke={accent} strokeWidth="1.5" opacity="0.55" />
              <ellipse cx="0" cy="0" rx="5" ry="16" fill="#e8c84a" opacity="0.7" transform="rotate(-8)" />
            </g>
          );
        })}
        {/* Sun glow */}
        <circle cx="490" cy="80" r="55" fill="#ffe066" opacity="0.09" />
        <circle cx="490" cy="80" r="32" fill="#ffe066" opacity="0.13" />
        {/* Birds */}
        <path d="M 150 110 Q 158 103 166 110" stroke="#fff" strokeWidth="1.5" fill="none" opacity="0.45" />
        <path d="M 170 95 Q 179 88 188 95" stroke="#fff" strokeWidth="1.5" fill="none" opacity="0.35" />
        <path d="M 200 120 Q 207 113 214 120" stroke="#fff" strokeWidth="1.5" fill="none" opacity="0.3" />
        {/* Decorative circle */}
        <circle cx="300" cy="240" r="180" stroke={accent} strokeWidth="0.8" fill="none" opacity="0.2" strokeDasharray="4 8" />
        <circle cx="300" cy="240" r="210" stroke={accent} strokeWidth="0.5" fill="none" opacity="0.1" strokeDasharray="2 12" />
      </svg>
    );
  }

  if (type === "festival") {
    return (
      <svg viewBox="0 0 600 480" className="hero__visual-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="filmGlow" cx="50%" cy="50%" r="55%">
            <stop offset="0%" stopColor={accent} stopOpacity="0.22" />
            <stop offset="100%" stopColor="#1a0a00" stopOpacity="0" />
          </radialGradient>
        </defs>
        <ellipse cx="300" cy="300" rx="260" ry="260" fill="url(#filmGlow)" />
        {/* Film reel rings */}
        {[90, 130, 170].map((r, i) => (
          <circle key={i} cx="300" cy="260" r={r} stroke={accent} strokeWidth="1.2" fill="none" opacity={0.18 + i * 0.06} strokeDasharray={`${5 + i * 2} ${8 + i}`} />
        ))}
        {/* Lamp */}
        <ellipse cx="300" cy="180" rx="28" ry="28" fill="#ffe066" opacity="0.18" />
        <ellipse cx="300" cy="180" rx="14" ry="14" fill="#ffe066" opacity="0.32" />
        <line x1="300" y1="208" x2="300" y2="280" stroke="#ffe066" strokeWidth="1.5" opacity="0.2" />
        {/* Grain stalks radiating */}
        {Array.from({ length: 12 }).map((_, i) => {
          const angle = (i / 12) * Math.PI * 2;
          const cx2 = 300 + Math.cos(angle) * 200;
          const cy2 = 260 + Math.sin(angle) * 180;
          return (
            <line key={i} x1="300" y1="260" x2={cx2} y2={cy2} stroke={accent} strokeWidth="1" opacity="0.1" />
          );
        })}
        {/* Decorative leaf shapes */}
        {[0, 60, 120, 180, 240, 300].map((deg, i) => {
          const rad = (deg * Math.PI) / 180;
          const lx = 300 + Math.cos(rad) * 150;
          const ly = 260 + Math.sin(rad) * 150;
          return (
            <ellipse key={i} cx={lx} cy={ly} rx="12" ry="28" fill={accent} opacity="0.12" transform={`rotate(${deg + 90}, ${lx}, ${ly})`} />
          );
        })}
        {/* Calendar box */}
        <rect x="215" y="360" width="170" height="64" rx="12" fill={accent} opacity="0.15" />
        <text x="300" y="385" textAnchor="middle" fill="#ffe066" fontSize="11" fontFamily="Georgia, serif" opacity="0.8">DEC 21 – 23, 2026</text>
        <text x="300" y="404" textAnchor="middle" fill="#fff" fontSize="10" fontFamily="Georgia, serif" opacity="0.55">Kisan Diwas · National Farmers' Day</text>
      </svg>
    );
  }

  if (type === "museum") {
    return (
      <svg viewBox="0 0 600 480" className="hero__visual-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="museumBg" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={accent} stopOpacity="0.08" />
            <stop offset="100%" stopColor={accent} stopOpacity="0.22" />
          </linearGradient>
        </defs>
        {/* Museum building silhouette */}
        <rect x="140" y="230" width="320" height="180" rx="4" fill={accent} opacity="0.1" />
        {/* Columns */}
        {[170, 220, 270, 320, 370, 420].map((x, i) => (
          <rect key={i} x={x} y="235" width="16" height="175" rx="3" fill={accent} opacity="0.18" />
        ))}
        {/* Pediment / roof triangle */}
        <polygon points="120,230 300,130 480,230" fill={accent} opacity="0.12" />
        <polygon points="150,230 300,148 450,230" fill={accent} opacity="0.1" />
        {/* Rice jar / pot shapes */}
        <ellipse cx="230" cy="355" rx="28" ry="38" fill={accent} opacity="0.22" />
        <ellipse cx="230" cy="325" rx="14" ry="10" fill={accent} opacity="0.15" />
        <ellipse cx="370" cy="345" rx="22" ry="32" fill={accent} opacity="0.2" />
        <ellipse cx="370" cy="320" rx="11" ry="8" fill={accent} opacity="0.12" />
        {/* Decorative leaf frieze */}
        {Array.from({ length: 10 }).map((_, i) => (
          <ellipse key={i} cx={148 + i * 32} cy="225" rx="8" ry="14" fill={accent} opacity="0.13" transform={`rotate(0, ${148 + i * 32}, 225)`} />
        ))}
        {/* Glow */}
        <ellipse cx="300" cy="300" rx="200" ry="160" fill={accent} opacity="0.06" />
        {/* Stars / dots */}
        {[{x:160,y:160},{x:380,y:140},{x:460,y:200},{x:140,y:200},{x:500,y:260}].map((p, i) => (
          <circle key={i} cx={p.x} cy={p.y} r="2.5" fill="#ffe066" opacity="0.35" />
        ))}
      </svg>
    );
  }

  // land / heritage
  return (
    <svg viewBox="0 0 600 480" className="hero__visual-svg" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="landGlow" cx="50%" cy="60%" r="60%">
          <stop offset="0%" stopColor={accent} stopOpacity="0.2" />
          <stop offset="100%" stopColor="#0a0a0a" stopOpacity="0" />
        </radialGradient>
      </defs>
      <ellipse cx="300" cy="380" rx="320" ry="160" fill="url(#landGlow)" />
      {/* Topographic lines */}
      {[0.9, 0.75, 0.6, 0.45, 0.3].map((s, i) => (
        <ellipse key={i} cx="300" cy="370" rx={280 * s} ry={110 * s} stroke={accent} strokeWidth="1" fill="none" opacity={0.08 + i * 0.05} />
      ))}
      {/* Plough lines */}
      {Array.from({ length: 8 }).map((_, i) => (
        <path key={i} d={`M ${80 + i * 55} 440 Q ${110 + i * 55} ${350 - i * 5} ${140 + i * 55} 440`} stroke={accent} strokeWidth="1.5" fill="none" opacity="0.18" />
      ))}
      {/* Tools silhouette - scythe */}
      <line x1="300" y1="150" x2="300" y2="310" stroke={accent} strokeWidth="2.5" opacity="0.25" />
      <path d="M 300 150 Q 340 170 330 210 Q 310 230 300 225" stroke={accent} strokeWidth="2" fill="none" opacity="0.3" />
      {/* Seed dots */}
      {[{x:180,y:290},{x:220,y:310},{x:260,y:280},{x:340,y:300},{x:380,y:285},{x:420,y:305}].map((p, i) => (
        <ellipse key={i} cx={p.x} cy={p.y} rx="5" ry="8" fill={accent} opacity="0.28" transform={`rotate(${i * 15}, ${p.x}, ${p.y})`} />
      ))}
      {/* Sun */}
      <circle cx="480" cy="100" r="40" fill="#ffe066" opacity="0.08" />
      <circle cx="480" cy="100" r="22" fill="#ffe066" opacity="0.12" />
    </svg>
  );
}

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState("next");

  const goTo = useCallback(
    (index, dir = "next") => {
      if (animating) return;
      setDirection(dir);
      setAnimating(true);
      setTimeout(() => {
        setCurrent(index);
        setAnimating(false);
      }, 520);
    },
    [animating]
  );

  const next = useCallback(() => {
    goTo((current + 1) % slides.length, "next");
  }, [current, goTo]);

  const prev = useCallback(() => {
    goTo((current - 1 + slides.length) % slides.length, "prev");
  }, [current, goTo]);

  useEffect(() => {
    const timer = setInterval(next, 6500);
    return () => clearInterval(timer);
  }, [next]);

  const slide = slides[current];

  return (
    <section className="hero" style={{ "--slide-accent": slide.accent }}>
      {/* Background grain texture overlay */}
      <div className="hero__grain" />

      {/* Animated background blobs */}
      <div className="hero__blob hero__blob--1" />
      <div className="hero__blob hero__blob--2" />

      {/* Slide visual (right side illustration) */}
      <div className={`hero__visual ${animating ? `hero__visual--exit-${direction}` : "hero__visual--enter"}`}>
        <SlideVisual type={slide.visual} accent={slide.accent} />
      </div>

      {/* Content */}
      <div className="hero__content-wrap">
        <div className={`hero__content ${animating ? `hero__content--exit-${direction}` : "hero__content--enter"}`}>
          {/* Badge */}
          <div className="hero__badge">
            <span className="hero__badge-dot" />
            {slide.badge}
          </div>

          {/* Headline */}
          <h1 className="hero__headline">
            {slide.headline.split("\n").map((line, i) => (
              <span key={i} className={i === 1 ? "hero__headline-accent" : ""}>
                {line}
                {i === 0 && <br />}
              </span>
            ))}
          </h1>

          {/* Sub */}
          <p className="hero__sub">{slide.subheadline}</p>

          {/* Tag line */}
          <div className="hero__tag">
            <span className="hero__tag-icon">⬡</span>
            {slide.tag}
          </div>

          {/* CTA buttons */}
          <div className="hero__ctas">
            <a href={slide.cta1.href} className="hero__btn hero__btn--primary">
              {slide.cta1.label}
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a href={slide.cta2.href} className="hero__btn hero__btn--secondary">
              {slide.cta2.label}
            </a>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="hero__nav">
        <button className="hero__nav-btn" onClick={prev} aria-label="Previous slide">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M12 4L6 10L12 16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <div className="hero__dots">
          {slides.map((_, i) => (
            <button
              key={i}
              className={`hero__dot ${i === current ? "hero__dot--active" : ""}`}
              onClick={() => goTo(i, i > current ? "next" : "prev")}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
        <button className="hero__nav-btn" onClick={next} aria-label="Next slide">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M8 4L14 10L8 16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      {/* Progress bar */}
      <div className="hero__progress">
        <div className="hero__progress-fill" key={current} />
      </div>

      {/* Scroll hint */}
      <div className="hero__scroll-hint">
        <div className="hero__scroll-mouse">
          <div className="hero__scroll-wheel" />
        </div>
        <span>Scroll to explore</span>
      </div>
    </section>
  );
}
