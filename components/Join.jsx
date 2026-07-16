"use client";
import { useEffect, useRef, useState } from "react";
import { GraduationCap, Microscope, Handshake, Wheat } from "lucide-react";

const cards = [
  { icon: GraduationCap, cls: "terracotta", type: "Internship", tagline: "Learn by Doing", desc: "Short-term placements for students to work directly with SANGAM's documentation, exhibitions, and museum programmes.", details: ["Hands-on field experience","Museum curation support","Research assistance","Mentorship"], featured: false },
  { icon: Microscope, cls: "gold", type: "Fellowship", tagline: "Deep Research, Lasting Impact", desc: "Structured fellowships for researchers to undertake substantive projects on South Asian agricultural heritage.", details: ["Funded research projects","Access to member museums","Publication support","Network connections"], featured: true },
  { icon: Handshake, cls: "", type: "Partner", tagline: "Collaborate & Grow", desc: "Institutional partnerships for universities, NGOs, and cultural organisations that share SANGAM's mission.", details: ["Co-branded programmes","Joint exhibitions","Shared research access","Network visibility"], featured: false },
  { icon: Wheat, cls: "terracotta", type: "Member", tagline: "Join the Network", desc: "Individual and institutional membership open to museums, scholars, and farmers committed to agricultural heritage.", details: ["Full network access","Member events & talks","Voting rights","Collective advocacy"], featured: false },
];

export default function Join() {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold: 0.08 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="join" ref={ref}>
      <div className="container">
        <div className={`join__header reveal${vis ? " visible" : ""}`}>
          <div className="tag-badge on-light">Join SANGAM</div>
          <h2 className="display-lg">Be Part of Something<br /><em>Rooted & Lasting</em></h2>
          <p className="body-md" style={{ marginTop: "1rem" }}>
            Whether you're a student, researcher, institution, or passionate individual —
            there's a place for you in the SANGAM network.
          </p>
        </div>

        <div className="join__grid">
          {cards.map((c, i) => (
            <article key={i} className={`join-card card${c.featured ? " featured" : ""} reveal reveal-delay-${i + 1}${vis ? " visible" : ""}`}>
              <div className={`join-card__icon-box icon-box ${c.cls}`}><c.icon size={22} strokeWidth={2} /></div>
              <div className="join-card__type">{c.type}</div>
              <div className="join-card__tagline">{c.tagline}</div>
              <p className="join-card__desc">{c.desc}</p>
              <ul className="join-card__details">
                {c.details.map((d, j) => <li key={j} className="join-card__detail">{d}</li>)}
              </ul>
              <button className="join-card__cta">Apply for {c.type}</button>
            </article>
          ))}
        </div>

        <div className={`join__positions reveal reveal-delay-2${vis ? " visible" : ""}`}>
          <div className="join__positions-text">
            <h3>Open Positions</h3>
            <p>SANGAM periodically opens positions for coordinators, researchers, and programme officers. Check back regularly or contact us to express interest.</p>
          </div>
          <button className="join__positions-btn">View Open Positions</button>
        </div>
      </div>
    </section>
  );
}
