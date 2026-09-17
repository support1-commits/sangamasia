"use client";

import dynamic from "next/dynamic";
import { useSiteLanguage } from "../lib/siteLanguage";

const NetworkMapLeaflet = dynamic(() => import("./NetworkMapLeaflet"), {
  ssr: false,
});

const legendBase = [
  { label: "Network Members", dot: "#f27e47" },
  { label: "Associate Network Members", dot: "#d4a24c" },
  { label: "Outreach", dot: "#9a9a9a" },
];

const networkMapTranslations = {
  en: { badge: "Sangam Network", heading: ["South Asia Connected", "by Shared Heritage"], description: "An interactive map of the SANGAM network — Network Members and Associate Network Members across South and Southeast Asia, and Outreach members extending the network's reach to Japan, Korea, China, Africa and South America.", legend: ["Network Members", "Associate Network Members", "Outreach"] },
  hi: { badge: "संगम नेटवर्क", heading: ["दक्षिण एशिया जुड़ा हुआ", "साझा विरासत से"], description: "संगम नेटवर्क का इंटरएक्टिव मानचित्र — दक्षिण और दक्षिण-पूर्व एशिया में नेटवर्क सदस्य और एसोसिएट नेटवर्क सदस्य, और जापान, कोरिया, चीन, अफ्रीका और दक्षिण अमेरिका तक नेटवर्क का विस्तार करने वाले आउटरीच सदस्य।", legend: ["नेटवर्क सदस्य", "एसोसिएट नेटवर्क सदस्य", "आउटरीच"] },
  bn: { badge: "সাংগম নেটওয়ার্ক", heading: ["দক্ষিণ এশিয়া সংযুক্ত", "সাম্বি ঐতিহ্যের মাধ্যমে"], description: "সাংগম নেটওয়ার্কের ইন্টারঅ্যাকটিভ মানচিত্র — দক্ষিণ ও দক্ষিণ-পূর্ব এশিয়ার নেটওয়ার্ক সদস্য ও এসোসিয়েট নেটওয়ার্ক সদস্য, এবং জাপান, কোরিয়া, চীন, আফ্রিকা ও দক্ষিণ আমেরিকার দিকে সম্প্রসারিত outreach সদস্য।", legend: ["নেটওয়ার্ক সদস্য", "এসোসিয়েট নেটওয়ার্ক সদস্য", "আউটরিচ"] },
};

export default function NetworkMap() {
  const locale = useSiteLanguage();
  const copy = networkMapTranslations[locale] || networkMapTranslations.en;
  const legend = copy.legend.map((label, i) => ({ label, dot: legendBase[i].dot }));

  return (
    <section className="network-map">
      <div className="container">
        <div className="network-map__header">
          <div className="tag-badge on-light" style={{ marginBottom: "1rem" }}>
            <span className="tag-badge__dot" />
            {copy.badge}
          </div>
          <h2 className="display-lg">{copy.heading[0]}<br /><em>{copy.heading[1]}</em></h2>
          <p className="body-lg network-map__description">{copy.description}</p>
          <div className="network-map__legend">
            {legend.map((l) => (
              <span className="network-map__legend-item" key={l.label}>
                <span className="network-map__legend-dot" style={{ background: l.dot }} />
                {l.label}
              </span>
            ))}
          </div>
        </div>

        <div className="network-map__card">
          <NetworkMapLeaflet />
        </div>
      </div>
    </section>
  );
}
