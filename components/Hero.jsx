"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight, Users, Sprout,
  Info, Mic2, Building2, Archive, Handshake, Mail,
} from "lucide-react";
import NetworkMap from "./NetworkMap";
import { useSiteLanguage } from "../lib/siteLanguage";

const HEADLINE_SETS = {
  en: [
    { l1: "Where Soil Meets", l2: "Memory" },
    { l1: "Harvest Stories,", l2: "Living Roots" },
    { l1: "Eight Nations,", l2: "One Earth" },
    { l1: "Documenting the", l2: "Living Land" },
  ],
  hi: [
    { l1: "मिट्टी जहाँ", l2: "यादों से मिलती है" },
    { l1: "फसल की कहानियाँ,", l2: "जड़ों का जीवन" },
    { l1: "आठ देश,", l2: "एक धरती" },
    { l1: "दस्तावेज़ीकरण", l2: "जीती हुई भूमि" },
  ],
  bn: [
    { l1: "মাটি যেখানে", l2: "স্মৃতির সাথে মিশে" },
    { l1: "ফসলের গল্প,", l2: "জীবন্ত শিকড়" },
    { l1: "আটটি দেশ,", l2: "একটি পৃথিবী" },
    { l1: "নথিভুক্ত করা", l2: "জীবন্ত ভূমি" },
  ],
  ta: [
    { l1: "மண்ணும்", l2: "நினைவும்" },
    { l1: "பயிர் கதைகள்,", l2: "வாழும் வேர்கள்" },
    { l1: "எட்டு நாடுகள்,", l2: "ஒரே பூமி" },
    { l1: "ஆவணப்படுத்துதல்", l2: "வாழும் நிலம்" },
  ],
  te: [
    { l1: "నేల మరియు", l2: "జ్ఞాపకాలు" },
    { l1: "పంట కథలు,", l2: "జీవించే మూలాలు" },
    { l1: "ఎనిమిది దేశాలు,", l2: "ఒక భూమి" },
    { l1: "డాక్యుమెంట్", l2: "జీవించే భూమి" },
  ],
  ur: [
    { l1: "جہاں مٹی", l2: "یادوں سے ملتی ہے" },
    { l1: "فصل کی کہانیاں,", l2: "زندہ جڑیں" },
    { l1: "آٹھ ممالک,", l2: "ایک زمین" },
    { l1: "دستاویز سازی", l2: "زندہ زمین" },
  ],
  ml: [
    { l1: "മണ്ണും", l2: "ഓർമ്മയുമാണ്" },
    { l1: "വിള കഥകൾ,", l2: "ജീവിച്ചിരുന്ന വേരുകൾ" },
    { l1: "എട്ട് രാജ്യങ്ങൾ,", l2: "ഒരു ഭൂമി" },
    { l1: "രേഖപ്പെടുത്തൽ", l2: "ജീവിക്കുന്ന നിലം" },
  ],
  kn: [
    { l1: "ಮಣ್ಣು ಮತ್ತು", l2: "ನೆನಪಿನ ಲೈವ್" },
    { l1: "ಬೆಳೆ ಕಥೆಗಳು,", l2: "ಜೀವಂತ ಮೂಡುಗಳು" },
    { l1: "ಎಂಟು ದೇಶಗಳು,", l2: "ಒಂದು ಭೂಮಿ" },
    { l1: "ದಾಖಲೆ ಮಾಡುವುದು", l2: "ಜೀವಂತ ಭೂಮಿ" },
  ],
  ne: [
    { l1: "माटो जहाँ", l2: "स्मृतिको भेट्छ" },
    { l1: "फसलका कथाहरू,", l2: "जिउँदो जरा" },
    { l1: "आठ देशहरू,", l2: "एक पृथ्वी" },
    { l1: "दस्तावेजीकरण", l2: "जिउँदो भूमि" },
  ],
};

const HERO_COPY = {
  en: {
    badge: "South Asian Agricultural Heritage Network",
    sub: "SANGAM — meaning confluence — unites agricultural museums, farmers, and scholars across eight South Asian nations to preserve the living heritage of the subcontinent's farming traditions.",
    ctaPrimary: "Join the Network",
    ctaSecondary: "Explore the Network",
  },
  hi: {
    badge: "दक्षिण एशियाई कृषि विरासत नेटवर्क",
    sub: "संगम — संयम का अर्थ — आठ दक्षिण एशियाई देशों के कृषि संग्रहालयों, किसानों और विद्वानों को जोड़ता है ताकि उपमहाद्वीप की कृषि परंपराओं की जीवंत विरासत को सुरक्षित रखा जा सके।",
    ctaPrimary: "नेटवर्क से जुड़ें",
    ctaSecondary: "नेटवर्क देखें",
  },
  bn: {
    badge: "দক্ষিণ এশীয় কৃষি ঐতিহ্য নেটওয়ার্ক",
    sub: "সাংগম — মেলবন্ধনের অর্থ — আটটি দক্ষিণ এশীয় দেশে কৃষি জাদুঘর, চাষি ও পণ্ডিতদের একত্রিত করে উপমহাদেশের কৃষি ঐতিহ্যের প্রাণবন্ত সংরক্ষণ করে।",
    ctaPrimary: "নেটওয়ার্কে যোগ দিন",
    ctaSecondary: "নেটওয়ার্ক দেখুন",
  },
  ta: {
    badge: "தெற்காசிய வேளாண் மரபு நெட்வொர்க்",
    sub: "சங்கம் — இணைவு என்ற அர்த்தம் — தெற்காசியாவின் எட்டு நாடுகளில் உள்ள வேளாண் அருங்காட்சியகங்கள், விவசாயிகள் மற்றும் அறிஞர்களை ஒன்றிணைத்து, துணைக்கண்டத்தின் விவசாய மரபுகளை பாதுகாக்கிறது.",
    ctaPrimary: "நெட்வொர்க்கில் சேருங்கள்",
    ctaSecondary: "நெட்வொர்க்கைப் பாருங்கள்",
  },
  te: {
    badge: "దక్షిణ ఆసియా వ్యవసాయ వారసత్వ నెట్‌వర్క్",
    sub: "సంగమ్ — సమ్మేళనం అర్థం — ఎనిమిది దక్షిణ ఆసియా దేశాల వ్యవసాయ మ్యూజియములు, రైతులు మరియు పండితులను ఏకం చేసి ఉపఖండపు వ్యవసాయ సంప్రదాయాల జీవించే వారసత్వాన్ని కాపాడుతుంది.",
    ctaPrimary: "నెట్‌వర్క్‌లో చేరండి",
    ctaSecondary: "నెట్‌వర్క్‌ను చూడండి",
  },
  ur: {
    badge: "جنوبی ایشیائی زراعتی ورثہ نیٹ ورک",
    sub: "سنگم — جو اتحاد کا معنی رکھتا ہے — آٹھ جنوبی ایشیائی ممالک کے زرعی عجائب گھروں، کسانوں اور دانشوروں کو ایک ساتھ جوڑتا ہے تاکہ جزیرہ نما کے زرعی ورثے کو محفوظ رکھا جا سکے۔",
    ctaPrimary: "نیٹ ورک میں شامل ہوں",
    ctaSecondary: "نیٹ ورک دیکھیں",
  },
  ml: {
    badge: "സൗത്ത് ഏഷ്യൻ അഗ്രികൾച്ചർ ഹെറിറ്റേജ് നെറ്റ്‌വർക്ക്",
    sub: "സംഗം — കൂട്ടിച്ചേരലിന്റെ അർത്ഥം — എട്ട് ദക്ഷിണേഷ്യൻ രാജ്യങ്ങളിലെ കാർഷിക മ്യൂസിയങ്ങൾ, കര്ഷകരെ, പണ്ഡിതരെ എല്ലാം ഒരു കൂട്ടത്തിൽ കൊണ്ടുവരുകയും ഉപഭൂഖണ്ഡത്തിന്റെ ജീവിക്കുന്ന കാർഷിക പാരമ്പര്യം സംരക്ഷിക്കുകയും ചെയ്യുന്നു.",
    ctaPrimary: "നെറ്റ്‌വർക്കിൽ ചേരുക",
    ctaSecondary: "നെറ്റ്‌വർക്ക್ കാണുക",
  },
  kn: {
    badge: "ದಕ್ಷಿಣ ಏಷ್ಯಾದ ಕೃಷಿ ಪರಂಪರೆಯ ನೆಟ್‌ವರ್ಕ್",
    sub: "ಸಂಗಮ್ — ಪರಿಚಯದ ಅರ್ಥ — ಎಂಟು ದಕ್ಷಿಣ ಏಷ್ಯಾದ ರಾಷ್ಟ್ರಗಳ ಕೃಷಿ ಮ್ಯೂಸಿಯಂಗಳು, ರೈತರು ಮತ್ತು ವಿದ್ವಾಂಸರುಗಳನ್ನು ಒಟ್ಟುಗೂಡಿಸಿ ಉಪಖಂಡದ ಕೃಷಿ ಸಂಪ್ರದಾಯಗಳ ಬದುಕುಳಿದ ಪರಂಪರೆಯನ್ನು ಉಳಿಸುತ್ತದೆ.",
    ctaPrimary: "ನೆಟ್‌ವರ್ಕ್‌ಗೆ ಸೇರಿ",
    ctaSecondary: "ನೆಟ್‌ವರ್ಕ್ ನೋಡೋಣ",
  },
  ne: {
    badge: "दक्षिण एसियाली कृषि विरासत नेटवर्क",
    sub: "संगम — मिलनको अर्थ — आठ दक्षिण एशियाली देशका कृषि संग्रहालय, किसान र विद्वानहरूलाई एकताबद्ध गरेर उपमहाद्वीपको कृषि परम्पराको जीवित विरासत बचाउँछ।",
    ctaPrimary: "नेटवर्कमा सामेल हुनुहोस्",
    ctaSecondary: "नेटवर्क हेर्नुहोस्",
  },
};

const quickLinks = {
  en: [
    { href: "/about", icon: Info, title: "About SANGAM", desc: "Our mission, the AIMA partnership, and the network's founding story." },
    { href: "/conference", icon: Mic2, title: "CIMA Conference", desc: "The flagship conference on agricultural and intangible heritage." },
    { href: "/programmes", icon: Sprout, title: "Programmes", desc: "The Film Festival, exhibitions, and SANGAM Talks." },
    { href: "/museums", icon: Building2, title: "Museums", desc: "Meet the four member museums preserving farming heritage." },
    { href: "/heritage", icon: Archive, title: "Heritage Projects", desc: "Documentation work underway across the subcontinent." },
    { href: "/join", icon: Handshake, title: "Join SANGAM", desc: "Internships, fellowships, partnerships, and membership." },
    { href: "/contact", icon: Mail, title: "Contact", desc: "Reach the SANGAM team or ask a question." },
    { href: "/connect", icon: Mail, title: "Connect", desc: "Follow SANGAM across our social media channels." },
  ],
  hi: [
    { href: "/about", icon: Info, title: "संगम के बारे में", desc: "हमारा मिशन, AIMA साझेदारी और नेटवर्क की स्थापना की कहानी।" },
    { href: "/conference", icon: Mic2, title: "CIMA सम्मेलन", desc: "कृषि और अमूर्त विरासत पर प्रमुख सम्मेलन।" },
    { href: "/programmes", icon: Sprout, title: "कार्यक्रम", desc: "फ़िल्म फेस्टिवल, प्रदर्शनी और संगम टॉक।" },
    { href: "/museums", icon: Building2, title: "संग्रहालय", desc: "कृषि विरासत को संरक्षित करने वाले चार सदस्य संग्रहालयों से मिलें।" },
    { href: "/heritage", icon: Archive, title: "विरासत परियोजनाएँ", desc: "उपमहाद्वीप भर में दस्तावेज़ीकरण कार्य चल रहा है।" },
    { href: "/join", icon: Handshake, title: "संगम से जुड़ें", desc: "इंटर्नशिप, फेलोशिप, साझेदारी और सदस्यता।" },
    { href: "/contact", icon: Mail, title: "संपर्क", desc: "संगम टीम से मिलें या कोई सवाल पूछें।" },
    { href: "/connect", icon: Mail, title: "कनेक्ट", desc: "सोशल मीडिया पर संगम से जुड़ें।" },
  ],
  bn: [
    { href: "/about", icon: Info, title: "সাংগম সম্পর্কে", desc: "আমাদের লক্ষ্য, AIMA অংশীদারিত্ব এবং নেটওয়ার্কের প্রতিষ্ঠার গল্প।" },
    { href: "/conference", icon: Mic2, title: "CIMA কনফারেন্স", desc: "কৃষি ও অদৃশ্য ঐতিহ্যের শীর্ষ সম্মেলন।" },
    { href: "/programmes", icon: Sprout, title: "প্রোগ্রাম", desc: "ফিল্ম ফেস্টিভ্যাল, প্রদর্শনী ও সাংগম টকস।" },
    { href: "/museums", icon: Building2, title: "জাদুঘর", desc: "কৃষি ঐতিহ্য সংরক্ষণকারী চার সদস্য জাদুঘর দেখুন।" },
    { href: "/heritage", icon: Archive, title: "ঐতিহ্য প্রকল্প", desc: "উপমহাদেশ জুড়ে নথিভুক্তকরণের কাজ চলমান।" },
    { href: "/join", icon: Handshake, title: "সাংগমে যোগ দিন", desc: "ইন্টার্নশিপ, ফেলোশিপ, পার্টনারশিপ ও সদস্যতা।" },
    { href: "/contact", icon: Mail, title: "যোগাযোগ", desc: "সাংগম টিমের সঙ্গে কথা বলুন বা প্রশ্ন করুন।" },
    { href: "/connect", icon: Mail, title: "সংযোগ", desc: "সোশ্যাল মিডিয়ায় সাংগমকে অনুসরণ করুন।" },
  ],
};

const galleryItems = {
  en: [
    { src: "/1.jpeg", title: "Rural seed exchange", featured: true },
    { src: "/2.jpeg", title: "Harvest heritage" },
    { src: "/3.jpeg", title: "Museum collection" },
    { src: "/4.jpeg", title: "Festival ritual" },
    { src: "/5.jpeg", title: "Family farming" },
    { src: "/6.jpeg", title: "Sacred fields" },
    { src: "/7.jpeg", title: "Memory in motion" },
  ],
  hi: [
    { src: "/1.jpeg", title: "ग्रामीण बीज आदान-प्रदान", featured: true },
    { src: "/2.jpeg", title: "फ़सल की विरासत" },
    { src: "/3.jpeg", title: "संग्रहालय संग्रह" },
    { src: "/4.jpeg", title: "उत्सव अनुष्ठान" },
    { src: "/5.jpeg", title: "परिवार कृषि" },
    { src: "/6.jpeg", title: "पवित्र खेत" },
    { src: "/7.jpeg", title: "चाल में स्मृति" },
  ],
  bn: [
    { src: "/1.jpeg", title: "গ্রামীণ বীজ বিনিময়", featured: true },
    { src: "/2.jpeg", title: "ফসলের ঐতিহ্য" },
    { src: "/3.jpeg", title: "জাদুঘর সংগ্রহ" },
    { src: "/4.jpeg", title: "উৎসব আচার" },
    { src: "/5.jpeg", title: "পারিবারিক চাষ" },
    { src: "/6.jpeg", title: "পবিত্র মাঠ" },
    { src: "/7.jpeg", title: "গতি中的 স্মৃতি" },
  ],
};

const latestUpdatesSlides = [
  {
    title: "REPORT LAUNCH",
    kicker: "The Vrihi Foundation invites you to",
    headline: "Framework for\nHeritage Produce of India",
    body1: "The report enables a first-of-its-kind operational framework to support India’s heritage and GI-tagged agricultural products. It brings a specific policy lens that recognises the potential of such commodities and identifies the specific intervention these value chains need.",
    body2: "The report is outcome of the study by Vrihi Foundation with the support of The Asia Foundation, and in partnership with ekgaon Technologies. The report outlines a national playbook which will offer guidance on realising the potential of heritage agriculture.",
    dateLabel: "28 September 2026",
    dateSub: "Monday",
    time: "10:00 am to 04:30 pm",
    venue: "Silver Oak",
    venueSub: "India Habitat Centre,",
    venueSub2: "New Delhi",
    invitation: "BY INVITATION ONLY",
    link: "/about",
    cta: "Read more",
    image: "/latest_updates/latest_updates.jpeg",
    imageAlt: "Latest Updates poster for Vrihi Foundation report launch",
  },
  {
    title: "HERITAGE IN ACTION",
    kicker: "Community-led agricultural memory",
    headline: "From seed stewardship\nto living traditions",
    body1: "SANGAM brings together farmers, museums, and researchers to document and celebrate the agricultural practices that sustain biodiversity, culture, and local knowledge across South Asia.",
    body2: "The network strengthens collaboration across eight nations, connecting heritage institutions and field practitioners through shared learning, training, and public engagement.",
    dateLabel: "Regional programme",
    dateSub: "Across South Asia",
    time: "Open collaborations and exhibitions",
    venue: "SANGAM network",
    venueSub: "Museums, farms, and partners",
    venueSub2: "United for heritage",
    invitation: "COMMUNITY PARTNERSHIP",
    link: "/programmes",
    cta: "View programme",
    image: "/latest_updates/latest_updates.jpeg",
    imageAlt: "SANGAM heritage programme and partner collaboration",
  },
];

export default function Hero() {
  const [idx, setIdx] = useState(0);
  const [fade, setFade] = useState(false);
  const [latestIdx] = useState(0);
  const [galleryVisible, setGalleryVisible] = useState(false);
  const locale = useSiteLanguage();

  useEffect(() => {
    const t = setInterval(() => {
      setFade(true);
      setTimeout(() => { setIdx((p) => (p + 1) % HEADLINE_SETS[locale].length); setFade(false); }, 380);
    }, 5000);
    return () => clearInterval(t);
  }, [locale]);

  useEffect(() => {
    setGalleryVisible(true);
  }, []);

  const localizedCopy = HERO_COPY[locale] ?? HERO_COPY.en;
  const localizedHeadlines = HEADLINE_SETS[locale] ?? HEADLINE_SETS.en;
  const localizedQuickLinks = quickLinks[locale] ?? quickLinks.en;
  const localizedGalleryItems = galleryItems[locale] ?? galleryItems.en;
  const h = localizedHeadlines[idx];
  const latestSlide = latestUpdatesSlides[latestIdx];

  return (
    <>
      <section className="hero">
        <div className="hero__pattern" />

        <div className="hero__inner">
          <div>
            <h1 className="hero__headline" style={{ opacity: fade ? 0 : 1, transition: "opacity 0.35s ease" }}>
              {h.l1}<br /><em>{h.l2}</em>
            </h1>

            <p className="hero__sub">
              {localizedCopy.sub}
            </p>

            <div className="hero__actions">
              <Link href="/join" className="btn btn-terracotta">
                {localizedCopy.ctaPrimary}
                <ArrowRight size={16} strokeWidth={2} />
              </Link>
              <Link href="/about" className="btn btn-outline">{localizedCopy.ctaSecondary}</Link>
            </div>
          </div>

          <div className="keeper-card">
            <div className="keeper-card__top">
              <span className="keeper-card__top-label">{locale === "hi" ? "फीचर्ड केपर" : locale === "bn" ? "ফিচার্ড কীপার" : "Featured Keeper"}</span>
              <Users size={16} color="#FAF4E8" strokeWidth={2} />
            </div>
            <div className="keeper-card__body">
              <div className="keeper-card__avatar" aria-hidden="true">
                <Sprout size={28} strokeWidth={2} />
              </div>
              <div>
                <h3 className="keeper-card__name">Syed Ghani Khan</h3>
                <div className="keeper-card__role">Seed Conservator, Mysore</div>
                <p className="keeper-card__story">
                  {locale === "hi"
                    ? "बीस से भी अधिक वर्षों से, सैयद घानी खान ने अपने खेत में देशी धान की किस्मों का संरक्षण किया है, एक जीवित बीज बैंक बनाए रखा है जो उनके स्थानीय संग्रहालय और समुदाय को पोषण देता है।"
                    : locale === "bn"
                      ? "২০ বছরেরও বেশি সময় ধরে, সৈয়দ ঘানি খান তাঁর খামারে দেশীয় ধানের জাত সংরক্ষণ করেছেন, একটি জীবন্ত বীজ ব্যাংক তৈরি করে রেখেছেন যা তাঁর স্থানীয় জাদুঘর ও সম্প্রদায়কে সমৃদ্ধ করে।"
                      : "For more than twenty years, Syed Ghani Khan has conserved native rice varieties on his farm, keeping a living seed bank that nourishes his local museum and community."}
                </p>
                <Link href="/museums" className="keeper-card__link">
                  {locale === "hi" ? "उनकी कहानी पढ़ें" : locale === "bn" ? "তার গল্প পড়ুন" : "Read their story"} <ArrowRight size={14} strokeWidth={2} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="hero hero--latest">
        <div className="hero__latest-shell">
          <div className="hero__latest-copy">
            <div className="hero__latest-header-row">
              <div className="tag-badge terracotta hero__latest-tag">
                <span className="tag-badge__dot" />
                Latest Updates
              </div>
            </div>

            <div
              key={`${latestSlide.title}-${latestIdx}`}
              className="hero__latest-poster-copy"
            >
              <div className="hero__latest-exclusive">EXCLUSIVE</div>
              <p className="hero__latest-kicker">{latestSlide.kicker}</p>
              <h2 className="hero__latest-title hero__latest-title--poster">{latestSlide.title}</h2>
              <h3 className="hero__latest-subhead">{latestSlide.headline.split("\n").map((line, index) => (
                <span key={line + index}>{line}{index < latestSlide.headline.split("\n").length - 1 ? <><br /></> : null}</span>
              ))}</h3>

              <div className="hero__latest-body">
                <p>{latestSlide.body1}</p>
                <p>{latestSlide.body2}</p>
              </div>

              <div className="hero__latest-meta-grid">
                <div className="hero__latest-meta-item">
                  <div className="hero__latest-meta-icon">📅</div>
                  <div>
                    <strong>{latestSlide.dateLabel}</strong>
                    <span>{latestSlide.dateSub}</span>
                    <small>{latestSlide.time}</small>
                  </div>
                </div>
                <div className="hero__latest-meta-item">
                  <div className="hero__latest-meta-icon">📍</div>
                  <div>
                    <strong>{latestSlide.venue}</strong>
                    <span>{latestSlide.venueSub}</span>
                    <small>{latestSlide.venueSub2}</small>
                  </div>
                </div>
              </div>

              <div className="hero__latest-invite">{latestSlide.invitation}</div>
            </div>
          </div>

          <div className="hero__latest-visual">
            <div className="hero__latest-slider">
              {latestUpdatesSlides.map((slide, index) => (
                <div
                  key={`${slide.title}-${index}`}
                  className={`hero__latest-slide ${index === latestIdx ? "is-active" : ""}`}
                >
                  <div className="hero__latest-image-wrap">
                    <Image
                      src={slide.image}
                      alt={slide.imageAlt}
                      fill
                      priority={index === 0}
                      className="hero__latest-image"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <NetworkMap />

      <section className="gallery-showcase">
        <div className="container">
          <div className="gallery-showcase__header">
            <div className="tag-badge on-light" style={{ marginBottom: "1rem" }}>
              <span className="tag-badge__dot" />
              {locale === "hi" ? "फ़ीचर्ड स्टोरीज़" : locale === "bn" ? "ফিচার্ড গল্প" : "Featured Stories"}
            </div>
            <h2 className="display-lg">{locale === "hi" ? "एक संग्रहित गैलरी" : locale === "bn" ? "একটি নির্বাচিত গ্যালারি" : "A Curated Gallery"}<br /><em>{locale === "hi" ? "विरासत के क्षण" : locale === "bn" ? "ঐতিহ্যের মুহূর্ত" : "of Heritage Moments"}</em></h2>
            <p className="body-lg" style={{ maxWidth: "680px", marginTop: "1rem", color: "var(--soil)" }}>
              {locale === "hi"
                ? "संगम की कहानियों से चुनी गई आठ छवियाँ, हर स्क्रीन आकार पर एक प्रीमियम और आधुनिक गैलरी अनुभव प्रस्तुत करती हैं।"
                : locale === "bn"
                  ? "সাংগমের গল্পের কেন্দ্র থেকে নির্বাচিত আটটি চিত্র, প্রতিটি পর্দার আকারে একটি প্রিমিয়াম ও আধুনিক গ্যালারি অভিজ্ঞতা প্রদান করে।"
                  : "Eight images selected from the heart of SANGAM’s stories, styled to present a premium, contemporary gallery experience across every screen size."}
            </p>
          </div>

          <div className="gallery-showcase__grid">
            {localizedGalleryItems.map((item) => (
              <div
                key={item.src}
                className={`gallery-card reveal reveal-delay-1${galleryVisible ? " visible" : ""} ${item.featured ? "gallery-card--featured" : ""}`}
              >
                <div className="gallery-card__media">
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    sizes={item.featured ? "(max-width: 768px) 100vw, (max-width: 1024px) 65vw, 45vw" : "(max-width: 768px) 100vw, (max-width: 1024px) 32vw, 22vw"}
                    className="gallery-card__image"
                  />
                </div>
                <div className="gallery-card__overlay">
                  <span>{item.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* <div className="stats-strip">
        <div className="stats-strip__grid">
          <div className="stats-strip__item">
            <div className="stats-strip__val">8+</div>
            <div className="stats-strip__lbl">Network Nations</div>
          </div>
          <div className="stats-strip__item">
            <div className="stats-strip__val">4</div>
            <div className="stats-strip__lbl">Member Museums</div>
          </div>
          <div className="stats-strip__item">
            <div className="stats-strip__val">1000+</div>
            <div className="stats-strip__lbl">Years of Heritage</div>
          </div>
          <div className="stats-strip__item">
            <div className="stats-strip__val">2</div>
            <div className="stats-strip__lbl">Active Doc Projects</div>
          </div>
        </div>
      </div> */}

      <section className="quicklinks">
        <div className="container">
          <div className="quicklinks__header">
            <div className="tag-badge on-light" style={{ margin: "0 auto 1.2rem" }}>
              <span className="tag-badge__dot" />
              {locale === "hi" ? "संगम का अन्वेषण करें" : locale === "bn" ? "সাংগম অন্বেষণ করুন" : "Explore SANGAM"}
            </div>
            <h2 className="display-lg">{locale === "hi" ? "अपने रास्ते खोजें" : locale === "bn" ? "আপনার পথ খুঁজুন" : "Find Your Way"}<br /><em>{locale === "hi" ? "नेटवर्क के चारों ओर" : locale === "bn" ? "নেটওয়ার্কের চারপাশে" : "Around the Network"}</em></h2>
          </div>
          <div className="quicklinks__grid">
            {localizedQuickLinks.map((q) => (
              <Link href={q.href} key={q.href} className="quicklink-card">
                <div className="quicklink-card__icon icon-box">
                  <q.icon size={20} strokeWidth={2} />
                </div>
                <div className="quicklink-card__title">{q.title}</div>
                <p className="quicklink-card__desc">{q.desc}</p>
                <span className="quicklink-card__go">{locale === "hi" ? "पेज देखें" : locale === "bn" ? "পেজ দেখুন" : "Visit page"} <ArrowRight size={13} strokeWidth={2} /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
