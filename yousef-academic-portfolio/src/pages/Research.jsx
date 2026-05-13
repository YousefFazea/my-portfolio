import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SectionHeader from '../components/SectionHeader.jsx';
import BadgeList from '../components/BadgeList.jsx';
import ResearchThemeCard from '../components/ResearchThemeCard.jsx';
import { activeProjects, completedProjects, methodology, researchAreas, researchOverview, researchThemes } from '../data/research.js';
import { profile } from '../data/profile.js';
import { Download } from 'lucide-react';



export default function Research() {
  return (
    <>
      <section className="page-shell">
        <div className="gradient-hero overflow-hidden rounded-2xl p-8 text-white shadow-academic md:p-10">
          <div className="grid items-center gap-8 md:grid-cols-[auto_1fr_auto]">
            <img src={profile.portrait} alt="Profile placeholder" className="h-28 w-28 rounded-full border-4 border-white/20 bg-white object-cover" />
            <div>
              <p className="eyebrow text-white/65">Research</p>
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
        <div className="card p-6 md:p-8">
          <p className="eyebrow">Research Umbrella</p>
          <h2 className="mt-2 text-2xl font-bold text-slate-950 md:text-3xl">{researchOverview.umbrella}</h2>
          <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-600 md:text-base">{researchOverview.description}</p>
          <BadgeList items={researchAreas} className="mt-6" />
        </div>
      </section>

      <section className="page-shell py-12">
        <SectionHeader title="Research Themes" />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {researchThemes.map((theme) => <ResearchThemeCard key={theme.title} theme={theme} />)}
        </div>
      </section>

      <section className="page-shell py-4">
        <SectionHeader title="Research Methodology" />
        <div className="grid gap-4 md:grid-cols-5">
          {methodology.map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.title} className="card p-5 text-center">
                <span className="mx-auto inline-flex h-11 w-11 items-center justify-center rounded-lg bg-navy-50 text-navy-900">
                  <Icon size={20} />
                </span>
                <h3 className="mt-4 text-sm font-bold text-slate-950">{item.title}</h3>
                <p className="mt-2 text-xs leading-5 text-slate-500">{item.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="page-shell py-12">
        <SectionHeader title="Active Research Projects" />
        <div className="grid gap-4">
          {activeProjects.map((project) => (
            <article key={project.title} className="card p-5">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-bold text-emerald-700">{project.status}</span>
                  {project.tags.map((tag) => <span key={tag} className="rounded-full bg-blue-50 px-2.5 py-1 text-[11px] font-bold text-blue-700">{tag}</span>)}
                </div>
                <span className="text-xs font-semibold text-slate-500">{project.year}</span>
              </div>
              <h3 className="mt-3 font-bold text-slate-950">{project.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{project.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="page-shell py-4">
        <SectionHeader title="Completed Research Projects" />
        <div className="grid gap-4 md:grid-cols-2">
          {completedProjects.map((project) => (
            <article key={project.title} className="card p-5">
              <div className="flex items-center justify-between gap-3">
                <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-bold text-slate-600">{project.status}</span>
                <span className="text-xs font-semibold text-slate-500">{project.year}</span>
              </div>
              <h3 className="mt-3 font-bold text-slate-950">{project.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{project.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="page-shell py-12">
        <div className="card flex flex-col justify-between gap-5 p-6 md:flex-row md:items-center">
          <div>
            <h2 className="text-xl font-bold text-slate-950">View Full Publication List</h2>
            <p className="mt-2 text-sm text-slate-600">Browse journal articles, conference papers, books, book chapters, posters, and more.</p>
          </div>
          <Link to="/publications" className="btn-primary">View Publications <ArrowRight size={15} /></Link>
        </div>
      </section>
    </>
  );
}
