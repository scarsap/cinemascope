'use client';

import { useState, useEffect } from 'react';
import { supabase } from '@/utils/supabase';

export default function Admin() {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [formData, setFormData] = useState({
    season: '1',
    episode: '',
    title: '',
    description: '',
    spotifyUrl: '',
    airDate: '',
    movies: '',
    audioFile: null as File | null,
  });
  const [uploadedEpisodes, setUploadedEpisodes] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [seasons, setSeasons] = useState([1, 2, 3]);
  const [newSeasonName, setNewSeasonName] = useState('');
  const [editingId, setEditingId] = useState<number | null>(null);

  // Simple password check (you should change this to 'cinemascope' or something secure)
  const ADMIN_PASSWORD = 'cinemascope123';

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      setPassword('');
    } else {
      alert('Incorrect password');
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      fetchEpisodes();
    }
  }, [isAuthenticated]);

  const fetchEpisodes = async () => {
    const { data, error } = await supabase
      .from('episodes')
      .select('*')
      .order('season', { ascending: false })
      .order('episode', { ascending: false });

    if (error) {
      console.error('Error fetching episodes:', error);
    } else if (data) {
      setUploadedEpisodes(data);
    }
  };

  const handleEdit = (episode: any) => {
    setEditingId(episode.id);
    setFormData({
      season: episode.season.toString(),
      episode: episode.episode.toString(),
      title: episode.title,
      description: episode.description || '',
      spotifyUrl: episode.spotifyurl || '',
      airDate: episode.aired,
      movies: episode.movies?.join('\n') || '',
      audioFile: null,
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = async (id: number) => {
    if (!confirm('Are you sure you want to delete this episode?')) {
      return;
    }

    const { error } = await supabase
      .from('episodes')
      .delete()
      .eq('id', id);

    if (error) {
      alert('Error deleting episode: ' + error.message);
    } else {
      alert('Episode deleted successfully!');
      fetchEpisodes();
    }
  };

  const handleCancel = () => {
    setEditingId(null);
    setFormData({
      season: '1',
      episode: '',
      title: '',
      description: '',
      spotifyUrl: '',
      airDate: '',
      movies: '',
      audioFile: null,
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setFormData(prev => ({
      ...prev,
      audioFile: file || null
    }));
  };

  const handleAddSeason = () => {
    if (!newSeasonName.trim()) {
      alert('Please enter a season number');
      return;
    }
    const seasonNum = parseInt(newSeasonName);
    if (isNaN(seasonNum) || seasonNum <= 0) {
      alert('Please enter a valid season number');
      return;
    }
    if (seasons.includes(seasonNum)) {
      alert('Season already exists');
      return;
    }
    setSeasons([...seasons, seasonNum].sort((a, b) => a - b));
    setNewSeasonName('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.episode || !formData.title || !formData.airDate) {
      alert('Please fill all required fields');
      return;
    }

    if (!editingId && !formData.audioFile) {
      alert('Please select an audio file for new episodes');
      return;
    }

    setLoading(true);

    try {
      const movieList = formData.movies
        .split('\n')
        .map(m => m.trim())
        .filter(m => m.length > 0);

      let audioFileUrl = '';
      if (formData.audioFile) {
        const fileName = `S${formData.season}E${formData.episode}-${formData.audioFile.name}`;
        const { data: uploadData, error: uploadError } = await supabase.storage
          .from('episodes')
          .upload(fileName, formData.audioFile);

        if (uploadError) {
          alert('Error uploading audio file: ' + uploadError.message);
          setLoading(false);
          return;
        }

        const { data: publicUrl } = supabase.storage
          .from('episodes')
          .getPublicUrl(fileName);
        audioFileUrl = publicUrl.publicUrl;
      }

      const episodeData = {
        season: parseInt(formData.season),
        episode: parseInt(formData.episode),
        title: formData.title,
        description: formData.description,
        spotifyurl: formData.spotifyUrl || null,
        aired: formData.airDate,
        movies: movieList,
        ...(audioFileUrl && { audiofile: audioFileUrl })
      };

      let error;
      if (editingId) {
        const { error: updateError } = await supabase
          .from('episodes')
          .update(episodeData)
          .eq('id', editingId);
        error = updateError;
      } else {
        const { error: insertError } = await supabase
          .from('episodes')
          .insert([episodeData])
          .select();
        error = insertError;
      }

      if (error) {
        alert('Error saving episode: ' + error.message);
        setLoading(false);
        return;
      }

      handleCancel();
      setLoading(false);
      alert(editingId ? 'Episode updated successfully!' : 'Episode uploaded successfully!');
      fetchEpisodes();
    } catch (err) {
      alert('Error saving episode: ' + (err as Error).message);
      setLoading(false);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="bg-gradient-to-b from-[#FAF8F5] to-[#F5EDE6] text-[#2A2520] min-h-screen flex items-center justify-center py-32">
        <div className="w-full max-w-md">
          <form onSubmit={handleLogin} className="bg-[#F5EDE6] border-2 border-[#C41E1E] p-12 space-y-8 rounded-xl shadow-xl" style={{ boxShadow: '0 15px 35px rgba(0,0,0,0.5)' }}>
            <div>
              <h1 className="text-3xl font-bold text-[#D4AF37] mb-2" style={{ fontFamily: 'Crimson Text' }}>
                Admin Login
              </h1>
              <p className="text-[#5A5550]">Enter password to upload episodes</p>
            </div>

            <div>
              <label className="block text-sm font-semibold text-[#5A5550] mb-2">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-[#F5EDE6] border border-[#D4AF37] text-[#2A2520] px-4 py-2 focus:outline-none focus:border-[#C41E1E] transition"
                placeholder="Enter admin password"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#C41E1E] hover:bg-[#D4AF37] text-[#2A2520] hover:text-black font-bold py-3 transition"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-b from-[#FAF8F5] to-[#F5EDE6] text-[#2A2520] min-h-screen py-40 flex justify-center w-full">
      <div className="max-w-4xl w-full px-8 sm:px-12">
        <div className="flex justify-between items-center mb-20">
          <h1 className="text-4xl font-bold text-[#D4AF37]" style={{ fontFamily: 'Crimson Text' }}>
            Upload Episode
          </h1>
          <button
            onClick={() => setIsAuthenticated(false)}
            className="text-[#5A5550] hover:text-[#C41E1E] transition text-sm"
          >
            Logout
          </button>
        </div>


        {/* Add Season Section */}
        <div className="bg-[#F5EDE6] border border-[#E8DCC8] p-8 mb-12 rounded-xl shadow-lg" style={{ boxShadow: '0 10px 25px rgba(0,0,0,0.5)' }}>
          <h2 className="text-lg font-bold text-[#D4AF37] mb-4" style={{ fontFamily: 'Crimson Text' }}>
            Add New Season
          </h2>
          <div className="flex gap-3">
            <input
              type="number"
              min="1"
              value={newSeasonName}
              onChange={(e) => setNewSeasonName(e.target.value)}
              placeholder="Season number (e.g., 4)"
              className="flex-1 bg-[#F5EDE6] border border-[#D4AF37] text-[#2A2520] px-4 py-2 focus:outline-none focus:border-[#C41E1E] transition rounded-lg"
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  handleAddSeason();
                }
              }}
            />
            <button
              type="button"
              onClick={handleAddSeason}
              className="bg-[#D4AF37] hover:bg-[#C41E1E] text-black font-semibold px-6 py-2 transition rounded-lg"
            >
              Add Season
            </button>
          </div>
          <p className="text-[#5A5550] text-xs mt-3">Current seasons: {seasons.join(', ')}</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-[#F5EDE6] border border-[#E8DCC8] p-12 space-y-8 mb-20 rounded-xl shadow-lg" style={{ boxShadow: '0 10px 25px rgba(0,0,0,0.5)' }}>
          {editingId && (
            <div className="bg-[#F5EDE6] border-l-4 border-[#D4AF37] p-4 mb-4">
              <p className="text-[#D4AF37] font-semibold">Editing Episode</p>
            </div>
          )}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Season */}
            <div>
              <label className="block text-sm font-semibold text-[#5A5550] mb-3">
                Season *
              </label>
              <select
                name="season"
                value={formData.season}
                onChange={handleInputChange}
                className="w-full bg-[#F5EDE6] border border-[#D4AF37] text-[#2A2520] px-4 py-3 focus:outline-none focus:border-[#C41E1E] transition rounded-lg"
              >
                {seasons.map(s => (
                  <option key={s} value={s}>Season {s}</option>
                ))}
              </select>
            </div>

            {/* Episode Number */}
            <div>
              <label className="block text-sm font-semibold text-[#5A5550] mb-3">
                Episode Number *
              </label>
              <input
                type="number"
                name="episode"
                value={formData.episode}
                onChange={handleInputChange}
                className="w-full bg-[#F5EDE6] border border-[#D4AF37] text-[#2A2520] px-4 py-3 focus:outline-none focus:border-[#C41E1E] transition rounded-lg"
                placeholder="e.g., 1"
              />
            </div>
          </div>

          {/* Title */}
          <div>
            <label className="block text-sm font-semibold text-[#5A5550] mb-3">
              Episode Title *
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              className="w-full bg-[#F5EDE6] border border-[#D4AF37] text-[#2A2520] px-4 py-3 focus:outline-none focus:border-[#C41E1E] transition rounded-lg"
              placeholder="e.g., The Best of 2024"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-semibold text-[#5A5550] mb-3">
              Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              rows={4}
              className="w-full bg-[#F5EDE6] border border-[#D4AF37] text-[#2A2520] px-4 py-3 focus:outline-none focus:border-[#C41E1E] transition resize-none rounded-lg"
              placeholder="Brief description of this episode (optional)"
            />
          </div>

          {/* Spotify URL */}
          <div>
            <label className="block text-sm font-semibold text-[#5A5550] mb-3">
              Spotify Playlist URL
            </label>
            <input
              type="url"
              name="spotifyUrl"
              value={formData.spotifyUrl}
              onChange={handleInputChange}
              className="w-full bg-[#F5EDE6] border border-[#D4AF37] text-[#2A2520] px-4 py-3 focus:outline-none focus:border-[#C41E1E] transition rounded-lg"
              placeholder="e.g., https://open.spotify.com/playlist/..."
            />
          </div>

          {/* Air Date */}
          <div>
            <label className="block text-sm font-semibold text-[#5A5550] mb-3">
              Air Date *
            </label>
            <input
              type="text"
              name="airDate"
              value={formData.airDate}
              onChange={handleInputChange}
              className="w-full bg-[#F5EDE6] border border-[#D4AF37] text-[#2A2520] px-4 py-3 focus:outline-none focus:border-[#C41E1E] transition rounded-lg"
              placeholder="e.g., March 14, 2024"
            />
          </div>

          {/* Movies Discussed */}
          <div>
            <label className="block text-sm font-semibold text-[#5A5550] mb-3">
              Movies Discussed
            </label>
            <textarea
              name="movies"
              value={formData.movies}
              onChange={handleInputChange}
              rows={5}
              className="w-full bg-[#F5EDE6] border border-[#D4AF37] text-[#2A2520] px-4 py-3 focus:outline-none focus:border-[#C41E1E] transition resize-none rounded-lg"
              placeholder="Enter one movie per line&#10;e.g.&#10;High Fidelity (2000)&#10;Almost Famous (2000)&#10;This Is Spinal Tap (1984)"
            />
            <p className="text-[#5A5550] text-xs mt-3">One movie per line (optional)</p>
          </div>

          {/* Audio File */}
          <div>
            <label className="block text-sm font-semibold text-[#5A5550] mb-3">
              Audio File (MP3) *
            </label>
            <div className="flex items-center justify-center border-2 border-dashed border-[#D4AF37] p-8 cursor-pointer hover:border-[#C41E1E] transition rounded-lg bg-[#F5EDE6]/50">
              <input
                type="file"
                accept="audio/mp3"
                onChange={handleFileChange}
                className="hidden"
                id="audio-input"
              />
              <label htmlFor="audio-input" className="cursor-pointer text-center w-full">
                {formData.audioFile ? (
                  <div>
                    <p className="text-[#D4AF37] font-semibold">{formData.audioFile.name}</p>
                    <p className="text-[#5A5550] text-sm">
                      {(formData.audioFile.size / (1024 * 1024)).toFixed(2)} MB
                    </p>
                  </div>
                ) : (
                  <div>
                    <p className="text-[#5A5550] font-semibold">Click to upload or drag and drop</p>
                    <p className="text-[#5A5550] text-sm">MP3 files only</p>
                  </div>
                )}
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex gap-4 pt-4">
            <button
              type="submit"
              disabled={loading}
              className="flex-1 bg-[#C41E1E] hover:bg-[#D4AF37] disabled:opacity-50 text-[#2A2520] hover:text-black font-bold py-4 transition rounded-lg"
            >
              {loading ? (editingId ? 'Updating...' : 'Uploading...') : (editingId ? 'Update Episode' : 'Upload Episode')}
            </button>
            {editingId && (
              <button
                type="button"
                onClick={handleCancel}
                className="flex-1 bg-gray-600 hover:bg-gray-700 text-[#2A2520] font-bold py-4 transition rounded-lg"
              >
                Cancel
              </button>
            )}
          </div>
        </form>

        {/* All Episodes */}
        {uploadedEpisodes.length > 0 && (
          <div className="bg-[#F5EDE6] border border-[#E8DCC8] p-8 rounded-xl shadow-lg" style={{ boxShadow: '0 10px 25px rgba(0,0,0,0.5)' }}>
            <h2 className="text-2xl font-bold text-[#D4AF37] mb-6" style={{ fontFamily: 'Crimson Text' }}>
              All Episodes
            </h2>
            <div className="space-y-3">
              {uploadedEpisodes.map(ep => (
                <div key={ep.id} className="border-l-2 border-[#D4AF37] pl-3 py-2 flex justify-between items-center text-sm">
                  <div className="flex-1">
                    <p className="text-[#D4AF37] font-semibold">S{ep.season}E{ep.episode}: {ep.title}</p>
                    <p className="text-[#5A5550] text-xs">{ep.aired}</p>
                  </div>
                  <div className="flex gap-2 ml-3">
                    <button
                      onClick={() => handleEdit(ep)}
                      className="bg-[#D4AF37] hover:bg-[#C41E1E] text-black hover:text-[#2A2520] font-bold px-3 py-1 text-xs transition rounded"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(ep.id)}
                      className="bg-red-700 hover:bg-red-800 text-[#2A2520] font-bold px-3 py-1 text-xs transition rounded"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
