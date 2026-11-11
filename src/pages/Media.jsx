import { useMemo, useState } from 'react';
import { Download, Search, Film, Video, Mic, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { profile } from '../data/profile.js';
import { mediaCategories, mediaVideos } from '../data/media.js';
import VideoCard from '../components/VideoCard.jsx';
import VideoModal from '../components/VideoModal.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import ScrollReveal from '../components/ScrollReveal.jsx';

export default function Media() {
  const [selectedCategory, setSelectedCategory] = useState('All Videos');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedVideo, setSelectedVideo] = useState(null);

  // Category counts computation
  const categoryCounts = useMemo(() => {
    const counts = { 'All Videos': mediaVideos.length };
    mediaVideos.forEach((video) => {
      counts[video.category] = (counts[video.category] || 0) + 1;
    });
    return counts;
  }, []);

  // Filtered video list based on category and search query
  const filteredVideos = useMemo(() => {
    return mediaVideos.filter((video) => {
      const matchesCategory =
        selectedCategory === 'All Videos' || video.category === selectedCategory;

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        video.title.toLowerCase().includes(q) ||
        (video.event && video.event.toLowerCase().includes(q)) ||
        (video.location && video.location.toLowerCase().includes(q)) ||
        (video.year && String(video.year).includes(q)) ||
        (video.description && video.description.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const availableCount = useMemo(() => {
    return mediaVideos.filter((v) => v.videoUrl && v.videoUrl.trim()).length;
  }, []);

  // Overall statistics for quick overview
  const stats = [
    { label: 'Total Events', count: mediaVideos.length, icon: Film },
    { label: 'Ready to Watch', count: availableCount, icon: Video },
    { label: 'Keynote Speeches', count: categoryCounts['Keynote Speeches'] || 0, icon: Mic },
    { label: 'Invited & Other', count: (categoryCounts['Invited Talks'] || 0) + (categoryCounts['Other Academic Events'] || 0), icon: Users }
  ];

  return (
    <>
      {/* Top Hero Banner matching existing site style */}
      <section className="page-shell">
        <div className="gradient-hero overflow-hidden rounded-2xl p-8 text-white shadow-academic md:p-10">
          <div className="grid items-center gap-8 md:grid-cols-[auto_1fr_auto]">
            <img
              src={profile.portrait}
              alt={profile.name}
              className="h-28 w-28 rounded-full border-4 border-white/20 bg-white object-cover shadow-md"
            />
            <div>
              <p className="eyebrow text-white/65">Media & Video Gallery</p>
              <h1 className="mt-1 text-3xl font-bold">{profile.name}</h1>
              <p className="mt-2 text-white/85">{profile.title}</p>
              <p className="text-sm text-white/70">{profile.department}</p>
              <p className="text-sm text-white/70">{profile.university}</p>
            </div>
            <div className="flex flex-col gap-3">
              <a
                href={profile.cvPath}
                className="btn-secondary bg-white text-navy-900 hover:bg-white/90"
              >
                <Download size={16} /> Download CV
              </a>
              <Link
                to="/contact"
                className="inline-flex justify-center rounded-md border border-white/25 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10 transition"
              >
                Contact Information
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats Strip */}
      <section className="page-shell py-6">
        <ScrollReveal>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {stats.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className="rounded-xl border border-slate-200 bg-white p-4 shadow-soft transition hover:border-slate-300"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-navy-50 text-navy-900">
                      <Icon size={18} />
                    </span>
                    <div>
                      <p className="text-2xl font-bold text-slate-950">{item.count}</p>
                      <p className="text-xs font-semibold text-slate-500">{item.label}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </ScrollReveal>
      </section>

      {/* Main Video Section */}
      <section className="page-shell py-6">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
            <SectionHeader
              title="Academic Video Recordings"
              subtitle="Watch selected presentations, keynote addresses, conference talks, and professional speaking sessions."
            />

            {/* Search Input */}
            <div className="relative w-full md:w-72 shrink-0">
              <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search talks, events, years..."
                className="w-full rounded-lg border border-slate-200 bg-white pl-10 pr-4 py-2 text-xs font-medium text-slate-800 placeholder-slate-400 focus:border-navy-900 focus:outline-none focus:ring-1 focus:ring-navy-900 shadow-soft"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-semibold text-slate-400 hover:text-slate-600"
                >
                  Clear
                </button>
              )}
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="mb-8 flex flex-wrap gap-2">
            {mediaCategories.map((category) => {
              const count = categoryCounts[category] || 0;
              const isActive = selectedCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold transition-all duration-200 ${
                    isActive
                      ? 'bg-navy-900 text-white shadow-soft'
                      : 'bg-white text-slate-600 shadow-soft hover:bg-slate-100 hover:text-slate-950 border border-slate-200'
                  }`}
                >
                  <span>{category}</span>
                  <span
                    className={`rounded-full px-2 py-0.5 text-[10px] font-bold ${
                      isActive ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Responsive Video Grid: 3 columns on desktop, 2 on tablets, 1 on mobile */}
          {filteredVideos.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredVideos.map((video) => (
                <VideoCard
                  key={video.id}
                  video={video}
                  onPlay={(item) => setSelectedVideo(item)}
                />
              ))}
            </div>
          ) : (
            <div className="rounded-xl border border-dashed border-slate-300 bg-white p-12 text-center shadow-soft">
              <Film size={36} className="mx-auto text-slate-400 mb-3" />
              <h3 className="text-base font-bold text-slate-950">No recordings match your criteria</h3>
              <p className="mt-1 text-sm text-slate-500 max-w-sm mx-auto">
                No videos were found for &quot;{searchQuery || selectedCategory}&quot;. Try adjusting your search query or selecting a different category.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory('All Videos');
                  setSearchQuery('');
                }}
                className="mt-4 rounded-md bg-navy-900 px-4 py-2 text-xs font-semibold text-white shadow-soft hover:bg-navy-800 transition"
              >
                Reset All Filters
              </button>
            </div>
          )}
        </ScrollReveal>
      </section>

      {/* Modal Video Player */}
      <VideoModal
        video={selectedVideo}
        onClose={() => setSelectedVideo(null)}
      />
    </>
  );
}

