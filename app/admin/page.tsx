'use client';

import { useState } from 'react';

export default function Admin() {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [formData, setFormData] = useState({
    season: '1',
    episode: '',
    title: '',
    description: '',
    audioFile: null as File | null,
  });
  const [uploadedEpisodes, setUploadedEpisodes] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.episode || !formData.title || !formData.audioFile) {
      alert('Please fill all required fields');
      return;
    }

    setLoading(true);

    // Simulate upload (in a real app, this would send to a server)
    setTimeout(() => {
      const newEpisode = {
        id: `s${formData.season}e${formData.episode}`,
        season: parseInt(formData.season),
        episode: parseInt(formData.episode),
        title: formData.title,
        description: formData.description,
        aired: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
        fileName: formData.audioFile?.name,
        movies: []
      };

      setUploadedEpisodes(prev => [...prev, newEpisode]);
      setFormData({
        season: '1',
        episode: '',
        title: '',
        description: '',
        audioFile: null
      });
      setLoading(false);
      alert('Episode uploaded successfully!');
    }, 1000);
  };

  if (!isAuthenticated) {
    return (
      <div className="bg-[#1a1a1a] text-white min-h-screen flex items-center justify-center py-20">
        <div className="w-full max-w-md">
          <form onSubmit={handleLogin} className="bg-black border-2 border-[#D32F2F] p-8 space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-[#DAA520] mb-2" style={{ fontFamily: 'Playfair Display' }}>
                Admin Login
              </h1>
              <p className="text-gray-400">Enter password to upload episodes</p>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-[#2a2a2a] border border-[#DAA520] text-white px-4 py-2 focus:outline-none focus:border-[#D32F2F] transition"
                placeholder="Enter admin password"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#D32F2F] hover:bg-[#DAA520] text-white hover:text-black font-bold py-3 transition"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#1a1a1a] text-white min-h-screen py-20 flex justify-center w-full">
      <div className="max-w-4xl w-full px-6 sm:px-8">
        <div className="flex justify-between items-center mb-12">
          <h1 className="text-4xl font-bold text-[#DAA520]" style={{ fontFamily: 'Playfair Display' }}>
            Upload Episode
          </h1>
          <button
            onClick={() => setIsAuthenticated(false)}
            className="text-gray-400 hover:text-[#D32F2F] transition text-sm"
          >
            Logout
          </button>
        </div>

        <form onSubmit={handleSubmit} className="bg-black border-2 border-[#DAA520] p-8 space-y-6 mb-12">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Season */}
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">
                Season *
              </label>
              <select
                name="season"
                value={formData.season}
                onChange={handleInputChange}
                className="w-full bg-[#2a2a2a] border border-[#DAA520] text-white px-4 py-2 focus:outline-none focus:border-[#D32F2F] transition"
              >
                <option value="1">Season 1</option>
                <option value="2">Season 2</option>
                <option value="3">Season 3</option>
              </select>
            </div>

            {/* Episode Number */}
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">
                Episode Number *
              </label>
              <input
                type="number"
                name="episode"
                value={formData.episode}
                onChange={handleInputChange}
                className="w-full bg-[#2a2a2a] border border-[#DAA520] text-white px-4 py-2 focus:outline-none focus:border-[#D32F2F] transition"
                placeholder="e.g., 1"
              />
            </div>
          </div>

          {/* Title */}
          <div>
            <label className="block text-sm font-semibold text-gray-300 mb-2">
              Episode Title *
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              className="w-full bg-[#2a2a2a] border border-[#DAA520] text-white px-4 py-2 focus:outline-none focus:border-[#D32F2F] transition"
              placeholder="e.g., The Best of 2024"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-semibold text-gray-300 mb-2">
              Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              rows={4}
              className="w-full bg-[#2a2a2a] border border-[#DAA520] text-white px-4 py-2 focus:outline-none focus:border-[#D32F2F] transition resize-none"
              placeholder="Brief description of this episode (optional)"
            />
          </div>

          {/* Audio File */}
          <div>
            <label className="block text-sm font-semibold text-gray-300 mb-2">
              Audio File (MP3) *
            </label>
            <div className="flex items-center justify-center border-2 border-dashed border-[#DAA520] p-6 cursor-pointer hover:border-[#D32F2F] transition">
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
                    <p className="text-[#DAA520] font-semibold">{formData.audioFile.name}</p>
                    <p className="text-gray-400 text-sm">
                      {(formData.audioFile.size / (1024 * 1024)).toFixed(2)} MB
                    </p>
                  </div>
                ) : (
                  <div>
                    <p className="text-gray-300 font-semibold">Click to upload or drag and drop</p>
                    <p className="text-gray-400 text-sm">MP3 files only</p>
                  </div>
                )}
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#D32F2F] hover:bg-[#DAA520] disabled:opacity-50 text-white hover:text-black font-bold py-3 transition"
          >
            {loading ? 'Uploading...' : 'Upload Episode'}
          </button>
        </form>

        {/* Recent Uploads */}
        {uploadedEpisodes.length > 0 && (
          <div className="bg-black border-2 border-[#DAA520] p-8">
            <h2 className="text-2xl font-bold text-[#DAA520] mb-6" style={{ fontFamily: 'Playfair Display' }}>
              Recently Uploaded
            </h2>
            <div className="space-y-4">
              {uploadedEpisodes.map(ep => (
                <div key={ep.id} className="border-l-4 border-[#DAA520] pl-4">
                  <p className="text-[#DAA520] font-semibold">
                    S{ep.season}E{ep.episode}: {ep.title}
                  </p>
                  <p className="text-gray-400 text-sm">
                    {ep.aired} • {ep.fileName}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
