import { NextResponse } from "next/server";
import { cacheGet, cacheSet } from "@/lib/cache";
import { calculateAllWaitTimes } from "@/lib/wait-time-calculator";
import { WaitTimesResponse, CrossingWaitTime } from "@/lib/types";

const CACHE_KEY = "wait-times";

export async function GET() {
  try {
    const cached = cacheGet<CrossingWaitTime[]>(CACHE_KEY);

    let crossings: CrossingWaitTime[];
    if (cached) {
      crossings = cached;
    } else {
      crossings = await calculateAllWaitTimes();
      cacheSet(CACHE_KEY, crossings);
    }

    const response: WaitTimesResponse = {
      crossings,
      lastUpdated: new Date().toISOString(),
    };

    return NextResponse.json(response, {
      headers: {
        "Cache-Control": "public, s-maxage=60, stale-while-revalidate=300",
      },
    });
  } catch (error) {
    const response: WaitTimesResponse = {
      crossings: [],
      lastUpdated: new Date().toISOString(),
      error: error instanceof Error ? error.message : "Unknown error",
    };
    return NextResponse.json(response, { status: 500 });
  }
}
