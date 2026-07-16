import Image from "next/image";
import Link from "next/link";
import { Sprout, Mail, Globe, Share2, MessageCircle, Users, Video, Handshake } from "lucide-react";

const nav = {
  About:      [{ label: "SANGAM Network", href: "/about" }, { label: "AIMA Partnership", href: "/about" }, { label: "Member Countries", href: "/about" }, { label: "Our Mission", href: "/about" }],
  Programmes: [{ label: "Film Festival 2026", href: "/programmes" }, { label: "CIMA Conference", href: "/conference" }, { label: "Exhibitions", href: "/programmes" }, { label: "SANGAM Talks", href: "/programmes" }],
  Museums:    [{ label: "Anupam Paul Museum", href: "/museums" }, { label: "Syed Gani Khan Museum", href: "/museums" }, { label: "Babulal Dahiya Museum", href: "/museums" }, { label: "PAU Museums", href: "/museums" }],
  Join:       [{ label: "Internship", href: "/join" }, { label: "Fellowship", href: "/join" }, { label: "Partner", href: "/join" }, { label: "Become a Member", href: "/join" }],
};

const socials = [
  { icon: Share2, label: "Instagram" },
  { icon: MessageCircle, label: "Twitter / X" },
  { icon: Users, label: "Facebook" },
  { icon: Video, label: "YouTube" },
  { icon: Handshake, label: "LinkedIn" },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div>
            <Link href="/" className="footer__brand">
              <div className="footer__logo-box">
                <Image src="/sangam-logo.png" alt="SANGAM logo" width={32} height={32} className="footer__logo-img" />
              </div>
              <div>
                <span className="footer__brand-name">SANGAM</span>
                <span className="footer__brand-sub">Agricultural Heritage Network</span>
              </div>
            </Link>
            <p className="footer__tagline">
              Uniting South Asia's agricultural museums, heritage sites, and farming communities
              across eight nations.
            </p>
            <div className="footer__meta">
              <a href="mailto:info@sangam-heritage.org" className="footer__meta-row">
                <Mail size={15} strokeWidth={2} /> info@sangam-heritage.org
              </a>
              <a href="https://sangam.asia" className="footer__meta-row">
                <Globe size={15} strokeWidth={2} /> sangam.asia
              </a>
            </div>
            <div className="footer__socials">
              {socials.map((s) => (
                <a key={s.label} href="#" aria-label={s.label} className="footer__social-icon">
                  <s.icon size={16} strokeWidth={2} />
                </a>
              ))}
            </div>
          </div>

          <div className="footer__links">
            {Object.entries(nav).map(([section, items]) => (
              <div key={section} className="footer__col">
                <h4 className="footer__col-title">{section}</h4>
                <ul>{items.map((item, i) => <li key={i}><Link href={item.href} className="footer__link">{item.label}</Link></li>)}</ul>
              </div>
            ))}
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copy">© {new Date().getFullYear()} SANGAM — South Asian Network of Agricultural Museums & Heritage. All rights reserved.</p>
          <div className="footer__legal">
            <a href="#" className="footer__legal-link">Privacy Policy</a>
            <a href="#" className="footer__legal-link">Terms of Use</a>
            <a href="#" className="footer__legal-link">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
