"use client";

import { useEffect, useRef, useState } from "react";

const museums = [
  {
    name: "Anupam Paul Rice Museum",
    location: "Bengal, India",
    type: "Rice Heritage",
    description:
      "One of the most significant collections of rice varieties, cultivation tools, and folk art related to paddy farming in Eastern India. A living archive of Bengal's rice civilisation.",
    highlights: ["Heritage rice varieties", "Folk implements", "Paddy ritual objects"],
    accent: "#5C8A2E",
    initial: "AP",
  },
  {
    name: "Syed Gani Khan Rice Museum",
    location: "Mysore, Karnataka",
    type: "Rice Heritage",
    description:
      "Located in the historic city of Mysore, this museum documents the deep rice culture of Karnataka — its agricultural practices, water management systems, and harvest traditions.",
    highlights: ["Irrigation heritage", "Karnataka rice culture", "Traditional tools"],
    accent: "#2E6B5E",
    initial: "SG",
  },
  {
    name: "Babulal Dahiya Museum",
    location: "Madhya Pradesh, India",
    type: "Folk Agriculture",
    description:
      "A unique folk museum in the heartland of India preserving the agricultural traditions of MP — from ancient seed conservation practices to the ceremonial life of farming communities.",
    highlights: ["Seed conservation", "Tribal agriculture", "Ceremonial objects"],
    accent: "#7B3F1A",
    initial: "BD",
  },
  {
    name: "PAU Museums",
    location: "Punjab Agricultural University",
    type: "Academic Collection",
    description:
      "The Punjab Agricultural University museums hold extensive collections related to the Green Revolution, traditional Punjabi farming tools, and the evolution of agricultural science in North India.",
    highlights: ["Green Revolution history", "Farm machinery", "Research archives"],
    accent: "#C8860A",
    initial: "PAU",
  },
];

export default function MuseumSection() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const m = museums[active];

  return (
    <section className="museum" id="museum" ref={ref}>
      <div className="museum__inner">
        {/* Header */}
        <div className={`section-header ${visible ? "section-header--in" : ""}`}>
          <div className="section-badge">
            <span className="section-badge__dot" />
            South Asian Network of Members
          </div>
          <h2 className="section-heading">
            Agricultural Museums<br />
            <em>Holding Our Roots</em>
          </h2>
          <p className="section-sub">
            SANGAM's member museums are custodians of South Asia's agricultural memory —
            each a living institution connecting communities to their farming heritage.
          </p>
        </div>

        {/* Interactive museum explorer */}
        <div className={`museum__explorer ${visible ? "museum__explorer--in" : ""}`}>
          {/* Tabs */}
          <div className="museum__tabs">
            {museums.map((mus, i) => (
              <button
                key={i}
                className={`museum__tab ${i === active ? "museum__tab--active" : ""}`}
                style={{ "--tab-accent": mus.accent }}
                onClick={() => setActive(i)}
              >
                <span className="museum__tab-initial" style={{ background: i === active ? mus.accent : "rgba(255,255,255,0.05)" }}>
                  {mus.initial}
                </span>
                <span className="museum__tab-name">{mus.name}</span>
              </button>
            ))}
          </div>

          {/* Detail panel */}
          <div className="museum__panel" key={active} style={{ "--panel-accent": m.accent }}>
            <div className="museum__panel-header">
              <div className="museum__panel-avatar" style={{ background: m.accent + "22", border: `1px solid ${m.accent}44` }}>
                <span style={{ color: m.accent }}>{m.initial}</span>
              </div>
              <div>
                <h3 className="museum__panel-name">{m.name}</h3>
                <div className="museum__panel-meta">
                  <span>📍 {m.location}</span>
                  <span className="museum__panel-type" style={{ color: m.accent }}>{m.type}</span>
                </div>
              </div>
            </div>

            <p className="museum__panel-desc">{m.description}</p>

            <div className="museum__highlights">
              <p className="museum__highlights-label">Collection Highlights</p>
              <div className="museum__highlight-tags">
                {m.highlights.map((h, i) => (
                  <span key={i} className="museum__highlight-tag" style={{ borderColor: m.accent + "55", color: m.accent }}>
                    {h}
                  </span>
                ))}
              </div>
            </div>

            <a href="#" className="museum__cta" style={{ background: m.accent }}>
              Explore Museum
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>

        {/* Associate note */}
        <div className={`museum__associate ${visible ? "museum__associate--in" : ""}`}>
          <div className="museum__associate-icon">🌐</div>
          <div>
            <strong>Associate Museum Members</strong>
            <p>SANGAM also has an extended network of associated museum members from outside the eight core network countries. Institutions working on agricultural heritage globally are welcome to apply for associate status.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
