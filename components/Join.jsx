"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { GraduationCap, Microscope, Handshake, Wheat, FileText, Send, Users } from "lucide-react";
import { useSiteLanguage } from "../lib/siteLanguage";

const pdfs = {
  membership: "/pdf/Membership form SANGAM.pdf",
  fellowship: [
    "/pdf/SANGAM_FELLOWSHIP FORM.pdf",
    "/pdf/SANGAM_Fellowship Guidelines.pdf",
  ],
};

const cards = [
  {
    icon: Wheat, cls: "terracotta", type: "Membership", tagline: "Museum or Institution",
    desc: "Open to agricultural museums, heritage institutions, seed banks, tool museums, living heritage farms and any organisation engaged in preserving agricultural heritage across South Asia.",
    details: ["Museums & heritage institutions", "Seed banks & tool museums", "Living heritage farms", "Membership form / Google form attached in this section"],
    featured: false,
    formTitle: "Membership Form ",
    pdf: pdfs.membership,
    email: "info@sangam.asia",
  },
  {
    icon: Microscope, cls: "gold", type: "Fellowship", tagline: "Research, Documentation, Digital Heritage",
    desc: "Open to researchers, academics, heritage scholars, oral historians and professionals who wish to contribute to SANGAM's documentation, research and knowledge-building work.",
    details: ["Research Fellowship -- agricultural heritage, seed history, tool culture, oral traditions", "Documentation Fellowship -- oral historians, ethnographers, field researchers", "Digital Heritage Fellowship -- digital preservation, archiving, online presentation"],
    featured: true,
    formTitle: "Fellowship Form",
    pdfs: pdfs.fellowship,
    email: "info@sangam.asia",
  },
  {
    icon: GraduationCap, cls: "", type: "Internship", tagline: "Learn by Doing",
    desc: "Hands-on experience in agricultural heritage research, documentation and network management, open to students and early-career professionals.",
    details: ["Sociology & heritage studies", "History & agriculture", "Rural studies & environmental humanities", "Timeline to be updated"],
    featured: false,
    noInternship: true,
  },
  {
    icon: Handshake, cls: "terracotta", type: "Partner", tagline: "Partner Organisations",
    desc: "SANGAM welcomes partnerships with universities, NGOs, government bodies, international organisations, cultural institutions and media organisations that share our commitment to agricultural heritage preservation.",
    details: ["Academic -- joint research, student exchange, co-publication", "Programme -- co-hosting Talks, Film Festival or Exhibitions", "Documentation & media partnerships", "Government, policy & international partnerships"],
    featured: false,
  },
];

const steps = [
  { icon: FileText, title: "Step 1 -- Fill the Expression of Interest Form", desc: "Download the SANGAM Membership Expression of Interest Form from this page, fill it in with details of your institution, collection and areas of interest, and attach recent photographs of your collection or heritage site." },
  { icon: Send, title: "Step 2 -- Send Your Application", desc: "Email your completed form and photographs to info@sangam.asia with the subject line: 'SANGAM Membership Application -- [Your Institution Name]'." },
  { icon: Users, title: "Step 3 -- Connect with the SANGAM Team", desc: "A member of the SANGAM advisory team will contact you within 7 working days to discuss your membership, answer questions and guide you through next steps. Once confirmed, your institution will be profiled and featured on sangam.asia." },
];

export default function Join() {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);
  const [showInternshipAlert, setShowInternshipAlert] = useState(false);
  const [showPartnerForm, setShowPartnerForm] = useState(false);
  const [partnerForm, setPartnerForm] = useState({ email: "", subject: "", message: "" });
  const locale = useSiteLanguage();
  const copy = {
    en: { badge: "Join SANGAM", title: ["Be Part of Something", "Rooted & Lasting"], intro: "SANGAM is a living, growing network and it needs people like you. Whether you are a museum, a seed keeper, a researcher, a student, a farmer or an organisation that cares about agricultural heritage, there is a place for you in SANGAM. Agricultural heritage cannot be preserved by institutions alone -- it requires a community of scholars, farmers, students, professionals and passionate individuals working together across borders, disciplines and generations. Join us.", step: "How to Join -- Three Steps", open: "Open Positions", openText: "SANGAM periodically opens positions for coordinators, researchers, and programme officers. Check back regularly or contact us to express interest.", view: "View Open Positions" },
    hi: { badge: "संगम से जुड़ें", title: ["कुछ का हिस्सा बनें", "जड़ें और स्थायी"], intro: "संगम एक जीवंत, बढ़ता हुआ नेटवर्क है और इसमें आप जैसे लोग ज़रूरी हैं। चाहे आप किसी संग्रहालय, बीज़ रक्षक, शोधकर्ता, छात्र, किसान या कृषि विरासत के प्रति चिंतित संगठन से हों, संगम में आपका स्थान है। कृषि विरासत केवल संस्थानों द्वारा सुरक्षित नहीं की जा सकती -- इसके लिए विद्वानों, किसानों, छात्रों, पेशेवरों और भावुक लोगों का एक समुदाय चाहिए जो सीमाओं, विषयों और पीढ़ियों के पार मिलकर काम करे। हमसे जुड़ें।", step: "जुड़ने का तरीका -- तीन कदम", open: "खुले पद", openText: "संगम समय-समय पर समन्वयकों, शोधकर्ताओं और कार्यक्रम अधिकारियों के पद खोलता है। नियमित रूप से देखें या अपनाainteres व्यक्त करने के लिए हमसे संपर्क करें।", view: "खुले पद देखें" },
    bn: { badge: "সাংগমে যোগ দিন", title: ["কিছু অংশ হোন", "শিকড় ও স্থায়িত্ব"], intro: "সাংগম একটি জীবন্ত, ক্রমবর্ধমান নেটওয়ার্ক, আর আপনার মতো মানুষ এর জন্য প্রয়োজন। আপনি জাদুঘর, বীজ সংরক্ষণকারী, গবেষক, ছাত্র, কৃষক বা কৃষি ঐতিহ্য রক্ষায় আগ্রহী কোনো প্রতিষ্ঠান হোন, সাংগমে আপনার জায়গা আছে। কৃষি ঐতিহ্য শুধু প্রতিষ্ঠান দ্বারা রক্ষা করা যায় না -- এর জন্য সীমা, শৃঙ্খলা ও প্রজন্মের পার হয়ে কাজ করা জ্ঞানী, কৃষক, ছাত্র, পেশাদার এবং আবেগী মানুষের একটি সম্প্রদায় দরকার। আমাদের সাথে যোগ দিন।", step: "যোগদানের তিনটি ধাপ", open: "খোলা পদের", openText: "সাংগম সময়ে সময়ে সমন্বয়কারী, গবেষক ও প্রোগ্রাম অফিসারের পদ খোলে। নিয়মিত দেখা করুন বা আগ্রহ প্রকাশ করতে আমাদের যোগাযোগ করুন।", view: "খোলা পদ দেখুন" },
  }[locale] || { badge: "Join SANGAM", title: ["Be Part of Something", "Rooted & Lasting"], intro: "SANGAM is a living, growing network and it needs people like you. Whether you are a museum, a seed keeper, a researcher, a student, a farmer or an organisation that cares about agricultural heritage, there is a place for you in SANGAM. Agricultural heritage cannot be preserved by institutions alone -- it requires a community of scholars, farmers, students, professionals and passionate individuals working together across borders, disciplines and generations. Join us.", step: "How to Join -- Three Steps", open: "Open Positions", openText: "SANGAM periodically opens positions for coordinators, researchers, and programme officers. Check back regularly or contact us to express interest.", view: "View Open Positions" };
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold: 0.08 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const handlePartnerSubmit = (event) => {
    event.preventDefault();
    const email = partnerForm.email.trim();
    const subject = encodeURIComponent(partnerForm.subject.trim() || "Become a partner enquiry");
    const body = encodeURIComponent(
      `Email ID: ${email}\n\nSubject: ${partnerForm.subject.trim() || "Become a partner enquiry"}\n\nMessage:\n${partnerForm.message.trim() || "Interested in partnering with SANGAM."}\n\nPlease send this inquiry to: info@sangam.asia`
    );

    if (email) {
      window.location.href = `mailto:info@sangam.asia?subject=${subject}&body=${body}`;
    }

    setShowPartnerForm(false);
    setPartnerForm({ email: "", subject: "", message: "" });
  };

  return (
    <section className="join" ref={ref}>
      <div className="container">
        <div className={`join__header reveal${vis ? " visible" : ""}`}>
          <div className="tag-badge on-light">{copy.badge}</div>
          <h2 className="display-lg">{copy.title[0]}<br /><em>{copy.title[1]}</em></h2>
          <p className="body-md" style={{ marginTop: "1rem" }}>
            {copy.intro}
          </p>
        </div>

        <div className="join__grid">
          {cards.map((c, i) => {
            const isMembership = c.type === "Membership";
            const isFellowship = c.type === "Fellowship";
            const isInternship = c.type === "Internship";

            const triggerDownload = (pdfUrl, filename) => {
              const link = document.createElement("a");
              link.href = pdfUrl;
              link.download = filename;
              link.target = "_blank";
              link.rel = "noopener noreferrer";
              document.body.appendChild(link);
              link.click();
              link.remove();
            };

            const triggerMultipleDownloads = (pdfList) => {
              pdfList.forEach((pdfUrl, index) => {
                const fileName = pdfUrl.split("/").pop();
                setTimeout(() => triggerDownload(pdfUrl, fileName), index * 300);
              });
            };

            return (
              <article key={i} className={`join-card card${c.featured ? " featured" : ""} reveal reveal-delay-${i + 1}${vis ? " visible" : ""}`}>
                <div className={`join-card__icon-box icon-box ${c.cls}`}><c.icon size={22} strokeWidth={2} /></div>
                <div className="join-card__type">{c.type}</div>
                <div className="join-card__tagline">{c.tagline}</div>
                <p className="join-card__desc">{c.desc}</p>
                <ul className="join-card__details">
                  {c.details.map((d, j) => <li key={j} className="join-card__detail">{d}</li>)}
                </ul>

                {isInternship ? (
                  <div className="join-card__action">
                    <div className="join-card__download-row join-card__download-row--text">
                      <span className="join-card__form-label-inline">Internship Form</span>
                      <button
                        type="button"
                        className="join-card__cta join-card__cta--inline"
                        onClick={() => setShowInternshipAlert(true)}
                      >
                        Download
                      </button>
                    </div>
                    <p className="join-card__mail-text">
                      Fill the form and send us to: <a href="mailto:info@sangam.asia">info@sangam.asia</a>
                    </p>
                  </div>
                ) : (
                  <div className="join-card__action">
                    {isMembership ? (
                      <>
                        <div className="join-card__download-row join-card__download-row--text">
                          <span className="join-card__form-label-inline">Membership Form</span>
                          <a
                            href={c.pdf || "#"}
                            className="join-card__cta join-card__cta--inline"
                            download={c.pdf ? c.pdf.split("/").pop() : undefined}
                            onClick={(event) => {
                              if (!c.pdf) {
                                event.preventDefault();
                              }
                            }}
                          >
                            Download
                          </a>
                        </div>
                        <p className="join-card__mail-text">
                          Fill the form and send us to: <a href="mailto:info@sangam.asia">info@sangam.asia</a>
                        </p>
                      </>
                    ) : isFellowship ? (
                      <>
                        <div className="join-card__download-row join-card__download-row--text">
                          <span className="join-card__form-label-inline">Fellowship Form</span>
                          <button
                            type="button"
                            className="join-card__cta join-card__cta--inline"
                            onClick={() => triggerMultipleDownloads(c.pdfs || [])}
                          >
                            Download
                          </button>
                        </div>
                        <p className="join-card__mail-text">
                          Fill the form and send us to: <a href="mailto:info@sangam.asia">info@sangam.asia</a>
                        </p>
                      </>
                    ) : (
                      <>
                        <div className="join-card__download-row join-card__download-row--text">
                          <span className="join-card__form-label-inline">Become a partner</span>
                          <button
                            type="button"
                            className="join-card__cta join-card__cta--inline"
                            onClick={() => setShowPartnerForm(true)}
                          >
                            Open form
                          </button>
                        </div>
                        <p className="join-card__mail-text">
                          Share your interest and send a partnership request to <a href="mailto:info@sangam.asia">info@sangam.asia</a>
                        </p>
                      </>
                    )}
                  </div>
                )}
              </article>
            );
          })}
        </div>

        {showInternshipAlert && (
          <div className="join-card__modal-backdrop" onClick={() => setShowInternshipAlert(false)}>
            <div className="join-card__modal" role="alertdialog" aria-modal="true" onClick={(event) => event.stopPropagation()}>
              <div className="join-card__modal-header">Internship</div>
              <div className="join-card__modal-body">Internship is currently not available.</div>
              <button type="button" className="join-card__modal-close" onClick={() => setShowInternshipAlert(false)}>Close</button>
            </div>
          </div>
        )}

        {showPartnerForm && (
          <div className="join-card__modal-backdrop" onClick={() => setShowPartnerForm(false)}>
            <div className="join-card__modal join-card__modal--wide" role="dialog" aria-modal="true" onClick={(event) => event.stopPropagation()}>
              <div className="join-card__modal-header">Become a partner</div>
              <form className="join-card__partner-form" onSubmit={handlePartnerSubmit}>
                <label className="join-card__partner-field">
                  <span>Email ID</span>
                  <input
                    type="email"
                    value={partnerForm.email}
                    onChange={(event) => setPartnerForm((prev) => ({ ...prev, email: event.target.value }))}
                    placeholder="your@email.com"
                    required
                  />
                </label>

                <label className="join-card__partner-field">
                  <span>Subject</span>
                  <input
                    type="text"
                    value={partnerForm.subject}
                    onChange={(event) => setPartnerForm((prev) => ({ ...prev, subject: event.target.value }))}
                    placeholder="Partnership enquiry"
                    required
                  />
                </label>

                <label className="join-card__partner-field">
                  <span>Message</span>
                  <textarea
                    value={partnerForm.message}
                    onChange={(event) => setPartnerForm((prev) => ({ ...prev, message: event.target.value }))}
                    placeholder="Tell us about your institution and partnership idea."
                    rows={5}
                  />
                </label>

                <label className="join-card__partner-field join-card__partner-field--file">
                  <span>Attachment</span>
                  <input type="file" />
                </label>

                <div className="join-card__partner-footer">
                  <div className="join-card__partner-email">SANGAM email ID: <a href="mailto:info@sangam.asia">info@sangam.asia</a></div>
                  <div className="join-card__partner-actions">
                    <button type="button" className="join-card__modal-close join-card__modal-close--secondary" onClick={() => setShowPartnerForm(false)}>Cancel</button>
                    <button type="submit" className="join-card__modal-close">Send by email</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* How to join */}
        <div className={`reveal reveal-delay-2${vis ? " visible" : ""}`} style={{ marginBottom: "3.2rem" }}>
          <div className="tag-badge on-light" style={{ margin: "0 auto 1.4rem" }}>{copy.step}</div>
          <div className="heritage__projects join__steps-grid">
            {steps.map((s, i) => (
              <article className="heritage-card card" key={i}>
                <div className="icon-box terracotta" style={{ width: 42, height: 42, marginBottom: "1rem" }}>
                  <s.icon size={20} strokeWidth={2} />
                </div>
                <h3 className="heritage-card__title" style={{ fontSize: "1.02rem" }}>{s.title}</h3>
                <p className="heritage-card__desc">{s.desc}</p>
              </article>
            ))}
          </div>
        </div>

        <div className={`join__positions reveal reveal-delay-2${vis ? " visible" : ""}`}>
          <div className="join__positions-text">
            <h3>{copy.open}</h3>
            <p>{copy.openText}</p>
          </div>
          <Link href="/no-positions" className="join__positions-btn">{copy.view}</Link>
        </div>
      </div>
    </section>
  );
}
