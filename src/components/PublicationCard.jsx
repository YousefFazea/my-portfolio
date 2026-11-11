import { Award, ExternalLink, Star } from 'lucide-react';

function getPublicationTypeClass(type = '') {
  const normalizedType = type.toLowerCase();

  if (normalizedType.includes('journal')) {
    return 'bg-blue-50 text-blue-700 ring-blue-200';
  }

  if (normalizedType.includes('conference')) {
    return 'bg-purple-50 text-purple-700 ring-purple-200';
  }

  if (normalizedType.includes('book')) {
    return 'bg-emerald-50 text-emerald-700 ring-emerald-200';
  }

  if (
    normalizedType.includes('presentation') ||
    normalizedType.includes('poster')
  ) {
    return 'bg-orange-50 text-orange-700 ring-orange-200';
  }

  if (normalizedType.includes('patent')) {
    return 'bg-red-50 text-red-700 ring-red-200';
  }

  if (normalizedType.includes('magazine')) {
    return 'bg-pink-50 text-pink-700 ring-pink-200';
  }

  if (normalizedType.includes('technical')) {
    return 'bg-cyan-50 text-cyan-700 ring-cyan-200';
  }

  if (normalizedType.includes('thesis')) {
    return 'bg-indigo-50 text-indigo-700 ring-indigo-200';
  }

  return 'bg-slate-100 text-slate-600 ring-slate-200';
}

function isBestPaperAward(publication = {}) {
  const searchableText = [
    publication.title,
    publication.award,
    publication.note,
    publication.notes,
    publication.status,
    publication.description,
    publication.venue,
  ]
    .filter(Boolean)
    .join(' ')
    .toLowerCase();

  return searchableText.includes('best paper');
}

export default function PublicationCard({ publication, index }) {
  const typeClass = getPublicationTypeClass(publication.type);
  const bestPaper = isBestPaperAward(publication);
  const publicationUrl = publication.url || publication.link || '';

  return (
    <article
      className={`rounded-xl border p-5 shadow-sm transition hover:shadow-md ${bestPaper
          ? 'border-amber-300 bg-amber-50/60 ring-1 ring-amber-200'
          : 'border-slate-200 bg-white hover:border-slate-300'
        }`}
    >
      <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-start">
        <div className="flex gap-3">
          <span className="mt-1 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-slate-100 text-xs font-bold text-slate-600">
            {String(index + 1).padStart(2, '0')}
          </span>

          <div>
            <div className="flex flex-wrap items-center gap-2">
              {publication.type && (
                <span
                  className={`rounded-full px-2.5 py-1 text-[11px] font-extrabold ring-1 ${typeClass}`}
                >
                  {publication.type}
                </span>
              )}

              {publication.status && (
                <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-bold text-emerald-700 ring-1 ring-emerald-200">
                  {publication.status}
                </span>
              )}

              {bestPaper && (
                <span className="inline-flex items-center gap-1 rounded-full bg-amber-100 px-3 py-1 text-[11px] font-extrabold text-amber-800 ring-1 ring-amber-300">
                  <Star size={12} fill="currentColor" />
                  Best Paper Award
                </span>
              )}
            </div>

            <h3 className="mt-3 font-bold leading-snug text-slate-950">
              {publication.title}
            </h3>

            {publication.authors && (
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {publication.authors}
              </p>
            )}

            {publication.venue && (
              <p className="mt-2 text-sm font-semibold leading-6 text-emerald-700">
                {publication.venue}
              </p>
            )}

            {publication.award && (
              <div className="mt-3 inline-flex items-center gap-2 rounded-lg bg-amber-100 px-3 py-2 text-xs font-extrabold text-amber-800 ring-1 ring-amber-300">
                <Award size={15} />
                {publication.award}
              </div>
            )}

            {publicationUrl && (
              <div className="mt-3 flex flex-wrap items-center gap-3 text-xs">
                <a
                  href={publicationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-bold text-blue-700 hover:underline"
                >
                  <ExternalLink size={13} />
                  View Publication
                </a>
              </div>
            )}
          </div>
        </div>

        {publication.year && (
          <span className="shrink-0 rounded-full bg-rose-50 px-3 py-1 text-xs font-bold text-rose-600 ring-1 ring-rose-100">
            {publication.year}
          </span>
        )}
      </div>
    </article>
  );
}