import { RouteEndpoint, DirectionResult } from "./types";

const ROUTES_API_URL = "https://routes.googleapis.com/directions/v2:computeRoutes";

export async function fetchDirection(
  origin: RouteEndpoint,
  destination: RouteEndpoint
): Promise<DirectionResult> {
  const apiKey = process.env.GOOGLE_MAPS_API_KEY;
  if (!apiKey) {
    throw new Error("GOOGLE_MAPS_API_KEY is not set");
  }

  const res = await fetch(ROUTES_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Goog-Api-Key": apiKey,
      "X-Goog-FieldMask": "routes.duration,routes.staticDuration,routes.distanceMeters",
    },
    body: JSON.stringify({
      origin: origin.address
        ? { address: origin.address }
        : { location: { latLng: { latitude: origin.coordinates!.lat, longitude: origin.coordinates!.lng } } },
      destination: destination.address
        ? { address: destination.address }
        : { location: { latLng: { latitude: destination.coordinates!.lat, longitude: destination.coordinates!.lng } } },
      travelMode: "DRIVE",
      routingPreference: "TRAFFIC_AWARE",
    }),
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(`Routes API returned ${res.status}: ${err?.error?.message ?? "unknown"}`);
  }

  const data = await res.json();

  if (!data.routes?.length) {
    throw new Error("Routes API returned no routes");
  }

  const route = data.routes[0];
  const durationSeconds = parseInt(route.duration.replace("s", ""), 10);
  const staticDurationSeconds = parseInt(route.staticDuration.replace("s", ""), 10);

  return {
    durationSeconds: staticDurationSeconds,
    durationInTrafficSeconds: durationSeconds,
    distanceMeters: route.distanceMeters,
  };
}
