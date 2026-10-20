import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Letlink — Something New Is Coming",
  description: "We're building something exciting. Get ready to experience Letlink.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Letlink — Launch Countdown",
    description: "We're building something exciting. Get ready to experience Letlink.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#070B14",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased bg-[#070B14] text-white min-h-screen flex flex-col justify-between">
        {children}
      </body>
    </html>
  );
}
