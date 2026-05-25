'use client';

import { useState } from 'react';
import EpisodeCard from '@/components/EpisodeCard';

const episodes = [
  {
    id: 's1e20',
    season: 1,
    episode: 20,
    title: 'All About CinemaScope',
    description: 'Playlist featuring movies about music shows and the power of cinema.',
    aired: 'March 14, 2024',
    movies: [
      'High Fidelity (2000)',
      'Almost Famous (2000)',
      'This Is Spinal Tap (1984)',
      'Empire Records (1995)',
      'Hearts Beat Loud (2018)',
      'LaLa Land (2016)'
    ],
    audioFile: '/S1E20 - Mar. 14 - All About.mp3'
  },
  {
    id: 's2e2',
    season: 2,
    episode: 2,
    title: 'TIFF24 1',
    description: 'Exploring the best of Toronto International Film Festival 2024.',
    aired: 'September 12, 2024',
    movies: [
      'Rumours (2024)',
      'Space Cowboy (2024)',
      'The End (2024)',
      'We Live In Time (2024)',
      'Nightbitch (2024)',
      'All of You (2024)',
      'Happyend (2024)',
      'Under the Volcano (2024)',
      'Can I Get a Witness? (2024)',
      'Wrecked a Bunch of Cars, Had a Good Time (2024)',
      'Ick (2024)',
      'They Will Be Dust (2024)'
    ],
    audioFile: '/S2E2 - Sep. 12 - TIFF24 1.mp3'
  }
];

export default function Library() {
  const [selectedSeason, setSelectedSeason] = useState<number | null>(null);

  const seasons = [1, 2, 3];
  const filtered = selectedSeason
    ? episodes.filter(ep => ep.season === selectedSeason)
    : episodes;

  return (
    <div className="bg-[#1a1a1a] text-white min-h-screen py-32 flex justify-center w-full">
      <div className="max-w-6xl w-full px-6 sm:px-8">
        {/* Header */}
        <div className="mb-20 border-b-4 border-[#D32F2F] pb-12">
          <h1 className="text-5xl font-bold text-[#DAA520] mb-6" style={{ fontFamily: 'Playfair Display' }}>
            Episode Library
          </h1>
          <p className="text-gray-300 text-lg">Browse all episodes organized by season</p>
        </div>

        {/* Season Filter */}
        <div className="mb-16">
          <h2 className="text-xl font-semibold text-[#DAA520] mb-4">Filter by Season</h2>
          <div className="flex gap-4 flex-wrap">
            <button
              onClick={() => setSelectedSeason(null)}
              className={`px-6 py-2 font-semibold transition ${
                selectedSeason === null
                  ? 'bg-[#D32F2F] text-white'
                  : 'border-2 border-[#DAA520] text-[#DAA520] hover:bg-[#D32F2F] hover:border-[#D32F2F] hover:text-white'
              }`}
            >
              All Episodes
            </button>
            {seasons.map(season => (
              <button
                key={season}
                onClick={() => setSelectedSeason(season)}
                className={`px-6 py-2 font-semibold transition ${
                  selectedSeason === season
                    ? 'bg-[#D32F2F] text-white'
                    : 'border-2 border-[#DAA520] text-[#DAA520] hover:bg-[#D32F2F] hover:border-[#D32F2F] hover:text-white'
                }`}
              >
                Season {season}
              </button>
            ))}
          </div>
        </div>

        {/* Episodes Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {filtered.map(episode => (
            <EpisodeCard key={episode.id} episode={episode} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-12 text-gray-400">
            <p>No episodes found for this season yet.</p>
          </div>
        )}

        {/* Coming Soon */}
        <div className="mt-20 pt-12 border-t-4 border-[#DAA520]">
          <h2 className="text-3xl font-bold text-[#DAA520] mb-6" style={{ fontFamily: 'Playfair Display' }}>
            More Coming Soon
          </h2>
          <p className="text-gray-300">
            New episodes are added regularly. Check back soon for more from our archives, or follow us on social media for the latest updates.
          </p>
        </div>
      </div>
    </div>
  );
}
