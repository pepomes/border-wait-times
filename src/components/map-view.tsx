"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { useWaitTimes } from "@/hooks/use-wait-times";
import { Direction, DirectionToggle } from "./direction-toggle";
import { Legend } from "./legend";
import { LastUpdatedBadge } from "./last-updated-badge";
import { LoadingOverlay } from "./loading-overlay";

const LeafletMap = dynamic(() => import("./leaflet-map"), { ssr: false });

export function MapView() {
  const { data, loading, error, nextRefresh } = useWaitTimes();
  const [direction, setDirection] = useState<Direction>("uae-to-oman");

  const toggleDirection = () =>
    setDirection((d) => (d === "uae-to-oman" ? "oman-to-uae" : "uae-to-oman"));

  return (
    <div className="relative w-full h-screen">
      <LeafletMap crossings={data?.crossings ?? []} direction={direction} />

      {/* Direction toggle — top left */}
      <div className="absolute top-3 left-3 z-[1000]">
        <DirectionToggle direction={direction} onToggle={toggleDirection} />
      </div>

      {/* Disclaimer — top right */}
      <div className="absolute top-3 right-3 z-[1000] max-w-[260px]">
        <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-md px-3 py-2 text-[10px] text-gray-400 leading-tight">
          Estimates based on traffic congestion, not actual border processing time. Low traffic does not guarantee fast processing.
        </div>
      </div>

      {/* Legend + last updated — bottom */}
      <div className="absolute bottom-6 left-3 right-3 flex items-end justify-between z-[1000] pointer-events-none">
        <div className="pointer-events-auto">
          <Legend />
        </div>
        <div className="pointer-events-auto">
          <LastUpdatedBadge timestamp={data?.lastUpdated ?? null} nextRefresh={nextRefresh} />
        </div>
      </div>

      {loading && <LoadingOverlay />}

      {error && !loading && (
        <div className="absolute top-14 left-3 z-[1000] bg-red-50 border border-red-200 rounded-lg px-3 py-2 text-xs text-red-600 max-w-[260px]">
          {error}
        </div>
      )}
    </div>
  );
}
