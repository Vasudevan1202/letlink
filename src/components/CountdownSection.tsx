"use client";

import React, { useEffect } from "react";
import { Calendar, Sparkles } from "lucide-react";
import { useCountdown, TARGET_LAUNCH_DATE } from "@/hooks/useCountdown";
import { CountdownTimer } from "./CountdownTimer";
import { LaunchState } from "./LaunchState";

interface CountdownSectionProps {
  overrideComplete?: boolean;
}

export function CountdownSection({ overrideComplete }: CountdownSectionProps) {
  // Clear any obsolete service workers previously registered on localhost
  useEffect(() => {
    if (typeof window !== "undefined" && "serviceWorker" in navigator) {
      navigator.serviceWorker.getRegistrations().then((registrations) => {
        for (const registration of registrations) {
          registration.unregister();
        }
      });
    }
  }, []);

  const countdown = useCountdown({
    targetDate: TARGET_LAUNCH_DATE,
    forceComplete: overrideComplete,
  });

  // If the countdown has completed, present the celebratory launch state
  if (countdown.isComplete) {
    return <LaunchState />;
  }

  return (
    <div className="flex flex-col items-center text-center w-full max-w-4xl mx-auto px-4 sm:px-6">
      {/* Launch Date Pill Badge */}
      <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs sm:text-sm font-semibold tracking-wider uppercase mb-6 sm:mb-8 shadow-[0_0_20px_rgba(59,130,246,0.15)]">
        <Calendar className="w-3.5 h-3.5 text-blue-400" />
        <span>29 OCTOBER 2026 &middot; 10:00 AM IST</span>
      </div>

      {/* Main Heading */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-4 sm:mb-6 max-w-3xl leading-[1.1] sm:leading-[1.1]">
        Something New <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-200">Is Coming.</span>
      </h1>

      {/* Subtitle */}
      <p className="text-base sm:text-lg md:text-xl text-[#94A3B8] max-w-xl mx-auto mb-8 sm:mb-12 font-normal leading-relaxed">
        We&apos;re building something exciting. Get ready to experience Letlink.
      </p>

      {/* Countdown Cards */}
      <div className="w-full mb-8 sm:mb-10">
        <CountdownTimer timeRemaining={countdown} />
      </div>

      {/* Subtle Launch Reference note */}
      <div className="inline-flex items-center gap-2 text-xs sm:text-sm text-slate-400">
        <Sparkles className="w-3.5 h-3.5 text-blue-400" />
        <span>Target: 29 October 2026 at 10:00 AM IST (UTC+05:30)</span>
      </div>
    </div>
  );
}
