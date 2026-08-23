"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight, Users, Landmark, BookOpen, Sprout,
  Info, Mic2, Building2, Archive, Handshake, Mail,
} from "lucide-react";
import NetworkMap from "./NetworkMap";

const headlines = [
  { l1: "Where Soil Meets", l2: "Memory" },
  { l1: "Harvest Stories,", l2: "Living Roots" },
  { l1: "Eight Nations,", l2: "One Earth" },
  { l1: "Documenting the", l2: "Living Land" },
];

const quickLinks = [
  { href: "/about", icon: Info, title: "About SANGAM", desc: "Our mission, the AIMA partnership, and the network's founding story." },
  { href: "/conference", icon: Mic2, title: "CIMA Conference", desc: "The flagship conference on agricultural and intangible heritage." },
  { href: "/programmes", icon: Sprout, title: "Programmes", desc: "The Film Festival, exhibitions, and SANGAM Talks." },
  { href: "/museums", icon: Building2, title: "Museums", desc: "Meet the four member museums preserving farming heritage." },
  { href: "/heritage", icon: Archive, title: "Heritage Projects", desc: "Documentation work underway across the subcontinent." },
  { href: "/join", icon: Handshake, title: "Join SANGAM", desc: "Internships, fellowships, partnerships, and membership." },
  { href: "/contact", icon: Mail, title: "Contact", desc: "Reach the SANGAM team or ask a question." },
  { href: "/connect", icon: Mail, title: "Connect", desc: "Follow SANGAM across our social media channels." },
];

const galleryItems = [
  { src: "/1.jpeg", title: "Rural seed exchange", featured: true },
  { src: "/2.jpeg", title: "Harvest heritage" },
  { src: "/3.jpeg", title: "Museum collection" },
  { src: "/4.jpeg", title: "Festival ritual" },
  { src: "/5.jpeg", title: "Family farming" },
  { src: "/6.jpeg", title: "Sacred fields" },
  { src: "/7.jpeg", title: "Memory in motion" },
];

export default function Hero() {
  const [idx, setIdx] = useState(0);
  const [fade, setFade] = useState(false);
  const [galleryVisible, setGalleryVisible] = useState(false);

  useEffect(() => {
    const t = setInterval(() => {
      setFade(true);
      setTimeout(() => { setIdx((p) => (p + 1) % headlines.length); setFade(false); }, 380);
    }, 5000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    setGalleryVisible(true);
  }, []);

  const h = headlines[idx];

  return (
    <>
      <section className="hero">
        <div className="hero__pattern" />

        <div className="hero__inner">
          <div>
            <div className="tag-badge terracotta">
              <span className="tag-badge__dot" />
              South Asian Agricultural Heritage Network
            </div>

            <h1 className="hero__headline" style={{ opacity: fade ? 0 : 1, transition: "opacity 0.35s ease" }}>
              {h.l1}<br /><em>{h.l2}</em>
            </h1>

            <p className="hero__sub">
              SANGAM — meaning confluence — unites agricultural museums, farmers, and scholars
              across eight South Asian nations to preserve the living heritage of the subcontinent's
              farming traditions.
            </p>

            <div className="hero__actions">
              <Link href="/join" className="btn btn-terracotta">
                Join the Network
                <ArrowRight size={16} strokeWidth={2} />
              </Link>
              <Link href="/about" className="btn btn-outline">Explore the Network</Link>
            </div>
          </div>

          <div className="keeper-card">
            <div className="keeper-card__top">
              <span className="keeper-card__top-label">Featured Keeper</span>
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
                  For more than twenty years, Syed Ghani Khan has conserved native rice varieties on his farm,
                  keeping a living seed bank that nourishes his local museum and community.
                </p>
                <Link href="/museums" className="keeper-card__link">
                  Read their story <ArrowRight size={14} strokeWidth={2} />
                </Link>
              </div>
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
              Featured Stories
            </div>
            <h2 className="display-lg">A Curated Gallery<br /><em>of Heritage Moments</em></h2>
            <p className="body-lg" style={{ maxWidth: "680px", marginTop: "1rem", color: "var(--soil)" }}>
              Eight images selected from the heart of SANGAM’s stories, styled to present a premium, contemporary
              gallery experience across every screen size.
            </p>
          </div>

          <div className="gallery-showcase__grid">
            {galleryItems.map((item, index) => (
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
              Explore SANGAM
            </div>
            <h2 className="display-lg">Find Your Way<br /><em>Around the Network</em></h2>
          </div>
          <div className="quicklinks__grid">
            {quickLinks.map((q) => (
              <Link href={q.href} key={q.href} className="quicklink-card">
                <div className="quicklink-card__icon icon-box">
                  <q.icon size={20} strokeWidth={2} />
                </div>
                <div className="quicklink-card__title">{q.title}</div>
                <p className="quicklink-card__desc">{q.desc}</p>
                <span className="quicklink-card__go">Visit page <ArrowRight size={13} strokeWidth={2} /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
