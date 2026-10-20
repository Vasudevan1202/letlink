import React from "react";

export function BackgroundEffects() {
  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden select-none -z-10"
      aria-hidden="true"
    >
      {/* Base background color */}
      <div className="absolute inset-0 bg-[#070B14]" />

      {/* Subtle Grid Pattern with Radial Falloff Mask */}
      <div
        className="absolute inset-0 opacity-[0.06] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)]"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(96, 165, 250, 0.4) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(96, 165, 250, 0.4) 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
        }}
      />

      {/* Floating Gradient Orb 1 - Top Center */}
      <div
        className="absolute -top-[15%] left-1/2 -translate-x-1/2 w-[700px] h-[450px] 
                   rounded-full bg-gradient-to-br from-blue-600/20 via-blue-500/10 to-transparent 
                   blur-[130px] animate-orb-drift-1 motion-reduce:animate-none"
      />

      {/* Floating Gradient Orb 2 - Lower Center */}
      <div
        className="absolute top-[50%] left-1/2 -translate-x-1/2 w-[600px] h-[500px] 
                   rounded-full bg-gradient-to-tr from-blue-500/15 via-blue-400/8 to-transparent 
                   blur-[140px] animate-orb-drift-2 motion-reduce:animate-none"
      />

      {/* Ambient Focal Glow directly behind countdown */}
      <div
        className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[280px] 
                   rounded-full bg-blue-500/10 blur-[90px] animate-glow motion-reduce:animate-none"
      />

      {/* Subtle top horizontal highlight line */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
    </div>
  );
}
