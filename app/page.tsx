import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-[#1a1a1a] text-white w-full">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden w-full">
        <div className="absolute inset-0 bg-gradient-to-b from-[#D32F2F]/20 to-transparent opacity-50"></div>

        <div className="max-w-6xl mx-auto px-6 sm:px-8 py-32 relative z-10 grid md:grid-cols-2 gap-16 items-center">
          {/* Logo */}
          <div className="hidden md:flex items-center justify-center">
            <div className="relative w-full aspect-square border-4 border-[#DAA520] shadow-2xl overflow-hidden">
              <Image
                src="/logo.png"
                alt="CinemaScope Logo"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Text */}
          <div className="space-y-8 md:order-first">
            <div className="border-l-4 border-[#DAA520] pl-6">
              <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight" style={{ fontFamily: 'Playfair Display' }}>
                CinemaScope
              </h1>
              <p className="text-2xl text-[#DAA520] mt-2" style={{ fontFamily: 'Playfair Display' }}>
                Your One Hour Hit of Everything Film
              </p>
            </div>

            <p className="text-lg text-gray-300 leading-relaxed">
              Hosted by Scarlett Sapieha, CinemaScope dives into a new movie topic every week. From actors and directors to genres and vibes, we explore everything cinema.
            </p>

            <div className="flex gap-4 pt-6">
              <Link
                href="/library"
                className="bg-[#D32F2F] hover:bg-[#DAA520] text-white hover:text-black px-6 py-3 font-semibold transition transform hover:scale-105"
              >
                Explore Episodes
              </Link>
              <Link
                href="/social"
                className="border-2 border-[#DAA520] text-[#DAA520] hover:bg-[#DAA520] hover:text-black px-6 py-3 font-semibold transition"
              >
                Follow Us
              </Link>
            </div>

            <Link
              href="https://cfmu.ca"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#DAA520] hover:text-[#D32F2F] transition font-semibold mt-8"
            >
              ▶ Thursdays at 1 PM on CFMU.ca
            </Link>
          </div>

        </div>
      </section>

      {/* About Host Section */}
      <section className="w-full py-32 border-t-4 border-[#D32F2F] bg-black flex justify-center">
        <div className="max-w-6xl w-full px-6 sm:px-8">
          <h2 className="text-4xl font-bold text-[#DAA520] mb-16" style={{ fontFamily: 'Playfair Display' }}>
            About the Host
          </h2>

          <div className="grid md:grid-cols-3 gap-12 items-start">
            {/* Host Photo */}
            <div className="md:col-span-1 relative">
              <div className="relative w-full aspect-square overflow-hidden border-4 border-[#DAA520] shadow-2xl">
                <Image
                  src="/host.jpg"
                  alt="Scarlett Sapieha"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-[#D32F2F] text-white px-4 py-2 font-bold" style={{ fontFamily: 'Playfair Display' }}>
                Host: Scarlett
              </div>
            </div>

            {/* Bio */}
            <div className="md:col-span-2 space-y-8 text-gray-300">
            <p>
              Scarlett Sapieha created CinemaScope in 2023, about two weeks after starting in the iArts program at McMaster. It's been her passion project, her baby, and her dream job ever since.
            </p>

            <p>
              Originally from Toronto, Scarlett grew up with a passion for films and filmmaking. She attended Eastwood Collegiate Institute for their Integrated Arts program, specializing in drama and production technologies. She's had short films appear in the Eastwood Fearless Film Festival and was a finalist in the Skills Canada Short Film Competition for Ontario.
            </p>

            <p>
              On behalf of CinemaScope, Scarlett has gotten to interview Oscar-winning filmmakers, attend premieres, film on red carpets, and host over eighty episodes. Some highlights include chats with Judd Apatow, Adam Elliot, Jarred Raab, Brett Goldstein, Imogen Poots, and more.
            </p>

            <p className="text-sm italic">
              In February 2025, Scarlett received the second annual CFMU bursary in recognition of CinemaScope and her written contributions to the CFMU outlet.
            </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-32 bg-[#D32F2F] flex justify-center">
        <div className="max-w-6xl w-full px-6 sm:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-8" style={{ fontFamily: 'Playfair Display' }}>
            Dive Into the Library
          </h2>
          <p className="text-white text-lg mb-12">
            Browse over 80 episodes organized by season
          </p>
          <Link
            href="/library"
            className="bg-[#1a1a1a] text-[#DAA520] hover:text-white px-8 py-4 font-bold text-lg transition inline-block border-2 border-white hover:bg-[#DAA520] hover:border-[#1a1a1a] hover:text-black"
          >
            Go to Library
          </Link>
        </div>
      </section>
    </div>
  );
}
