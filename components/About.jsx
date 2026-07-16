"use client";
import { useEffect, useRef, useState } from "react";
import { Globe, Landmark, BookOpen } from "lucide-react";

const listItems = [
  { icon: Globe, cls: "terracotta", title: "8 Nations, One Network", desc: "India to the Maldives — connected by shared agricultural roots." },
  { icon: Landmark, cls: "", title: "Living Museums", desc: "Institutions that practice heritage, not just display it." },
  { icon: BookOpen, cls: "gold", title: "Oral Histories", desc: "Recording the memory of farming communities before it fades." },
];

export default function About() {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="about" ref={ref}>
      <div className="container">
        <div className="about__inner">
          <div className={`about__visual reveal${vis ? " visible" : ""}`}>
            <div className="about__visual-pattern" />
            <div className="about__visual-top">
              <span className="about__visual-badge">Est. Confluence</span>
            </div>
            <div className="about__visual-card">
              <div className="about__visual-card-label">Sanskrit Origin</div>
              <div className="about__visual-card-title">"SANGAM" means confluence — where traditions, like rivers, meet.</div>
            </div>
          </div>

          <div className={`reveal reveal-delay-2${vis ? " visible" : ""}`}>
            <div className="tag-badge on-light">About SANGAM</div>
            <h2 className="display-lg about__headline">
              Rooted in Soil,<br /><em>Spanning Nations</em>
            </h2>
            <p className="body-lg about__desc">
              SANGAM is the South Asian Network of Agricultural Museums and allied institutions.
              It brings together museums, scholars, farmers, and cultural stewards to safeguard
              the living agricultural heritage of South Asia — before it fades from memory.
            </p>

            <div className="about__list">
              {listItems.map((item, i) => (
                <div className="about__list-item" key={i}>
                  <div className={`about__list-icon icon-box ${item.cls}`}>
                    <item.icon size={20} strokeWidth={2} />
                  </div>
                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="about__aima">
              <div className="about__aima-badge">AIMA</div>
              <div>
                <strong>Association of Indian Museums of Agriculture</strong>
                <p>SANGAM works in partnership with AIMA to foster inter-institutional collaboration and professional standards across the subcontinent.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
