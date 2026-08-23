"use client";
import { useEffect, useRef, useState } from "react";
import { GraduationCap, Microscope, Handshake, Wheat, FileText, Send, Users } from "lucide-react";

const cards = [
  {
    icon: Wheat, cls: "terracotta", type: "Membership", tagline: "Museum or Institution",
    desc: "Open to agricultural museums, heritage institutions, seed banks, tool museums, living heritage farms and any organisation engaged in preserving agricultural heritage across South Asia.",
    details: ["Museums & heritage institutions", "Seed banks & tool museums", "Living heritage farms", "Membership form / Google form attached in this section"],
    featured: false,
  },
  {
    icon: Microscope, cls: "gold", type: "Fellowship", tagline: "Research, Documentation, Digital Heritage",
    desc: "Open to researchers, academics, heritage scholars, oral historians and professionals who wish to contribute to SANGAM's documentation, research and knowledge-building work.",
    details: ["Research Fellowship -- agricultural heritage, seed history, tool culture, oral traditions", "Documentation Fellowship -- oral historians, ethnographers, field researchers", "Digital Heritage Fellowship -- digital preservation, archiving, online presentation"],
    featured: true,
  },
  {
    icon: GraduationCap, cls: "", type: "Internship", tagline: "Learn by Doing",
    desc: "Hands-on experience in agricultural heritage research, documentation and network management, open to students and early-career professionals.",
    details: ["Sociology & heritage studies", "History & agriculture", "Rural studies & environmental humanities", "Timeline to be updated"],
    featured: false,
  },
  {
    icon: Handshake, cls: "terracotta", type: "Partner", tagline: "Partner Organisations",
    desc: "SANGAM welcomes partnerships with universities, NGOs, government bodies, international organisations, cultural institutions and media organisations that share our commitment to agricultural heritage preservation.",
    details: ["Academic -- joint research, student exchange, co-publication", "Programme -- co-hosting Talks, Film Festival or Exhibitions", "Documentation & media partnerships", "Government, policy & international partnerships"],
    featured: false,
  },
];

const steps = [
  { icon: FileText, title: "Step 1 -- Fill the Expression of Interest Form", desc: "Download the SANGAM Membership Expression of Interest Form from this page, fill it in with details of your institution, collection and areas of interest, and attach recent photographs of your collection or heritage site." },
  { icon: Send, title: "Step 2 -- Send Your Application", desc: "Email your completed form and photographs to info@sangam.heritage.org with the subject line: 'SANGAM Membership Application -- [Your Institution Name]'." },
  { icon: Users, title: "Step 3 -- Connect with the SANGAM Team", desc: "A member of the SANGAM advisory team will contact you within 7 working days to discuss your membership, answer questions and guide you through next steps. Once confirmed, your institution will be profiled and featured on sangam.asia." },
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
            SANGAM is a living, growing network and it needs people like you. Whether you are a
            museum, a seed keeper, a researcher, a student, a farmer or an organisation that cares
            about agricultural heritage, there is a place for you in SANGAM. Agricultural heritage
            cannot be preserved by institutions alone -- it requires a community of scholars,
            farmers, students, professionals and passionate individuals working together across
            borders, disciplines and generations. Join us.
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

        {/* How to join */}
        <div className={`reveal reveal-delay-2${vis ? " visible" : ""}`} style={{ marginBottom: "3.2rem" }}>
          <div className="tag-badge on-light" style={{ margin: "0 auto 1.4rem" }}>How to Join -- Three Steps</div>
          <div className="heritage__projects" style={{ gridTemplateColumns: "repeat(3, 1fr)" }}>
            {steps.map((s, i) => (
              <article className="heritage-card card" key={i}>
                <div className="icon-box terracotta" style={{ width: 42, height: 42, marginBottom: "1rem" }}>
                  <s.icon size={20} strokeWidth={2} />
                </div>
                <h3 className="heritage-card__title" style={{ fontSize: "1.02rem" }}>{s.title}</h3>
                <p className="heritage-card__desc">{s.desc}</p>
              </article>
            ))}
          </div>
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
