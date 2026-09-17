export default function NoPositionsPage() {
  return (
    <main className="container" style={{ paddingTop: "4rem", paddingBottom: "4rem" }}>
      <div className="card" style={{ padding: "2rem 1.5rem", border: "1px solid #C2A878", borderRadius: "18px", background: "#FAF4E8", textAlign: "center" }}>
        <div className="tag-badge on-light">Current status</div>
        <h1 className="display-lg" style={{ marginBottom: "1rem" }}>No positions open</h1>
        <p className="body-md">
          There are currently no open positions at SANGAM. Please check back later or contact us to express interest.
        </p>
      </div>
    </main>
  );
}
