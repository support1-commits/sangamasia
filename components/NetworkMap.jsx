import dynamic from "next/dynamic";

const NetworkMapLeaflet = dynamic(() => import("./NetworkMapLeaflet"), {
  ssr: false,
});

export default function NetworkMap() {
  return (
    <section className="network-map">
      <div className="container">
        <div className="network-map__header">
          <div className="tag-badge on-light" style={{ marginBottom: "1rem" }}>
            <span className="tag-badge__dot" />
            Sangam Network
          </div>
          <h2 className="display-lg">South Asia Connected<br /><em>by Shared Heritage</em></h2>
          <p className="body-lg network-map__description">
            A React Leaflet map showing the South Asia network with real interactive markers.
            Pan, zoom, and explore the eight network locations with custom map styling.
          </p>
          {/* <div className="network-map__status-grid">
            <div className="network-map__status-item">
              <div className="network-map__status-countries">India</div>
              <span className="status-pill status-pill--green">Active Members</span>
            </div>
            <div className="network-map__status-item">
              <div className="network-map__status-countries">Nepal, Sri Lanka, Bangladesh</div>
              <span className="status-pill status-pill--yellow">Associates Identified</span>
            </div>
            <div className="network-map__status-item">
              <div className="network-map__status-countries">Pakistan, Bhutan, Afghanistan, Maldives</div>
              <span className="status-pill status-pill--gray">Documentation Pending</span>
            </div>
          </div>
          <div className="network-map__meta">
            <span>Region area: approx. 5.2 million km²</span>
            <span>Coverage: South Asia</span>
          </div> */}
        </div>

        <div className="network-map__card">
          <NetworkMapLeaflet />
        </div>
      </div>
    </section>
  );
}
