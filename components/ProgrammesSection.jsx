"use client";

import { useEffect, useRef, useState } from "react";

const programmes = [
  {
    icon: "🎬",
    category: "Film Festival",
    title: "SANGAM Agriculture Heritage Film Festival",
    date: "December 21–23, 2026",
    occasion: "Kisan Diwas — National Farmers' Day",
    description:
      "Three days of documentary films, folk memory recordings, and cinematic storytelling celebrating South Asia's living agricultural heritage. Filmmakers, farmers, and scholars converge.",
    accent: "#C8860A",
    tag: "Upcoming",
  },
  {
    icon: "🖼️",
    category: "Exhibitions",
    title: "Pop-Up & Travelling Exhibitions",
    date: "Year-round",
    occasion: "Multiple venues across South Asia",
    description:
      "SANGAM produces travelling and pop-up exhibitions showcasing Agri Museum posters, artefacts, and photographic documentation. These exhibitions bring heritage to communities across the region.",
    accent: "#5C8A2E",
    tag: "Ongoing",
  },
  {
    icon: "🎙️",
    category: "SANGAM Talks",
    title: "Expert Lecture Series",
    date: "Throughout the year",
    occasion: "Online & in-person",
    description:
      "Curated talks by historians, farmers, museum curators, and researchers on topics ranging from seed sovereignty to the architecture of traditional granaries.",
    accent: "#2E6B5E",
    tag: "Ongoing",
  },
  {
    icon: "🏛️",
    category: "Conference",
    title: "CIMA Annual Conference",
    date: "Annual",
    occasion: "Rotating host cities",
    description:
      "The flagship academic and practitioner conference bringing together leading voices in agricultural heritage, intangible cultural heritage, and museum studies.",
    accent: "#7B3F1A",
    tag: "Annual",
  },
];

export default function ProgrammesSection() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="programmes" id="programmes" ref={ref}>
      <div className="programmes__inner">
        <div className={`section-header ${visible ? "section-header--in" : ""}`}>
          <div className="section-badge">
            <span className="section-badge__dot section-badge__dot--teal" />
            Programmes
          </div>
          <h2 className="section-heading">
            Events, Festivals &<br />
            <em>Living Heritage in Action</em>
          </h2>
          <p className="section-sub">
            From film festivals on Kisan Diwas to travelling exhibitions across the subcontinent,
            SANGAM's programmes bring agricultural heritage to life.
          </p>
        </div>

        <div className="programmes__grid">
          {programmes.map((p, i) => (
            <article
              className={`prog-card ${visible ? "prog-card--in" : ""}`}
              key={i}
              style={{ "--card-accent": p.accent, "--delay": `${i * 0.1}s` }}
            >
              <div className="prog-card__top">
                <span className="prog-card__icon">{p.icon}</span>
                <span className="prog-card__tag" style={{ color: p.accent, borderColor: p.accent + "44" }}>
                  {p.tag}
                </span>
              </div>
              <div className="prog-card__cat">{p.category}</div>
              <h3 className="prog-card__title">{p.title}</h3>
              <div className="prog-card__meta">
                <span>{p.date}</span>
                <span className="prog-card__meta-sep">·</span>
                <span>{p.occasion}</span>
              </div>
              <p className="prog-card__desc">{p.description}</p>
              <div className="prog-card__accent-bar" style={{ background: p.accent }} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
