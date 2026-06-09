"use client";

import { useEffect, useRef, useState } from "react";

export default function ConferenceSection() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.12 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="conference" id="conference" ref={ref}>
      <div className="conference__inner">
        {/* Left – big typographic treatment */}
        <div className={`conference__display ${visible ? "conference__display--in" : ""}`}>
          <div className="conference__year-band">
            <span>C</span><span>I</span><span>M</span><span>A</span>
          </div>
          <div className="conference__num">2023</div>
          <div className="conference__underline" />
          <p className="conference__location">Conference on Intangible Musical and Agricultural Heritage</p>
        </div>

        {/* Right – details */}
        <div className={`conference__content ${visible ? "conference__content--in" : ""}`}>
          <div className="section-badge">
            <span className="section-badge__dot section-badge__dot--amber" />
            Conference
          </div>

          <h2 className="conference__heading">
            CIMA 2023 — Where Heritage<br />
            <em>Finds Its Voice</em>
          </h2>

          <p className="conference__body">
            CIMA 2023 brought together agricultural historians, museum professionals, ethnographers,
            and living practitioners from across South Asia to explore the intertwined heritage of
            farming, folk music, and intangible cultural traditions.
          </p>

          <p className="conference__body">
            The conference produced a landmark photo exhibition now available through SANGAM, capturing
            the material culture and rituals of South Asian agriculture in all their diversity.
          </p>

          <div className="conference__highlights">
            <div className="conference__highlight">
              <div className="conference__highlight-icon">📸</div>
              <div>
                <strong>Photo Exhibition</strong>
                <p>A curated visual documentation of agricultural rituals, tools, and community practices from across the subcontinent.</p>
              </div>
            </div>
            <div className="conference__highlight">
              <div className="conference__highlight-icon">🎙️</div>
              <div>
                <strong>SANGAM Talks</strong>
                <p>Expert lectures and panel discussions exploring the intersection of farming heritage, identity, and modernity.</p>
              </div>
            </div>
          </div>

          <a href="#" className="conf-btn">
            View CIMA 2023 Exhibition
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
