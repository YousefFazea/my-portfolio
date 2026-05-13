import { useMemo, useState } from 'react';
import { Search } from 'lucide-react';
import PageHeader from '../components/PageHeader.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import StatCard from '../components/StatCard.jsx';
import PublicationCard from '../components/PublicationCard.jsx';
import { publicationStats, publicationTypes, publications } from '../data/publications.js';
import { profile } from '../data/profile.js';
import { Download } from 'lucide-react';
import { teaching } from '../data/teaching.js';

export default function Publications() {
  const [query, setQuery] = useState('');
  const [type, setType] = useState('All');

  const selected = publications.filter((item) => item.selected);
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return publications.filter((item) => {
      const typeMatch = type === 'All' || item.type === type;
      const searchMatch =
        !q ||
        [item.title, item.authors, item.venue, item.year, item.type, item.status]
          .join(' ')
          .toLowerCase()
          .includes(q);
      return typeMatch && searchMatch;
    });
  }, [query, type]);

  return (
    <>
      <section className="page-shell">
        <div className="gradient-hero overflow-hidden rounded-2xl p-8 text-white shadow-academic md:p-10">
          <div className="grid items-center gap-8 md:grid-cols-[auto_1fr_auto]">
            <img src={profile.portrait} alt="Profile placeholder" className="h-28 w-28 rounded-full border-4 border-white/20 bg-white object-cover" />
            <div>
              <p className="eyebrow text-white/65">Publications</p>
              <h1 className="mt-1 text-3xl font-bold">{profile.name}</h1>
              <p className="mt-2 text-white/85">{profile.title}</p>
              <p className="text-sm text-white/70">{profile.department}</p>
              <p className="text-sm text-white/70">{profile.university}</p>
            </div>
            <div className="flex flex-col gap-3">
              <a href={profile.cvPath} className="btn-secondary bg-white text-navy-900 hover:bg-white/90">
                <Download size={16} /> Download CV
              </a>
              <a href="/contact" className="inline-flex justify-center rounded-md border border-white/25 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10">
                Contact Information
              </a>
            </div>
          </div>
        </div>
      </section>


      <section className="page-shell py-12">
        <SectionHeader title="Selected Publications" subtitle="Representative works highlighted for quick review." />
        <div className="grid gap-4">
          {selected.map((publication, index) => <PublicationCard key={publication.title} publication={publication} index={index} />)}
        </div>
      </section>

      <section className="page-shell py-4">
        <SectionHeader title="Full Publication List" subtitle={`${filtered.length} publication records currently shown.`} />
        <div className="card mb-5 p-4">
          <div className="grid gap-3 md:grid-cols-[1fr_auto] md:items-center">
            <label className="relative block">
              <Search className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search by title, author, year, venue, or keyword"
                className="w-full rounded-lg border border-slate-200 bg-white py-2.5 pl-10 pr-3 text-sm outline-none focus:border-navy-700 focus:ring-2 focus:ring-navy-100"
              />
            </label>
            <div className="flex flex-wrap gap-2">
              {publicationTypes.map((item) => (
                <button
                  key={item}
                  onClick={() => setType(item)}
                  className={`rounded-full px-3 py-1.5 text-xs font-bold transition ${type === item ? 'bg-navy-900 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="grid gap-4">
          {filtered.map((publication, index) => <PublicationCard key={`${publication.title}-${index}`} publication={publication} index={index} />)}
        </div>
      </section>
    </>
  );
}
