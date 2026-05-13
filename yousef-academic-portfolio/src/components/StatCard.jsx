export default function StatCard({ value, label, note, icon: Icon }) {
  return (
    <div className="card p-5">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-2xl font-bold text-navy-900">{value}</p>
          <p className="mt-1 text-sm font-semibold text-slate-700">{label}</p>
          {note && <p className="mt-2 text-xs leading-5 text-slate-500">{note}</p>}
        </div>
        {Icon && <Icon className="text-navy-800" size={20} />}
      </div>
    </div>
  );
}
