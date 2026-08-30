"use client";

import { MapContainer, TileLayer, CircleMarker, Tooltip, Polyline } from "react-leaflet";
import "leaflet/dist/leaflet.css";

// Network Members — founding & full member nations
const memberMarkers = [
  { name: "India", position: [20.5937, 78.9629] },
  { name: "Nepal", position: [28.3949, 84.1240] },
  { name: "Sri Lanka", position: [7.8731, 80.7718] },
  { name: "Bangladesh", position: [23.6850, 90.3563] },
];

// Associated Members — Associate status
const associateMarkers = [
  { name: "Pakistan", position: [30.3753, 69.3451] },
  { name: "Bhutan", position: [27.5142, 90.4336] },
  { name: "Afghanistan", position: [33.9391, 67.7100] },
  { name: "Maldives", position: [3.2028, 73.2207] },
  { name: "Thailand", position: [15.8700, 100.9925] },
  { name: "Indonesia", position: [-0.7893, 113.9213] },
];

// Outreach — reach beyond South Asia
const outreachMarkers = [
  { name: "Japan", position: [36.2048, 138.2529] },
  { name: "Korea", position: [35.9078, 127.7669] },
  { name: "China", position: [35.8617, 104.1954] },
  { name: "Africa", position: [2.0, 20.0] },
  { name: "South America", position: [-10.0, -60.0] },
];

const coreChain = [...memberMarkers, ...associateMarkers].map((m) => m.position);
const india = memberMarkers.find((m) => m.name === "India").position;

export default function NetworkMapLeaflet() {
  return (
    <MapContainer
      className="network-map__leaflet"
      center={[15.0, 45.0]}
      zoom={2}
      minZoom={1.6}
      maxBounds={[[-70, -140], [80, 190]]}
      scrollWheelZoom={false}
      style={{ minHeight: "520px" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {/* Solid line linking Network Members + Associated Members across South & Southeast Asia */}
      <Polyline positions={coreChain} pathOptions={{ color: "#bb6b3f", weight: 2, opacity: 0.55 }} />

      {/* Dashed lines from India showing outreach beyond South Asia */}
      {outreachMarkers.map((m) => (
        <Polyline
          key={`line-${m.name}`}
          positions={[india, m.position]}
          pathOptions={{ color: "#7d8a72", weight: 1.5, opacity: 0.45, dashArray: "5, 7" }}
        />
      ))}

      {memberMarkers.map((marker) => (
        <CircleMarker
          key={marker.name}
          center={marker.position}
          radius={8}
          pathOptions={{ color: "#b35f3a", fillColor: "#f27e47", fillOpacity: 0.9 }}
        >
          <Tooltip direction="right" offset={[12, 0]} opacity={1} permanent>
            {marker.name}
          </Tooltip>
        </CircleMarker>
      ))}

      {associateMarkers.map((marker) => (
        <CircleMarker
          key={marker.name}
          center={marker.position}
          radius={7}
          pathOptions={{ color: "#a5793a", fillColor: "#d4a24c", fillOpacity: 0.9 }}
        >
          <Tooltip direction="right" offset={[12, 0]} opacity={1} permanent>
            {marker.name}
          </Tooltip>
        </CircleMarker>
      ))}

      {outreachMarkers.map((marker) => (
        <CircleMarker
          key={marker.name}
          center={marker.position}
          radius={6}
          pathOptions={{ color: "#5c5c5c", fillColor: "#9a9a9a", fillOpacity: 0.85 }}
        >
          <Tooltip direction="right" offset={[12, 0]} opacity={1} permanent>
            {marker.name}
          </Tooltip>
        </CircleMarker>
      ))}
    </MapContainer>
  );
}
