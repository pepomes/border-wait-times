export interface Coordinates {
  lat: number;
  lng: number;
}

export interface RouteEndpoint {
  address?: string;
  coordinates?: Coordinates;
}

export interface CrossingPoint {
  origin: RouteEndpoint;
  destination: RouteEndpoint;
}

export interface BorderCrossing {
  id: string;
  name: string;
  emirate: string;
  omanSide: string;
  coordinates: Coordinates; // marker position (border location)
  uaeToOman: CrossingPoint;
  omanToUae: CrossingPoint;
  operatingHours: string;
  notes: string;
}

export interface DirectionResult {
  durationSeconds: number;
  durationInTrafficSeconds: number;
  distanceMeters: number;
}

export interface WaitTimeEstimate {
  direction: "uae-to-oman" | "oman-to-uae";
  waitMinutes: number;
  durationMinutes: number;
  durationInTrafficMinutes: number;
  color: WaitTimeColor;
  error?: string;
}

export type WaitTimeColor = "green" | "yellow" | "red" | "gray";

export interface CrossingWaitTime {
  crossingId: string;
  crossingName: string;
  emirate: string;
  coordinates: Coordinates;
  uaeToOman: WaitTimeEstimate;
  omanToUae: WaitTimeEstimate;
}

export interface WaitTimesResponse {
  crossings: CrossingWaitTime[];
  lastUpdated: string;
  error?: string;
}

export function getWaitTimeColor(minutes: number): WaitTimeColor {
  if (minutes < 15) return "green";
  if (minutes <= 45) return "yellow";
  return "red";
}

export function getColorHex(color: WaitTimeColor): string {
  switch (color) {
    case "green":
      return "#22c55e";
    case "yellow":
      return "#eab308";
    case "red":
      return "#ef4444";
    case "gray":
      return "#9ca3af";
  }
}
