export type BaseCategory = "local" | "us" | "foreign";

export interface MilitaryBase {
  id: string;
  name: string;
  coordinates: { lat: number; lng: number };
  country: "UAE" | "Oman";
  operator: string;
  category: BaseCategory;
  type: string; // Air Base, Naval Base, etc.
  notes: string;
}

export const MILITARY_BASES: MilitaryBase[] = [
  // ── UAE LOCAL ──
  {
    id: "al-dhafra",
    name: "Al Dhafra Air Base",
    coordinates: { lat: 24.2482, lng: 54.5477 },
    country: "UAE",
    operator: "UAE Air Force / US 380th AEW / France",
    category: "local",
    type: "Air Base",
    notes: "Western Air Command HQ. Also hosts ~5,000 US troops (F-22, F-35, U-2, Global Hawk) and French air force.",
  },
  {
    id: "al-minhad",
    name: "Al Minhad Air Base",
    coordinates: { lat: 25.0228, lng: 55.3597 },
    country: "UAE",
    operator: "UAE Air Force / Australia / UK",
    category: "local",
    type: "Air Base",
    notes: "15 mi south of Dubai. Hosts Australian JTF-633, UK Donnelly Lines, and other coalition forces.",
  },
  {
    id: "al-safran",
    name: "Al-Safran Air Base (Liwa)",
    coordinates: { lat: 23.65, lng: 53.82 },
    country: "UAE",
    operator: "UAE Air Force",
    category: "local",
    type: "Air Base",
    notes: "Near Madinat Zayed. Covers the oil-rich Western Region.",
  },
  {
    id: "sweihan",
    name: "Sweihan Air Base",
    coordinates: { lat: 24.5272, lng: 54.9742 },
    country: "UAE",
    operator: "UAE Air Force",
    category: "local",
    type: "Air Base",
    notes: "East of Abu Dhabi. Training and military exercises.",
  },
  {
    id: "al-ain-airbase",
    name: "Al Ain Air Base",
    coordinates: { lat: 24.2617, lng: 55.6092 },
    country: "UAE",
    operator: "UAE Air Force",
    category: "local",
    type: "Air Base",
    notes: "Joint civil-military. Home to Khalifa bin Zayed Air College.",
  },
  {
    id: "fujairah-naval",
    name: "Fujairah Naval Base",
    coordinates: { lat: 25.252, lng: 56.3674 },
    country: "UAE",
    operator: "UAE Navy",
    category: "local",
    type: "Naval Base",
    notes: "Opened 2010. Direct access to Arabian Sea, bypasses Strait of Hormuz.",
  },
  {
    id: "mina-zayed",
    name: "Mina Zayed Naval Base",
    coordinates: { lat: 24.52, lng: 54.38 },
    country: "UAE",
    operator: "UAE Navy / France",
    category: "local",
    type: "Naval Base",
    notes: "Abu Dhabi port. Also hosts French naval component of Camp de la Paix.",
  },
  {
    id: "zayed-military-city",
    name: "Zayed Military City",
    coordinates: { lat: 24.5234, lng: 54.9189 },
    country: "UAE",
    operator: "UAE Armed Forces",
    category: "local",
    type: "Garrison",
    notes: "Major garrison near Shahama. Training facilities, military university, munitions factory.",
  },

  // ── UAE - US ──
  {
    id: "jebel-ali",
    name: "Jebel Ali Port",
    coordinates: { lat: 25.0195, lng: 55.0518 },
    country: "UAE",
    operator: "US Navy",
    category: "us",
    type: "Naval Port",
    notes: "Most visited US Navy port outside the US. Can dock aircraft carriers pier-side.",
  },

  // ── UAE - FOREIGN (non-US) ──
  {
    id: "camp-de-la-paix-air",
    name: "Camp de la Paix (French Air)",
    coordinates: { lat: 24.25, lng: 54.55 },
    country: "UAE",
    operator: "French Air and Space Force",
    category: "foreign",
    type: "Air Base",
    notes: "At Al Dhafra. France's first foreign base outside Africa in 50 years. Est. 2009.",
  },
  {
    id: "camp-de-la-paix-naval",
    name: "Camp de la Paix (French Naval)",
    coordinates: { lat: 24.525, lng: 54.40 },
    country: "UAE",
    operator: "French Navy",
    category: "foreign",
    type: "Naval Base",
    notes: "Mina Zayed Port. 300m dock, accommodates all French ships except carrier Charles de Gaulle.",
  },
  {
    id: "donnelly-lines",
    name: "Donnelly Lines (UK)",
    coordinates: { lat: 25.025, lng: 55.365 },
    country: "UAE",
    operator: "British Armed Forces",
    category: "foreign",
    type: "Support Base",
    notes: "At Al Minhad. Opened March 2024 by Princess Anne. Permanent UK support operations facility.",
  },
  {
    id: "adf-minhad",
    name: "ADF JTF-633 (Australia)",
    coordinates: { lat: 25.02, lng: 55.355 },
    country: "UAE",
    operator: "Australian Defence Force",
    category: "foreign",
    type: "Logistics Hub",
    notes: "At Al Minhad. Main ADF transport and logistics hub for Middle East operations since 2008.",
  },

  // ── OMAN LOCAL ──
  {
    id: "rafo-thumrait",
    name: "RAFO Thumrait",
    coordinates: { lat: 17.666, lng: 54.0246 },
    country: "Oman",
    operator: "Royal Air Force of Oman / USAF",
    category: "local",
    type: "Air Base",
    notes: "Major RAFO base. Home to two F-16 squadrons. USAF tenant under bilateral agreement.",
  },
  {
    id: "rafo-masirah",
    name: "RAFO Masirah",
    coordinates: { lat: 20.6754, lng: 58.8905 },
    country: "Oman",
    operator: "Royal Air Force of Oman",
    category: "local",
    type: "Air Base",
    notes: "Masirah Island. US pre-positioning site since 1981. Former RAF base.",
  },
  {
    id: "rafo-seeb",
    name: "RAFO Seeb / Muscat",
    coordinates: { lat: 23.5923, lng: 58.2862 },
    country: "Oman",
    operator: "Royal Air Force of Oman",
    category: "local",
    type: "Air Base",
    notes: "RAFO HQ. Co-located with Muscat International Airport. US airfield access.",
  },
  {
    id: "rafo-adam",
    name: "RAFO Adam",
    coordinates: { lat: 22.4917, lng: 57.3839 },
    country: "Oman",
    operator: "Royal Air Force of Oman",
    category: "local",
    type: "Air Base",
    notes: "Home to 8 Squadron Typhoon operations.",
  },
  {
    id: "rafo-musannah",
    name: "RAFO Musannah",
    coordinates: { lat: 23.6415, lng: 57.4715 },
    country: "Oman",
    operator: "Royal Air Force of Oman",
    category: "local",
    type: "Air Base",
    notes: "Helicopter hub. Super Lynx and NH90 squadrons.",
  },
  {
    id: "khasab-airbase",
    name: "Khasab Air Base",
    coordinates: { lat: 26.171, lng: 56.2406 },
    country: "Oman",
    operator: "Royal Air Force of Oman",
    category: "local",
    type: "Air Base",
    notes: "Musandam Peninsula. Overlooks Strait of Hormuz. Critically strategic position.",
  },
  {
    id: "rafo-salalah",
    name: "RAFO Salalah",
    coordinates: { lat: 17.0387, lng: 54.0913 },
    country: "Oman",
    operator: "Royal Air Force of Oman",
    category: "local",
    type: "Air Base",
    notes: "Southernmost RAFO base. Co-located with Salalah International Airport.",
  },
  {
    id: "wudam-naval",
    name: "Said bin Sultan Naval Base, Wudam",
    coordinates: { lat: 23.5, lng: 57.8 },
    country: "Oman",
    operator: "Royal Navy of Oman",
    category: "local",
    type: "Naval Base",
    notes: "Main HQ and principal base of the Royal Navy of Oman.",
  },
  {
    id: "khasab-garrison",
    name: "Khasab Military Garrison",
    coordinates: { lat: 26.18, lng: 56.25 },
    country: "Oman",
    operator: "Royal Army of Oman",
    category: "local",
    type: "Garrison",
    notes: "Guards the Strait of Hormuz. ~20M barrels of oil transit daily.",
  },

  // ── OMAN - US ──
  {
    id: "us-thumrait",
    name: "US Forces at Thumrait",
    coordinates: { lat: 17.67, lng: 54.03 },
    country: "Oman",
    operator: "US Air Force",
    category: "us",
    type: "Air Base (tenant)",
    notes: "USAF tenant. Pre-positioning site with equipment for three air bases.",
  },
  {
    id: "us-masirah",
    name: "US Forces at Masirah",
    coordinates: { lat: 20.68, lng: 58.895 },
    country: "Oman",
    operator: "US Air Force",
    category: "us",
    type: "Pre-positioning Site",
    notes: "Access since 1981. Equipment for 26,000+ personnel. 3,000+ US troops during Gulf War.",
  },
  {
    id: "us-duqm",
    name: "US Naval Access at Duqm",
    coordinates: { lat: 19.6678, lng: 57.7 },
    country: "Oman",
    operator: "US Navy",
    category: "us",
    type: "Naval Access",
    notes: "Access agreement since 2019. Deep-water port with 18m draft capacity.",
  },

  // ── OMAN - FOREIGN (non-US) ──
  {
    id: "uk-duqm",
    name: "UK Joint Logistics Support Base, Duqm",
    coordinates: { lat: 19.67, lng: 57.705 },
    country: "Oman",
    operator: "Royal Navy / British Armed Forces",
    category: "foreign",
    type: "Logistics Base",
    notes: "Opened 2018, tripled in size 2020. Fits nuclear subs and Queen Elizabeth carriers.",
  },
  {
    id: "uk-ras-madrakah",
    name: "UK-Oman Joint Training Area",
    coordinates: { lat: 19.8, lng: 57.5 },
    country: "Oman",
    operator: "British Army / Oman",
    category: "foreign",
    type: "Training Area",
    notes: "4,000 km\u00b2. Largest British Army training area worldwide. Est. 2019.",
  },
  {
    id: "india-duqm",
    name: "Indian Navy Access at Duqm",
    coordinates: { lat: 19.665, lng: 57.695 },
    country: "Oman",
    operator: "Indian Navy",
    category: "foreign",
    type: "Naval Access",
    notes: "Maintenance access since 2018. Strategic oil storage arrangements.",
  },
];

export function getCategoryColor(category: BaseCategory): string {
  switch (category) {
    case "local":
      return "#6366f1"; // indigo
    case "us":
      return "#2563eb"; // blue
    case "foreign":
      return "#d946ef"; // fuchsia
  }
}

export function getCategoryLabel(category: BaseCategory): string {
  switch (category) {
    case "local":
      return "Local";
    case "us":
      return "US";
    case "foreign":
      return "Foreign (non-US)";
  }
}
