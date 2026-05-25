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
    <div className="bg-[#1a1a1a] text-white min-h-screen py-32 flex flex-col items-center justify-center w-full">
      <div className="max-w-4xl w-full px-6 sm:px-8 flex-1 flex flex-col">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-5xl font-bold text-[#DAA520] mb-6" style={{ fontFamily: 'Playfair Display' }}>
            Follow CinemaScope
          </h1>
          <p className="text-gray-300 text-lg">
            Stay connected for the latest episodes, behind-the-scenes content, and film discussions
          </p>
        </div>

        {/* Social Cards */}
        <div className="grid md:grid-cols-3 gap-10 mb-20">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className={`bg-gradient-to-br ${social.color} p-0.5 rounded-lg hover:scale-105 transition transform duration-300`}>
                <div className="bg-black p-8 rounded-lg h-full flex flex-col items-center justify-center text-center group-hover:bg-[#2a2a2a] transition">
                  <div className="relative w-20 h-20 mb-4">
                    <Image
                      src={social.icon}
                      alt={social.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h2 className="text-2xl font-bold text-white mb-2" style={{ fontFamily: 'Playfair Display' }}>
                    {social.name}
                  </h2>
                  <p className="text-[#DAA520] font-semibold break-all">
                    {social.handle}
                  </p>
                  <p className="text-gray-400 text-sm mt-4 group-hover:text-[#DAA520] transition">
                    Visit →
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Personal Socials */}
        <div className="bg-black border-2 border-[#DAA520] p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-[#DAA520] mb-6" style={{ fontFamily: 'Playfair Display' }}>
            Follow Scarlett
          </h2>
          <p className="text-gray-300 mb-6">
            For more from host Scarlett Sapieha, check out her personal channels:
          </p>
          <div className="space-y-3">
            <div>
              <p className="text-gray-400 text-sm mb-1">Instagram</p>
              <a href="https://instagram.com/scarsap" target="_blank" rel="noopener noreferrer" className="text-[#DAA520] hover:text-[#D32F2F] font-semibold transition">
                @scarsap
              </a>
            </div>
            <div>
              <p className="text-gray-400 text-sm mb-1">Letterboxd</p>
              <a href="https://letterboxd.com/scarsap/" target="_blank" rel="noopener noreferrer" className="text-[#DAA520] hover:text-[#D32F2F] font-semibold transition">
                @scarsap
              </a>
            </div>
            <div>
              <p className="text-gray-400 text-sm mb-1">LinkedIn</p>
              <a href="https://linkedin.com/in/scarlett-sapieha" target="_blank" rel="noopener noreferrer" className="text-[#DAA520] hover:text-[#D32F2F] font-semibold transition">
                Scarlett Sapieha
              </a>
            </div>
          </div>
        </div>

        {/* Info Section */}
        <div className="mt-16 pt-12 border-t-4 border-[#D32F2F] text-center">
          <p className="text-gray-400 mb-4">
            📻 CinemaScope airs every Thursday at 1 PM on CFMU.ca
          </p>
          <p className="text-gray-400">
            🎬 Interview footage and exclusive content available on social media
          </p>
        </div>
      </div>
    </div>
  );
}
