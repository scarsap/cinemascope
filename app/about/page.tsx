import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <div className="bg-[#FAF8F5] text-[#2A2520] w-full">
      {/* Header */}
      <section className="w-full py-40 border-b-2 border-[#C41E1E] bg-gradient-to-b from-[#FAF8F5] to-[#F5EDE6] flex justify-center">
        <div className="max-w-6xl w-full px-8 sm:px-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[#D4AF37] hover:text-[#C41E1E] transition font-semibold mb-12"
          >
            ← Back Home
          </Link>
          <h1 className="text-5xl font-bold text-[#D4AF37]" style={{ fontFamily: 'Crimson Text' }}>
            About
          </h1>
          <p className="text-[#5A5550] text-lg mt-6 max-w-2xl">
            Learn about CinemaScope and the people behind it
          </p>
        </div>
      </section>

      {/* About CinemaScope Section */}
      <section className="w-full py-64 bg-gradient-to-b from-[#F5EDE6] to-[#FAF8F5] flex justify-center">
        <div className="max-w-6xl w-full px-8 sm:px-12">
          <h2 className="text-4xl font-bold text-[#D4AF37] mb-16" style={{ fontFamily: 'Crimson Text' }}>
            About CinemaScope
          </h2>
          <div className="flex flex-col md:flex-row gap-20 items-stretch">
            {/* Left Column: Bio */}
            <div className="md:w-2/3 flex">
              <div className="bg-[#F5EDE6] border border-[#E8DCC8] border-l-4 border-l-[#D4AF37] p-12 rounded-lg w-full flex flex-col justify-center" style={{ boxShadow: '0 10px 25px rgba(0,0,0,0.3)' }}>
                <div className="space-y-6">
                  <p className="text-[#5A5550] leading-relaxed" style={{ textIndent: '2rem' }}>
                    CinemaScope began in September of 2023 and is entering its fourth season in fall of 2026. Coming in at over 80 episodes, with over 500 movies discussed and over 800 songs played, CinemaScope has cemented itself as a core voice in the Hamilton film community, fostering connections between local institutions and local artists. CinemaScope has served as an accredited outlet for two years, attending film premieres, red carpets, industry events, and the Toronto International Film Festival with the goal of bringing movie news to McMaster and the Hamilton Area.
                  </p>

                  <p className="text-[#5A5550] leading-relaxed" style={{ textIndent: '2rem' }}>
                    CinemaScope has worked in partnership with the McMaster Silhouette, the Hamilton Film Festival, the Westdale Cinema, and local filmmakers.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Logo */}
            <div className="md:w-1/3 flex items-center justify-center">
              <div className="relative w-full aspect-square overflow-hidden border-2 border-[#D4AF37] shadow-2xl rounded-xl" style={{ boxShadow: '0 25px 50px rgba(0,0,0,0.7)' }}>
                <Image
                  src="/cinemascope-logo.png"
                  alt="CinemaScope Logo"
                  fill
                  unoptimized
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Host Section */}
      <section className="w-full py-64 bg-gradient-to-b from-[#FAF8F5] to-[#F5EDE6] flex justify-center">
        <div className="max-w-6xl w-full px-8 sm:px-12">
          <h2 className="text-4xl font-bold text-[#D4AF37] mb-16" style={{ fontFamily: 'Crimson Text' }}>
            About Scarlett
          </h2>
          <div className="flex flex-col md:flex-row gap-20 items-stretch">
            {/* Left Column: Host Photo + Award */}
            <div className="md:w-1/3 space-y-16">
              {/* Host Photo */}
              <div className="relative">
                <div className="relative w-full aspect-square overflow-hidden border-2 border-[#D4AF37] shadow-2xl rounded-xl" style={{ boxShadow: '0 25px 50px rgba(0,0,0,0.7)' }}>
                  <Image
                    src="/host.jpg"
                    alt="Scarlett Sapieha"
                    fill
                    unoptimized
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 bg-[#C41E1E] text-[#2A2520] px-6 py-3 font-bold" style={{ fontFamily: 'Crimson Text' }}>
                  Host: Scarlett
                </div>
              </div>

              {/* Follow Scarlett Box */}
              <div className="bg-[#F5EDE6] border border-[#E8DCC8] border-l-4 border-l-[#C41E1E] p-8 rounded-lg" style={{ marginTop: '3rem', boxShadow: '0 10px 25px rgba(0,0,0,0.3)' }}>
                <p className="text-[#D4AF37] font-semibold mb-4" style={{ fontFamily: 'Crimson Text' }}>
                  Follow Scarlett
                </p>
                <div className="space-y-3">
                  <div>
                    <p className="text-[#5A5550] text-sm mb-1">Instagram</p>
                    <a href="https://instagram.com/scarsap" target="_blank" rel="noopener noreferrer" className="text-[#D4AF37] hover:text-[#C41E1E] font-semibold transition">
                      @scarsap
                    </a>
                  </div>
                  <div>
                    <p className="text-[#5A5550] text-sm mb-1">Letterboxd</p>
                    <a href="https://letterboxd.com/scarsap/" target="_blank" rel="noopener noreferrer" className="text-[#D4AF37] hover:text-[#C41E1E] font-semibold transition">
                      @scarsap
                    </a>
                  </div>
                  <div>
                    <p className="text-[#5A5550] text-sm mb-1">LinkedIn</p>
                    <a href="https://linkedin.com/in/scarlett-sapieha" target="_blank" rel="noopener noreferrer" className="text-[#D4AF37] hover:text-[#C41E1E] font-semibold transition">
                      Scarlett Sapieha
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Bio */}
            <div className="md:w-2/3 flex">
              <div className="bg-[#F5EDE6] border border-[#E8DCC8] border-l-4 border-l-[#D4AF37] p-12 rounded-lg w-full flex flex-col justify-center" style={{ boxShadow: '0 10px 25px rgba(0,0,0,0.3)' }}>
                <div className="space-y-6">
                  <p className="text-[#5A5550] leading-relaxed" style={{ textIndent: '2rem' }}>
                    Scarlett Sapieha created CinemaScope in 2023, about two weeks after starting in the iArts program at McMaster. It's been her passion project, her baby, and her dream job ever since.
                  </p>

                  <p className="text-[#5A5550] leading-relaxed" style={{ textIndent: '2rem' }}>
                    Originally from Toronto, Scarlett grew up with a passion for films and filmmaking. She attended Eastwood Collegiate Institute for their Integrated Arts program, specializing in drama and production technologies. She's had short films appear in the Eastwood Fearless Film Festival and was a finalist in the Skills Canada Short Film Competition for Ontario.
                  </p>

                  <p className="text-[#5A5550] leading-relaxed" style={{ textIndent: '2rem' }}>
                    On behalf of CinemaScope, Scarlett has gotten to interview Oscar-winning filmmakers, attend premieres, film on red carpets, and host over eighty episodes. Some highlights include chats with Judd Apatow, Adam Elliot, Jarred Raab, Brett Goldstein, Imogen Poots, and more.
                  </p>

                  <p className="text-[#5A5550] leading-relaxed" style={{ textIndent: '2rem' }}>
                    In February 2025, Scarlett received the second annual CFMU bursary in recognition of CinemaScope and her written contributions to the CFMU outlet.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-56 bg-gradient-to-r from-[#F47070] to-[#E8a9a0] flex justify-center">
        <div className="max-w-6xl w-full px-8 sm:px-12 text-center">
          <h2 className="text-4xl font-bold text-[#2A2520] mb-16" style={{ fontFamily: 'Crimson Text' }}>
            Listen to CinemaScope
          </h2>
          <p className="text-[#2A2520] text-lg mb-20">
            Tune in every Thursday at 1 PM on CFMU.ca or browse the episode library
          </p>
          <div className="flex gap-6 justify-center flex-wrap">
            <Link
              href="/library"
              className="border-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black px-8 py-4 font-bold text-lg transition inline-block rounded-lg shadow-lg hover:shadow-xl bg-[#FAF8F5]"
            >
              Browse Episodes
            </Link>
            <Link
              href="/social"
              className="border-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black px-8 py-4 font-bold text-lg transition inline-block rounded-lg shadow-lg hover:shadow-xl bg-[#FAF8F5]"
            >
              Follow Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
