"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Languages } from "lucide-react";
import { LANGUAGE_OPTIONS, getLanguageMeta, getStoredLanguage, setStoredLanguage, useSiteLanguage } from "../lib/siteLanguage";

const links = [
  { label: "About", href: "/about" },
  { label: "Conference", href: "/conference" },
  { label: "Programmes", href: "/programmes" },
  { label: "Museums", href: "/museums" },
  { label: "Heritage", href: "/heritage" },
  { label: "Join", href: "/join" },
  { label: "Contact", href: "/contact" },
  { label: "Connect", href: "/connect" },
];



const NAV_LABELS = {
  en: { About: "About", Conference: "Conference", Programmes: "Programmes", Museums: "Museums", Heritage: "Heritage", Join: "Join", Contact: "Contact", Connect: "Connect" },
  hi: { About: "हमारे बारे में", Conference: "सम्मेलन", Programmes: "कार्यक्रम", Museums: "संग्रहालय", Heritage: "विरासत", Join: "जुड़ें", Contact: "संपर्क", Connect: "कनेक्ट" },
  bn: { About: "সম্পর্কে", Conference: "কনফারেন্স", Programmes: "প্রোগ্রাম", Museums: "জাদুঘর", Heritage: "ঐতিহ্য", Join: "যোগ দিন", Contact: "যোগাযোগ", Connect: "সংযোগ" },
  ta: { About: "பற்றி", Conference: "கூட்டம்", Programmes: "பrogrammes", Museums: "காட்சியகங்கள்", Heritage: "மரபு", Join: "சேருங்கள்", Contact: "தொடர்பு", Connect: "இணை" },
  te: { About: "గురించి", Conference: "కాన్ఫరెన్స్", Programmes: "ప్రోగ్రామ్లు", Museums: "సమూహాలు", Heritage: "వారసత్వం", Join: "చేరండి", Contact: "సంప్రదించండి", Connect: "కనెక్ట్" },
  ur: { About: "ہمارے بارے میں", Conference: "کانفرنس", Programmes: "پروگرامز", Museums: "میوزیمز", Heritage: "میراث", Join: "شمولیت", Contact: "رابطہ", Connect: "جڑیں" },
  ml: { About: "പറ്റി", Conference: "കൺഫറൻസ്", Programmes: "പ്രോഗ്രാമുകൾ", Museums: "മ്യൂസിയങ്ങൾ", Heritage: "പാരമ്പര്യം", Join: "ചേരുക", Contact: "ബന്ധപ്പെടുക", Connect: "കണക്ട്" },
  kn: { About: "ಬಗ್ಗೆ", Conference: "ಕಾನ್ಫರೆನ್ಸ್", Programmes: "ಕಾರ್ಯಕ್ರಮಗಳು", Museums: "ಮ್ಯೂಸಿಯಂಗಳು", Heritage: "ಸंपತ್ತು", Join: "ಸೇರಿಕೊಳ್ಳಿ", Contact: "ಸಂಪರ್ಕ", Connect: "ಕನೆಕ್ಟ್" },
  ne: { About: "बारेमा", Conference: "सम्मेलन", Programmes: "कार्यक्रमहरू", Museums: "संग्रहालयहरू", Heritage: "विरासत", Join: "सामेल हुन", Contact: "सम्पर्क", Connect: "जडान" },
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);
  const selectedLanguage = useSiteLanguage();
  const pathname = usePathname();
  const languageMenuRef = useRef(null);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    const savedLanguage = getStoredLanguage();
    if (savedLanguage !== selectedLanguage) {
      setStoredLanguage(savedLanguage);
    }
  }, [selectedLanguage]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (languageMenuRef.current && !languageMenuRef.current.contains(event.target)) {
        setLanguageMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLanguageSelect = (code) => {
    setStoredLanguage(code);
    setLanguageMenuOpen(false);
  };

  const translatedLinks = NAV_LABELS[selectedLanguage] ?? NAV_LABELS.en;

  return (
    <nav className={`navbar${scrolled ? " scrolled" : ""}`}>
      <div className="navbar__inner">
        <Link href="/" className="navbar__brand">
          <div className="navbar__logo-box">
            <Image src="/sangam-logo.png" alt="SANGAM logo" width={32} height={32} className="navbar__logo-img" />
          </div>
          <div className="navbar__brand-text">
            <span className="navbar__brand-name"><strong>SANGAM</strong> Network</span>
            <span className="navbar__brand-sub">of Agricultural Heritage</span>
          </div>
        </Link>

        <ul className="navbar__links">
          {links.map((l) => (
            <li key={l.label}>
              <Link href={l.href} className={`navbar__link${pathname === l.href ? " active" : ""}`}>
                {translatedLinks[l.label] ?? l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="lang-switcher" ref={languageMenuRef}>
          <button
            type="button"
            className="lang-switcher__button"
            onClick={() => setLanguageMenuOpen((prev) => !prev)}
            aria-label={`Current language: ${getLanguageMeta(selectedLanguage).label}`}
            aria-expanded={languageMenuOpen}
            title={`Current language: ${getLanguageMeta(selectedLanguage).label}`}
          >
            <Languages size={15} strokeWidth={2} className="lang-switcher__icon" />
            <span className="lang-switcher__label">{getLanguageMeta(selectedLanguage).code.toUpperCase()}</span>
          </button>

          {languageMenuOpen && (
            <div className="lang-switcher__popover" role="menu" aria-label="Language options">
              {LANGUAGE_OPTIONS.map((language) => (
                <button
                  key={language.code}
                  type="button"
                  className={`lang-switcher__option${selectedLanguage === language.code ? " is-selected" : ""}`}
                  onClick={() => handleLanguageSelect(language.code)}
                  role="menuitem"
                  aria-current={selectedLanguage === language.code ? "true" : undefined}
                >
                  {language.label}
                </button>
              ))}
            </div>
          )}
        </div>

        <button className={`navbar__burger${open ? " open" : ""}`} onClick={() => setOpen(!open)} aria-label="Toggle menu">
          <span /><span /><span />
        </button>
      </div>

      <div className={`navbar__drawer${open ? " open" : ""}`}>
        <div className="navbar_body">
          {links.map((l) => (
            <Link key={l.label} href={l.href} className="navbar__drawer-link" onClick={() => setOpen(false)}>
              {translatedLinks[l.label] ?? l.label}
            </Link>
          ))}
          <Link href="/join" className="navbar__drawer-cta" onClick={() => setOpen(false)}>{translatedLinks.Join}</Link>
        </div>
      </div>
    </nav>
  );
}
