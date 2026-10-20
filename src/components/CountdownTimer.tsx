"use client";

import React from "react";
import { TimeRemaining } from "@/types/countdown";

interface CountdownTimerProps {
  timeRemaining: TimeRemaining;
  mounted?: boolean;
}

interface CountdownUnitProps {
  value: number;
  label: string;
}

function CountdownCard({ value, label }: CountdownUnitProps) {
  const formattedValue = String(Math.max(0, value)).padStart(2, "0");

  return (
    <div
      className="group relative flex flex-col items-center justify-center 
                 w-full min-w-0
                 py-3.5 sm:py-6 md:py-8 px-1 sm:px-4 md:px-6
                 rounded-xl sm:rounded-2xl 
                 bg-[#111827]/80 backdrop-blur-md 
                 border border-slate-800/90 hover:border-blue-500/30
                 shadow-[0_4px_24px_rgba(0,0,0,0.45)]
                 transition-all duration-300
                 hover:shadow-[0_0_25px_rgba(59,130,246,0.15)] hover:-translate-y-0.5"
      role="group"
      aria-label={`${value} ${label}`}
    >
      {/* Top subtle blue rim lighting */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/25 to-transparent rounded-t-2xl" />

      {/* Number Value */}
      <span
        className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-mono tracking-tight text-white tabular-nums select-none drop-shadow-sm"
        aria-hidden="true"
        suppressHydrationWarning
      >
        {formattedValue}
      </span>

      {/* Label */}
      <span className="mt-1 sm:mt-2.5 text-[9px] xs:text-[10px] sm:text-xs md:text-sm font-semibold tracking-wider sm:tracking-widest text-[#94A3B8] uppercase select-none">
        {label}
      </span>

      {/* Accessible screen reader announcement */}
      <span className="sr-only" suppressHydrationWarning>
        {value} {label}
      </span>
    </div>
  );
}

export function CountdownTimer({ timeRemaining }: CountdownTimerProps) {
  const units = [
    { label: "Days", value: timeRemaining.days },
    { label: "Hours", value: timeRemaining.hours },
    { label: "Minutes", value: timeRemaining.minutes },
    { label: "Seconds", value: timeRemaining.seconds },
  ];

  return (
    <div
      className="w-full max-w-2xl mx-auto px-1 sm:px-0"
      role="timer"
      aria-label="Launch Countdown"
      aria-live="polite"
    >
      {/* 4 compact cards in one row, responsive and cleanly spaced */}
      <div className="grid grid-cols-4 gap-2 sm:gap-4 md:gap-6">
        {units.map((unit) => (
          <CountdownCard
            key={unit.label}
            value={unit.value}
            label={unit.label}
          />
        ))}
      </div>
    </div>
  );
}
