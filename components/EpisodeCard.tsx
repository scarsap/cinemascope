'use client';

import { useState } from 'react';
import Link from 'next/link';
import AudioPlayer from './AudioPlayer';

interface Episode {
  id: number;
  season: number;
  episode: number;
  title: string;
  description: string;
  aired: string;
  movies: string[];
  audioFile: string;
  spotifyUrl?: string;
}

export default function EpisodeCard({ episode }: { episode: Episode }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-[#F5EDE6] border border-[#E8DCC8] p-12 hover:border-[#D4AF37] transition rounded-xl shadow-xl hover:shadow-2xl" style={{ boxShadow: '0 15px 35px rgba(0,0,0,0.5)' }}>
      {/* Header */}
      <div className="flex justify-between items-start mb-10">
        <div>
          <p className="text-[#D4AF37] text-sm font-bold tracking-wider">
            S{episode.season}E{episode.episode}
          </p>
          <h3 className="text-3xl font-bold text-[#2A2520] mt-4" style={{ fontFamily: 'Crimson Text' }}>
            {episode.title}
          </h3>
        </div>
      </div>

      {/* Meta */}
      <p className="text-[#5A5550] text-sm mb-10">
        Aired: {episode.aired}
      </p>

      {/* Description */}
      <p className="text-[#5A5550] mb-12 leading-relaxed">
        {episode.description}
      </p>

      {/* Audio Player */}
      <div className="mb-10">
        <AudioPlayer src={episode.audioFile} />
      </div>

      {/* Spotify Link */}
      {episode.spotifyUrl && (
        <div className="mb-10">
          <a
            href={episode.spotifyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#E8DCC8] hover:bg-gradient-to-r hover:from-[#C41E1E] hover:to-[#E53935] text-[#2A2520] hover:text-[#D4AF37] border border-[#D4AF37] hover:border-[#C41E1E] px-6 py-3 font-semibold transition rounded-lg shadow-md hover:shadow-lg"
          >
            <span>♫</span> Listen on Spotify
          </a>
        </div>
      )}

      {/* Movies Discussed */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center gap-2 text-[#D4AF37] font-semibold hover:text-[#C41E1E] transition mb-8 text-lg"
      >
        <span>{isExpanded ? '▼' : '▶'}</span>
        Movies Discussed ({episode.movies.length})
      </button>

      {isExpanded && (
        <div className="bg-[#F5EDE6] p-6 mb-4 border-l-4 border-[#D4AF37] rounded-lg">
          <ul className="space-y-3">
            {episode.movies.map((movie, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="text-[#D4AF37] flex-shrink-0 mt-1">•</span>
                <a
                  href={`https://letterboxd.com/search/${encodeURIComponent(movie)}/`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#5A5550] hover:text-[#D4AF37] transition underline"
                >
                  {movie}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
