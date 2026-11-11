import { useEffect } from 'react';
import { X, ExternalLink, Calendar, MapPin, Tag, User, Video, Info, Film } from 'lucide-react';
import { parseVideoSource } from '../data/media.js';
import { Link } from 'react-router-dom';

export default function VideoModal({ video, onClose }) {
  useEffect(() => {
    if (!video) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [video, onClose]);

  if (!video) return null;

  const parsed = parseVideoSource(video.videoUrl);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="video-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-slate-950/80 backdrop-blur-sm transition-opacity"
      onClick={onClose}
    >
      <div
        className="relative flex flex-col max-h-[92vh] w-full max-w-4xl overflow-hidden rounded-2xl bg-white shadow-2xl border border-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header bar */}
        <div className="flex items-center justify-between border-b border-slate-200 bg-slate-50 px-4 py-3 sm:px-6">
          <div className="flex min-w-0 items-center gap-2">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-navy-900 text-white shrink-0">
              <Film size={16} />
            </span>
            <div className="min-w-0">
              <span className="inline-block rounded-full bg-navy-100 px-2.5 py-0.5 text-[11px] font-bold text-navy-900">
                {video.category}
              </span>
              <span className="ml-2 text-xs font-semibold text-slate-500">{video.year}</span>
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label="Close video player"
            className="rounded-lg p-1.5 text-slate-500 hover:bg-slate-200 hover:text-slate-900 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Video Player or Fallback View */}
        <div className="relative w-full bg-black aspect-video overflow-hidden">
          {parsed.isAvailable ? (
            parsed.type === 'youtube' ? (
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
                poster={video.thumbnail || undefined}
                controls
                autoPlay
                playsInline
                preload="metadata"
                className="h-full w-full object-contain"
              >
                <source src={parsed.videoSrc} type="video/mp4" />
                Your browser does not support HTML5 video.
              </video>
            )
          ) : (
            <div className="relative h-full w-full flex flex-col items-center justify-center text-center p-6 bg-gradient-to-br from-navy-950 via-slate-900 to-navy-900 text-white overflow-hidden">
              <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]" />
              
              <div className="relative z-10 max-w-lg space-y-3">
                <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-white/10 text-white border border-white/20 shadow-inner">
                  <Video size={30} />
                </span>
                
                <span className="inline-block rounded-full bg-academic-gold/20 border border-academic-gold/40 px-3 py-1 text-xs font-bold text-amber-200">
                  Recording URL Pending
                </span>

                <h3 className="text-lg sm:text-xl font-bold tracking-tight text-white">
                  {video.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-md mx-auto">
                  The video recording for this session is scheduled to be linked or is available upon academic request.
                </p>

                <div className="pt-2 flex flex-wrap justify-center gap-2">
                  <Link
                    to="/contact"
                    onClick={onClose}
                    className="inline-flex items-center gap-1.5 rounded-md bg-white px-3.5 py-1.5 text-xs font-bold text-navy-900 hover:bg-slate-100 transition shadow"
                  >
                    Request Recording Access
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Video metadata and description */}
        <div className="overflow-y-auto p-5 sm:p-6 space-y-4">
          <div>
            <h2 id="video-modal-title" className="text-lg sm:text-xl font-bold text-slate-950 leading-snug">
              {video.title}
            </h2>
            {video.event && (
              <p className="mt-1 text-sm font-semibold text-navy-700">
                {video.event}
              </p>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-medium text-slate-600 border-y border-slate-100 py-3">
            {video.year && (
              <span className="inline-flex items-center gap-1.5">
                <Calendar size={14} className="text-slate-400" />
                <span>{video.year}</span>
              </span>
            )}
            {video.location && (
              <span className="inline-flex items-center gap-1.5">
                <MapPin size={14} className="text-slate-400" />
                <span>{video.location}</span>
              </span>
            )}
            {video.role && (
              <span className="inline-flex items-center gap-1.5">
                <User size={14} className="text-slate-400" />
                <span>{video.role}</span>
              </span>
            )}
            {video.duration && (
              <span className="inline-flex items-center gap-1.5">
                <Tag size={14} className="text-slate-400" />
                <span>{video.duration}</span>
              </span>
            )}
          </div>

          {video.description && (
            <p className="text-sm leading-relaxed text-slate-700">
              {video.description}
            </p>
          )}

          {!parsed.isAvailable && (
            <div className="rounded-lg border border-amber-200 bg-amber-50/70 p-3.5 text-xs text-amber-900 flex items-start gap-2.5">
              <Info size={16} className="text-amber-700 shrink-0 mt-0.5" />
              <div>
                <strong className="block font-semibold">Recording Link Coming Soon</strong>
                <span>
                  The video recording for this session is being processed or is available upon scholarly request. Please contact Dr. Yousef Fazea for recording access or presentation slides.
                </span>
              </div>
            </div>
          )}

          {/* Action footer */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
            <div className="flex items-center gap-2">
              {parsed.isAvailable && video.videoUrl && (
                <a
                  href={video.videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-navy-900 hover:text-navy-700 hover:underline"
                >
                  <ExternalLink size={13} />
                  Open Video in New Tab
                </a>
              )}
            </div>

            <button
              onClick={onClose}
              className="rounded-md border border-slate-300 bg-white px-3.5 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-100 transition"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

