import { useMemo, useState } from 'react';
import SectionHeader from '../components/SectionHeader.jsx';
import GalleryCard from '../components/GalleryCard.jsx';
import { galleryCategories, galleryItems } from '../data/gallery.js';
import { profile } from '../data/profile.js';
import { Download } from 'lucide-react';

export default function Gallery() {
  const [category, setCategory] = useState('All Photos');
  const filtered = useMemo(
    () => category === 'All Photos' ? galleryItems : galleryItems.filter((item) => item.category === category),
    [category]
  );

  return (
    <>
      <section className="page-shell">
        <div className="gradient-hero overflow-hidden rounded-2xl p-8 text-white shadow-academic md:p-10">
          <div className="grid items-center gap-8 md:grid-cols-[auto_1fr_auto]">
            <img src={profile.portrait} alt="Profile placeholder" className="h-28 w-28 rounded-full border-4 border-white/20 bg-white object-cover" />
            <div>
              <p className="eyebrow text-white/65">Gallery</p>
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

      <section className="page-shell">

      </section>

      <section className="page-shell py-8">
        <div className="mb-6 flex flex-wrap gap-2">
          {galleryCategories.map((item) => (
            <button
              key={item}
              onClick={() => setCategory(item)}
              className={`rounded-full px-3 py-1.5 text-xs font-bold transition ${category === item ? 'bg-navy-900 text-white' : 'bg-white text-slate-600 shadow-soft hover:bg-slate-100'}`}
            >
              {item}
            </button>
          ))}
        </div>

        <SectionHeader title="Academic Media" subtitle={`${filtered.length} gallery items shown.`} />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {filtered.map((item) => <GalleryCard key={item.title} item={item} />)}
        </div>
      </section>

      <section className="page-shell py-8">
        <p className="text-center text-xs text-slate-500">
          To add photos, replace the gallery placeholder records in <code>src/data/gallery.js</code> and place approved images in <code>public/images/</code>.
        </p>
      </section>
    </>
  );
}
