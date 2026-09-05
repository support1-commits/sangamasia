"use client";
import { useEffect, useRef } from "react";
import { ArrowUpRight, Mail } from "lucide-react";
import { useSiteLanguage } from "../lib/siteLanguage";

const YouTubeIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props} aria-hidden="true">
    <path d="M23.5 7.2a3.1 3.1 0 0 0-2.2-2.2C19.5 4.5 12 4.5 12 4.5s-7.5 0-9.3.5A3.1 3.1 0 0 0 .5 7.2 32.2 32.2 0 0 0 0 12a32.2 32.2 0 0 0 .5 4.8 3.1 3.1 0 0 0 2.2 2.2c1.8.5 9.3.5 9.3.5s7.5 0 9.3-.5a3.1 3.1 0 0 0 2.2-2.2A32.2 32.2 0 0 0 24 12a32.2 32.2 0 0 0-.5-4.8ZM9.75 15.5v-7l6.25 3.5-6.25 3.5Z" />
  </svg>
);

const FacebookIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props} aria-hidden="true">
    <path d="M13.5 22v-8h2.7l.4-3.1h-3.1V7.2c0-.9.3-1.5 1.6-1.5h1.7V2.8c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.5-4 4.2v2.4H7.5V14h2.9v8h3.1Z" />
  </svg>
);

const InstagramIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props} aria-hidden="true">
    <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.4" cy="6.6" r="1.2" fill="currentColor" stroke="none" />
  </svg>
);

const XIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props} aria-hidden="true">
    <path d="M18.9 2h3.5l-7.6 8.7 9 11.3h-7.1l-5.6-7.1-6.4 7.1H2.2L9.9 13.7 1.5 2h7.3l5 6.3L18.9 2Zm-1.2 18.5h1.9L7.4 3.4H5.4l12.3 17.1Z" />
  </svg>
);

const EmailIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props} aria-hidden="true">
    <rect x="3.2" y="5.2" width="17.6" height="13.6" rx="2.8" />
    <path d="m4.5 7 7.5 6 7.5-6" />
  </svg>
);

const WhatsAppIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props} aria-hidden="true">
    <path d="M12 2.25a9.72 9.72 0 0 0-8.38 14.64L2.25 21.75l5.02-1.32A9.72 9.72 0 1 0 12 2.25Zm0 17.72a7.98 7.98 0 0 1-4.07-1.11l-.29-.17-2.98.78.8-2.9-.19-.3A7.98 7.98 0 1 1 12 19.97Zm4.38-5.99c-.24-.12-1.4-.69-1.62-.77-.22-.08-.38-.12-.54.12-.16.24-.62.77-.76.93-.14.16-.28.18-.52.06-.24-.12-1.01-.37-1.92-1.18-.71-.63-1.19-1.41-1.33-1.65-.14-.24-.02-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.47-.4-.41-.54-.42h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.69 2.58 4.1 3.62.57.25 1.02.4 1.37.51.58.18 1.1.15 1.51.09.46-.07 1.4-.57 1.6-1.12.2-.55.2-1.02.14-1.12-.06-.1-.22-.16-.46-.28Z" />
  </svg>
);

const platforms = [
  {
    name: "Email",
    theme: "email",
    icon: EmailIcon,
    handle: "cima2023.india@gmail.com",
    links: [
      { label: "Write to us", href: "mailto:cima2023.india@gmail.com" },
    ],
  },
  {
    name: "YouTube",
    theme: "youtube",
    icon: YouTubeIcon,
    handle: "@sangam_asia",
    links: [
      { label: "Channel", href: "https://www.youtube.com/@sangam_asia" },
      { label: "Channel URL", href: "https://youtube.com/@sangam_asia?si=efxKYrKMTeD1YiPQ" },
    ],
  },
  {
    name: "Facebook",
    theme: "facebook",
    icon: FacebookIcon,
    handle: "CIMA 2023",
    links: [
      { label: "Page", href: "https://www.facebook.com/profile.php?id=100093807794861" },
    ],
  },
  {
    name: "Instagram",
    theme: "instagram",
    icon: InstagramIcon,
    handle: "@sangam.asia",
    links: [
      { label: "Profile", href: "https://www.instagram.com/sangam.asia?igsh=czNoNzllbWZkYzN1" },
      { label: "Linktree", href: "https://linktr.ee/sangam.asia" },
    ],
  },
  {
    name: "X",
    theme: "x",
    icon: XIcon,
    handle: "sangam.asia",
    links: [
      { label: "Profile", href: "https://x.com/Cima_india2023" },
    ],
  },
  {
    name: "WhatsApp",
    theme: "whatsapp",
    icon: WhatsAppIcon,
    handle: "SANGAM Community",
    comingSoon: true,
    links: [{ label: "Coming Soon" }],
  },
];

const connectTranslations = {
  en: { badge: "Connect", heading: ["Social Media", "Handles"], labels: { write: "Write to us", channel: "Channel", channelUrl: "Channel URL", page: "Page", profile: "Profile", linktree: "Linktree" } },
  hi: { badge: "कनेक्ट", heading: ["सोशल मीडिया", "हैंडल"], labels: { write: "हमें लिखें", channel: "चैनल", channelUrl: "चैनल URL", page: "पेज", profile: "प्रोफ़ाइल", linktree: "लिंकट्री" } },
  bn: { badge: "সংযোগ", heading: ["সোশ্যাল মিডিয়া", "হ্যান্ডেল"], labels: { write: "আমাদের লিখুন", channel: "চ্যানেল", channelUrl: "চ্যানেল ইউআরএল", page: "পৃষ্ঠা", profile: "প্রোফাইল", linktree: "লিংকট্রি" } },
};

export default function Connect() {
  const ref = useRef(null);
  const locale = useSiteLanguage();
  const copy = connectTranslations[locale] || connectTranslations.en;

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) e.target.classList.add("visible"); }, { threshold: 0.08 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="connect-page" ref={ref}>
      <div className="container">
        <div className={`connect-page__header reveal visible`}>
          <div className="tag-badge on-light">{copy.badge}</div>
          <h2 className="display-lg">{copy.heading[0]}<br /><em>{copy.heading[1]}</em></h2>
        </div>

        <div className="connect-grid">
          {platforms.map((p, i) => {
            const Icon = p.icon;
            const linkedLabel = p.links[0].label;
            const labelText = {
              "Write to us": copy.labels.write,
              Channel: copy.labels.channel,
              "Channel URL": copy.labels.channelUrl,
              Page: copy.labels.page,
              Profile: copy.labels.profile,
              Linktree: copy.labels.linktree,
            }[linkedLabel] || linkedLabel;

            const cardContent = (
              <>
                <div className="connect-card__top">
                  <div className="connect-card__icon"><Icon size={22} strokeWidth={2.2} /></div>
                  <span className="connect-card__platform">{p.name}</span>
                </div>

                <div className="connect-card__handle">{p.handle}</div>

                <div className="connect-card__links">
                  {p.links.map((link, idx) => (
                    <span key={idx} className="connect-card__link">
                      {({
                        "Write to us": copy.labels.write,
                        Channel: copy.labels.channel,
                        "Channel URL": copy.labels.channelUrl,
                        Page: copy.labels.page,
                        Profile: copy.labels.profile,
                        Linktree: copy.labels.linktree,
                      })[link.label] || link.label}
                      {!p.comingSoon && <ArrowUpRight size={14} strokeWidth={2} />}
                    </span>
                  ))}
                </div>
              </>
            );

            const cardClassName = `connect-card connect-card--${p.theme} reveal reveal-delay-${Math.min(i + 1, 4)} visible${p.comingSoon ? " connect-card--coming-soon" : ""}`;

            return p.comingSoon ? (
              <div key={p.name} className={cardClassName} aria-label={`${p.name}, coming soon`}>
                {cardContent}
              </div>
            ) : (
              <a key={p.name} href={p.links[0].href} target="_blank" rel="noopener noreferrer" className={cardClassName}>
                {cardContent}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
