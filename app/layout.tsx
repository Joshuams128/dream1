// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { NavBar } from "./components/NavBar";
import Footer from "./components/Footer";
import SpeedInsightsClient from "./components/SpeedInsightsClient";

export const metadata: Metadata = {
  title: "Build With Dream",
  description: "Renovations, repairs, and home improvements in Durham Region.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans">
        <NavBar />
        {children}
        <Footer />
        <SpeedInsightsClient />
      </body>
    </html>
  );
}
