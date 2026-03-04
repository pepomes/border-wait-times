"use client";

const WAIT_ITEMS = [
  { className: "bg-green-500 rounded-full", label: "< 15 min" },
  { className: "bg-yellow-500 rounded-full", label: "15–45 min" },
  { className: "bg-red-500 rounded-full", label: "> 45 min" },
  { className: "bg-gray-400 rounded-full", label: "No data" },
];

const BASE_ITEMS = [
  { flag: "\ud83c\udde6\ud83c\uddea\ud83c\uddf4\ud83c\uddf2", className: "bg-indigo-500", label: "Local" },
  { flag: "\ud83c\uddfa\ud83c\uddf8", className: "bg-blue-600", label: "US" },
  { flag: "\ud83c\uddec\ud83c\udde7\ud83c\uddeb\ud83c\uddf7\ud83c\udde6\ud83c\uddfa\ud83c\uddee\ud83c\uddf3", className: "bg-fuchsia-500", label: "Foreign" },
];

export function Legend() {
  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-md px-3 py-2">
      <div className="text-xs font-semibold text-gray-600 mb-1">Border Wait</div>
      <div className="flex gap-3 mb-1.5">
        {WAIT_ITEMS.map((item) => (
          <div key={item.label} className="flex items-center gap-1">
            <span className={`w-2.5 h-2.5 inline-block ${item.className}`} />
            <span className="text-[11px] text-gray-600">{item.label}</span>
          </div>
        ))}
      </div>
      <div className="text-xs font-semibold text-gray-600 mb-1 border-t border-gray-200 pt-1.5">Military Bases</div>
      <div className="flex gap-3">
        {BASE_ITEMS.map((item) => (
          <div key={item.label} className="flex items-center gap-1.5">
            <span className={`w-3 h-3 inline-block rounded ${item.className}`} />
            <span className="text-[11px] text-gray-600">{item.flag} {item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
