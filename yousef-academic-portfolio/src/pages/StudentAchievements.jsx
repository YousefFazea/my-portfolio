import SectionHeader from '../components/SectionHeader.jsx';
import StatCard from '../components/StatCard.jsx';
import { reuActivities, studentImpactStats, studentProjects, studentPublications, testimonials } from '../data/studentAchievements.js';
import { profile } from '../data/profile.js';
import { Download } from 'lucide-react';

export default function StudentAchievements() {
  return (
    <>
      <section className="page-shell">
        <div className="gradient-hero overflow-hidden rounded-2xl p-8 text-white shadow-academic md:p-10">
          <div className="grid items-center gap-8 md:grid-cols-[auto_1fr_auto]">
            <img src={profile.portrait} alt="Profile placeholder" className="h-28 w-28 rounded-full border-4 border-white/20 bg-white object-cover" />
            <div>
              <p className="eyebrow text-white/65">Student Achievements</p>
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

      <section className="page-shell py-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {studentImpactStats.map((stat) => <StatCard key={stat.label} value={stat.value} label={stat.label} note={stat.note} />)}
        </div>
      </section>

      <section className="page-shell py-4">
        <SectionHeader title="Student Publications or Presentations" />
        <div className="grid gap-4">
          {studentPublications.map((item) => (
            <article key={item.title} className="card p-5">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-purple-50 px-2.5 py-1 text-[11px] font-bold text-purple-700">{item.type}</span>
                <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-bold text-emerald-700">{item.tag}</span>
                <span className="ml-auto text-xs font-semibold text-slate-500">{item.year}</span>
              </div>
              <h3 className="mt-3 font-bold text-slate-950">{item.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{item.authors}</p>
              <p className="mt-2 text-sm font-medium text-slate-700">{item.venue}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="page-shell py-12">
        <SectionHeader title="Capstone or Research Projects" />
        <div className="grid gap-4 md:grid-cols-2">
          {studentProjects.map((project) => (
            <article key={project.title} className="card p-5">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="rounded-full bg-blue-50 px-2.5 py-1 text-[11px] font-bold text-blue-700">{project.category}</span>
                <span className="text-xs font-semibold text-slate-500">{project.year}</span>
              </div>
              <h3 className="mt-3 font-bold text-slate-950">{project.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{project.description}</p>
              <ul className="mt-4 space-y-1 text-xs font-medium text-slate-500">
                {project.outcomes.map((outcome) => <li key={outcome}>• {outcome}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="page-shell py-4">
        <SectionHeader title="REU or Outreach Activities" />
        <div className="grid gap-4 md:grid-cols-2">
          {reuActivities.map((item) => (
            <article key={item.title} className="card bg-slate-100 p-5">
              <h3 className="font-bold text-slate-950">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="page-shell py-12">
        <SectionHeader title="Student Testimonials" subtitle="Publish only approved student testimonials." />
        <div className="card p-5 text-sm leading-6 text-slate-600">
          {testimonials.map((item) => <p key={item}>{item}</p>)}
        </div>
      </section>
    </>
  );
}
