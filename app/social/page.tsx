import Link from 'next/link';
import Image from 'next/image';

export default function Social() {
  const socials = [
    {
      name: 'Instagram',
      handle: '@cfmu.cinemascope',
      url: 'https://instagram.com/cfmu.cinemascope',
      icon: '/instagram-icon.png',
      color: 'from-pink-500 to-purple-500'
    },
    {
      name: 'TikTok',
      handle: '@cfmu.cinemascope',
      url: 'https://tiktok.com/@cfmu.cinemascope',
      icon: '/tiktok-icon.png',
      color: 'from-black to-gray-800'
    },
    {
      name: 'Letterboxd',
      handle: '@Scarlett Sapieha',
      url: 'https://letterboxd.com/scarsap/',
      icon: '/letterboxd-icon.png',
      color: 'from-blue-500 to-cyan-500'
    }
  ];

  return (
    <div className="bg-gradient-to-b from-[#FAF8F5] to-[#F5EDE6] text-[#2A2520] min-h-screen py-56 flex flex-col items-center justify-center w-full">
      <div className="max-w-4xl w-full px-8 sm:px-12 flex-1 flex flex-col">
        {/* Header */}
        <div className="text-center mb-48">
          <h1 className="text-5xl font-bold text-[#D4AF37] mb-8" style={{ fontFamily: 'Crimson Text' }}>
            Follow CinemaScope
          </h1>
          <p className="text-[#5A5550] text-lg leading-relaxed">
            Stay connected for the latest episodes, behind-the-scenes content, and film discussions
          </p>
        </div>

        {/* Social Cards */}
        <div className="grid md:grid-cols-3 gap-16 mb-56">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className={`bg-gradient-to-br ${social.color} p-0.5 rounded-xl hover:scale-105 transition transform duration-300 border-2 border-[#D4AF37]`} style={{ boxShadow: '0 20px 40px rgba(0,0,0,0.5)' }}>
                <div className="bg-[#F5EDE6] border border-[#E8DCC8] p-8 rounded-xl h-full flex flex-col items-center justify-center text-center group-hover:bg-[#E8DCC8] transition">
                  <div className="relative w-16 h-16 mb-3">
                    <Image
                      src={social.icon}
                      alt={social.name}
                      fill
                      unoptimized
                      className="object-contain"
                    />
                  </div>
                  <h2 className="text-2xl font-bold text-[#2A2520] mb-2" style={{ fontFamily: 'Crimson Text' }}>
                    {social.name}
                  </h2>
                  <p className="text-[#D4AF37] font-semibold break-all">
                    {social.handle}
                  </p>
                  <p className="text-[#5A5550] text-sm mt-4 group-hover:text-[#D4AF37] transition">
                    Visit →
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* TikTok Embed Section */}
        <div className="my-32">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Video 1 */}
            <div className="flex justify-center">
              <div className="max-w-xs">
                <blockquote className="tiktok-embed" cite="https://www.tiktok.com/@cfmu.cinemascope/video/7466181152328420613" data-unique-id="cfmu.cinemascope" data-video-id="7466181152328420613">
                  <section>
                    <a target="_blank" title="@cfmu.cinemascope" href="https://www.tiktok.com/@cfmu.cinemascope">@cfmu.cinemascope</a>
                  </section>
                </blockquote>
              </div>
            </div>

            {/* Video 2 */}
            <div className="flex justify-center">
              <div className="max-w-xs">
                <blockquote className="tiktok-embed" cite="https://www.tiktok.com/@cfmu.cinemascope/video/7427154292366167301" data-unique-id="cfmu.cinemascope" data-video-id="7427154292366167301">
                  <section>
                    <a target="_blank" title="@cfmu.cinemascope" href="https://www.tiktok.com/@cfmu.cinemascope">@cfmu.cinemascope</a>
                  </section>
                </blockquote>
              </div>
            </div>

            {/* Video 3 */}
            <div className="flex justify-center">
              <div className="max-w-xs">
                <blockquote className="tiktok-embed" cite="https://www.tiktok.com/@cfmu.cinemascope/video/7412432356528688390" data-unique-id="cfmu.cinemascope" data-video-id="7412432356528688390">
                  <section>
                    <a target="_blank" title="@cfmu.cinemascope" href="https://www.tiktok.com/@cfmu.cinemascope">@cfmu.cinemascope</a>
                  </section>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
        <script async src="https://www.tiktok.com/embed.js"></script>

        {/* Info Section */}
        <div className="mt-40 pt-24 border-t-2 border-[#C41E1E] text-center">
          <p className="text-[#5A5550] mb-8 text-lg">
            📻 CinemaScope airs every Thursday at 1 PM on CFMU.ca
          </p>
          <p className="text-[#5A5550] text-lg">
            🎬 Interview footage and exclusive content available on social media
          </p>
        </div>
      </div>
    </div>
  );
}
