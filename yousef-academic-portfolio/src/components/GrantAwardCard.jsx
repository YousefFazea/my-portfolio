import { Award, BadgeDollarSign } from 'lucide-react';

export function GrantCard({ grant }) {
  return (
    <article className="card p-5">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex flex-wrap gap-2">
          <span className={`rounded-full px-2.5 py-1 text-[11px] font-bold ${grant.status === 'Active' ? 'bg-emerald-50 text-emerald-700' : grant.status === 'Pending' ? 'bg-amber-50 text-amber-700' : 'bg-slate-100 text-slate-600'}`}>
            {grant.status}
          </span>
          <span className="rounded-full bg-purple-50 px-2.5 py-1 text-[11px] font-bold text-purple-700">{grant.role}</span>
        </div>
        <span className="text-xs font-semibold text-slate-500">{grant.year}</span>
      </div>
      <h3 className="mt-3 font-bold text-slate-950">{grant.title}</h3>
      <p className="mt-2 flex items-center gap-2 text-sm text-slate-600"><BadgeDollarSign size={15} /> {grant.agency} · {grant.amount}</p>
      <p className="mt-3 text-sm leading-6 text-slate-600">{grant.description}</p>
    </article>
  );
}

export function AwardCard({ award }) {
  return (
    <article className="card p-5">
      <div className="flex items-start gap-3">
        <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-amber-50 text-amber-700">
          <Award size={20} />
        </span>
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-bold text-emerald-700">{award.category}</span>
            <span className="text-xs font-semibold text-slate-500">{award.year}</span>
          </div>
          <h3 className="mt-2 font-bold text-slate-950">{award.title}</h3>
          <p className="mt-2 text-sm leading-6 text-slate-600">{award.description}</p>
        </div>
      </div>
    </article>
  );
}
