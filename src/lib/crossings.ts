import { BorderCrossing } from "./types";

// Addresses are chosen to force Google Routes API through the actual
// border checkpoint roads. Where Google can't route across a border
// (e.g. newly opened Wam), we use approach-road coordinates instead.
export const CROSSINGS: BorderCrossing[] = [
  {
    id: "hatta",
    name: "Hatta / Al Wajajah",
    emirate: "Dubai",
    omanSide: "Al Wajajah",
    coordinates: { lat: 24.8061, lng: 56.1147 },
    uaeToOman: {
      origin: { address: "Hatta Hill Park, Hatta, Dubai, UAE" },
      destination: { address: "Al Wajajah, Oman" },
    },
    omanToUae: {
      origin: { address: "Al Wajajah, Oman" },
      destination: { address: "Hatta Hill Park, Hatta, Dubai, UAE" },
    },
    operatingHours: "24 hours",
    notes: "Busiest crossing. Main Dubai–Muscat highway (E44).",
  },
  {
    id: "hilli",
    name: "Al Ain / Buraimi (Hilli)",
    emirate: "Abu Dhabi",
    omanSide: "Buraimi",
    coordinates: { lat: 24.2333, lng: 55.7667 },
    uaeToOman: {
      origin: { address: "Al Ain Convention Centre, Al Ain, UAE" },
      destination: { address: "Al Buraimi Hotel, Al Buraimi, Oman" },
    },
    omanToUae: {
      origin: { address: "Hamasa, Al Buraimi, Oman" },
      destination: { address: "Hilli Archaeological Park, Al Ain, UAE" },
    },
    operatingHours: "24 hours",
    notes: "Second busiest. Al Ain to Buraimi via Shakhboot Bin Sultan St.",
  },
  {
    id: "khatmat-malaha",
    name: "Khatmat Malaha",
    emirate: "Sharjah (Kalba)",
    omanSide: "Khatmat Malaha",
    coordinates: { lat: 25.0792, lng: 56.3500 },
    uaeToOman: {
      origin: { address: "Kalba, Sharjah, UAE" },
      destination: { address: "Khatmat Malaha Border Post" },
    },
    omanToUae: {
      origin: { address: "Khatmat Malaha Border Post" },
      destination: { address: "Kalba, Sharjah, UAE" },
    },
    operatingHours: "24 hours",
    notes: "Near Fujairah. Route to Muscat via coastal road (E99).",
  },
  {
    id: "wam",
    name: "Wam",
    emirate: "Fujairah (Dibba)",
    omanSide: "Wam",
    coordinates: { lat: 25.5942, lng: 56.2614 },
    // Wam opened Feb 2026 — Google can't route through it yet.
    // Using approach-road coordinates on UAE side to measure congestion.
    uaeToOman: {
      origin: { coordinates: { lat: 25.6150, lng: 56.2500 } },
      destination: { coordinates: { lat: 25.5950, lng: 56.2610 } },
    },
    omanToUae: {
      origin: { coordinates: { lat: 25.5950, lng: 56.2610 } },
      destination: { coordinates: { lat: 25.6150, lng: 56.2500 } },
    },
    operatingHours: "6:00 AM – 12:00 AM",
    notes: "Newly opened Feb 2026. Google may not route through this border yet.",
  },
  {
    id: "dibba",
    name: "Dibba",
    emirate: "Fujairah",
    omanSide: "Dibba Al-Baya",
    coordinates: { lat: 25.6200, lng: 56.2650 },
    uaeToOman: {
      origin: { address: "Dibba Al-Fujairah, UAE" },
      destination: { address: "Dibba Al-Baya, Oman" },
    },
    omanToUae: {
      origin: { address: "Dibba Al-Baya, Oman" },
      destination: { address: "Dibba Al-Fujairah, UAE" },
    },
    operatingHours: "24 hours",
    notes: "Musandam coast access. Popular for weekend trips to Musandam.",
  },
  {
    id: "tibat",
    name: "Tibat / Al Dhara",
    emirate: "Ras Al Khaimah",
    omanSide: "Al Dhara",
    coordinates: { lat: 25.8833, lng: 56.0667 },
    uaeToOman: {
      origin: { address: "Ras Al Khaimah, UAE" },
      destination: { address: "Khasab, Oman" },
    },
    omanToUae: {
      origin: { address: "Khasab, Oman" },
      destination: { address: "Ras Al Khaimah, UAE" },
    },
    operatingHours: "24 hours",
    notes: "Main route to Khasab (Musandam). Scenic mountain road.",
  },
];
