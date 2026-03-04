"use client";

import { useEffect, useState } from "react";

interface LastUpdatedBadgeProps {
  timestamp: string | null;
  nextRefresh: Date | null;
}

export function LastUpdatedBadge({ timestamp, nextRefresh }: LastUpdatedBadgeProps) {
  const [minutesLeft, setMinutesLeft] = useState<number | null>(null);

  useEffect(() => {
    if (!nextRefresh) return;

    function update() {
      const diff = Math.max(0, nextRefresh!.getTime() - Date.now());
      setMinutesLeft(Math.ceil(diff / 60000));
    }

    update();
    const interval = setInterval(update, 30000);
    return () => clearInterval(interval);
  }, [nextRefresh]);

  if (!timestamp) return null;

  const date = new Date(timestamp);
  const timeStr = date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-md px-3 py-1.5 text-[11px] text-gray-500">
      <div>Updated {timeStr}</div>
      {minutesLeft !== null && minutesLeft > 0 && (
        <div className="text-gray-400">Next refresh in {minutesLeft} min</div>
      )}
    </div>
  );
}
