"use client";
import { useEffect, useRef, useState } from "react";
import { Images, Mic, Landmark, MapPin, ArrowRight, ExternalLink, Calendar } from "lucide-react";
import { useSiteLanguage } from "../lib/siteLanguage";

const talks = [
  { title: "Virasat -- Traditional Seeds and Their Role in Sustainable Farming", date: "21 June 2024, Friday, 3:00 PM", speakers: "Dr. Anupam Paul, Crop Conserver & Proponent of Sustainable Agriculture, former Additional Director of Agriculture (P), Directorate of Agriculture, Govt of West Bengal, in conversation with Mr Surajit Sarkar, Coordinator, SANGAM and Mr Vijay Pratap Singh Aditya, CEO & Co-founder, Ekgaon Group and The Heritage Foundation", poster: "/lecture/1.jpeg", link: null },
  { title: "Virasat -- Common Property Resources: Heritage of India's Pastoral Lands, Pastoralists and Traditions", date: "11 September 2023, Monday, 3:00 PM", speakers: "Dr. P K Biswas, Vice Chancellor, Jagran Lakecity University, Bhopal in conversation with Mr. Vijay Singh Aditya, CEO & Co-founder, Ekgaon Group and The Heritage Foundation", poster: "/lecture/2.jpeg", link: "https://youtu.be/W-YfhWYCUD8?si=CET6HzQfqALZrAqt" },
  { title: "Chunauti -- Saving Soil for the Future: Lessons from Traditions", date: "7 July 2023, Friday, 3:00 PM", speakers: "Dr. Sultan Ahmed Ismail, Member, State Planning Commission, Government of Tamil Nadu, President of Gandhi Ashram, Thiruchengode in conversation with Mr. Surajit Sarkar, Vice President, AIMA", poster: null, link: "https://youtu.be/rF20y2uK6qo?si=jOtYq_OLLEVaPBPR" },
  { title: "Virasat -- Pre-Canal Agriculture in Punjab: Crops, Traditions and Practices", date: "21 September 2023, Thursday, 3:00 PM", speakers: "Mr. Umendra Dutt, Founder, Kheti Virasat Mission, Faridkot, Punjab in conversation with Ms. Nerupama Y Modwel, Director, Intangible Heritage Division, INTACH, New Delhi", poster: "/lecture/5.jpeg", link: "https://youtu.be/3WJEzAs_YVo?si=jWpe3HtM5SDsRYMV" },
];

const defaultTalkPoster = "/lecture/sangam-talk-default.svg";

export default function Programmes() {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);
  const locale = useSiteLanguage();
  const copy = {
    en: { badge: "Programmes & Events", title: ["Heritage in", "Action"], intro: "SANGAM is hosting several events and programmes to expand its network, reaching out to people from cities to the hinterland.", upcoming: "Upcoming Event", filmTitle: "SANGAM Agriculture Heritage Film Festival", festivalText: "SANGAM is organising a three-day agricultural film festival across India...", exhibitions: "Exhibitions", talks: "SANGAM Expert Lecture Series" },
    hi: { badge: "कार्यक्रम और कार्यक्रम", title: ["विरासत", "क्रिया में"], intro: "संगम अपनी नेटवर्क का विस्तार करने के लिए कई कार्यक्रम और आयोजन आयोजित कर रहा है, शहरों से लेकर ग्रामीण क्षेत्रों तक लोगों तक पहुँच रहा है।", upcoming: "आगामी कार्यक्रम", filmTitle: "संगम कृषि विरासत फिल्म फेस्टिवल", festivalText: "संगम भारत भर में तीन दिवसीय कृषि फिल्म फेस्टिवल आयोजित कर रहा है...", exhibitions: "प्रदर्शनी", talks: "संगम विशेषज्ञ व्याख्यान श्रृंखला" },
    bn: { badge: "প্রোগ্রাম ও ইভেন্ট", title: ["ঐতিহ্য", "ক্রিয়ায়"], intro: "সাংগম তার নেটওয়ার্ক বাড়াতে বিভিন্ন অনুষ্ঠান ও প্রোগ্রাম আয়োজন করছে, শহর থেকে পল্লী পর্যন্ত মানুষকে পৌঁছাচ্ছে।", upcoming: "আসন্ন ইভেন্ট", filmTitle: "সাংগম কৃষি ঐতিহ্য চলচ্চিত্র উৎসব", festivalText: "সাংগম ভারতজুড়ে তিনদিনের কৃষি চলচ্চিত্র উৎসব আয়োজন করছে...", exhibitions: "এক্সিবিশন", talks: "সাংগম বিশেষজ্ঞ বক্তৃতা সিরিজ" },
  }[locale] || { badge: "Programmes & Events", title: ["Heritage in", "Action"], intro: "SANGAM is hosting several events and programmes to expand its network, reaching out to people from cities to the hinterland.", upcoming: "Upcoming Event", filmTitle: "SANGAM Agriculture Heritage Film Festival", festivalText: "SANGAM is organising a three-day agricultural film festival across India...", exhibitions: "Exhibitions", talks: "SANGAM Expert Lecture Series" };
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold: 0.08 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="programmes" ref={ref}>
      <div className="container">
        <div className={`programmes__header reveal${vis ? " visible" : ""}`}>
          <div className="tag-badge on-light">{copy.badge}</div>
          <h2 className="display-lg">{copy.title[0]}<br /><em>{copy.title[1]}</em></h2>
          <p className="body-md" style={{ marginTop: "1rem", maxWidth: 640 }}>
            {copy.intro}
          </p>
        </div>

        {/* Upcoming: Film Festival */}
        <div className={`festival-block reveal reveal-delay-1${vis ? " visible" : ""}`}>
          <div className="festival-block__top">
            <div className="festival-block__top-left">
              <div className="tag-badge terracotta">{copy.upcoming}</div>
              <div className="festival-block__title">{copy.filmTitle}</div>
              <div className="festival-block__meta">
                To celebrate National Farmers' Day (Kisan Diwas), 23 December 2026 -- at multiple
                venues across India (venue names to be updated)
              </div>
            </div>
            <div className="festival-block__date-box">
              <div className="festival-block__date-day">21-23</div>
              <div className="festival-block__date-month">Dec 2026</div>
            </div>
          </div>
          <p className="body-md" style={{ marginBottom: "1.2rem" }}>
            SANGAM is organising a three-day agricultural film festival across India, welcoming
            filmmakers, farmers, individuals and documentary makers to present their stories
            through films focused on the rich heritage of farming, villages, folklore, folk musical
            performance, cultural shows, harvest festivals and other events related to agriculture
            -- as an effort to conserve and preserve this beautiful heritage. This festival is a way
            to engage with the community of farmers, museum curators, filmmakers, activists and
            individuals working to preserve agricultural heritage.
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", color: "var(--muted-blue)", fontSize: "0.85rem", fontWeight: 600 }}>
            <Calendar size={15} strokeWidth={2} /> Schedule -- TBD (to be declared)
          </div>
        </div>

        {/* Exhibitions */}
        <div className={`reveal reveal-delay-2${vis ? " visible" : ""}`} style={{ marginBottom: "3rem" }}>
          <div className="tag-badge on-light"><Images size={13} /> {copy.exhibitions}</div>
          <p className="body-md" style={{ maxWidth: 720, marginBottom: "1.8rem" }}>
            SANGAM organises pan-South Asia pop-up and travelling year-round exhibitions that
            showcase Agri Museum posters, artefacts, handicrafts and photographic documentation.
            Exhibitions take place at different venues over the course of a year and are open to
            everyone -- connecting villages and small farming communities to a larger audience,
            where every piece of art and artefact helps revive dying agricultural heritage.
          </p>
          <div className="programmes__grid" style={{ marginBottom: "2rem" }}>
            <article className="prog-card card">
              <div className="prog-card__top">
                <span className="prog-card__icon-box icon-box gold"><Images size={20} strokeWidth={2} /></span>
                <span className="prog-card__badge">Ongoing</span>
              </div>
              <div className="prog-card__cat">Exhibition</div>
              <h3 className="prog-card__title">Pop-Up Exhibitions</h3>
              <p className="prog-card__desc">
                Short-duration, high-impact displays set up quickly in public spaces like university
                campuses, community centres and cultural festivals -- bringing the collections of
                SANGAM member museums directly to communities that may never visit a museum in
                person. Each features high-quality printed panels, seed displays, tool replicas and
                storytelling materials sourced from member museums, designed to spark curiosity and
                connect urban audiences with agricultural heritage.
              </p>
            </article>
            <article className="prog-card card">
              <div className="prog-card__top">
                <span className="prog-card__icon-box icon-box terracotta"><Images size={20} strokeWidth={2} /></span>
                <span className="prog-card__badge">Ongoing</span>
              </div>
              <div className="prog-card__cat">Exhibition</div>
              <h3 className="prog-card__title">Travelling Exhibitions</h3>
              <p className="prog-card__desc">
                Larger, multi-venue exhibitions that travel across cities and regions over weeks or
                months, allowing SANGAM to build sustained public engagement with agricultural
                heritage themes across multiple locations.
              </p>
            </article>
          </div>
          <div style={{ padding: "1.6rem", border: "1px dashed var(--border-brown)", borderRadius: "var(--radius-lg)", textAlign: "center" }}>
            <p className="body-sm">
              Photo gallery placeholder -- around 30-35 photographs from the Agri-Heritage exhibition
              held at Shoolini during CIMA 2023 will be posted here, with further exhibitions added
              as they take place.
            </p>
          </div>
        </div>

        {/* SANGAM Talks */}
        <div className={`reveal reveal-delay-2${vis ? " visible" : ""}`} style={{ marginBottom: "3.5rem" }}>
          <div className="tag-badge on-light"><Mic size={13} /> {copy.talks}</div>
          <p className="body-md" style={{ maxWidth: 720, marginBottom: "1.8rem" }}>
            A podcast series of informative lectures and curated talks by historians, farmers,
            curators, researchers and academicians on topics related to oral history and
            agricultural heritage -- an effort to bring lived knowledge systems into the public
            domain. Conducted both online and in-person, with an expert speaker invited to talk in
            detail on each topic. SANGAM Talks recorded so far include:
          </p>
          <div className="talks-grid">
            {talks.map((t, i) => (
              <article className="talk-card" key={i}>
                <div className="talk-card__poster">
                  <img src={t.poster || defaultTalkPoster} alt={t.title} loading="lazy" />
                  <span className="talk-card__poster-badge">SANGAM Talk</span>
                </div>
                <div className="talk-card__body">
                  <h3 className="heritage-card__title" style={{ fontSize: "1.05rem" }}>{t.title}</h3>
                  <p className="body-sm" style={{ marginBottom: "0.6rem" }}>{t.date}</p>
                  <p className="heritage-card__desc">{t.speakers}</p>
                  {t.link ? (
                    <a href={t.link} target="_blank" rel="noopener noreferrer" className="prog-card__link">
                      Watch <ExternalLink size={13} strokeWidth={2} />
                    </a>
                  ) : (
                    <span className="talk-card__pending">Recording to be added</span>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Conference summary card */}
        <div className={`programmes__grid reveal reveal-delay-3${vis ? " visible" : ""}`}>
          <article className="prog-card card">
            <div className="prog-card__top">
              <span className="prog-card__icon-box icon-box"><Landmark size={20} strokeWidth={2} /></span>
              <span className="prog-card__badge">Foundational</span>
            </div>
            <div className="prog-card__cat">Conference</div>
            <h3 className="prog-card__title">CIMA Conference</h3>
            <p className="prog-card__desc">
              CIMA was the foundational ground of the SANGAM network -- a well-arranged event that
              brought together academicians, historians, practitioners, speakers, activists and
              international museum experts to spread knowledge on agricultural heritage and museum
              studies.
            </p>
            <div className="prog-card__footer">
              <span className="prog-card__location"><MapPin size={13} strokeWidth={2} /> Solan & Ludhiana, India</span>
              <a href="/conference" className="prog-card__link">Full conference details <ArrowRight size={14} strokeWidth={2} /></a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
