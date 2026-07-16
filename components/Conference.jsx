"use client";
import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";

const agenda = [
  { time: "Day 1", period: "Morning", title: "Opening Keynote & Inaugural Session", desc: "Welcome addresses from network leadership followed by the keynote on South Asian agricultural heritage.", tag: "Keynote" },
  { time: "Day 1", period: "Afternoon", title: "SANGAM Talks: Seed Sovereignty", desc: "Expert panel on traditional seed conservation practices across the subcontinent.", tag: "Panel" },
  { time: "Day 2", period: "Morning", title: "Photo Exhibition Walkthrough", desc: "Guided tour of the CIMA 2023 photo exhibition with curators present for discussion.", tag: "Exhibition" },
  { time: "Day 3", period: "Closing", title: "Museum Symposium & Closing Remarks", desc: "Agricultural museum curators share methodologies, followed by closing remarks and next steps.", tag: "Symposium" },
];

export default function Conference() {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="conference" ref={ref}>
      <div className="conference__pattern" />
      <div className="container">
        <div className="conference__header">
          <div className={`conference__display reveal${vis ? " visible" : ""}`}>
            <div className="conference__label">
              <span className="conference__label-dot" />
              <span className="conference__label-text">Flagship Conference</span>
            </div>
            <div className="conference__acronym">CIMA</div>
            <div className="conference__year">2023</div>
            <div className="conference__full-name">Conference on Intangible Musical and Agricultural Heritage</div>
          </div>

          <div className={`reveal reveal-delay-2${vis ? " visible" : ""}`}>
            <div className="tag-badge on-light">Landmark Event</div>
            <h2 className="display-lg on-dark conference__heading" style={{ marginBottom: "1.4rem" }}>
              Where Heritage<br /><em>Finds Its Voice</em>
            </h2>
            <p className="conference__body">
              CIMA 2023 brought together agricultural historians, museum professionals, ethnographers,
              and living practitioners from across South Asia to explore the intertwined heritage of
              farming, folk music, and intangible cultural traditions.
            </p>
            <p className="conference__body">
              The conference produced a landmark photo exhibition now available through SANGAM.
            </p>
            <div className="conference__btn-row">
              <a href="#" className="btn btn-outline-light">
                View CIMA 2023 Exhibition
                <ArrowRight size={16} strokeWidth={2} />
              </a>
            </div>
          </div>
        </div>

        {/* Agenda block */}
        <div className={`agenda reveal reveal-delay-3${vis ? " visible" : ""}`}>
          <div className="agenda__header">
            <h3>Conference Agenda</h3>
            <span>3-Day Programme</span>
          </div>
          {agenda.map((item, i) => (
            <div className="agenda__row" key={i}>
              <div className="agenda__time">{item.time}<span>{item.period}</span></div>
              <div className="agenda__content">
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
                <span className="agenda__tag">{item.tag}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
