"use client";

import { useSiteLanguage } from "../lib/siteLanguage";

const groups = [
  {
    id: "member",
    label: "Network Members",
    type: "active",
    intro: "Member nations, home to SANGAM's museums and heritage keepers.",
    rows: [
      { country: "India", note: "Founding home to the largest concentration of SANGAM member museums and heritage keepers." },
      { country: "Nepal", note: "Heritage institutions and seed conservation organisations engaged with the network." },
      { country: "Sri Lanka", note: "Agricultural heritage documentation and museum partnerships in development." },
      { country: "Bangladesh", note: "Connections with agricultural museums, rice variety conservators and rural heritage institutions." },
      { country: "Pakistan", note: "In dialogue with agricultural heritage institutions — membership in development." },
      { country: "Bhutan", note: "Documentation of traditional Bhutanese farming practices and seed heritage underway." },
      { country: "Afghanistan", note: "Connections with agricultural heritage preservation communities." },
      { country: "Maldives", note: "Engagement with traditional island farming and fishing heritage communities." }
  
    ],
  },
  {
    id: "outreach",
    label: "Outreach",
    type: "pending",
    intro: "SANGAM's reach extends beyond South Asia to outreach members across these regions.",
    rows: [
      { country: "Africa", note: "Outreach member — engagement with agricultural heritage communities across the continent." },
      { country: "South America", note: "Outreach member — engagement with agricultural heritage communities across the continent." },
      { country: "Thailand", note: "Network member nation." },
      { country: "Indonesia", note: "Network member nation." },
      { country: "Japan", note: "Outreach member." },
      { country: "Korea", note: "Outreach member." },
      { country: "China", note: "Outreach member." },
    ],
  },
];

export default function CountryStatus() {
  const locale = useSiteLanguage();
  const tableLabels = {
    en: { country: "Country / Region", notes: "Notes", status: "Network Status", member: "Member", associate: "Associate", outreach: "Outreach" },
    hi: { country: "देश / क्षेत्र", notes: "नोट्स", status: "नेटवर्क स्थिति", member: "सदस्य", associate: "सहयोगी", outreach: "आउटरीच" },
    bn: { country: "দেশ / অঞ্চল", notes: "নোট", status: "নেটওয়ার্ক স্ট্যাটাস", member: "সদস্য", associate: "সহযোগী", outreach: "আউটরিচ" },
    ta: { country: "தேசம் / பகுதி", notes: "குறிப்புகள்", status: "நெட்வொர்க் நிலை", member: "உறுப்பினர்", associate: "சேர்க்கை", outreach: "விரிவாக்கம்" },
  };
  const copy = {
    en: { badge: "Network Countries", title: ["Status Across", "the Network"], intro: "India, Nepal, Sri Lanka, Bangladesh, Pakistan, Bhutan, Afghanistan, Maldives, Thailand and Indonesia are Network Members. SANGAM's outreach extends beyond South Asia to Africa, South America, Japan, Korea and China." },
    hi: { badge: "नेटवर्क देश", title: ["स्थिति", "नेटवर्क में"], intro: "भारत, नेपाल, श्रीलंका, बांग्लादेश, पाकिस्तान, भूटान, अफगानिस्तान, मालदीव, थाईलैंड और इंडोनेशिया नेटवर्क सदस्य हैं। संगम का विस्तार दक्षिण एशिया से आगे अफ्रीका, दक्षिण अमेरिका, जापान, कोरिया और चीन तक है।" },
    bn: { badge: "নেটওয়ার্ক দেশ", title: ["স্ট্যাটাস", "নেটওয়ার্কে"], intro: "ভারত, নেপাল, শ্রীলঙ্কা, বাংলাদেশ, পাকিস্তান, ভুটান, আফগানিস্তান, মালদ্বীপ, থাইল্যান্ড ও ইন্দোনেশিয়া নেটওয়ার্ক সদস্য। সাংগমের outreach দক্ষিণ এশিয়ার বাইরে আফ্রিকা, দক্ষিণ আমেরিকা, জাপান, কোরিয়া ও চীন পর্যন্ত বিস্তৃত।" },
    ta: { badge: "நெட்வொர்க் நாடுகள்", title: ["நிலை", "நெட்வொர்க்கில்"], intro: "இந்தியா, நேபாளம், இலங்கை, வங்காளதேசம், பாகிஸ்தான், Bhutan, ஆப்கானிஸ்தான், மலேசியா, தாய்லாந்து மற்றும் இந்தோனேசியா நெட்வொர்க் உறுப்பினர்களாக உள்ளன. சாங்கமின் outreach தெற்காசியாவுக்கு அப்பால் ஆப்பிரிக்கா, தென் அமெரிக்கா, ஜப்பான், கொரியா மற்றும் சீனா வரை பரவியுள்ளது." },
  }[locale] || {
    badge: "Network Countries",
    title: ["Status Across", "the Network"],
    intro: "India, Nepal, Sri Lanka, Bangladesh, Pakistan, Bhutan, Afghanistan, Maldives, Thailand and Indonesia are Network Members. SANGAM's outreach extends beyond South Asia to Africa, South America, Japan, Korea and China.",
  };
  const labels = tableLabels[locale] || tableLabels.en;

  return (
    <section className="status-table-wrap">
      <div className="container">
        <div className="status-table-header">
          <div className="tag-badge on-light">
            <span className="tag-badge__dot" />
            {copy.badge}
          </div>
          <h2 className="display-lg">{copy.title[0]}<br /><em>{copy.title[1]}</em></h2>
          <p className="body-md" style={{ marginTop: "1rem" }}>
            {copy.intro}
          </p>
        </div>

        {groups.map((g) => (
          <div className="status-table-group" key={g.id}>
            <div className="status-table-group__header">
              <span className={`status-pill ${g.type}`}>
                <span className="status-pill__dot" />
                {g.label}
              </span>
              <p className="body-sm">{g.intro}</p>
            </div>
            <div className="status-table-scroll">
              <table className="status-table">
                <thead>
                  <tr>
                    <th>{labels.country}</th>
                    <th>{labels.notes}</th>
                    <th>{labels.status}</th>
                  </tr>
                </thead>
                <tbody>
                  {g.rows.map((r) => (
                    <tr key={r.country}>
                      <td style={{ fontWeight: 700 }}>{r.country}</td>
                      <td className="body-sm">{r.note}</td>
                      <td>
                        <span className={`status-pill ${g.type}`}>
                          <span className="status-pill__dot" />
                          {g.label === "Network Members" ? labels.member : labels.outreach}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
