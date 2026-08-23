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
              SANGAM — Agriculture Heritage Network — is a pan-South Asian network
              of SAARC countries that unites agricultural museums, farmers, historians, scholars
              and individuals across the subcontinent to preserve the living heritage of agriculture
              and farming traditions. The network spans the SAARC nations of India, Bangladesh,
              Afghanistan, Pakistan, Nepal, Bhutan, Maldives and Sri Lanka — a region connected by
              shared heritage and cultural values. SANGAM is an effort to bring this heritage
              together on one platform.
            </p>
            <p className="body-md about__desc">
              South Asia is home to some of the world's oldest and most diverse agricultural
              traditions. For over ten thousand years, farmers of this region have cultivated
              thousands of crop varieties, developed sophisticated irrigation systems, created
              intricate tools adapted to every terrain and season, and passed on an enormous body
              of ecological knowledge through practice, song, story and festival. This heritage is
              not merely historical — it is living, held today in the seed varieties elderly
              farmers quietly conserve, the tools stored in village sheds and the songs sung during
              harvest.
            </p>
            <p className="body-md about__desc">
              Through SANGAM we are building a community of individuals and organisations working
              to conserve this living tradition through museums and oral history. At present we
              have more than 100 museums across these nations preserving age-old traditions, tools,
              artifacts, rituals and agricultural histories — documenting, celebrating and
              connecting this heritage to present knowledge systems before it is lost forever. The
              key partners of this network are museums, educational institutions and individuals,
              and SANGAM will host a number of events and programmes that bring these nations
              together on one platform for a larger audience.
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
                <strong>International Association of Agricultural Museums</strong>
                <p>AIMA is a forum for organisations dedicated to promoting interest in the impact of agriculture on human society through the ages. SANGAM is South Asia's representative voice within AIMA, the global body connecting agricultural museums and heritage institutions across the world.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
