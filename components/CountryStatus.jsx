const rows = [
  { country: "India", note: "Founding & primary member nation — home to the largest concentration of SANGAM member museums and heritage keepers.", status: "Active Member", type: "active" },
  { country: "Nepal", note: "Heritage institutions and seed conservation organisations engaged with the network.", status: "Associate", type: "identified" },
  { country: "Sri Lanka", note: "Agricultural heritage documentation and museum partnerships in development.", status: "Associate", type: "identified" },
  { country: "Bangladesh", note: "Connections with agricultural museums, rice variety conservators and rural heritage institutions.", status: "Associate", type: "identified" },
  { country: "Pakistan", note: "Outreach and dialogue with agricultural heritage institutions — membership in development.", status: "Outreach", type: "pending" },
  { country: "Bhutan", note: "Documentation of traditional Bhutanese farming practices and seed heritage underway.", status: "Outreach", type: "pending" },
  { country: "Afghanistan", note: "Connections with agricultural heritage preservation communities.", status: "Outreach", type: "pending" },
  { country: "Maldives", note: "Engagement with traditional island farming and fishing heritage communities.", status: "Outreach", type: "pending" },
];

export default function CountryStatus() {
  return (
    <section className="status-table-wrap">
      <div className="container">
        <div className="status-table-header">
          <div className="tag-badge on-light">
            <span className="tag-badge__dot" />
            Network Countries
          </div>
          <h2 className="display-lg">Status Across<br /><em>Eight Nations</em></h2>
          <p className="body-md" style={{ marginTop: "1rem" }}>
            India is the founding and primary member nation. Nepal, Sri Lanka and Bangladesh hold
            Associate status, while Pakistan, Bhutan, Afghanistan and Maldives are Outreach countries
            currently in dialogue with the network.
          </p>
        </div>
        <table className="status-table">
          <thead>
            <tr>
              <th>Country</th>
              <th>Notes</th>
              <th>Network Status</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.country}>
                <td style={{ fontWeight: 700 }}>{r.country}</td>
                <td className="body-sm">{r.note}</td>
                <td>
                  <span className={`status-pill ${r.type}`}>
                    <span className="status-pill__dot" />
                    {r.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
