import { Download, ExternalLink, GraduationCap, Target } from 'lucide-react';
import { profile } from '../data/profile.js';

import SectionHeader from '../components/SectionHeader.jsx';
import BadgeList from '../components/BadgeList.jsx';

function TimelineItem({ item }) {
  return (
    <article className="relative border-l border-slate-200 pl-5">
      <span className="absolute -left-1.5 top-1.5 h-3 w-3 rounded-full bg-navy-900" />
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h3 className="font-bold text-slate-950">{item.role}</h3>
          <p className="text-sm font-medium text-slate-600">{item.organization}</p>
        </div>
        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600">{item.period}</span>
      </div>
      <ul className="mt-3 list-disc space-y-1 pl-4 text-sm leading-6 text-slate-600">
        {item.points.map((point) => <li key={point}>{point}</li>)}
      </ul>
    </article>
  );
}

export default function AcademicProfile() {
  return (
    <>

      <section className="page-shell">
        <div className="gradient-hero overflow-hidden rounded-2xl p-8 text-white shadow-academic md:p-10">
          <div className="grid items-center gap-8 md:grid-cols-[auto_1fr_auto]">
            <img src={profile.portrait} alt="Profile placeholder" className="h-28 w-28 rounded-full border-4 border-white/20 bg-white object-cover" />
            <div>
              <p className="eyebrow text-white/65">Academic Profile</p>
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

      <section className="page-shell py-10">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="card p-6">
            <SectionHeader title="Objectives" />
            <div className="grid gap-4">
              {profile.objectives.map((objective) => (
                <div key={objective} className="flex gap-3 text-sm leading-6 text-slate-600">
                  <Target className="mt-1 shrink-0 text-navy-800" size={17} />
                  <p>{objective}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="card p-6">
            <SectionHeader title="Research Interests" />
            <BadgeList items={profile.researchSchool} />
          </div>
        </div>
      </section>

      <section className="page-shell py-4">
        <div className="card p-6 md:p-8">
          <SectionHeader title="More About Me" />
          <div className="space-y-4 text-sm leading-7 text-slate-600 md:text-base">
            {profile.longBio.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
        </div>
      </section>

      <section className="page-shell py-10">
        <SectionHeader title="Education" />
        <div className="grid gap-4">
          {profile.education.map((item) => (
            <article key={item.degree} className="card p-5">
              <div className="flex gap-3">
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-700">
                  <GraduationCap size={20} />
                </span>
                <div>
                  <h3 className="font-bold text-slate-950">{item.degree}</h3>
                  <p className="text-sm font-semibold text-slate-600">{item.institution}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{item.details}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="page-shell py-6">
        <SectionHeader title="Professional Experience" />
        <div className="card space-y-7 p-6 md:p-8">
          {profile.experience.map((item) => <TimelineItem key={`${item.role}-${item.period}`} item={item} />)}
        </div>
      </section>

      <section className="page-shell grid gap-6 py-10 lg:grid-cols-2">
        <div className="card p-6">
          <SectionHeader title="Professional Society Memberships" />
          <ul className="space-y-2 text-sm leading-6 text-slate-600">
            {profile.memberships.map((item) => <li key={item}>• {item}</li>)}
          </ul>
        </div>
        <div className="card p-6">
          <SectionHeader title="Professional Certifications" />
          <ul className="space-y-2 text-sm leading-6 text-slate-600">
            {profile.certifications.map((item) => <li key={item}>• {item}</li>)}
          </ul>
        </div>
        <div className="card p-6 lg:col-span-2">
          <SectionHeader title="Academic Duties and Service" />
          <div className="grid gap-2 sm:grid-cols-2">
            {profile.service.map((item) => (
              <p key={item} className="text-sm leading-6 text-slate-600">• {item}</p>
            ))}
          </div>
        </div>
        <div className="card p-6 lg:col-span-2">
          <SectionHeader title="Professional Profiles" />
          <div className="grid gap-2 sm:grid-cols-2 md:grid-cols-3">
            {profile.professionalLinks.map((link) => (
              <a key={link.label} href={link.url} className="inline-flex items-center gap-2 text-sm font-medium text-navy-900 hover:underline">
                <ExternalLink size={14} /> {link.label}
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
