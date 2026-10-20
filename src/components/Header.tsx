import React from "react";
import { Link2 } from "lucide-react";

export function Header() {
  return (
    <header className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-8 flex items-center justify-between relative z-10">
      {/* Brand Logo */}
      <div className="flex items-center gap-2.5 sm:gap-3 group select-none">
        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.2)] group-hover:border-blue-400/50 group-hover:text-blue-300 transition-colors">
          <Link2 className="w-5 h-5 -rotate-45" strokeWidth={2.2} />
        </div>
        <span className="text-xl sm:text-2xl font-bold tracking-tight text-white">
          Letlink
        </span>
      </div>

      {/* Status indicator pill */}
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/80 border border-slate-800 text-xs font-medium text-slate-300">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75 motion-reduce:animate-none" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
        </span>
        <span className="hidden xs:inline text-slate-400">Launch Countdown</span>
      </div>
    </header>
  );
}
