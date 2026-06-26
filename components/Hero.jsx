"use client";
import { useState, useEffect } from "react";

const headlines = [
  { l1: "Where Soil Meets", l2: "Memory" },
  { l1: "Harvest Stories,", l2: "Living Roots" },
  { l1: "Eight Nations,", l2: "One Earth" },
  { l1: "Documenting the", l2: "Living Land" },
];

export default function Hero() {
  const [idx, setIdx] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const t = setInterval(() => {
      setFade(true);
      setTimeout(() => { setIdx((p) => (p + 1) % headlines.length); setFade(false); }, 380);
    }, 5000);
    return () => clearInterval(t);
  }, []);

  const h = headlines[idx];

  return (
    <>
      <section className="hero">
        <div className="hero__pattern" />

        <div className="hero__inner">
          <div>
            <div className="hero__date-row">
              <div className="event-badge gold">
                <span className="event-badge__dot" />
                South Asian Agricultural Heritage Network
              </div>
            </div>

            <h1 className="hero__headline" style={{ opacity: fade ? 0 : 1, transition: "opacity 0.35s ease" }}>
              {h.l1}<br /><em>{h.l2}</em>
            </h1>

            <p className="hero__sub">
              SANGAM — meaning confluence — unites agricultural museums, farmers, and scholars
              across eight South Asian nations to preserve the living heritage of the subcontinent's
              farming traditions.
            </p>

            <div className="hero__actions">
              <a href="#join" className="btn btn-gold">
                Register for the Summit
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </a>
              <a href="#about" className="btn btn-outline-white">Explore the Network</a>
            </div>

            <div className="hero__partner-row">
              <span className="hero__partner-label">In Partnership With</span>
              <div className="hero__partner-flags">
                {["🇮🇳","🇵🇰","🇧🇩","🇳🇵","🇱🇰","🇧🇹","🇦🇫","🇲🇻"].map((f, i) => (
                  <span key={i} className="hero__partner-flag">{f}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Event ticket card */}
          <div className="hero__ticket">
            <div className="hero__ticket-top">
              <span className="hero__ticket-top-label">Featured Event</span>
              <span className="hero__ticket-top-num">№ SGM-2026</span>
            </div>
            <div className="hero__ticket-body">
              <div className="hero__ticket-event">SANGAM Agriculture Heritage Film Festival</div>
              <div className="hero__ticket-sub">National Farmers' Day · Kisan Diwas</div>

              <div className="hero__ticket-grid">
                <div>
                  <div className="hero__ticket-field-label">Dates</div>
                  <div className="hero__ticket-field-val">Dec 21–23, 2026</div>
                </div>
                <div>
                  <div className="hero__ticket-field-label">Venue</div>
                  <div className="hero__ticket-field-val">Multiple Cities, India</div>
                </div>
                <div>
                  <div className="hero__ticket-field-label">Format</div>
                  <div className="hero__ticket-field-val">In-Person + Streamed</div>
                </div>
                <div>
                  <div className="hero__ticket-field-label">Entry</div>
                  <div className="hero__ticket-field-val">Open Registration</div>
                </div>
              </div>

              <div className="hero__ticket-stats">
                <div className="hero__ticket-stat">
                  <div className="hero__ticket-stat-val">8+</div>
                  <div className="hero__ticket-stat-lbl">Nations</div>
                </div>
                <div className="hero__ticket-stat">
                  <div className="hero__ticket-stat-val">4</div>
                  <div className="hero__ticket-stat-lbl">Museums</div>
                </div>
                <div className="hero__ticket-stat">
                  <div className="hero__ticket-stat-val">3</div>
                  <div className="hero__ticket-stat-lbl">Days</div>
                </div>
              </div>
            </div>
            <div className="hero__ticket-notch left" />
            <div className="hero__ticket-notch right" />
          </div>
        </div>

        {/* Stats strip */}
        <div className="stats-strip">
          <div className="stats-strip__grid">
            <div className="stats-strip__item">
              <div className="stats-strip__val">8+</div>
              <div className="stats-strip__lbl">Network Nations</div>
            </div>
            <div className="stats-strip__item">
              <div className="stats-strip__val">4</div>
              <div className="stats-strip__lbl">Member Museums</div>
            </div>
            <div className="stats-strip__item">
              <div className="stats-strip__val">1000+</div>
              <div className="stats-strip__lbl">Years of Heritage</div>
            </div>
            <div className="stats-strip__item">
              <div className="stats-strip__val">2</div>
              <div className="stats-strip__lbl">Active Doc Projects</div>
            </div>
          </div>
        </div>
      </section>

      <div className="ticker">
        <div className="ticker__track">
          {[...Array(2)].map((_, rep) => (
            <span key={rep}>
              {["SANGAM Summit 2026","Agricultural Heritage","8 Nations","CIMA 2023","Film Festival Dec 21–23","Rice Museum","Bundelkhand Docs","Kisan Diwas","South Asia","Register Now"].map((item, j) => (
                <span key={j} className="ticker__item"><span className="ticker__dot" />{item}</span>
              ))}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}
