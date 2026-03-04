"use client";

import { useMemo } from "react";
import { Marker, Tooltip } from "react-leaflet";
import L from "leaflet";
import { MilitaryBase, getCategoryColor } from "@/lib/military-bases";

interface BaseMarkerProps {
  base: MilitaryBase;
}

const FLAG_MAP: [RegExp, string][] = [
  [/\bUAE\b|United Arab Emirates/i, "\ud83c\udde6\ud83c\uddea"],
  [/\bOman\b|RAFO|Royal Air Force of Oman|Royal Navy of Oman|Royal Army of Oman|Sultan/i, "\ud83c\uddf4\ud83c\uddf2"],
  [/\bUS\b|USAF|United States|American/i, "\ud83c\uddfa\ud83c\uddf8"],
  [/\bFranc[eh]\b|French/i, "\ud83c\uddeb\ud83c\uddf7"],
  [/\bUK\b|British|Royal Navy|Royal Marines/i, "\ud83c\uddec\ud83c\udde7"],
  [/\bAustrali/i, "\ud83c\udde6\ud83c\uddfa"],
  [/\bIndi(?:a|an)\b/i, "\ud83c\uddee\ud83c\uddf3"],
];

function getFlags(base: MilitaryBase): string[] {
  const text = `${base.operator} ${base.notes}`;
  const flags: string[] = [];
  const seen = new Set<string>();

  // Always add the host country flag first
  const hostFlag = base.country === "UAE" ? "\ud83c\udde6\ud83c\uddea" : "\ud83c\uddf4\ud83c\uddf2";
  flags.push(hostFlag);
  seen.add(hostFlag);

  for (const [pattern, flag] of FLAG_MAP) {
    if (!seen.has(flag) && pattern.test(text)) {
      flags.push(flag);
      seen.add(flag);
    }
  }

  return flags;
}

function getTypeIcon(type: string): string {
  const t = type.toLowerCase();
  if (t.includes("air")) return "\u2708\ufe0f";
  if (t.includes("naval") || t.includes("port")) return "\u2693";
  if (t.includes("garrison") || t.includes("training")) return "\ud83c\udfaf";
  if (t.includes("logistics") || t.includes("support")) return "\ud83d\udce6";
  return "\ud83c\udff0";
}

function createIcon(base: MilitaryBase) {
  const color = getCategoryColor(base.category);
  const flags = getFlags(base);
  const flagsHtml = flags
    .map((f) => `<span style="font-size:15px;line-height:1;">${f}</span>`)
    .join("");

  const width = Math.max(36, flags.length * 22 + 8);

  return L.divIcon({
    className: "",
    iconSize: [width, 38],
    iconAnchor: [width / 2, 38],
    tooltipAnchor: [0, -38],
    html: `
      <div style="display:flex;flex-direction:column;align-items:center;">
        <div style="background:${color};border:2px solid #fff;border-radius:6px;box-shadow:0 2px 8px rgba(0,0,0,.4);padding:3px 5px;display:flex;gap:2px;align-items:center;">
          ${flagsHtml}
        </div>
        <div style="width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-top:6px solid ${color};"></div>
      </div>
    `,
  });
}

function buildTooltipHtml(base: MilitaryBase): string {
  const color = getCategoryColor(base.category);
  const flags = getFlags(base);
  const flagsStr = flags.join(" ");
  const typeIcon = getTypeIcon(base.type);

  return `
    <div style="min-width:210px;">
      <div style="font-size:14px;font-weight:700;margin:0 0 3px;">${flagsStr} ${base.name}</div>
      <div style="font-size:11px;color:#6b7280;margin:0 0 6px;">
        ${base.country} \u00b7 ${typeIcon} ${base.type}
      </div>
      <div style="display:flex;align-items:center;gap:5px;margin-bottom:5px;">
        <span style="display:inline-block;width:10px;height:10px;border-radius:3px;background:${color}"></span>
        <span style="font-size:12px;font-weight:600;">${base.operator}</span>
      </div>
      <div style="font-size:11px;color:#6b7280;border-top:1px solid #e5e7eb;padding-top:5px;line-height:1.4;">
        ${base.notes}
      </div>
    </div>
  `;
}

export function BaseMarker({ base }: BaseMarkerProps) {
  const icon = useMemo(() => createIcon(base), [base]);
  const tooltipHtml = useMemo(() => buildTooltipHtml(base), [base]);

  return (
    <Marker
      position={[base.coordinates.lat, base.coordinates.lng]}
      icon={icon}
    >
      <Tooltip direction="top" offset={[0, -4]} opacity={0.95}>
        <div dangerouslySetInnerHTML={{ __html: tooltipHtml }} />
      </Tooltip>
    </Marker>
  );
}
