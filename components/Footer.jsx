import Image from "next/image";

const footerLinks = {
  About: ["SANGAM Network", "AIMA", "Member Countries", "Our Mission"],
  Programmes: ["Film Festival 2026", "CIMA Conference", "Exhibitions", "SANGAM Talks"],
  Museum: ["Anupam Paul Rice Museum", "Syed Gani Khan Museum", "Babulal Dahiya Museum", "PAU Museums"],
  Join: ["Internship", "Fellowship", "Partner", "Become a Member"],
};

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        {/* Top row */}
        <div className="footer__top">
          {/* Brand */}
          <div className="footer__brand">
            <div className="footer__logo-wrap">
              <Image src="/sangam-logo.png" alt="SANGAM" width={44} height={44} className="footer__logo" />
            </div>
            <div className="footer__brand-text">
              <span className="footer__brand-name">SANGAM</span>
              <span className="footer__brand-tag">Agricultural Heritage Network</span>
            </div>
          </div>

          {/* Links */}
          <div className="footer__links">
            {Object.entries(footerLinks).map(([section, links]) => (
              <div className="footer__link-col" key={section}>
                <h4 className="footer__link-heading">{section}</h4>
                <ul>
                  {links.map((link) => (
                    <li key={link}>
                      <a href="#" className="footer__link">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="footer__divider" />

        {/* Bottom */}
        <div className="footer__bottom">
          <p className="footer__copy">
            © {new Date().getFullYear()} SANGAM — South Asian Network of Agricultural Museums & Heritage. All rights reserved.
          </p>
          <div className="footer__bottom-links">
            <a href="#" className="footer__bottom-link">Privacy Policy</a>
            <a href="#" className="footer__bottom-link">Terms of Use</a>
            <a href="#" className="footer__bottom-link">Sitemap</a>
          </div>
          <div className="footer__countries-strip">
            {["🇮🇳","🇵🇰","🇧🇩","🇳🇵","🇱🇰","🇧🇹","🇦🇫","🇲🇻"].map((flag, i) => (
              <span key={i} className="footer__flag">{flag}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
