'use client';

import { useRef, useState, useEffect } from 'react';

interface AudioPlayerProps {
  src: string;
}

export default function AudioPlayer({ src }: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration);
    const handleEnded = () => setIsPlaying(false);

    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('loadedmetadata', updateDuration);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('loadedmetadata', updateDuration);
      audio.removeEventListener('ended', handleEnded);
    };
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value);
    setCurrentTime(time);
    if (audioRef.current) {
      audioRef.current.currentTime = time;
    }
  };

  const formatTime = (time: number) => {
    if (!time || isNaN(time)) return '0:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="bg-[#F5EDE6] p-4 rounded-sm">
      <audio ref={audioRef} src={src} />

      <div className="flex items-center gap-4">
        {/* Play Button */}
        <button
          onClick={togglePlay}
          className="text-[#C41E1E] hover:text-[#D4AF37] text-2xl transition flex-shrink-0"
          aria-label={isPlaying ? 'Pause' : 'Play'}
        >
          {isPlaying ? '⏸' : '▶'}
        </button>

        {/* Time Display */}
        <span className="text-[#D4AF37] text-sm font-mono w-12 flex-shrink-0">
          {formatTime(currentTime)}
        </span>

        {/* Progress Bar */}
        <div className="flex-1">
          <input
            type="range"
            min="0"
            max={duration || 0}
            value={currentTime}
            onChange={handleProgressChange}
            className="w-full h-2 bg-[#1a1a1a] accent-[#C41E1E] cursor-pointer rounded-full appearance-none"
            style={{
              background: `linear-gradient(to right, #C41E1E 0%, #C41E1E ${
                duration ? (currentTime / duration) * 100 : 0
              }%, #1a1a1a ${duration ? (currentTime / duration) * 100 : 0}%, #1a1a1a 100%)`
            }}
          />
        </div>

        {/* Duration */}
        <span className="text-[#D4AF37] text-sm font-mono w-12 flex-shrink-0 text-right">
          {formatTime(duration)}
        </span>
      </div>
    </div>
  );
}
