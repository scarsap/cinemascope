'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#FAF8F5] border-b-4 border-[#C41E1E] sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-3xl font-bold text-[#C41E1E]" style={{ fontFamily: 'Crimson Text' }}>
              CS
            </span>
            <span className="text-lg font-bold text-[#D4AF37]" style={{ fontFamily: 'Crimson Text' }}>
              CinemaScope
            </span>
          </Link>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-[#D4AF37] text-2xl"
          >
            ☰
          </button>

          <div className={`${isOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row gap-8 absolute md:relative top-20 md:top-0 left-0 md:left-auto right-0 md:right-0 bg-[#FAF8F5] md:bg-transparent p-4 md:p-0 border-b-2 md:border-b-0 border-[#C41E1E]`}>
            <Link
              href="/"
              className="text-[#2A2520] hover:text-[#C41E1E] transition font-medium"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/library"
              className="text-[#2A2520] hover:text-[#C41E1E] transition font-medium"
              onClick={() => setIsOpen(false)}
            >
              Library
            </Link>
            <Link
              href="/about"
              className="text-[#2A2520] hover:text-[#C41E1E] transition font-medium"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="/social"
              className="text-[#2A2520] hover:text-[#C41E1E] transition font-medium"
              onClick={() => setIsOpen(false)}
            >
              Social
            </Link>
            <Link
              href="/admin"
              className="text-[#D4AF37] hover:text-[#C41E1E] transition font-medium"
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
