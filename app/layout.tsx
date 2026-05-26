import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "CinemaScope - Your One Hour Hit of Everything Film",
  description: "A weekly podcast about film, hosted by Scarlett Sapieha on CFMU.ca",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#1a1a1a] text-[#2A2520] min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-1">{children}</main>
        <footer className="bg-[#FAF8F5] border-t-4 border-[#C41E1E] py-8 mt-20 w-full flex justify-center">
          <div className="max-w-6xl w-full px-6 sm:px-8 text-center text-[#5A5550]">
            <p>CinemaScope airs Thursdays at 1 PM on CFMU.ca</p>
            <p className="text-sm mt-2">© 2025 CinemaScope. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
