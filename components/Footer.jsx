import Image from "next/image";

const nav = {
  About:      ["SANGAM Network", "AIMA Partnership", "Member Countries", "Our Mission"],
  Programmes: ["Film Festival 2026", "CIMA Conference", "Exhibitions", "SANGAM Talks"],
  Museums:    ["Anupam Paul Museum", "Syed Gani Khan Museum", "Babulal Dahiya Museum", "PAU Museums"],
  Join:       ["Internship", "Fellowship", "Partner", "Become a Member"],
};

const flags = ["🇮🇳","🇵🇰","🇧🇩","🇳🇵","🇱🇰","🇧🇹","🇦🇫","🇲🇻"];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div>
            <a href="#" className="footer__brand">
              <div className="footer__logo-box">
                <Image src="/sangam-logo.png" alt="SANGAM" width={38} height={38} className="footer__logo" />
              </div>
              <div>
                <span className="footer__brand-name">SANGAM</span>
                <span className="footer__brand-sub">Agricultural Heritage Network</span>
              </div>
            </a>
            <p className="footer__tagline">
              Uniting South Asia's agricultural museums, heritage sites, and farming communities
              across eight nations.
            </p>
            <div className="footer__flags">
              {flags.map((f, i) => <span key={i} className="footer__flag">{f}</span>)}
            </div>
          </div>

          <div className="footer__links">
            {Object.entries(nav).map(([section, links]) => (
              <div key={section} className="footer__col">
                <h4 className="footer__col-title">{section}</h4>
                <ul>{links.map(l => <li key={l}><a href="#" className="footer__link">{l}</a></li>)}</ul>
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
