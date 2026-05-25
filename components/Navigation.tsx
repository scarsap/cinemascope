'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black border-b-4 border-[#D32F2F] sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-3xl font-bold text-[#D32F2F]" style={{ fontFamily: 'Playfair Display' }}>
              CS
            </span>
            <span className="text-lg font-bold text-[#DAA520]" style={{ fontFamily: 'Playfair Display' }}>
              CinemaScope
            </span>
          </Link>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-[#DAA520] text-2xl"
          >
            ☰
          </button>

          <div className={`${isOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row gap-8 absolute md:relative top-20 md:top-0 left-0 md:left-auto right-0 md:right-0 bg-black md:bg-transparent p-4 md:p-0 border-b-2 md:border-b-0 border-[#D32F2F]`}>
            <Link
              href="/"
              className="text-white hover:text-[#D32F2F] transition font-medium"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/library"
              className="text-white hover:text-[#D32F2F] transition font-medium"
              onClick={() => setIsOpen(false)}
            >
              Library
            </Link>
            <Link
              href="/social"
              className="text-white hover:text-[#D32F2F] transition font-medium"
              onClick={() => setIsOpen(false)}
            >
              Social
            </Link>
            <Link
              href="/admin"
              className="text-[#DAA520] hover:text-[#D32F2F] transition font-medium"
              onClick={() => setIsOpen(false)}
            >
              Upload
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
