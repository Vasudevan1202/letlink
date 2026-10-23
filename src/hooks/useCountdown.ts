"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import { TimeRemaining } from "@/types/countdown";

export const TARGET_LAUNCH_DATE = "2026-10-29T11:00:00+05:30";

export function calculateTimeRemaining(
  targetTimestampMs: number,
  currentMs: number = Date.now()
): TimeRemaining {
  const totalMilliseconds = targetTimestampMs - currentMs;

  if (totalMilliseconds <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      totalMilliseconds: 0,
      isComplete: true,
    };
  }

  const seconds = Math.floor((totalMilliseconds / 1000) % 60);
  const minutes = Math.floor((totalMilliseconds / (1000 * 60)) % 60);
  const hours = Math.floor((totalMilliseconds / (1000 * 60 * 60)) % 24);
  const days = Math.floor(totalMilliseconds / (1000 * 60 * 60 * 24));

  return {
    days,
    hours,
    minutes,
    seconds,
    totalMilliseconds,
    isComplete: false,
  };
}

interface UseCountdownOptions {
  targetDate?: string;
  forceComplete?: boolean;
}

export function useCountdown(options?: UseCountdownOptions) {
  const targetIso = options?.targetDate || TARGET_LAUNCH_DATE;
  const targetTimeMs = useMemo(() => new Date(targetIso).getTime(), [targetIso]);

  const [mounted, setMounted] = useState<boolean>(false);
  const [isForcedComplete, setIsForcedComplete] = useState<boolean>(
    options?.forceComplete ?? false
  );

  // Initialize with real calculated time
  const [timeRemaining, setTimeRemaining] = useState<TimeRemaining>(() => {
    if (options?.forceComplete) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        totalMilliseconds: 0,
        isComplete: true,
      };
    }
    return calculateTimeRemaining(targetTimeMs);
  });

  const tick = useCallback(() => {
    if (isForcedComplete) {
      setTimeRemaining({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        totalMilliseconds: 0,
        isComplete: true,
      });
      return true;
    }

    const remaining = calculateTimeRemaining(targetTimeMs);
    setTimeRemaining(remaining);
    return remaining.isComplete;
  }, [targetTimeMs, isForcedComplete]);

  useEffect(() => {
    // Check if test URL query parameter ?live=true is present
    if (typeof window !== "undefined") {
      const searchParams = new URLSearchParams(window.location.search);
      if (searchParams.get("live") === "true") {
        setIsForcedComplete(true);
      }
    }
  }, []);

  useEffect(() => {
    setMounted(true);
    // Immediately calculate upon client mount to guarantee real-time accuracy
    const complete = tick();

    if (complete) {
      return;
    }

    const intervalId = window.setInterval(() => {
      const isDone = tick();
      if (isDone) {
        window.clearInterval(intervalId);
      }
    }, 1000);

    const handleVisibilityChange = () => {
      if (typeof document !== "undefined" && document.visibilityState === "visible") {
        tick();
      }
    };

    window.addEventListener("visibilitychange", handleVisibilityChange);
    window.addEventListener("focus", tick);

    return () => {
      window.clearInterval(intervalId);
      window.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("focus", tick);
    };
  }, [tick]);

  return {
    ...timeRemaining,
    mounted,
  };
}
