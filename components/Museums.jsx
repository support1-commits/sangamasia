"use client";
import { useEffect, useRef, useState } from "react";
import { Wheat, Sprout, Shovel, Building2, MapPin, ArrowRight, Award, Quote, Mail, Phone } from "lucide-react";
import { useSiteLanguage } from "../lib/siteLanguage";

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
    desc: "Babulal Dahiya is a Padma Shri awardee, poet, farmer and heritage keeper from the Baghelkhand region of Madhya Pradesh. His Museum of Agricultural Tools in Satna is the most comprehensive collection of traditional agricultural implements from central India, featuring over 250 tools documenting centuries of farming practice. What makes the museum exceptional is that it preserves context, not just objects -- each tool comes with the story of how it was used, who made it, what crop it served and what season it belonged to. Many tools are no longer manufactured anywhere and exist only here and in the memories of elderly farmers. Alongside the tool collection, Dahiya maintains a living seed bank of 110 traditional rice varieties and an extensive archive of Bagheli folk poetry documenting agricultural life, seasonal festivals and farming knowledge through verse -- a complete picture of a farming civilisation.",
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
  { name: "NATIONAL AGRICULTURAL SCIENCE MUSEUM", role: "Secretary (DARE) & Director General (ICAR) -- Dr. Himanshu Pathak", address: "Bus Stand, NASC Complex, Dev Prakash Shastri Marg, Opp. Dasghara, New Delhi, Delhi 110012", phone: "+91 11 2584 6375", email: "dg.icar@nic.in" },
  { name: "AGRICULTURAL SCIENCE MUSEUM", role: "Professor & Head -- Dr. K. Narayanagowda", address: "Campus Road, Rajiv Gandhi Nagar, Bangalore - 560 065, Karnataka, India", phone: "+91 9844055836", email: "kng_1961@yahoo.co.in" },
  { name: "AGRICULTURAL SCIENCE MUSEUM", role: "Vice-Chancellor -- Dr. M. Hanumanthappa", address: "Campus Road, Rajiv Gandhi Nagar, Bangalore - 560 065, Karnataka, India", phone: "+91 9844055836", email: "kng_1961@yahoo.co.in" },
  { name: "FCI FOOD MUSEUM", role: "Museum", address: "3rd St, Nirmala Nagar Residential Area, Thanjavur, Tamil Nadu 613001", phone: "04362 276 292", email: null },
  { name: "INSECT MUSEUM", role: "Vice-Chancellor -- Dr. V. Geethalakshmi", address: "Lawley Road, Coimbatore 641003", phone: "0422 6611200 / 0422 6611307", email: "info@tnau.ac.in, vctnau@tnau.ac.in" },
  { name: "TRIBAL MUSEUM", role: "The Director -- Tribal Research Centre, Department of Tribal Welfare, Government of Tamil Nadu", address: "M.Palada (P.O.), Udhagamandalam - 643 004, The Nilgiris District, Tamil Nadu", phone: "0423-2550350", email: "trcooty@gmail.com" },
  { name: "SAMETI-KERALA AGRICULTURE HERITAGE MUSEUM", role: "Director -- George Sebastian", address: "State Agriculture Management and Extension Training Institute, Karshaka Bhavanam, Venpalavattom, Anayara PO, Trivandrum 695 029, Kerala", phone: null, email: "directorsametikerala@gmail.com" },
  { name: "FODDER MUSEUM", role: "Dr. Roy Stephen", address: "Agricultural College Road, Vellayani, Kerala 695522", phone: "+91-471-2381002", email: "deanagri@kau.in" },
  { name: "THE DR. M.J. JOSEPH FARMER'S SCIENCE MUSEUM", role: "Programme Coordinator -- Mr. Jayaraj P", address: "Panniyur, Kanhirangad P.O., Kannur, Kerala 670142", phone: "+91-460-2226087", email: "kvkkannur@kau.in" },
  { name: "SOIL MUSEUM", role: "Dean -- Dr. Roy Stephen", address: "Agricultural College Road, Vellayani, Kerala 695522", phone: "+91-471-2381002", email: "deanagri@kau.in" },
  { name: "ONATTUKARA HERITAGE MUSEUM", role: "Museum, Block Panchayath Office", address: "Mavelikara, Alappuzha - 690101, Kerala", phone: "0479 230 3457", email: "bdo_mvk@yahoo.in" },
];

export default function Museums() {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);
  const [active, setActive] = useState(0);
  const locale = useSiteLanguage();
  const copy = {
    en: { badge: "South Asian Network Members", title: ["Custodians of", "Agricultural Memory"], intro: "SANGAM's network includes agricultural museums, seed conservation farms, tool museums, living heritage institutions and individual farmers who are custodians of irreplaceable agricultural knowledge. Each member is a living archive of not just objects, but of practices, stories, memories and ecological wisdom accumulated over centuries.", associated: "Associated Museum Members", associatedTitle: ["Extending the", "Network Across South Asia"], associatedText: "SANGAM's network extends beyond its founding members to include associated museums, heritage institutions and individual keepers from across South Asia, expanding the reach of agricultural memory, practice and community stewardship across the region." },
    hi: { badge: "दक्षिण एशियाई नेटवर्क सदस्य", title: ["रक्षक", "कृषि स्मृति"], intro: "संगम का नेटवर्क कृषि संग्रहालयों, बीज संरक्षण खेतों, टूल संग्रहालयों, जीवित विरासत संस्थानों और उन व्यक्तियों को शामिल करता है जो अमूल्य कृषि ज्ञान के संरक्षक हैं। प्रत्येक सदस्य केवल वस्तुओं का संग्रह नहीं, बल्कि सदियों से संचित प्रथाओं, कहानियों, स्मृतियों और पारिस्थितिक ज्ञान का जीवंत अभिलेख है।", associated: "संबद्ध संग्रहालय सदस्य", associatedTitle: ["नेटवर्क का", "दक्षिण एशिया में विस्तार"], associatedText: "संगम का नेटवर्क अपने संस्थापक सदस्यों से आगे बढ़कर दक्षिण एशिया के सहयोगी संग्रहालयों, विरासत संस्थानों और व्यक्तिगत संरक्षकों को भी शामिल करता है, जिससे कृषि स्मृति, प्रथाओं और सामुदायिक संरक्षण का प्रभाव पूरे क्षेत्र में फैलता है।" },
    bn: { badge: "দক্ষিণ এশীয় নেটওয়ার্ক সদস্য", title: ["সংরক্ষক", "কৃষি স্মৃতি"], intro: "সাংগমের নেটওয়ার্কে কৃষি জাদুঘর, বীজ সংরক্ষণ খামার, টুল জাদুঘর, জীবন্ত ঐতিহ্য প্রতিষ্ঠান ও ব্যক্তিগত কৃষক রয়েছে যারা অমূল্য কৃষি জ্ঞান রক্ষা করেন। প্রতিটি সদস্য শুধু বস্তু নয়, বরং বহু শতাব্দী ধরে সঞ্চিত অনুশীলন, গল্প, স্মৃতি ও পরিবেশগত জ্ঞানের জীবন্ত আর্কাইভ।", associated: "সংযুক্ত জাদুঘর সদস্য", associatedTitle: ["বিস্তৃত হচ্ছে", "দক্ষিণ এশিয়ার নেটওয়ার্ক"], associatedText: "সাংগমের নেটওয়ার্ক প্রতিষ্ঠাতা সদস্যদের বাইরে দক্ষিণ এশিয়ার সহযোগী জাদুঘর, ঐতিহ্য প্রতিষ্ঠান ও ব্যক্তিগত সংরক্ষকদেরও অন্তর্ভুক্ত করে, কৃষি স্মৃতি, অনুশীলন ও সামাজিক রক্ষণের প্রভাবকে অঞ্চলজুড়ে বিস্তৃত করে।" },
  }[locale] || { badge: "South Asian Network Members", title: ["Custodians of", "Agricultural Memory"], intro: "SANGAM's network includes agricultural museums, seed conservation farms, tool museums, living heritage institutions and individual farmers who are custodians of irreplaceable agricultural knowledge. Each member is a living archive of not just objects, but of practices, stories, memories and ecological wisdom accumulated over centuries.", associated: "Associated Museum Members", associatedTitle: ["Extending the", "Network Across South Asia"], associatedText: "SANGAM's network extends beyond its founding members to include associated museums, heritage institutions and individual keepers from across South Asia, expanding the reach of agricultural memory, practice and community stewardship across the region." };

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold: 0.08 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const autoRotate = setInterval(() => {
      setActive((current) => (current + 1) % museums.length);
    }, 5000);

    return () => clearInterval(autoRotate);
  }, []);

  const m = museums[active];

  return (
    <section className="museums" ref={ref}>
      <div className="container">
        <div className={`museums__header reveal${vis ? " visible" : ""}`}>
          <div className="tag-badge on-light">{copy.badge}</div>
          <h2 className="display-lg">{copy.title[0]}<br /><em>{copy.title[1]}</em></h2>
          <p className="body-md" style={{ maxWidth: 640, marginTop: "1rem" }}>
            {copy.intro}
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
          <div className="tag-badge on-light">{copy.associated}</div>
          <h2 className="display-lg" style={{ fontSize: "1.9rem" }}>{copy.associatedTitle[0]}<br /><em>{copy.associatedTitle[1]}</em></h2>
          <p className="body-md" style={{ maxWidth: 700, margin: "1rem 0 2.4rem" }}>
            {copy.associatedText}
          </p>
          <div className="heritage__projects">
            {associates.map((a, i) => (
              <article className="heritage-card card" key={i}>
                <h3 className="heritage-card__title" style={{ fontSize: "1.02rem", fontWeight: 700 }}>{a.name}</h3>
                <p className="heritage-card__desc" style={{ marginBottom: "0.7rem" }}>{a.address}</p>
                <p className="body-sm" style={{ marginBottom: "0.7rem" }}>{a.role}</p>
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
