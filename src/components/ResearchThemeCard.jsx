const colorMap = {
  blue: 'border-blue-100 bg-blue-50/80 text-blue-800',
  rose: 'border-rose-100 bg-rose-50/80 text-rose-800',
  purple: 'border-purple-100 bg-purple-50/80 text-purple-800',
  emerald: 'border-emerald-100 bg-emerald-50/80 text-emerald-800',
  orange: 'border-orange-100 bg-orange-50/80 text-orange-800',
  teal: 'border-teal-100 bg-teal-50/80 text-teal-800',
  indigo: 'border-indigo-100 bg-indigo-50/80 text-indigo-800'
};

export default function ResearchThemeCard({ theme }) {
  const Icon = theme.icon;
  return (
    <article className={`rounded-xl border p-5 shadow-soft ${colorMap[theme.color] || colorMap.blue}`}>
      <div className="flex items-start gap-3">
        <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/70">
          <Icon size={20} />
        </span>
        <div>
          <h3 className="font-bold">{theme.title}</h3>
          <p className="mt-2 text-sm leading-6 opacity-85">{theme.description}</p>
        </div>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {theme.tags.map((tag) => (
          <span key={tag} className="rounded-full bg-white/70 px-2.5 py-1 text-[11px] font-semibold opacity-90">
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}
