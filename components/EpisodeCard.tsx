'use client';

import { useState } from 'react';
import AudioPlayer from './AudioPlayer';

interface Episode {
  id: string;
  season: number;
  episode: number;
  title: string;
  description: string;
  aired: string;
  movies: string[];
  audioFile: string;
}

export default function EpisodeCard({ episode }: { episode: Episode }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-black border-2 border-[#D32F2F] p-8 hover:border-[#DAA520] transition cinematic-shadow">
      {/* Header */}
      <div className="flex justify-between items-start mb-6">
        <div>
          <p className="text-[#DAA520] text-sm font-bold">
            S{episode.season}E{episode.episode}
          </p>
          <h3 className="text-2xl font-bold text-white mt-2" style={{ fontFamily: 'Playfair Display' }}>
            {episode.title}
          </h3>
        </div>
      </div>

      {/* Meta */}
      <p className="text-gray-400 text-sm mb-6">
        Aired: {episode.aired}
      </p>

      {/* Description */}
      <p className="text-gray-300 mb-8">
        {episode.description}
      </p>

      {/* Audio Player */}
      <div className="mb-6">
        <AudioPlayer src={episode.audioFile} />
      </div>

      {/* Movies Discussed */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center gap-2 text-[#DAA520] font-semibold hover:text-[#D32F2F] transition mb-4"
      >
        <span>{isExpanded ? '▼' : '▶'}</span>
        Movies Discussed ({episode.movies.length})
      </button>

      {isExpanded && (
        <div className="bg-[#2a2a2a] p-4 mb-4 border-l-2 border-[#DAA520]">
          <ul className="space-y-2">
            {episode.movies.map((movie, idx) => (
              <li key={idx} className="text-gray-300 flex items-start gap-2">
                <span className="text-[#DAA520] flex-shrink-0">•</span>
                <span>{movie}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
