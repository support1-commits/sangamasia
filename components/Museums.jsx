"use client";
import { useEffect, useRef, useState } from "react";
import { Wheat, Sprout, Shovel, Building2, MapPin, ArrowRight, Award, Quote, Mail, Phone } from "lucide-react";

const museums = [
  {
    icon: Wheat, color: "var(--millet-green)", bg: "rgba(92,115,70,0.14)",
    name: "Anupam Paul -- Rice Museum, Bengal",
    fullName: "ATC Biodiversity Conservation Farm",
    location: "Fulia, Nadia District, West Bengal, India",
    type: "Seed Conservation Farm & Living Rice Museum",
    keeper: "Dr. Anupam Paul, MSc (Ag), PhD -- Former Additional Director of Agriculture (P), Directorate of Agriculture, WB; Former Asst. Director of Agriculture (Trg), Bio Diversity Conservation Farm",
    email: "anupampaul99@gmail.com",
    desc: "Dr. Anupam Paul has spent over three decades doing what no government programme managed to achieve -- saving hundreds of traditional rice varieties from extinction. His farm at Fulia in Nadia district is not a museum in the conventional sense; it is a living, breathing seed bank where ancient paddy varieties grow season after season, kept alive through his dedication and that of the community around him. Among the varieties he conserves are rice types that once grew across Bengal's wetlands but have now vanished from mainstream agriculture -- known for their aroma, medicinal properties, resilience to flood and drought, and cultural significance. Scholars, scientists and farmers from across India visit Fulia regularly to document, collect and learn from one of the most significant rice diversity conservation efforts in eastern India.",
    highlights: ["400+ traditional rice varieties", "Three decades of conservation", "Living seed bank", "Regular scholar & farmer visits"],
    quote: "I am not collecting seeds. I am keeping knowledge alive. Every variety has a name, a story, a reason why our ancestors chose it. That reason still matters today.",
  },
  {
    icon: Sprout, color: "var(--terracotta)", bg: "rgba(168,71,46,0.14)",
    name: "Syed Ghani Khan -- Rice Museum, Mysore",
    fullName: "Bada Bagh Rice Museum",
    location: "Mandya District, Karnataka, India",
    type: "Living Rice Museum",
    keeper: "Syed Ghani Khan -- Organic farmer, known across India as a 'Farming Scientist'",
    email: null,
    desc: "Syed Ghani Khan is a renowned organic farmer from Mandya, Karnataka, known across India for his extraordinary conservation of indigenous paddy varieties. Moving away from modern hybrid seeds, he returned to traditional rice varieties believing them more nutritious and resilient. His farm, Bada Bagh, is a living gene bank where over 1,200 paddy varieties are conserved on-field, ensuring a continual supply of germplasm. He has gone a step further, curating a living rice museum where about 900 varieties are displayed in glass jars, marked by variety name and arranged systematically as a knowledge centre. Ghani supplies organic seeds free of cost to over 7,000 farmers and is an active trainer in organic and traditional farming, consulting schools, colleges and agriculture centres across India.",
    highlights: ["1,350+ paddy varieties", "900 varieties on display", "7,000+ farmers supplied", "Organic farming trainer"],
    awards: ["Plant Genome Saviour Farmer Recognition Award -- PPV & FR Authority, 2012", "Krishi Jeeva Viavidya Award -- Government of Karnataka, 2010", "Krishi Pandit Award -- Government of Karnataka, 2008"],
  },
  {
    icon: Shovel, color: "#8a6a2c", bg: "rgba(212,162,76,0.2)",
    name: "Babulal Dahiya -- Museum of Agricultural Tools, MP",
    fullName: "Museum of Agricultural Tools",
    location: "Satna District, Madhya Pradesh, India",
    type: "Agricultural Tool Museum & Seed Conservation",
    keeper: "Babulal Dahiya -- Padma Shri Awardee, poet, farmer and heritage keeper from the Baghelkhand region",
    email: null,
    desc: "Babulal Dahiya is a Padma Shri awardee, poet, farmer and heritage keeper from the Baghelkhand region of Madhya Pradesh. His Museum of Agricultural Tools in Satna is the most comprehensive collection of traditional agricultural implements from central India, featuring over 250 tools documenting centuries of farming practice. What makes the museum exceptional is that it preserves context, not just objects -- each tool comes with the story of how it was used, who made it, what crop it served and what season it belonged to. Many tools are no longer manufactured anywhere and exist only here and in the memories of elderly farmers. Alongside the tool collection, Dahiya maintains a living seed bank of 110 traditional rice varieties and an extensive archive of Bagheli folk poetry documenting agricultural life, seasonal festivals and farming knowledge through verse.",
    highlights: ["250+ ancient agricultural tools", "110 traditional rice varieties", "Bagheli folk poetry archive", "Padma Shri Awardee"],
    awards: ["Padma Shri -- Government of India"],
    photoNote: "Pictures of this museum will be uploaded.",
  },
  {
    icon: Building2, color: "var(--deep-blue)", bg: "rgba(27,79,114,0.12)",
    name: "PAU Museums -- Punjab Agricultural University, Ludhiana",
    fullName: "Punjab Agricultural University (PAU) Museum Complex",
    location: "Ludhiana, Punjab, India",
    type: "Institutional Museum Complex",
    keeper: "Punjab Agricultural University -- website: pau.edu",
    email: null,
    desc: "Punjab Agricultural University in Ludhiana is one of Asia's premier agricultural universities and a co-host of CIMA 2023. Its museum complex is among the most well-documented institutional collections of agricultural heritage in India, spanning traditional rural life, the Green Revolution era and contemporary crop science.",
    highlights: [
      "Museum of Social History and Rural Life -- traditional rural life, household objects, seasonal practices and farming traditions of Punjab across centuries",
      "Green Revolution Museum -- Punjab's agricultural transformation in the 1960s-70s: gains in production, social change and ecological consequences",
      "Crop Improvement Museum -- history of crop science, seed development and agricultural research at PAU",
      "Dr. Uppal Museum of Land, Water and Power Resources",
      "Soils Museum",
      "Museum of Natural History",
      "National PAU Insect Museum",
      "Plant Breeding Museum",
      "Dr. Gurdev Singh Khush Museum",
      "Farm Machinery Museum",
    ],
  },
];

const associates = [
  { name: "Dr. Himanshu Pathak", role: "Secretary (DARE) & Director General (ICAR) -- National Agricultural Science Museum", address: "Bus Stand, NASC Complex, Dev Prakash Shastri Marg, Opp. Dasghara, New Delhi, Delhi 110012", phone: "+91 11 2584 6375", email: "dg.icar@nic.in" },
  { name: "Dr. K. Narayanagowda", role: "Professor & Head, Agricultural Science Museum (ASM), University of Agricultural Sciences, GKVK", address: "Campus Road, Rajiv Gandhi Nagar, Bangalore - 560 065, Karnataka, India", phone: "+91 9844055836", email: "kng_1961@yahoo.co.in" },
  { name: "Dr. M. Hanumanthappa", role: "Vice-Chancellor, Agricultural Science Museum (ASM), University of Agricultural Sciences, GKVK", address: "Campus Road, Rajiv Gandhi Nagar, Bangalore - 560 065, Karnataka, India", phone: "+91 9844055836", email: "kng_1961@yahoo.co.in" },
  { name: "FCI Food Museum", role: "Museum", address: "3rd St, Nirmala Nagar Residential Area, Thanjavur, Tamil Nadu 613001", phone: "04362 276 292", email: null },
  { name: "Dr. V. Geethalakshmi", role: "Vice-Chancellor, Insect Museum, Tamil Nadu Agricultural University", address: "Lawley Road, Coimbatore 641003", phone: "0422 6611200 / 0422 6611307", email: "info@tnau.ac.in, vctnau@tnau.ac.in" },
  { name: "The Director", role: "Tribal Museum, Tribal Research Centre, Department of Tribal Welfare, Government of Tamil Nadu", address: "M.Palada (P.O.), Udhagamandalam - 643 004, The Nilgiris District, Tamil Nadu", phone: "0423-2550350", email: "trcooty@gmail.com" },
  { name: "George Sebastian", role: "Director, SAMETI-Kerala Agriculture Heritage Museum", address: "State Agriculture Management and Extension Training Institute, Karshaka Bhavanam, Venpalavattom, Anayara PO, Trivandrum 695 029, Kerala", phone: null, email: "directorsametikerala@gmail.com" },
  { name: "Dr. Roy Stephen", role: "Fodder Museum, College of Agriculture", address: "Agricultural College Road, Vellayani, Kerala 695522", phone: "+91-471-2381002", email: "deanagri@kau.in" },
  { name: "Mr. Jayaraj P", role: "Programme Coordinator, The Dr. M.J. Joseph Farmers' Science Museum, Krishi Vigyan Kendra, Kerala Agricultural University", address: "Panniyur, Kanhirangad P.O., Kannur, Kerala 670142", phone: "+91-460-2226087", email: "kvkkannur@kau.in" },
  { name: "Dr. Roy Stephen", role: "Dean, Soil Museum, College of Agriculture", address: "Agricultural College Road, Vellayani, Kerala 695522", phone: "+91-471-2381002", email: "deanagri@kau.in" },
  { name: "Onattukara Heritage Museum", role: "Museum, Block Panchayath Office", address: "Mavelikara, Alappuzha - 690101, Kerala", phone: "0479 230 3457", email: "bdo_mvk@yahoo.in" },
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
    <section className="museums" ref={ref}>
      <div className="container">
        <div className={`museums__header reveal${vis ? " visible" : ""}`}>
          <div className="tag-badge on-light">South Asian Network Members</div>
          <h2 className="display-lg">Custodians of<br /><em>Agricultural Memory</em></h2>
          <p className="body-md" style={{ maxWidth: 640, marginTop: "1rem" }}>
            SANGAM's network includes agricultural museums, seed conservation farms, tool museums,
            living heritage institutions and individual farmers who are custodians of irreplaceable
            agricultural knowledge. Each member is a living archive of not just objects, but of
            practices, stories, memories and ecological wisdom accumulated over centuries.
          </p>
        </div>

        <div className={`museums__layout reveal reveal-delay-2${vis ? " visible" : ""}`}>
          <div className="museums__nav">
            {museums.map((mus, i) => (
              <button key={i} className={`museum-nav-btn${i === active ? " active" : ""}`} onClick={() => setActive(i)}>
                <div className="mnb-icon" style={{ background: mus.bg, color: mus.color }}>
                  <mus.icon size={19} strokeWidth={2} />
                </div>
                <div className="mnb-info">
                  <span className="mnb-name">{mus.name}</span>
                  <span className="mnb-type">{mus.type}</span>
                </div>
              </button>
            ))}
          </div>

          <div className="museum-panel" key={active}>
            <div className="museum-panel__hero">
              <div className="museum-panel__icon">
                <m.icon size={28} strokeWidth={2} />
              </div>
              <div className="museum-panel__name">{m.name}</div>
              <div className="museum-panel__location"><MapPin size={14} strokeWidth={2} /> {m.location} &middot; {m.type}</div>
            </div>
            <div className="museum-panel__body">
              <p className="body-sm" style={{ marginBottom: "1rem" }}><strong>{m.fullName}</strong> &middot; Keeper: {m.keeper}</p>
              {m.email && (
                <p className="body-sm" style={{ marginBottom: "1.2rem", display: "flex", alignItems: "center", gap: "0.4rem" }}>
                  <Mail size={13} strokeWidth={2} /> {m.email}
                </p>
              )}
              <p className="museum-panel__desc">{m.desc}</p>

              {m.quote && (
                <blockquote style={{ borderLeft: "3px solid var(--turmeric-gold)", paddingLeft: "1.2rem", margin: "0 0 2rem", fontStyle: "italic", color: "var(--soil)" }}>
                  <Quote size={16} strokeWidth={2} color="var(--turmeric-gold)" style={{ marginBottom: "0.5rem" }} />
                  {m.quote}
                </blockquote>
              )}

              <div className="museum-panel__highlights-label">{active === 3 ? "Museums at PAU" : "Collection Highlights"}</div>
              <div className="museum-panel__tags">
                {m.highlights.map((h, i) => <span key={i} className="museum-panel__tag">{h}</span>)}
              </div>

              {m.awards && (
                <>
                  <div className="museum-panel__highlights-label" style={{ marginTop: "1.6rem" }}><Award size={13} strokeWidth={2} style={{ marginRight: "0.3rem", verticalAlign: "middle" }} />Awards</div>
                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.4rem", marginBottom: "1.5rem" }}>
                    {m.awards.map((a, i) => <li key={i} className="body-sm">{a}</li>)}
                  </ul>
                </>
              )}

              {m.photoNote && <p className="body-sm" style={{ fontStyle: "italic" }}>{m.photoNote}</p>}
            </div>
          </div>
        </div>

        {/* Associated Museum Members */}
        <div className={`reveal reveal-delay-3${vis ? " visible" : ""}`} style={{ marginTop: "4.5rem" }}>
          <div className="tag-badge on-light">Associated Museum Members</div>
          <h2 className="display-lg" style={{ fontSize: "1.9rem" }}>Extending the<br /><em>Network Across South Asia</em></h2>
          <p className="body-md" style={{ maxWidth: 700, margin: "1rem 0 2.4rem" }}>
            SANGAM's network extends beyond its founding members to include associated museums,
            heritage institutions and individual keepers from across South Asia who share the
            network's mission. Associated members participate in SANGAM programmes, are listed in
            the network directory on sangam.asia, and contribute to the broader documentation and
            celebration of South Asian agricultural heritage. The following institutions and
            individuals are currently in dialogue with SANGAM for Associate Membership; this list
            will be updated as memberships are confirmed.
          </p>
          <div className="heritage__projects">
            {associates.map((a, i) => (
              <article className="heritage-card card" key={i}>
                <h3 className="heritage-card__title" style={{ fontSize: "1.02rem" }}>{a.name}</h3>
                <p className="body-sm" style={{ marginBottom: "0.7rem" }}>{a.role}</p>
                <p className="heritage-card__desc" style={{ marginBottom: "0.7rem" }}>{a.address}</p>
                {a.phone && <p className="body-sm" style={{ display: "flex", alignItems: "center", gap: "0.4rem", marginBottom: "0.3rem" }}><Phone size={12} strokeWidth={2} /> {a.phone}</p>}
                {a.email && <p className="body-sm" style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}><Mail size={12} strokeWidth={2} /> {a.email}</p>}
              </article>
            ))}
          </div>
          <p className="body-sm" style={{ marginTop: "1.6rem", fontStyle: "italic" }}>More museums will be added to this list as it is updated.</p>
        </div>
      </div>
    </section>
  );
}
