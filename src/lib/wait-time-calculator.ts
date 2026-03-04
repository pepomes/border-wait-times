import { CROSSINGS } from "./crossings";
import { fetchDirection } from "./directions";
import { CrossingWaitTime, WaitTimeEstimate, getWaitTimeColor } from "./types";

function buildEstimate(
  direction: "uae-to-oman" | "oman-to-uae",
  durationSec: number,
  trafficSec: number
): WaitTimeEstimate {
  const waitSeconds = Math.max(0, trafficSec - durationSec);
  const waitMinutes = Math.round(waitSeconds / 60);
  return {
    direction,
    waitMinutes,
    durationMinutes: Math.round(durationSec / 60),
    durationInTrafficMinutes: Math.round(trafficSec / 60),
    color: getWaitTimeColor(waitMinutes),
  };
}

function errorEstimate(direction: "uae-to-oman" | "oman-to-uae", msg: string): WaitTimeEstimate {
  return {
    direction,
    waitMinutes: -1,
    durationMinutes: 0,
    durationInTrafficMinutes: 0,
    color: "gray",
    error: msg,
  };
}

export async function calculateAllWaitTimes(): Promise<CrossingWaitTime[]> {
  const results = await Promise.all(
    CROSSINGS.map(async (crossing) => {
      let uaeToOman: WaitTimeEstimate;
      let omanToUae: WaitTimeEstimate;

      try {
        const dir = await fetchDirection(crossing.uaeToOman.origin, crossing.uaeToOman.destination);
        uaeToOman = buildEstimate("uae-to-oman", dir.durationSeconds, dir.durationInTrafficSeconds);
      } catch (e) {
        uaeToOman = errorEstimate("uae-to-oman", e instanceof Error ? e.message : "Unknown error");
      }

      try {
        const dir = await fetchDirection(crossing.omanToUae.origin, crossing.omanToUae.destination);
        omanToUae = buildEstimate("oman-to-uae", dir.durationSeconds, dir.durationInTrafficSeconds);
      } catch (e) {
        omanToUae = errorEstimate("oman-to-uae", e instanceof Error ? e.message : "Unknown error");
      }

      return {
        crossingId: crossing.id,
        crossingName: crossing.name,
        emirate: crossing.emirate,
        coordinates: crossing.coordinates,
        uaeToOman,
        omanToUae,
      };
    })
  );

  return results;
}
