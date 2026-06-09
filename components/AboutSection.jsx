"use client";

import { useEffect, useRef, useState } from "react";

const countries = [
  { name: "India", flag: "🇮🇳", status: "member" },
  { name: "Pakistan", flag: "🇵🇰", status: "member" },
  { name: "Bangladesh", flag: "🇧🇩", status: "member" },
  { name: "Nepal", flag: "🇳🇵", status: "member" },
  { name: "Sri Lanka", flag: "🇱🇰", status: "member" },
  { name: "Bhutan", flag: "🇧🇹", status: "member" },
  { name: "Afghanistan", flag: "🇦🇫", status: "member" },
  { name: "Maldives", flag: "🇲🇻", status: "member" },
];

const stats = [
  { value: "8", label: "Network Nations", suffix: "" },
  { value: "1000", label: "Years of Heritage", suffix: "+" },
  { value: "4", label: "Member Museums", suffix: "" },
  { value: "2", label: "Active Docs Projects", suffix: "" },
];

export default function AboutSection() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="about" id="about" ref={sectionRef}>
      {/* Decorative vertical rule */}
      <div className="about__rule" />

      <div className="about__inner">
        {/* Left column – text */}
        <div className={`about__text ${visible ? "about__text--in" : ""}`}>
          <div className="section-badge">
            <span className="section-badge__dot" />
            About SANGAM
          </div>

          <h2 className="about__heading">
            A Network Rooted in<br />
            <em>Soil, Seed & Story</em>
          </h2>

          <p className="about__lead">
            SANGAM — meaning "confluence" in Sanskrit — is the South Asian Network of Agricultural
            Museums and allied institutions. It brings together museums, scholars, farmers, and
            cultural stewards to safeguard the living agricultural heritage of South Asia.
          </p>

          <p className="about__body">
            Agriculture is not merely an economic activity in South Asia — it is the foundation of
            civilisation, ritual, language, and identity. SANGAM exists to document, preserve, and
            celebrate this heritage before it fades from living memory.
          </p>

          <p className="about__body">
            Through exhibitions, films, conferences, and fellowships, SANGAM creates spaces where
            the past and the present of farming culture meet — across eight nations, in many tongues,
            on one shared earth.
          </p>

          <div className="about__aima">
            <div className="about__aima-icon">AIMA</div>
            <div>
              <strong>Association of Indian Museums of Agriculture</strong>
              <p>SANGAM works in partnership with AIMA to foster inter-institutional collaboration and professional standards across the subcontinent.</p>
            </div>
          </div>
        </div>

        {/* Right column – stats + countries */}
        <div className={`about__right ${visible ? "about__right--in" : ""}`}>
          {/* Stats grid */}
          <div className="about__stats">
            {stats.map((s, i) => (
              <div className="about__stat" key={i}>
                <span className="about__stat-value">
                  {s.value}<span className="about__stat-suffix">{s.suffix}</span>
                </span>
                <span className="about__stat-label">{s.label}</span>
              </div>
            ))}
          </div>

          {/* Countries */}
          <div className="about__countries-wrap">
            <p className="about__countries-title">Network Countries</p>
            <div className="about__countries">
              {countries.map((c, i) => (
                <div className="about__country" key={i}>
                  <span className="about__country-flag">{c.flag}</span>
                  <span className="about__country-name">{c.name}</span>
                </div>
              ))}
            </div>
            <p className="about__associate-note">
              Associate membership is open to institutions in all other countries.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
