import { Link } from 'react-router-dom';
import {
  ArrowRight,
  CheckCircle2,
  Download,
  FlaskConical,
  Layers,
  Library,
  Rocket,
  Workflow,
} from 'lucide-react';

import BadgeList from '../components/BadgeList.jsx';
import ResearchThemeCard from '../components/ResearchThemeCard.jsx';
import {
  activeProjects,
  completedProjects,
  methodology,
  researchAreas,
  researchOverview,
  researchThemes,
} from '../data/research.js';
import { profile } from '../data/profile.js';
import ScrollReveal from '../components/ScrollReveal.jsx';

function SectionFrame({ title, subtitle, icon: Icon, children, className = '' }) {
  return (
    <section className={`page-shell ${className}`}>
      <ScrollReveal>
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          <div className="mb-6 border-b border-slate-200 pb-4">
            <div className="flex items-center gap-3">
              {Icon && (
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-navy-50 text-navy-900">
                  <Icon size={20} />
                </span>
              )}

              <div>
                <h2 className="font-serif text-xl font-bold text-slate-950 md:text-2xl">
                  {title}
                </h2>

                {subtitle && (
                  <p className="mt-1 text-sm leading-6 text-slate-500">
                    {subtitle}
                  </p>
                )}
              </div>
            </div>
          </div>

          {children}
        </div>
      </ScrollReveal>
    </section>
  );
}

function ProjectCard({ project, type = 'active' }) {
  const isActive = type === 'active';

  const statusBadgeClass = isActive
    ? 'bg-emerald-100 text-emerald-800 ring-emerald-300'
    : 'bg-blue-50 text-blue-700 ring-blue-200';

  const statusLabel = isActive ? project.status : 'Completed';

  return (
    <article className="rounded-xl border border-slate-200 bg-slate-50/60 p-5 transition hover:border-slate-300 hover:bg-white hover:shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap gap-2">
          <span
            className={`rounded-full px-3 py-1 text-[11px] font-extrabold ring-1 ${statusBadgeClass}`}
          >
            {statusLabel}
          </span>

          {project.tags?.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-bold text-slate-600"
            >
              {tag}
            </span>
          ))}
        </div>

        <span className="rounded-full bg-white px-3 py-1 text-xs font-bold text-slate-500 ring-1 ring-slate-200">
          {project.year}
        </span>
      </div>

      <h3 className="mt-4 text-base font-extrabold leading-snug text-slate-950">
        {project.title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-slate-600">
        {project.description}
      </p>
    </article>
  );
}

export default function Research() {
  return (
    <>
      {/* Hero */}
      <section className="page-shell">
        <div className="gradient-hero overflow-hidden rounded-2xl p-8 text-white shadow-academic md:p-10">
          <div className="grid items-center gap-8 md:grid-cols-[auto_1fr_auto]">
            <img
              src={profile.portrait}
              alt="Profile placeholder"
              className="h-28 w-28 rounded-full border-4 border-white/20 bg-white object-cover"
            />

            <div>
              <p className="eyebrow text-white/65">Research</p>
              <h1 className="mt-1 text-3xl font-bold">{profile.name}</h1>
              <p className="mt-2 text-white/85">{profile.title}</p>
              <p className="text-sm text-white/70">{profile.department}</p>
              <p className="text-sm text-white/70">{profile.university}</p>
            </div>

            <div className="flex flex-col gap-3">
              <a
                href={profile.cvPath}
                className="btn-secondary bg-white text-navy-900 hover:bg-white/90"
              >
                <Download size={16} /> Download CV
              </a>

              <Link
                to="/contact"
                className="inline-flex justify-center rounded-md border border-white/25 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10"
              >
                Contact Information
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Research Domain */}
      <SectionFrame
        title="Research Domain"
        subtitle="A focused overview of my scholarly direction and core areas of investigation."
        icon={FlaskConical}
        className="py-2"
      >
        <div className="space-y-2">
          <div className="rounded-xl bg-slate-50/70 p-5">
            <h3 className="text-2xl font-extrabold leading-tight text-slate-950 md:text-3xl">
              {researchOverview.Domain}
            </h3>

            <p className="mt-1 text-[13px] leading-5 text-justify text-slate-600 md:text-sm md:leading-6">
              {researchOverview.description}
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-4">
            <div className="mb-3 flex items-center justify-between gap-3 border-b border-slate-100 pb-3">
              <p className="text-xs font-extrabold uppercase tracking-wide text-slate-500">
                Core Areas
              </p>

              <span className="rounded-full bg-slate-100 px-3 py-1 text-[11px] font-bold text-slate-500">
                {researchAreas.length} areas
              </span>
            </div>

            <BadgeList
              items={researchAreas}
              className="flex flex-wrap justify-start gap-2"
            />
          </div>
        </div>
      </SectionFrame>

      {/* Research Themes */}
      <SectionFrame
        title="Research Themes"
        subtitle="Major scholarly themes connecting computing, communications, cybersecurity, IoT, and intelligent systems."
        icon={Layers}
        className="py-6"
      >
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {researchThemes.map((theme) => (
            <ResearchThemeCard key={theme.title} theme={theme} />
          ))}
        </div>
      </SectionFrame>

      {/* Research Methodology */}
      <SectionFrame
        title="Research Methodology"
        subtitle="The primary methodological pipeline used across my research projects."
        icon={Workflow}
        className="py-6"
      >
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {methodology.map((item) => {
            const Icon = item.icon || Workflow;

            return (
              <article
                key={item.title}
                className="rounded-xl border border-slate-200 bg-slate-50/70 p-5 text-center transition hover:bg-white hover:shadow-sm"
              >
                <span className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-xl bg-navy-50 text-navy-900">
                  <Icon size={21} />
                </span>

                <h3 className="mt-4 text-sm font-extrabold text-slate-950">
                  {item.title}
                </h3>

                <p className="mt-2 text-xs leading-5 text-slate-500">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>
      </SectionFrame>

      {/* Active Projects */}
      <SectionFrame
        title="Active Research Projects"
        subtitle="Ongoing projects involving students, collaborators, and applied computing problems."
        icon={Rocket}
        className="py-6"
      >
        <div className="grid gap-4">
          {activeProjects.map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
              type="active"
            />
          ))}
        </div>
      </SectionFrame>

      {/* Completed Projects */}
      <SectionFrame
        title="Completed Research Projects"
        subtitle="Selected completed research activities and scholarly project outcomes."
        icon={CheckCircle2}
        className="py-6"
      >
        <div className="grid gap-4 md:grid-cols-2">
          {completedProjects.map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
              type="completed"
            />
          ))}
        </div>
      </SectionFrame>
      {/* Publications CTA */}
      <SectionFrame
        title="Publication Record"
        subtitle="Browse the complete list of scholarly publications and outputs."
        icon={Library}
        className="py-10"
      >
        <div className="flex flex-col justify-between gap-5 rounded-xl bg-slate-50 p-5 md:flex-row md:items-center">
          <div>
            <h3 className="text-xl font-bold text-slate-950">
              View Full Publication List
            </h3>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
              Browse journal articles, conference papers, books, book chapters,
              posters, and other scholarly contributions.
            </p>
          </div>

          <Link
            to="/publications"
            className="btn-primary shrink-0"
          >
            View Publications <ArrowRight size={15} />
          </Link>
        </div>
      </SectionFrame>
    </>
  );
}