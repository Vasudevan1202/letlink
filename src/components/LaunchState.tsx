import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export function LaunchState() {
  return (
    <div className="flex flex-col items-center justify-center text-center max-w-lg mx-auto py-8 sm:py-12 px-4 transition-all duration-500 ease-out animate-fadeIn">
      {/* Celebratory badge */}
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs sm:text-sm font-medium mb-6 shadow-[0_0_20px_rgba(59,130,246,0.2)]">
        <Sparkles className="w-4 h-4 text-blue-400" />
        <span>Official Launch</span>
      </div>

      {/* Heading */}
      <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-4 drop-shadow-md">
        We&apos;re Live!
      </h2>

      {/* Message */}
      <p className="text-base sm:text-lg text-[#94A3B8] max-w-md mx-auto mb-8 leading-relaxed">
        The wait is over. Welcome to Letlink.
      </p>

      {/* Primary Action Button */}
      <Link
        href="/"
        className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 sm:px-8 sm:py-4 rounded-xl 
                   bg-[#3B82F6] hover:bg-[#60A5FA] text-white font-semibold text-sm sm:text-base
                   shadow-[0_0_30px_rgba(59,130,246,0.35)] hover:shadow-[0_0_35px_rgba(96,165,250,0.5)] 
                   hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
      >
        <span>Explore Letlink</span>
        <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  );
}
