"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sprout } from "lucide-react";

const links = [
  { label: "About", href: "/about" },
  { label: "Conference", href: "/conference" },
  { label: "Programmes", href: "/programmes" },
  { label: "Museums", href: "/museums" },
  { label: "Heritage", href: "/heritage" },
  { label: "Join", href: "/join" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav className={`navbar${scrolled ? " scrolled" : ""}`}>
      <div className="navbar__inner">
        <Link href="/" className="navbar__brand">
          <div className="navbar__logo-box">
            <Image src="/sangam-logo.png" alt="SANGAM logo" width={32} height={32} className="navbar__logo-img" />
          </div>
          <div className="navbar__brand-text">
            <span className="navbar__brand-name">SANGAM</span>
            <span className="navbar__brand-sub">Heritage Network</span>
          </div>
        </Link>

        <ul className="navbar__links">
          {links.map((l) => (
            <li key={l.label}>
              <Link href={l.href} className={`navbar__link${pathname === l.href ? " active" : ""}`}>
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link href="/join" className="navbar__cta">Register Now</Link>

        <button className={`navbar__burger${open ? " open" : ""}`} onClick={() => setOpen(!open)} aria-label="Toggle menu">
          <span /><span /><span />
        </button>
      </div>


      <div className={`navbar__drawer${open ? " open" : ""}`}>
        <div className="navbar_body">
          {links.map((l) => (
            <Link key={l.label} href={l.href} className="navbar__drawer-link" onClick={() => setOpen(false)}>
              {l.label}
            </Link>
          ))}
          <Link href="/join" className="navbar__drawer-cta" onClick={() => setOpen(false)}>Register Now</Link>
        </div>
      </div>
    </nav>
  );
}
