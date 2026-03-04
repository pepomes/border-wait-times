"use client";

import { useRef, useMemo } from "react";
import { Marker, Tooltip } from "react-leaflet";
import L from "leaflet";
import { CrossingWaitTime, getColorHex, WaitTimeEstimate } from "@/lib/types";
import { CROSSINGS } from "@/lib/crossings";
import { Direction } from "./direction-toggle";

interface BorderMarkerProps {
  crossing: CrossingWaitTime;
  direction: Direction;
}

function createIcon(estimate: WaitTimeEstimate) {
  const hex = getColorHex(estimate.color);
  const label = estimate.error || estimate.waitMinutes < 0 ? "N/A" : `${estimate.waitMinutes}m`;

  return L.divIcon({
    className: "",
    iconSize: [44, 34],
    iconAnchor: [22, 34],
    tooltipAnchor: [0, -34],
    html: `
      <div style="display:flex;flex-direction:column;align-items:center;">
        <div style="background:${hex};color:#fff;font-size:11px;font-weight:700;padding:3px 8px;border-radius:9999px;border:2px solid #fff;box-shadow:0 2px 6px rgba(0,0,0,.3);text-align:center;min-width:36px;">
          ${label}
        </div>
        <div style="width:0;height:0;border-left:6px solid transparent;border-right:6px solid transparent;border-top:8px solid ${hex};"></div>
      </div>
    `,
  });
}

function buildTooltipHtml(crossing: CrossingWaitTime, direction: Direction): string {
  const meta = CROSSINGS.find((c) => c.id === crossing.crossingId);
  const estimate = direction === "uae-to-oman" ? crossing.uaeToOman : crossing.omanToUae;
  const dirLabel = direction === "uae-to-oman" ? "UAE \u2192 Oman" : "Oman \u2192 UAE";
  const hex = getColorHex(estimate.color);

  const waitLine = estimate.error
    ? `<div style="font-size:12px;color:#9ca3af;">Unavailable</div>`
    : `<div style="display:flex;align-items:center;gap:6px;">
        <span style="display:inline-block;width:10px;height:10px;border-radius:50%;background:${hex}"></span>
        <span style="font-size:13px;font-weight:700;">~${estimate.waitMinutes} min</span>
        <span style="font-size:10px;color:#9ca3af;">(travel: ${estimate.durationInTrafficMinutes} min)</span>
       </div>`;

  return `
    <div style="min-width:180px;">
      <div style="font-size:13px;font-weight:700;margin:0 0 2px;">${crossing.crossingName}</div>
      <div style="font-size:10px;color:#6b7280;margin:0 0 6px;">
        ${crossing.emirate}${meta ? ` \u00b7 ${meta.operatingHours}` : ""}
      </div>
      <div style="font-size:10px;font-weight:600;color:#6b7280;text-transform:uppercase;margin-bottom:3px;">${dirLabel}</div>
      ${waitLine}
      ${meta?.notes ? `<div style="font-size:10px;color:#9ca3af;margin-top:6px;border-top:1px solid #e5e7eb;padding-top:4px;">${meta.notes}</div>` : ""}
    </div>
  `;
}

export function BorderMarker({ crossing, direction }: BorderMarkerProps) {
  const markerRef = useRef<L.Marker>(null);
  const estimate = direction === "uae-to-oman" ? crossing.uaeToOman : crossing.omanToUae;
  const icon = useMemo(() => createIcon(estimate), [estimate]);
  const tooltipHtml = useMemo(() => buildTooltipHtml(crossing, direction), [crossing, direction]);

  return (
    <Marker
      ref={markerRef}
      position={[crossing.coordinates.lat, crossing.coordinates.lng]}
      icon={icon}
    >
      <Tooltip
        direction="top"
        offset={[0, -4]}
        opacity={0.95}
      >
        <div dangerouslySetInnerHTML={{ __html: tooltipHtml }} />
      </Tooltip>
    </Marker>
  );
}
