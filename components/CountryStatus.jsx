const rows = [
  { country: "India", status: "Active Members", type: "active" },
  { country: "Nepal, Sri Lanka, Bangladesh", status: "Associates Identified", type: "identified" },
  { country: "Pakistan, Bhutan, Afghanistan, Maldives", status: "Documentation Pending", type: "pending" },
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
        </div>
        <table className="status-table">
          <thead>
            <tr>
              <th>Country</th>
              <th>Network Status</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.country}>
                <td>{r.country}</td>
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
