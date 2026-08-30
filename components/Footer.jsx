"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail, Globe, Camera, Play, Users, X } from "lucide-react";
import { useSiteLanguage } from "../lib/siteLanguage";

const nav = {
  About:      [{ label: "SANGAM Network", href: "/about" }, { label: "AIMA Partnership", href: "/about" }, { label: "Member Countries", href: "/about" }, { label: "Our Mission", href: "/about" }],
  Programmes: [{ label: "Film Festival 2026", href: "/programmes" }, { label: "CIMA Conference", href: "/conference" }, { label: "Exhibitions", href: "/programmes" }, { label: "SANGAM Talks", href: "/programmes" }],
  Museums:    [{ label: "Anupam Paul Museum", href: "/museums" }, { label: "Syed Ghani Khan Museum", href: "/museums" }, { label: "Babulal Dahiya Museum", href: "/museums" }, { label: "PAU Museums", href: "/museums" }],
  Join:       [{ label: "Internship", href: "/join" }, { label: "Fellowship", href: "/join" }, { label: "Partner", href: "/join" }, { label: "Become a Member", href: "/join" }],
  Network:    [{ label: "Agricultural Heritage", href: "/heritage" }, { label: "Contact Us", href: "/contact" }, { label: "Connect", href: "/connect" }],
};

const footerTranslations = {
  en: {
    brandSub: "of Agricultural Heritage",
    tagline: "Uniting South Asia's agricultural museums, heritage sites, and farming communities — with a reach extending to outreach members across Asia, Africa and the Americas.",
    contact: "Contact",
    privacy: "Privacy Policy",
    terms: "Terms of Use",
    sections: {
      About: ["SANGAM Network", "AIMA Partnership", "Member Countries", "Our Mission"],
      Programmes: ["Film Festival 2026", "CIMA Conference", "Exhibitions", "SANGAM Talks"],
      Museums: ["Anupam Paul Museum", "Syed Ghani Khan Museum", "Babulal Dahiya Museum", "PAU Museums"],
      Join: ["Internship", "Fellowship", "Partner", "Become a Member"],
      Network: ["Agricultural Heritage", "Contact Us", "Connect"],
    },
  },
  hi: {
    brandSub: "कृषि विरासत का",
    tagline: "दक्षिण एशिया के कृषि संग्रहालयों, विरासत स्थलों और कृषि समुदायों को जोड़ना — एशिया, अफ्रीका और अमेरिका के आउटरीच सदस्यों तक फैल रहा है।",
    contact: "संपर्क",
    privacy: "गोपनीयता नीति",
    terms: "उपयोग की शर्तें",
    sections: {
      About: ["संगम नेटवर्क", "AIMA साझेदारी", "सदस्य देश", "हमारा मिशन"],
      Programmes: ["फ़िल्म फेस्टिवल 2026", "CIMA सम्मेलन", "प्रदर्शनी", "संगम talks"],
      Museums: ["अनूपम पॉल संग्रहालय", "सैयद घानी खान संग्रहालय", "बाबूलाल दहिया संग्रहालय", "PAU संग्रहालय"],
      Join: ["इंटर्नशिप", "फेलोशिप", "पार्टनर", "सदस्य बनें"],
      Network: ["कृषि विरासत", "संपर्क करें", "कनेक्ट"],
    },
  },
  bn: {
    brandSub: "কৃষি ঐতিহ্যের",
    tagline: "দক্ষিণ এশিয়ার কৃষি জাদুঘর, ঐতিহ্যস্থান ও কৃষক সম্প্রদায়কে একত্রিত করা — এশিয়া, আফ্রিকা ও আমেরিকার outreach সদস্যদের সঙ্গে সংযোগ।",
    contact: "যোগাযোগ",
    privacy: "গোপনীয়তা নীতি",
    terms: "ব্যবহারের শর্ত",
    sections: {
      About: ["সাংগম নেটওয়ার্ক", "AIMA অংশীদারিত্ব", "সদস্য দেশ", "আমাদের মিশন"],
      Programmes: ["ফিল্ম ফেস্টিভ্যাল 2026", "CIMA কনফারেন্স", "এক্সিবিশন", "সাংগম টকস"],
      Museums: ["অনুপম পৌল জাদুঘর", "সৈয়দ ঘানি খান জাদুঘর", "বাবুলাল দহিয়া জাদুঘর", "PAU জাদুঘর"],
      Join: ["ইন্টার্নশিপ", "ফেলোশিপ", "পার্টনার", "সদস্য হোন"],
      Network: ["কৃষি ঐতিহ্য", "যোগাযোগ করুন", "সংযোগ"],
    },
  },
};

const socials = [
  { icon: Camera, label: "Instagram", href: "https://www.instagram.com/sangam.asia?igsh=czNoNzllbWZkYzN1" },
  { icon: Play, label: "YouTube", href: "https://www.youtube.com/@sangam_asia" },
  { icon: Users, label: "Facebook", href: "https://www.facebook.com/profile.php?id=100093794475295&mibextid=ZbWKwL" },
  { icon: X, label: "X / Twitter", href: "https://x.com/Cima_india2023" },
];

export default function Footer() {
  const locale = useSiteLanguage();
  const copy = footerTranslations[locale] || footerTranslations.en;

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div>
            <Link href="/" className="footer__brand">
              <div className="footer__logo-box">
                <Image src="/sangam-logo.png" alt="SANGAM logo" width={32} height={32} className="footer__logo-img" />
              </div>
              <div className="footer__brand-text">
                <span className="footer__brand-name">SANGAM NETWORK</span>
                <span className="footer__brand-sub">{copy.brandSub}</span>
              </div>
            </Link>
            <p className="footer__tagline">{copy.tagline}</p>
            <div className="footer__meta">
              <a href="mailto:info@sangam.heritage.org" className="footer__meta-row">
                <Mail size={15} strokeWidth={2} /> info@sangam.heritage.org
              </a>
              <a href="https://sangam.asia" className="footer__meta-row">
                <Globe size={15} strokeWidth={2} /> sangam.asia
              </a>
            </div>
            <div className="footer__socials">
              {socials.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} className="footer__social-icon">
                  <s.icon size={16} strokeWidth={2} />
                </a>
              ))}
            </div>
          </div>

          <div className="footer__links">
            {Object.entries(nav).map(([section, items]) => (
              <div key={section} className="footer__col">
                <h4 className="footer__col-title">{section}</h4>
                <ul>
                  {items.map((item, i) => (
                    <li key={i}>
                      <Link href={item.href} className="footer__link">
                        {copy.sections[section]?.[i] ?? item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copy">© {new Date().getFullYear()} SANGAM — South Asian Network of Agricultural Museums & Heritage. All rights reserved.</p>
          <div className="footer__legal">
            <Link href="/contact" className="footer__legal-link">{copy.contact}</Link>
            <a href="#" className="footer__legal-link">{copy.privacy}</a>
            <a href="#" className="footer__legal-link">{copy.terms}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
