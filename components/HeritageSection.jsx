"use client";

import { useEffect, useRef, useState } from "react";

const projects = [
  {
    phase: "Scouting",
    title: "Bundelkhand Documentation",
    region: "Madhya Pradesh & Uttar Pradesh",
    description:
      "A comprehensive field documentation project in the Bundelkhand region, mapping traditional agricultural practices, seed varieties, water harvesting structures, and the oral traditions of farming communities in this ancient heartland.",
    outputs: ["Field survey reports", "Photo documentation", "Oral history recordings", "Seed inventory"],
    accent: "#5C8A2E",
    status: "Active",
  },
  {
    phase: "Scouting",
    title: "Greater NOIDA Documentation",
    region: "Uttar Pradesh",
    description:
      "Documentation of the rapidly vanishing farming traditions in the peri-urban landscape of Greater NOIDA — capturing the last traces of agricultural heritage before urbanisation erases them permanently.",
    outputs: ["Land-use mapping", "Tool documentation", "Farmer interviews", "Visual archive"],
    accent: "#C8860A",
    status: "Active",
  },
  {
    phase: "Curation",
    title: "CIMA 2023 Photo Exhibition",
    region: "Pan–South Asia",
    description:
      "A curated photographic exhibition drawn from SANGAM's documentation work and member museum collections, first presented at CIMA 2023. Available for travelling exhibition to member institutions.",
    outputs: ["Exhibition catalogue", "Print & digital formats", "Travelling edition"],
    accent: "#2E6B5E",
    status: "Available",
  },
];

export default function HeritageSection() {
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
    <section className="heritage" id="heritage" ref={ref}>
      {/* Background topographic decoration */}
      <div className="heritage__topo" />

      <div className="heritage__inner">
        <div className={`section-header ${visible ? "section-header--in" : ""}`}>
          <div className="section-badge">
            <span className="section-badge__dot section-badge__dot--amber" />
            Agricultural Heritage
          </div>
          <h2 className="section-heading">
            Documenting the<br />
            <em>Land's Living Memory</em>
          </h2>
          <p className="section-sub">
            Through scouting expeditions, fieldwork, and curatorial projects, SANGAM is building a
            permanent archive of South Asia's agricultural heritage — region by region, season by season.
          </p>
        </div>

        {/* Two-phase explanation */}
        <div className={`heritage__phases ${visible ? "heritage__phases--in" : ""}`}>
          <div className="heritage__phase-card">
            <div className="heritage__phase-num">01</div>
            <h3>Scouting Agricultural Heritage</h3>
            <p>Field teams travel to regions of high heritage density to identify, photograph, and record agricultural practices, artefacts, and oral traditions at risk of being lost.</p>
          </div>
          <div className="heritage__phase-divider">→</div>
          <div className="heritage__phase-card">
            <div className="heritage__phase-num">02</div>
            <h3>Curation of Agricultural Heritage</h3>
            <p>Documented materials are processed, contextualised, and curated into exhibitions, digital archives, and publications that make the heritage accessible to the public.</p>
          </div>
        </div>

        {/* Project cards */}
        <div className="heritage__projects">
          {projects.map((p, i) => (
            <article
              className={`heritage-card ${visible ? "heritage-card--in" : ""}`}
              key={i}
              style={{ "--hc-accent": p.accent, "--delay": `${i * 0.12}s` }}
            >
              <div className="heritage-card__phase-tag" style={{ color: p.accent, borderColor: p.accent + "40" }}>
                {p.phase}
              </div>
              <h3 className="heritage-card__title">{p.title}</h3>
              <div className="heritage-card__region">
                <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                  <path d="M8 1C5.24 1 3 3.24 3 6c0 3.75 5 9 5 9s5-5.25 5-9c0-2.76-2.24-5-5-5z" fill="currentColor" opacity="0.7"/>
                </svg>
                {p.region}
              </div>
              <p className="heritage-card__desc">{p.description}</p>
              <div className="heritage-card__outputs">
                <span className="heritage-card__outputs-label">Outputs</span>
                <ul>
                  {p.outputs.map((o, j) => (
                    <li key={j}>
                      <span style={{ color: p.accent }}>◆</span> {o}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="heritage-card__status" style={{ color: p.accent }}>
                <span className="heritage-card__status-dot" style={{ background: p.accent }} />
                {p.status}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
