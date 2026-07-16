"use client";
import { useEffect, useRef, useState } from "react";
import { MapPin } from "lucide-react";

const projects = [
  { phase: "Scouting", status: "Active", title: "Bundelkhand Documentation", region: "Madhya Pradesh & Uttar Pradesh", desc: "A comprehensive field documentation project mapping traditional agricultural practices, seed varieties, water harvesting structures, and oral traditions.", outputs: ["Field survey reports","Photo documentation","Oral history recordings","Seed inventory"] },
  { phase: "Scouting", status: "Active", title: "Greater NOIDA Documentation", region: "Uttar Pradesh", desc: "Documentation of the rapidly vanishing farming traditions in the peri-urban landscape of Greater NOIDA before urbanisation erases them.", outputs: ["Land-use mapping","Tool documentation","Farmer interviews","Visual archive"] },
  { phase: "Curation", status: "Available", title: "CIMA 2023 Photo Exhibition", region: "Pan–South Asia", desc: "A curated photographic exhibition drawn from SANGAM's documentation work and member museum collections, now available for travelling exhibition.", outputs: ["Exhibition catalogue","Print & digital formats","Travelling edition","Educational materials"] },
];

export default function Heritage() {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold: 0.08 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="heritage" ref={ref}>
      <div className="container">
        <div className={`heritage__header reveal${vis ? " visible" : ""}`}>
          <div className="tag-badge on-light">Agricultural Heritage</div>
          <h2 className="display-lg">Documenting the<br /><em>Land's Memory</em></h2>
          <p className="body-md" style={{ maxWidth: 580, marginTop: "1rem" }}>
            Through scouting expeditions, fieldwork, and curatorial projects, SANGAM is building
            a permanent archive of South Asia's agricultural heritage — region by region, season by season.
          </p>
        </div>

        <div className={`heritage__phases reveal reveal-delay-1${vis ? " visible" : ""}`}>
          <div className="heritage__phase">
            <div className="heritage__phase-num">01</div>
            <div className="heritage__phase-body">
              <h3>Scouting Agricultural Heritage</h3>
              <p>Field teams travel to regions of high heritage density to identify, photograph, and record agricultural practices, artefacts, and oral traditions at risk of being lost.</p>
            </div>
          </div>
          <div className="heritage__phase">
            <div className="heritage__phase-num">02</div>
            <div className="heritage__phase-body">
              <h3>Curation of Agricultural Heritage</h3>
              <p>Documented materials are processed, contextualised, and curated into exhibitions, digital archives, and publications accessible to future generations.</p>
            </div>
          </div>
        </div>

        <div className="heritage__projects">
          {projects.map((p, i) => (
            <article key={i} className={`heritage-card card reveal reveal-delay-${i + 1}${vis ? " visible" : ""}`}>
              <div className="heritage-card__top">
                <span className="heritage-card__phase">{p.phase}</span>
                <span className="heritage-card__status"><span className="heritage-card__status-dot" />{p.status}</span>
              </div>
              <div className="heritage-card__body">
                <h3 className="heritage-card__title">{p.title}</h3>
                <div className="heritage-card__region"><MapPin size={13} strokeWidth={2} /> {p.region}</div>
                <p className="heritage-card__desc">{p.desc}</p>
                <div className="heritage-card__outputs-label">Outputs</div>
                <ul className="heritage-card__outputs">{p.outputs.map((o, j) => <li key={j}>{o}</li>)}</ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
