import React from "react";
import { BackgroundEffects } from "@/components/BackgroundEffects";
import { Header } from "@/components/Header";
import { CountdownSection } from "@/components/CountdownSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col justify-between overflow-x-hidden selection:bg-blue-600/30 selection:text-blue-100">
      {/* Background ambient gradient orbs and tech grid */}
      <BackgroundEffects />

      {/* Brand Navigation Header */}
      <Header />

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col items-center justify-center py-10 sm:py-16 md:py-20 relative z-10 w-full">
        <CountdownSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
