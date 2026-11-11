export default function PageHeader({ eyebrow = 'Academic Portfolio', title, subtitle }) {
  return (
    <section className="page-shell py-10 md:py-12">
      <p className="eyebrow">{eyebrow}</p>
      <h1 className="mt-1 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">{title}</h1>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </section>
  );
}
