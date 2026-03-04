"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { WaitTimesResponse } from "@/lib/types";

const POLL_INTERVAL_MS = 15 * 60 * 1000; // 15 minutes

export function useWaitTimes() {
  const [data, setData] = useState<WaitTimesResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [nextRefresh, setNextRefresh] = useState<Date | null>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const fetchData = useCallback(async () => {
    try {
      const res = await fetch("/api/wait-times");
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const json: WaitTimesResponse = await res.json();
      setData(json);
      setError(json.error ?? null);
      setNextRefresh(new Date(Date.now() + POLL_INTERVAL_MS));
    } catch (e) {
      setError(e instanceof Error ? e.message : "Failed to fetch");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
    timerRef.current = setInterval(fetchData, POLL_INTERVAL_MS);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [fetchData]);

  return { data, loading, error, nextRefresh, refetch: fetchData };
}
