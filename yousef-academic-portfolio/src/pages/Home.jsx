import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, FileText, FlaskConical, GraduationCap, Mail, ShieldCheck, Users } from 'lucide-react';
import { profile } from '../data/profile.js';
import { researchAreas, researchThemes, activeProjects } from '../data/research.js';
import { teaching } from '../data/teaching.js';
import SectionHeader from '../components/SectionHeader.jsx';
import StatCard from '../components/StatCard.jsx';
import BadgeList from '../components/BadgeList.jsx';
import ResearchThemeCard from '../components/ResearchThemeCard.jsx';

export default function Home() {
  const statIcons = [FileText, FlaskConical, Users, BookOpen];

  return (
    <>
      <section className="gradient-hero text-white">
        <div className="page-shell grid min-h-[430px] items-center gap-10 py-16 lg:grid-cols-[1.15fr_.85fr]">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-emerald-300" /> {profile.university}
            </span>
            <h1 className="mt-5 text-4xl font-bold tracking-tight md:text-5xl">{profile.name}</h1>
            <p className="mt-3 text-lg font-semibold text-white/90">{profile.title}</p>
            <p className="mt-1 text-sm text-white/75">{profile.department}</p>
            <p className="text-sm text-white/75">{profile.college}</p>
            <p className="mt-6 max-w-2xl text-base leading-7 text-white/82">{profile.shortBio}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link to="/research" className="btn-secondary bg-white text-navy-900 hover:bg-white/90">
                View Research <ArrowRight size={15} />
              </Link>
              <Link to="/publications" className="inline-flex items-center justify-center gap-2 rounded-md border border-white/25 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10">
                Publications
              </Link>
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 rounded-md border border-white/25 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10">
                <Mail size={15} /> Contact
              </Link>
            </div>
            <a href={profile.cvPath} className="mt-4 inline-flex text-xs font-medium text-white/70 hover:text-white">
              Download CV (PDF)
            </a>
          </div>

          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-5 rounded-full bg-white/10 blur-3xl" />
            <div className="relative mx-auto flex h-52 w-52 items-center justify-center rounded-full border-8 border-white/15 bg-white/10 p-2 shadow-2xl">
              <img src={profile.portrait} alt="Profile placeholder for Dr. Yousef Fazea" className="h-full w-full rounded-full object-cover" />
              <span className="absolute -bottom-3 rounded-full bg-white px-4 py-1 text-xs font-bold text-navy-900 shadow-soft">
                Ph.D. - Assistant Professor
              </span>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-3">
              {profile.stats.map((stat, index) => (
                <div key={stat.label} className="rounded-xl border border-white/15 bg-white/10 p-4 backdrop-blur">
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <p className="mt-1 text-xs font-medium text-white/75">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white py-9">
        <div className="page-shell text-center">
          <h2 className="text-base font-bold text-slate-950">Research Areas</h2>
          <p className="mt-1 text-sm text-slate-500">Core domains of expertise and investigation</p>
          <BadgeList items={researchAreas} className="mt-5 justify-center" />
        </div>
      </section>

      <section className="page-shell py-14">
        <SectionHeader
          title="Research Themes"
          subtitle="Active areas of scholarly investigation aligned with secure, intelligent, and connected systems."
          action={<Link to="/research" className="text-sm font-semibold text-navy-900 hover:underline">View All <ArrowRight size={14} className="inline" /></Link>}
        />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {researchThemes.slice(0, 6).map((theme) => (
            <ResearchThemeCard key={theme.title} theme={theme} />
          ))}
        </div>
      </section>

      <section className="bg-white py-14">
        <div className="page-shell">
          <SectionHeader
            title="Active Research Projects"
            subtitle="Ongoing scholarly investigations involving students, collaborators, and applied computing problems."
            action={<Link to="/research" className="text-sm font-semibold text-navy-900 hover:underline">View All <ArrowRight size={14} className="inline" /></Link>}
          />
          <div className="grid gap-4 md:grid-cols-3">
            {activeProjects.map((project) => (
              <article key={project.title} className="card p-5">
                <div className="mb-3 flex items-center justify-between gap-3">
                  <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-bold text-emerald-700">{project.status}</span>
                  <span className="text-xs font-semibold text-slate-500">{project.year}</span>
                </div>
                <h3 className="font-bold text-slate-950">{project.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-semibold text-slate-600">{tag}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-shell py-14">
        <SectionHeader
          title="Courses Taught"
          subtitle="Selected undergraduate and graduate courses taught at Marshall University."
          action={<Link to="/teaching" className="text-sm font-semibold text-navy-900 hover:underline">View All <ArrowRight size={14} className="inline" /></Link>}
        />
        <div className="grid gap-4 md:grid-cols-3">
          {[...teaching.graduateCourses.slice(0, 3), ...teaching.undergraduateCourses.slice(0, 3)].map((course) => (
            <article key={`${course.code}-${course.name}`} className="card p-5">
              <span className="rounded-full bg-blue-50 px-2.5 py-1 text-[11px] font-bold text-blue-700">{course.code}</span>
              <h3 className="mt-3 font-bold text-slate-950">{course.name}</h3>
              <p className="mt-2 text-sm text-slate-500">Graduate/Undergraduate course at Marshall University</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-navy-900 py-14 text-white">
        <div className="page-shell text-center">
          <h2 className="text-2xl font-bold">Interested in Research or Collaboration?</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-white/75">
            I welcome inquiries from prospective graduate students, collaborating faculty, and research partners.
          </p>
          <div className="mt-6 flex justify-center gap-3">
            <Link to="/contact" className="btn-secondary bg-white text-navy-900 hover:bg-white/90">Get in Touch</Link>
            <Link to="/student-achievements" className="inline-flex items-center justify-center gap-2 rounded-md border border-white/25 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10">
              <GraduationCap size={15} /> Student Opportunities
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
