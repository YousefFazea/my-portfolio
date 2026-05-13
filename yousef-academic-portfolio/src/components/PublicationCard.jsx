import { ExternalLink } from 'lucide-react';

export default function PublicationCard({ publication, index }) {
  return (
    <article className="card p-5">
      <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-start">
        <div className="flex gap-3">
          <span className="mt-1 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-slate-100 text-xs font-bold text-slate-600">
            {String(index + 1).padStart(2, '0')}
          </span>
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-blue-50 px-2.5 py-1 text-[11px] font-bold text-blue-700">{publication.type}</span>
              {publication.selected && <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-bold text-emerald-700">Selected</span>}
            </div>
            <h3 className="mt-2 font-bold leading-snug text-slate-950">{publication.title}</h3>
            <p className="mt-2 text-sm text-slate-600">{publication.authors}</p>
            <p className="mt-2 text-sm font-medium text-slate-700">{publication.venue}</p>
            <div className="mt-3 flex flex-wrap items-center gap-3 text-xs">
              <span className="font-semibold text-emerald-700">{publication.status}</span>
              <a href="#" className="inline-flex items-center gap-1 text-navy-800 hover:underline">
                <ExternalLink size={13} /> View publication
              </a>
            </div>
          </div>
        </div>
        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600">{publication.year}</span>
      </div>
    </article>
  );
}
