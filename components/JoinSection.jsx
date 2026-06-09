"use client";

import { useEffect, useRef, useState } from "react";

const joinOptions = [
  {
    icon: "🎓",
    type: "Internship",
    tagline: "Learn by Doing",
    description:
      "Short-term placements for students and early-career professionals to work directly with SANGAM's documentation, exhibitions, and museum programmes across South Asia.",
    details: ["Hands-on field experience", "Museum curation support", "Research assistance", "Mentorship from senior members"],
    accent: "#5C8A2E",
    cta: "Apply for Internship",
  },
  {
    icon: "🔬",
    type: "Fellowship",
    tagline: "Deep Research, Lasting Impact",
    description:
      "Structured fellowships for researchers, historians, and practitioners to undertake substantive projects on South Asian agricultural heritage with SANGAM's institutional support.",
    details: ["Funded research projects", "Access to member museums", "Publication support", "Network connections"],
    accent: "#C8860A",
    cta: "Apply for Fellowship",
  },
  {
    icon: "🤝",
    type: "Partner",
    tagline: "Grow Together",
    description:
      "Institutional partnerships for universities, NGOs, government bodies, and cultural organisations that share SANGAM's mission and want to collaborate on programmes and projects.",
    details: ["Co-branded programmes", "Joint exhibitions", "Shared research access", "Network visibility"],
    accent: "#2E6B5E",
    cta: "Become a Partner",
  },
  {
    icon: "🌾",
    type: "Member",
    tagline: "Join the Network",
    description:
      "Individual and institutional membership open to museums, scholars, farmers, and practitioners across South Asia and the world who are committed to agricultural heritage.",
    details: ["Full network access", "Member events & talks", "Voting rights", "Collective advocacy"],
    accent: "#7B3F1A",
    cta: "Become a Member",
  },
];

export default function JoinSection() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.08 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="join" id="join" ref={ref}>
      <div className="join__inner">
        <div className={`section-header ${visible ? "section-header--in" : ""}`}>
          <div className="section-badge">
            <span className="section-badge__dot" />
            Join SANGAM
          </div>
          <h2 className="section-heading">
            Be Part of Something<br />
            <em>Rooted & Lasting</em>
          </h2>
          <p className="section-sub">
            Whether you're a student, researcher, institution, or passionate individual —
            there's a place for you in the SANGAM network.
          </p>
        </div>

        <div className="join__grid">
          {joinOptions.map((opt, i) => (
            <article
              className={`join-card ${visible ? "join-card--in" : ""}`}
              key={i}
              style={{ "--jc-accent": opt.accent, "--delay": `${i * 0.1}s` }}
            >
              <div className="join-card__icon">{opt.icon}</div>
              <div className="join-card__type" style={{ color: opt.accent }}>{opt.type}</div>
              <div className="join-card__tagline">{opt.tagline}</div>
              <p className="join-card__desc">{opt.description}</p>
              <ul className="join-card__details">
                {opt.details.map((d, j) => (
                  <li key={j}>
                    <span style={{ color: opt.accent }}>✓</span> {d}
                  </li>
                ))}
              </ul>
              <button className="join-card__cta" style={{ background: opt.accent }}>
                {opt.cta}
              </button>
            </article>
          ))}
        </div>

        {/* Positions available */}
        <div className={`join__positions ${visible ? "join__positions--in" : ""}`}>
          <h3>Positions Available</h3>
          <p>SANGAM periodically opens positions for coordinators, researchers, and programme officers. Check back regularly or contact us to express interest.</p>
          <button className="join__positions-btn">View Open Positions</button>
        </div>
      </div>
    </section>
  );
}
