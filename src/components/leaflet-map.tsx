"use client";

import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { CrossingWaitTime } from "@/lib/types";
import { MILITARY_BASES } from "@/lib/military-bases";
import { BorderMarker } from "./border-marker";
import { BaseMarker } from "./base-marker";
import { Direction } from "./direction-toggle";

const MAP_CENTER: [number, number] = [25.0, 56.0];
const DEFAULT_ZOOM = 8;

interface LeafletMapProps {
  crossings: CrossingWaitTime[];
  direction: Direction;
}

export default function LeafletMap({ crossings, direction }: LeafletMapProps) {
  return (
    <MapContainer
      center={MAP_CENTER}
      zoom={DEFAULT_ZOOM}
      className="w-full h-full"
      zoomControl={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {MILITARY_BASES.map((base) => (
        <BaseMarker key={base.id} base={base} />
      ))}
      {crossings.map((crossing) => (
        <BorderMarker
          key={crossing.crossingId}
          crossing={crossing}
          direction={direction}
        />
      ))}
    </MapContainer>
  );
}
