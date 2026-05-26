'use client';

import { useState, useEffect } from 'react';
import EpisodeCard from '@/components/EpisodeCard';
import { supabase } from '@/utils/supabase';

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

const defaultEpisodes: Episode[] = [
  {
    id: 1,
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
    audioFile: '/S1E20 - Mar. 14 - All About.mp3',
    spotifyUrl: 'https://open.spotify.com/playlist/33gMVwcCmnDr7IuQnloDMy?si=Ju3u2aR6SxCajAYO5hb10A&pi=7yTPxQTvSrC9J'
  },
  {
    id: 2,
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
    audioFile: '/S2E2 - Sep. 12 - TIFF24 1.mp3',
    spotifyUrl: 'https://open.spotify.com/playlist/2YBxGDxSeXBi6SpOHNI6QH?si=Z1NzgmKYTaSy4MmYUc0aUg&pi=XxyYwOiFSeiGa'
  }
];

export default function Library() {
  const [selectedSeason, setSelectedSeason] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [episodes, setEpisodes] = useState<Episode[]>(defaultEpisodes);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchEpisodes() {
      const { data, error } = await supabase
        .from('episodes')
        .select('*')
        .order('season', { ascending: false })
        .order('episode', { ascending: false });

      if (error) {
        console.error('Error fetching episodes:', error);
      } else if (data) {
        const mapped = data.map((ep: Record<string, unknown>) => ({
          id: ep.id as number,
          season: ep.season as number,
          episode: ep.episode as number,
          title: ep.title as string,
          description: ep.description as string,
          aired: ep.aired as string,
          movies: ep.movies as string[],
          audioFile: ep.audiofile as string,
          spotifyUrl: ep.spotifyurl as string | undefined,
        }));
        setEpisodes(mapped);
      }
      setLoading(false);
    }

    fetchEpisodes();
  }, []);

  const seasons = [1, 2, 3];
  const lowerQuery = searchQuery.toLowerCase();

  let filtered = episodes.filter(ep => {
    const matchesSearch = !searchQuery ||
      ep.title.toLowerCase().includes(lowerQuery) ||
      ep.movies.some(movie => movie.toLowerCase().includes(lowerQuery));

    const matchesSeason = !selectedSeason || ep.season === selectedSeason;

    return matchesSearch && matchesSeason;
  });

  return (
    <div className="bg-gradient-to-b from-[#FAF8F5] to-[#F5EDE6] text-[#2A2520] min-h-screen py-56 flex justify-center w-full">
      <div className="max-w-6xl w-full px-8 sm:px-12">
        {/* Header */}
        <div className="mb-40 border-b-2 border-[#C41E1E] pb-28">
          <h1 className="text-5xl font-bold text-[#D4AF37] mb-8" style={{ fontFamily: 'Crimson Text' }}>
            Episode Library
          </h1>
          <p className="text-[#5A5550] text-lg">Browse all episodes organized by season</p>
        </div>

        {/* Search */}
        <div className="mb-40">
          <input
            type="text"
            placeholder="Search episodes by title or movie name..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[#F5EDE6] border-2 border-[#D4AF37] text-[#2A2520] placeholder-[#8A7F7A] px-6 py-4 focus:outline-none focus:border-[#C41E1E] transition rounded-lg text-lg"
          />
        </div>

        {/* Season Filter */}
        <div className="mb-40">
          <h2 className="text-xl font-semibold text-[#D4AF37] mb-6">Filter by Season</h2>
          <div className="flex gap-6 flex-wrap">
            <button
              onClick={() => setSelectedSeason(null)}
              className={`px-6 py-2 font-semibold transition ${
                selectedSeason === null
                  ? 'bg-[#C41E1E] text-[#2A2520]'
                  : 'border-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#C41E1E] hover:border-[#C41E1E] hover:text-[#2A2520]'
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
                    ? 'bg-[#C41E1E] text-[#2A2520]'
                    : 'border-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#C41E1E] hover:border-[#C41E1E] hover:text-[#2A2520]'
                }`}
              >
                Season {season}
              </button>
            ))}
          </div>
        </div>

        {/* Episodes Grid */}
        <div className="grid md:grid-cols-2 gap-20">
          {filtered.map(episode => (
            <EpisodeCard key={episode.id} episode={episode} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-24 text-[#5A5550]">
            <p className="text-lg">No episodes found for this season yet.</p>
          </div>
        )}

      </div>
    </div>
  );
}
