"use client";
import { useEffect, useRef, useState } from "react";
import { MapPin } from "lucide-react";
import { useSiteLanguage } from "../lib/siteLanguage";

const projects = [
  {
    phase: "Scouting", status: "Active",
    title: "Bundelkhand Documentation",
    region: "Madhya Pradesh & Uttar Pradesh",
    desc: "The Bundelkhand region is one of India's most historically significant agricultural zones -- a region of extraordinary cultural depth and farming heritage stretching back thousands of years, and also one of the most under-documented in terms of agricultural heritage.",
    outputs: [
      "Recording tool collections of farmers and village artisans across Satna, Panna, Tikamgarh and Chhatarpur districts",
      "Documenting traditional rice, millets, pulses and oil seed varieties still conserved by farmers",
      "Collecting oral histories on seasonal practices, water conservation systems and ecological knowledge",
      "Identifying potential network members from the Baghelkhand sub-region, building on the work of Babulal Dahiya",
      "Documenting Bagheli folk traditions, songs, proverbs, stories and rituals connected to the agricultural calendar",
    ],
    note: "Conducted in collaboration with local researchers, folk scholars and community organisations active in the region. Documentation photographs and field recordings from Bundelkhand to be added -- photo gallery placeholder.",
  },
  {
    phase: "Scouting", status: "Ongoing through 2026",
    title: "Greater NOIDA Documentation",
    region: "Western Uttar Pradesh -- Baghpat, Meerut, Muzaffarnagar, Hapur, Bulandshahr",
    desc: "The Greater NOIDA and western Uttar Pradesh region is one of India's most intensively farmed areas, yet its traditional agricultural heritage has rarely been documented.",
    outputs: [
      "Traditional sugarcane farming practices and heritage -- one of India's oldest sugarcane-growing regions",
      "Seed varieties of wheat, rice and millets still maintained by village communities",
      "Traditional agricultural tools of the alluvial Gangetic plain -- ploughs, irrigation implements, harvesting tools",
      "Community memory of pre-Green Revolution farming -- what crops grew, how, and what was lost",
      "Women's agricultural knowledge of seed saving, kitchen gardens and traditional food processing",
    ],
    note: "Field documentation is ongoing and will continue through 2026, with findings progressively added to the SANGAM heritage archive.",
  },
  {
    phase: "Curation", status: "Available",
    title: "CIMA 2023 Photo Exhibition",
    region: "Pan-South Asia",
    desc: "SANGAM has curated a photographic exhibition drawn from the CIMA 2023 conference, documenting the landmark gathering through images that capture the people, places, objects, conversations and moments that gave birth to the SANGAM network.",
    outputs: [
      "Available to view online",
      "Available as a travelling physical exhibition for institutions and public spaces",
    ],
    note: "Photos will be updated.",
  },
];

export default function Heritage() {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);
  const locale = useSiteLanguage();
  const copy = {
    en: { badge: "Agricultural Heritage of South Asia", title: ["Documenting the", "Land's Memory"], intro: "South Asia is one of the world's great agricultural civilisations..." },
    hi: { badge: "दक्षिण एशिया की कृषि विरासत", title: ["दस्तावेज़ीकरण", "भूमि की स्मृति"], intro: "दक्षिण एशिया दुनिया की प्रमुख कृषि सभ्यताओं में से एक है..." },
    bn: { badge: "দক্ষিণ এশিয়ার কৃষি ঐতিহ্য", title: ["নথিভুক্ত করা", "ভূমির স্মৃতি"], intro: "দক্ষিণ এশিয়া বিশ্বের অন্যতম প্রধান কৃষি সভ্যতা..." },
  }[locale] || { badge: "Agricultural Heritage of South Asia", title: ["Documenting the", "Land's Memory"], intro: "South Asia is one of the world's great agricultural civilisations..." };
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold: 0.08 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="heritage" ref={ref}>
      <div className="container">
        <div className={`heritage__header reveal${vis ? " visible" : ""}`}>
          <div className="tag-badge on-light">{copy.badge}</div>
          <h2 className="display-lg">{copy.title[0]}<br /><em>{copy.title[1]}</em></h2>
          <p className="body-md" style={{ maxWidth: 680, marginTop: "1rem" }}>
            {copy.intro}
          </p>
        </div>

        <div className={`heritage__phases reveal reveal-delay-1${vis ? " visible" : ""}`}>
          <div className="heritage__phase">
            <div className="heritage__phase-num">01</div>
            <div className="heritage__phase-body">
              <h3>Scouting Agricultural Heritage</h3>
              <p>SANGAM conducts active field documentation of living agricultural heritage across South Asia, sending research teams into farming communities to record oral histories, document tools and practices, identify seed conservators and build connections with potential network members.</p>
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
                <div className="heritage-card__outputs-label">{p.phase === "Curation" ? "Available As" : "Documentation Focus"}</div>
                <ul className="heritage-card__outputs">{p.outputs.map((o, j) => <li key={j}>{o}</li>)}</ul>
                <p className="body-sm" style={{ marginTop: "1.1rem", fontStyle: "italic" }}>{p.note}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
