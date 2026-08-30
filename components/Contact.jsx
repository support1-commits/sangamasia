"use client";
import { useEffect, useRef } from "react";
import { Globe, Mail, MapPin, ArrowRight } from "lucide-react";
import { useSiteLanguage } from "../lib/siteLanguage";

const advisors = [
  {
    name: "Vijay Pratap Singh Aditya",
    role: "Co-Founder — CEO, The Heritage Foundation / EKgaon Technologies, New Delhi",
    email: "vijay.aditya@gmail.com",
  },
  {
    name: "Surajit Sarkar",
    role: "Co-Founder — Associate Professor, Centre for Community Knowledge, Ambedkar University Delhi; President, Oral History Association of India; Vice-President, AIMA",
    email: "surajit.sarkar@gmail.com",
  },
  {
    name: "Nerupama Modwel",
    role: "Co-Founder — Principal Director, ICH Division, INTACH",
    email: "intangibleheritage1@gmail.com",
  },
];

const contactTranslations = {
  en: {
    badge: "Contact",
    headline: ["Reach out to", "SANGAM"],
    intro: "We would love to hear from you. Whether you are a museum wanting to join the network, a researcher with a question, a filmmaker interested in the Film Festival, a student looking for an internship or simply someone who cares about agricultural heritage.",
    sectionTitle: "Reach out to us",
    general: "General enquiries",
    website: "Website",
    postal: "Postal address",
    advisory: "Advisory Team",
    focus: "Network focus",
    focusTitle: "Preserving living agricultural heritage across South Asia.",
    focusBody: "From museum collections and oral histories to field documentation and public conversations, SANGAM brings together communities, institutions, and practitioners working with food, memory, and land.",
    collaborate: "How we collaborate",
    collaboration: ["Museum and heritage institutions", "Researchers and oral historians", "Students and emerging practitioners", "Filmmakers and cultural collaborators"],
    send: "Send an enquiry",
  },
  hi: {
    badge: "संपर्क",
    headline: ["संपर्क करें", "संगम"],
    intro: "हम आपसे सुनना चाहेंगे। चाहे आप किसी संग्रहालय से हों जो नेटवर्क में जुड़ना चाहते हैं, किसी प्रश्न के साथ शोधकर्ता हों, फिल्म फेस्टिवल में रुचि रखने वाले फिल्म निर्माता हों, इंटर्नशिप की तलाश में छात्र हों या बस कृषि विरासत के बारे में चिंता करने वाला कोई व्यक्ति हो।",
    sectionTitle: "हमसे संपर्क करें",
    general: "सामान्य पूछताछ",
    website: "वेबसाइट",
    postal: "डाक पता",
    advisory: "सलाहकार टीम",
    focus: "नेटवर्क फोकस",
    focusTitle: "दक्षिण एशिया में जीवंत कृषि विरासत का संरक्षण।",
    focusBody: "संग्रहालयों के संग्रह और मौखिक इतिहास से लेकर क्षेत्रीय दस्तावेज़ीकरण और सार्वजनिक संवादों तक, संगम उन समुदायों, संस्थानों और कार्यकर्ताओं को एक साथ लाता है जो भोजन, स्मृति और भूमि के साथ काम करते हैं।",
    collaborate: "हम कैसे सहयोग करते हैं",
    collaboration: ["संग्रहालय और विरासत संस्थान", "शोधकर्ता और मौखिक इतिहासकार", "छात्र और नए पेशेवर", "फिल्मकार और सांस्कृतिक सहयोगी"],
    send: "पृच्छा भेजें",
  },
  bn: {
    badge: "যোগাযোগ",
    headline: ["যোগাযোগ করুন", "সাংগম"],
    intro: "আমরা আপনার সাথে কথা বলতে চাই। আপনি জাদুঘর থেকে আসুন, নেটওয়ার্কে যোগ দিতে চান, গবেষক, চলচ্চিত্র উৎসবের আগ্রহী নির্মাতা, ইন্টার্নশিপ খুঁজছেন এমন ছাত্র বা কৃষি ঐতিহ্যের প্রতি আগ্রহী যে কেউ হোন।",
    sectionTitle: "আমাদের সাথে যোগাযোগ করুন",
    general: "সাধারণ জিজ্ঞাসা",
    website: "ওয়েবসাইট",
    postal: "ডাক ঠিকানা",
    advisory: "পরামর্শক দল",
    focus: "নেটওয়ার্ক ফোকাস",
    focusTitle: "দক্ষিণ এশিয়ায় জীবন্ত কৃষি ঐতিহ্য সংরক্ষণ।",
    focusBody: "জাদুঘরের সংগ্রহ ও মৌখিক ইতিহাস থেকে শুরু করে মাঠ পর্যায়ের নথিভুক্তি এবং জনসম্প্রচার, সাংগম এমন সম্প্রদায়, প্রতিষ্ঠান ও কর্মীদের একত্রিত করে যারা খাদ্য, স্মৃতি ও ভূমির সঙ্গে কাজ করেন।",
    collaborate: "আমরা কীভাবে সহযোগিতা করি",
    collaboration: ["জাদুঘর ও ঐতিহ্য প্রতিষ্ঠান", "গবেষক ও মৌখিক ইতিহাসবিদ", "ছাত্র ও নতুন পেশাজীবী", "চলচ্চিত্র নির্মাতা ও সাংস্কৃতিক সহযোগী"],
    send: "একটি জিজ্ঞাসা পাঠান",
  },
};

export default function Contact() {
  const ref = useRef(null);
  const locale = useSiteLanguage();
  const copy = contactTranslations[locale] || contactTranslations.en;

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) e.target.classList.add("visible"); }, { threshold: 0.08 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="contact contact-page" ref={ref}>
      <div className="container">
        <div className="contact__inner reveal visible">
          <div className="contact__content">
            <div className="tag-badge on-light">{copy.badge}</div>
            <h2 className="display-lg contact__headline">{copy.headline[0]}<br /><em>{copy.headline[1]}</em></h2>
            <p className="body-md contact__desc">{copy.intro}</p>

            <div className="contact__section" style={{ marginTop: "1rem" }}>
              <div className="contact__section-title">{copy.sectionTitle}</div>
            </div>

            <div className="contact__info-list" style={{ marginTop: "1.2rem" }}>
              <div className="contact__info-item">
                <div className="contact__info-icon icon-box terracotta"><Mail size={17} strokeWidth={2} /></div>
                <div>
                  <span className="contact__info-label">{copy.general}</span>
                  <a href="mailto:info@sangam.heritage.org" className="contact__info-value">info@sangam.heritage.org</a>
                </div>
              </div>
              <div className="contact__info-item">
                <div className="contact__info-icon icon-box"><Globe size={17} strokeWidth={2} /></div>
                <div>
                  <span className="contact__info-label">{copy.website}</span>
                  <a href="https://sangam.asia" target="_blank" rel="noopener noreferrer" className="contact__info-value">sangam.asia</a>
                </div>
              </div>
              <div className="contact__info-item">
                <div className="contact__info-icon icon-box gold"><MapPin size={17} strokeWidth={2} /></div>
                <div>
                  <span className="contact__info-label">{copy.postal}</span>
                  <span className="contact__info-value" style={{ display: "block", fontWeight: 600 }}>
                    SANGAM — South Asian Network of Grassroots Agricultural Museums<br />
                    Hosted by The Heritage Foundation<br />
                    New Delhi — 110049, India
                  </span>
                </div>
              </div>
            </div>

            <div className="contact__section">
              <div className="contact__section-title">{copy.advisory}</div>
              <div className="contact__socials contact__socials--stacked">
                {advisors.map((a, i) => (
                  <a key={i} href={`mailto:${a.email}`} className="social-row social-row--contact">
                    <div className="social-row__icon"><Mail size={16} strokeWidth={2} /></div>
                    <div>
                      <div className="social-row__name">{a.name}</div>
                      <div className="social-row__handle">{a.role}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="contact__panel contact__panel--minimal">
            <div className="contact__mini-card">
              <div className="contact__mini-card-label">{copy.focus}</div>
              <h3>{copy.focusTitle}</h3>
              <p>{copy.focusBody}</p>
            </div>

            <div className="contact__mini-card contact__mini-card--soft">
              <div className="contact__mini-card-label">{copy.collaborate}</div>
              <ul className="contact__list">
                {copy.collaboration.map((item, idx) => <li key={idx}>{item}</li>)}
              </ul>
              <a href="mailto:info@sangam.heritage.org" className="contact__cta-link">
                {copy.send} <ArrowRight size={14} strokeWidth={2} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
