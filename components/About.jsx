"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Globe, Landmark, BookOpen } from "lucide-react";
import { useSiteLanguage } from "../lib/siteLanguage";

const listItems = [
  { icon: Globe, cls: "terracotta", title: "Multiple Nations, One Network", desc: "India to Sri Lanka — connected by shared agricultural roots." },
  { icon: Landmark, cls: "", title: "Living Museums", desc: "Institutions that practice heritage, not just display it." },
  { icon: BookOpen, cls: "gold", title: "Oral Histories", desc: "Recording the memory of farming communities before it fades." },
];

const translations = {
  en: {
    badge: "About SANGAM",
    heading: ["Rooted in Soil,", "Spanning Nations"],
    era: "Est. 2023 -- CIMA",
    origin: "Sanskrit Origin",
    originText: '"SANGAM" means confluence — where traditions, like rivers, meet.',
    title: "South Asian Network of Grassroots Agricultural Museums",
    tag: "Where Fields Meet Memory & Heritage",
  },
  hi: {
    badge: "संगम के बारे में",
    heading: ["मिट्टी में जड़ें,", "देशों को जोड़ता है"],
    intro: "संगम — कृषि विरासत नेटवर्क — एक व्यापक दक्षिण एशियाई नेटवर्क है जो कृषि संग्रहालयों, किसानों, इतिहासकारों, विद्वानों और व्यक्तियों को उपमहाद्वीप भर में जोड़ता है ताकि कृषि और खेती की जीवंत विरासत को संरक्षित किया जा सके।",
    era: "स्थापना 2023 -- CIMA",
    origin: "संस्कृत मूल",
    originText: '"संगम" का अर्थ है संगम — जहाँ परंपराएँ, नदियों की तरह, मिलती हैं।',
    title: "ग्रासरूट कृषि संग्रहालयों का दक्षिण एशियाई नेटवर्क",
    tag: "जहाँ खेत स्मृति और विरासत से मिलते हैं",
  },
  bn: {
    badge: "সাংগম সম্পর্কে",
    heading: ["মাটিতে শিকড়,", "দেশ জুড়ে বিস্তৃতি"],
    intro: "সাংগম — কৃষি ঐতিহ্যের নেটওয়ার্ক — একটি প্রশস্ত দক্ষিণ এশীয় নেটওয়ার্ক, যা কৃষি জাদুঘর, কৃষক, ইতিহাসবিদ, পণ্ডিত এবং ব্যক্তিদের উপমহাদেশ জুড়ে একত্রিত করে কৃষি ও চাষের জীবন্ত ঐতিহ্য সংরক্ষণ করে।",
    era: "প্রতিষ্ঠা 2023 -- CIMA",
    origin: "সংস্কৃত উৎস",
    originText: '"সাংগম" মানে মিলন — যেখানে tradition, নদীর মতো, একত্রিত হয়।',
    title: "গ্রাসরুট কৃষি জাদুঘরের দক্ষিণ এশীয় নেটওয়ার্ক",
    tag: "যেখানে ক্ষেত স্মৃতি ও ঐতিহ্যের সাথে মিশে যায়",
  },
};

export default function About() {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);
  const locale = useSiteLanguage();
  const copy = translations[locale] || translations.en;
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
              <span className="about__visual-badge">{copy.era}</span>
            </div>
            <div className="about__visual-brand">
              <div className="about__visual-brand-name">SANGAM</div>
              <div className="about__visual-brand-full-name">{copy.title}</div>
              <div className="about__visual-tagline">{copy.tag}</div>
            </div>
            <div className="about__visual-card">
              <div className="about__visual-card-label">{copy.origin}</div>
              <div className="about__visual-card-title">{copy.originText}</div>
            </div>
          </div>

          <div className={`reveal reveal-delay-2${vis ? " visible" : ""}`}>
            <div className="tag-badge on-light">{copy.badge}</div>
            <h2 className="display-lg about__headline">
              {copy.heading[0]}<br /><em>{copy.heading[1]}</em>
            </h2>
            <p className="body-md about__desc">
              South Asia is a home to some of the world's oldest and most diverse agricultural
              traditions. For over ten thousand years, the farmers of this region cultivated
              thousands of crop varieties, developed sophisticated irrigation systems, created
              intricate tools adapted to every terrain and season, and passed on an enormous body
              of ecological knowledge through practice, song, story and festivals.
            </p>
             <p className="body-md about__desc">
              This heritage is not merely historical — it is living. It exists today in the seed 
              varieties that elderly farmers quietly conserve in their homes, in the tools stored in village
              sheds, in the farming songs sung during harvest, in the knowledge of which plant
              grows where and why. Agricultural knowledge and associated livelihoods are living
              traditions in the global South.
            </p>
            <p className="body-md about__desc">
              SANGAM - South Asian Network for Agricultural Museums is therefore, an initiative
              taken to preserve this heritage by bringing it together. SANGAM is a pan-South Asian
              Agricultural Network of multiple countries that unites agricultural museums, farmers, historians,
              scholars and individuals across the subcontinent to preserve the living heritage of
              agriculture and farming traditions. The network is structured into three categories:
              Network Members, Associate Network Members, and Outreach. Network Members include
              India, Bangladesh, Afghanistan, Pakistan, Nepal, Bhutan, Maldives and Sri Lanka.
              Associate Network Members include Thailand and Indonesia. Outreach members extend the
              network beyond South Asia to Korea, Japan, China, Africa and South America. South Asia
              is connected by a shared heritage and cultural values, and SANGAM is an effort to bring
              together this heritage on one platform.
            </p>
            <p className="body-md about__desc">
              Through SANGAM we are building a community of individuals and organizations that are
              making an effort to conserve the lost tradition through museums and oral history. At
              present there are more than 100 museums in these nations that are preserving the
              age-old traditions, tools, artifacts, rituals and agricultural histories. SANGAM
              therefore, is an initiative taken to document, celebrate and connect this living
              heritage to the present knowledge systems before it is lost forever.
            </p>
              <p className="body-md about__desc">
              The key partners
              of this network are museum curators, educational institution and individuals. SANGAM
              will conduct events and programmes that will connect these nations and bringing then
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
              <div className="about__aima-badge about__aima-badge--logo">
                <Image src="/aima-logo.png" alt="AIMA — International Association of Agricultural Museums logo" width={44} height={44} />
              </div>
              <div>
                <strong>AIMA — International Association of Agricultural Museums</strong>
                <p>AIMA is a forum for organisations dedicated to promoting interest in the impact of agriculture on human society through the ages. SANGAM is South Asia's representative voice within AIMA, the global body connecting agricultural museums and heritage institutions across the world.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
