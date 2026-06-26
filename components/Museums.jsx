"use client";
import { useEffect, useRef, useState } from "react";

const museums = [
  { initial: "AP", name: "Anupam Paul Rice Museum", location: "Bengal, India", type: "Rice Heritage", desc: "One of the most significant collections of rice varieties, cultivation tools, and folk art related to paddy farming in Eastern India. A living archive of Bengal's rice civilisation spanning centuries.", highlights: ["Heritage rice varieties","Folk implements","Paddy ritual objects","Bengali agricultural art"] },
  { initial: "SG", name: "Syed Gani Khan Rice Museum", location: "Mysore, Karnataka", type: "Rice Heritage", desc: "Located in the historic city of Mysore, this museum documents the deep rice culture of Karnataka — its agricultural practices, water management systems, and harvest traditions.", highlights: ["Irrigation heritage","Karnataka rice culture","Traditional tools","Water management"] },
  { initial: "BD", name: "Babulal Dahiya Museum", location: "Madhya Pradesh, India", type: "Folk Agriculture", desc: "A unique folk museum in the heartland of India preserving the agricultural traditions of MP — from seed conservation practices to the ceremonial life of farming communities.", highlights: ["Seed conservation","Tribal agriculture","Ceremonial objects","Folk art"] },
  { initial: "PAU", name: "PAU Museums", location: "Punjab Agricultural University", type: "Academic Collection", desc: "The Punjab Agricultural University museums hold extensive collections related to the Green Revolution, traditional Punjabi farming tools, and agricultural science evolution.", highlights: ["Green Revolution history","Farm machinery","Research archives","Agricultural science"] },
];

export default function Museums() {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold: 0.08 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const m = museums[active];

  return (
    <section className="museums" id="museums" ref={ref}>
      <div className="container">
        <div className={`museums__header reveal${vis ? " visible" : ""}`}>
          <div className="event-badge on-light">Member Museums</div>
          <h2 className="display-lg">Custodians of<br /><em>Agricultural Memory</em></h2>
          <p className="body-md" style={{ maxWidth: 560, marginTop: "1rem" }}>
            SANGAM's member museums are living institutions — each a unique custodian of South Asia's
            farming heritage, connecting communities to their agricultural roots.
          </p>
        </div>

        <div className={`museums__layout reveal reveal-delay-2${vis ? " visible" : ""}`}>
          <div className="museums__nav">
            {museums.map((mus, i) => (
              <button key={i} className={`museum-nav-btn${i === active ? " active" : ""}`} onClick={() => setActive(i)}>
                <div className="mnb-initial">{mus.initial}</div>
                <div className="mnb-info">
                  <span className="mnb-name">{mus.name}</span>
                  <span className="mnb-type">{mus.type}</span>
                </div>
              </button>
            ))}
          </div>

          <div className="museum-panel" key={active}>
            <div className="museum-panel__hero">
              <div className="museum-panel__avatar">{m.initial}</div>
              <div className="museum-panel__name">{m.name}</div>
              <div className="museum-panel__location">📍 {m.location} · {m.type}</div>
            </div>
            <div className="museum-panel__body">
              <p className="museum-panel__desc">{m.desc}</p>
              <div className="museum-panel__highlights-label">Collection Highlights</div>
              <div className="museum-panel__tags">
                {m.highlights.map((h, i) => <span key={i} className="museum-panel__tag">{h}</span>)}
              </div>
              <a href="#" className="museum-panel__cta">Explore Museum
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
