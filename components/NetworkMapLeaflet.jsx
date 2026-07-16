"use client";

import { MapContainer, TileLayer, CircleMarker, Tooltip, Polyline } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const markers = [
  { name: "Pakistan", position: [30.3753, 69.3451] },
  { name: "Afghanistan", position: [33.9391, 67.7100] },
  { name: "Nepal", position: [28.3949, 84.1240] },
  { name: "Bhutan", position: [27.5142, 90.4336] },
  { name: "India", position: [20.5937, 78.9629] },
  { name: "Bangladesh", position: [23.6850, 90.3563] },
  { name: "Sri Lanka", position: [7.8731, 80.7718] },
  { name: "Maldives", position: [3.2028, 73.2207] },
];

const networkPositions = markers.map((marker) => marker.position);

export default function NetworkMapLeaflet() {
  return (
    <MapContainer
      className="network-map__leaflet"
      center={[22.0, 82.0]}
      zoom={4.5}
      minZoom={3.5}
      scrollWheelZoom={false}
      style={{ minHeight: "520px" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Polyline positions={networkPositions} pathOptions={{ color: "#bb6b3f", weight: 2, opacity: 0.55 }} />
      {markers.map((marker) => (
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
    </MapContainer>
  );
}
