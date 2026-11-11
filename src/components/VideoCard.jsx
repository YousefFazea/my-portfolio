import { useState } from 'react';
import { Play, Calendar, MapPin, Video, Info, Maximize2, X } from 'lucide-react';
import { parseVideoSource } from '../data/media.js';

export default function VideoCard({ video, onPlay }) {
  const [imageError, setImageError] = useState(false);
  const [isPlayingInline, setIsPlayingInline] = useState(false);
  const parsed = parseVideoSource(video.videoUrl);

  // Thumbnail fallback hierarchy: custom thumbnail -> YouTube HQ thumbnail -> elegant CSS pattern
  const activeThumbnail = !imageError ? (video.thumbnail || parsed.fallbackThumbnail) : null;

  const categoryColor = () => {
    switch (video.category) {
      case 'Keynote Speeches':
        return 'bg-emerald-700 text-white';
      case 'Invited Talks':
        return 'bg-indigo-700 text-white';
      case 'Conferences':
        return 'bg-navy-900 text-white';
      default:
        return 'bg-slate-800 text-white';
    }
  };

  return (
    <article className="card group flex flex-col overflow-hidden bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-academic">
      {/* Thumbnail + Video Area */}
      {isPlayingInline && parsed.isAvailable ? (
        <div className="relative aspect-video w-full bg-black overflow-hidden">
          {parsed.type === 'youtube' ? (
            <iframe
              src={parsed.embedUrl}
              title={video.title}
              className="h-full w-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          ) : (
            <video
              src={parsed.videoSrc}
              poster={activeThumbnail || undefined}
              controls
              autoPlay
              playsInline
              className="h-full w-full object-contain"
            >
              <source src={parsed.videoSrc} type="video/mp4" />
              Your browser does not support HTML5 video.
            </video>
          )}

          {/* Inline Controls (Expand to theater modal / Close inline) */}
          <div className="absolute top-2 right-2 flex items-center gap-1.5 z-20">
            <button
              onClick={() => {
                setIsPlayingInline(false);
                onPlay(video);
              }}
              title="Open in Theater Modal"
              aria-label="Open in Theater Modal"
              className="rounded-md bg-black/75 p-1.5 text-white hover:bg-black transition backdrop-blur-sm"
            >
              <Maximize2 size={14} />
            </button>
            <button
              onClick={() => setIsPlayingInline(false)}
              title="Close player"
              aria-label="Close inline player"
              className="rounded-md bg-black/75 p-1.5 text-white hover:bg-black transition backdrop-blur-sm"
            >
              <X size={14} />
            </button>
          </div>
        </div>
      ) : (
        <div
          className="relative aspect-video w-full cursor-pointer overflow-hidden bg-slate-900"
          onClick={() => onPlay(video)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              onPlay(video);
            }
          }}
          aria-label={`Play video: ${video.title}`}
        >
          {activeThumbnail ? (
            <img
              src={activeThumbnail}
              alt={video.title}
              onError={() => setImageError(true)}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
          ) : (
            <div className="relative h-full w-full flex flex-col items-center justify-center p-4 bg-gradient-to-br from-navy-950 via-slate-900 to-navy-900 text-white">
              <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:12px_12px]" />
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white border border-white/20">
                <Video size={22} />
              </span>
              <span className="mt-2 text-xs font-semibold text-slate-300 tracking-wide text-center line-clamp-1">
                {video.event || video.category}
              </span>
            </div>
          )}

          {/* Gradient Overlay for Readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/20 to-transparent transition-opacity group-hover:opacity-90" />

          {/* Category Badge & Year */}
          <div className="absolute top-3 inset-x-3 flex items-center justify-between gap-2 z-10">
            <span className={`rounded-full px-2.5 py-0.5 text-[11px] font-bold shadow-sm ${categoryColor()}`}>
              {video.category}
            </span>
            {video.year && (
              <span className="rounded-full bg-black/60 backdrop-blur-sm px-2.5 py-0.5 text-[11px] font-bold text-white shadow-sm">
                {video.year}
              </span>
            )}
          </div>

          {/* Centered Play Button */}
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-navy-900/90 text-white shadow-lg backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-academic-green">
              <Play size={24} className="ml-1 fill-white" />
            </div>
          </div>

          {/* Duration or Recording Status on Thumbnail */}
          <div className="absolute bottom-3 right-3 z-10">
            {parsed.isAvailable ? (
              <span className="rounded bg-black/75 backdrop-blur-sm px-2 py-0.5 text-[10px] font-bold tracking-wider text-white uppercase">
                {video.duration || 'MP4 Video'}
              </span>
            ) : (
              <span className="rounded bg-amber-600/90 backdrop-blur-sm px-2 py-0.5 text-[10px] font-bold tracking-wider text-white uppercase">
                Recording Pending
              </span>
            )}
          </div>
        </div>
      )}

      {/* Video Information underneath */}
      <div className="flex flex-1 flex-col p-5">
        <h3
          onClick={() => onPlay(video)}
          className="cursor-pointer text-base font-bold text-slate-950 transition-colors group-hover:text-navy-900 line-clamp-2"
        >
          {video.title}
        </h3>

        {/* Event location & metadata */}
        <div className="mt-2.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-500">
          {video.year && (
            <span className="inline-flex items-center gap-1 font-semibold text-slate-600">
              <Calendar size={13} className="text-slate-400" />
              {video.year}
            </span>
          )}
          {video.location && (
            <span className="inline-flex items-center gap-1 text-slate-500 line-clamp-1">
              <MapPin size={13} className="text-slate-400 shrink-0" />
              {video.location}
            </span>
          )}
        </div>

        {/* Short Description */}
        {video.description && (
          <p className="mt-3 text-xs leading-5 text-slate-600 line-clamp-3">
            {video.description}
          </p>
        )}

        {/* Bottom Card Actions */}
        <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
          {parsed.isAvailable ? (
            <div className="flex items-center gap-2">
              <button
                onClick={() => onPlay(video)}
                className="inline-flex items-center gap-1 text-xs font-bold text-navy-900 hover:text-academic-green transition-colors"
              >
                <Play size={13} className="fill-current" />
                <span>Theater View</span>
              </button>
              <span className="text-slate-300">•</span>
              <button
                onClick={() => setIsPlayingInline((prev) => !prev)}
                className="text-xs font-semibold text-slate-500 hover:text-navy-900 transition-colors"
              >
                {isPlayingInline ? 'Hide Player' : 'Play Inline'}
              </button>
            </div>
          ) : (
            <button
              onClick={() => onPlay(video)}
              className="inline-flex items-center gap-1 text-xs font-bold text-navy-900 hover:text-academic-green transition-colors"
            >
              <Info size={13} />
              <span>Event Details</span>
            </button>
          )}

          <span className="text-[11px] font-medium text-slate-400 truncate max-w-[120px]">
            {video.role || video.category}
          </span>
        </div>
      </div>
    </article>
  );
}
