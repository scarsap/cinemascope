import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-[#FAF8F5] text-[#2A2520] w-full">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden w-full bg-gradient-to-b from-[#FAF8F5] to-[#F5EDE6]">
        <div className="absolute inset-0 bg-gradient-to-b from-[#C41E1E]/10 to-transparent opacity-40"></div>

        <div className="max-w-6xl mx-auto px-8 sm:px-12 py-56 relative z-10 grid md:grid-cols-2 gap-32 items-center">
          {/* Logo */}
          <div className="hidden md:flex items-center justify-center">
            <div className="relative w-full aspect-square border-2 border-[#D4AF37] shadow-2xl overflow-hidden rounded-xl" style={{ boxShadow: '0 20px 50px rgba(0,0,0,0.6)' }}>
              <Image
                src="/logo.png"
                alt="CinemaScope Logo"
                fill
                unoptimized
                className="object-cover"
              />
            </div>
          </div>

          {/* Text */}
          <div className="space-y-10 md:order-first">
            <div className="border-l-4 border-[#D4AF37] pl-8">
              <h1 className="text-5xl md:text-6xl font-bold text-[#2A2520] leading-tight" style={{ fontFamily: 'Crimson Text' }}>
                CinemaScope
              </h1>
              <p className="text-2xl text-[#D4AF37] mt-4" style={{ fontFamily: 'Crimson Text' }}>
                Your One Hour Hit of Everything Film
              </p>
            </div>

            <p className="text-lg text-[#5A5550] leading-relaxed">
              Hosted by Scarlett Sapieha, CinemaScope dives into a new movie topic every week. From actors and directors to genres and vibes, we explore everything cinema.
            </p>

            <div className="flex gap-6 pt-8 flex-wrap">
              <Link
                href="/library"
                className="bg-gradient-to-r from-[#C41E1E] to-[#E53935] hover:from-[#D4AF37] hover:to-[#E6B800] text-[#2A2520] hover:text-black px-8 py-4 font-semibold transition transform hover:scale-105 text-lg rounded-lg shadow-lg hover:shadow-xl"
              >
                Explore Episodes
              </Link>
              <Link
                href="/social"
                className="border-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black px-8 py-4 font-semibold transition text-lg rounded-lg shadow-lg hover:shadow-xl"
              >
                Follow Us
              </Link>
            </div>

            <Link
              href="https://cfmu.ca"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#D4AF37] hover:text-[#C41E1E] transition font-semibold mt-12 text-lg"
            >
              ▶ Thursdays at 1 PM on CFMU.ca
            </Link>
          </div>

        </div>
      </section>


      {/* CTA Section */}
      <section className="w-full py-72 bg-gradient-to-r from-[#F47070] to-[#E8a9a0] flex justify-center">
        <div className="max-w-6xl w-full px-8 sm:px-12 text-center">
          <h2 className="text-4xl font-bold text-[#2A2520] mb-16" style={{ fontFamily: 'Crimson Text' }}>
            Dive Into the Library
          </h2>
          <p className="text-[#2A2520] text-lg mb-20">
            Browse over 80 episodes organized by season
          </p>
          <Link
            href="/library"
            className="border-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black px-8 py-4 font-bold text-lg transition inline-block rounded-lg shadow-lg hover:shadow-xl bg-[#FAF8F5]"
          >
            Browse Episodes
          </Link>
        </div>
      </section>
    </div>
  );
}
