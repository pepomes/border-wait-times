"use client";

export type Direction = "uae-to-oman" | "oman-to-uae";

interface DirectionToggleProps {
  direction: Direction;
  onToggle: () => void;
}

export function DirectionToggle({ direction, onToggle }: DirectionToggleProps) {
  const isUaeToOman = direction === "uae-to-oman";

  return (
    <button
      onClick={onToggle}
      className="bg-white/90 backdrop-blur-sm rounded-lg shadow-md px-3 py-2 text-xs font-semibold text-gray-700 hover:bg-white transition-colors flex items-center gap-2"
    >
      <span className={isUaeToOman ? "text-gray-900" : "text-gray-400"}>UAE</span>
      <span className="text-gray-400">{isUaeToOman ? "\u2192" : "\u2190"}</span>
      <span className={!isUaeToOman ? "text-gray-900" : "text-gray-400"}>Oman</span>
    </button>
  );
}
