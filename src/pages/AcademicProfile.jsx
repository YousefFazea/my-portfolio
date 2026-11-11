import {
  Award,
  Briefcase,
  Download,
  ExternalLink,
  FlaskConical,
  GraduationCap,
  Target,
  UserRound,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { profile } from '../data/profile.js';
import BadgeList from '../components/BadgeList.jsx';
import ScrollReveal from '../components/ScrollReveal.jsx';

function ProfileFrame({ title, icon: Icon, children, className = '' }) {
  return (
    <ScrollReveal
      className={`rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8 ${className}`}
    >
      <div className="mb-6 flex items-center gap-3 border-b border-slate-200 pb-4">
        {Icon && <Icon className="text-navy-900" size={22} />}
        <h2 className="font-serif text-xl font-bold text-slate-950">
          {title}
        </h2>
      </div>

      {children}
    </ScrollReveal>
  );
}

function TimelineItem({ item }) {
  return (
    <article className="relative pl-7 before:absolute before:left-[5px] before:top-5 before:bottom-[-2rem] before:w-px before:bg-slate-300 last:before:hidden">
      <span className="absolute left-0 top-2.5 h-3 w-3 rounded-full bg-navy-900 ring-4 ring-white" />

      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h3 className="text-lg font-extrabold leading-tight text-slate-950">
            {item.role}
          </h3>

          <p className="mt-1 text-sm font-bold text-navy-900">
            {item.organization}
          </p>

          {item.location && (
            <p className="text-sm font-medium text-slate-500">
              {item.location}
            </p>
          )}
        </div>

        <span className="rounded-full bg-slate-100 px-4 py-1.5 text-xs font-extrabold text-navy-900">
          {item.period}
        </span>
      </div>

      <ul className="mt-3 list-disc space-y-1 pl-4 text-sm leading-6 text-slate-600">
        {item.points.map((point) => (
          <li key={point}>{point}</li>
        ))}
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
            <img
              src={profile.portrait}
              alt="Profile placeholder"
              className="h-28 w-28 rounded-full border-4 border-white/20 bg-white object-cover"
            />

            <div>
              <p className="eyebrow text-white/65">Academic Profile</p>
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

      <section className="page-shell py-10">
        <div className="grid gap-6 lg:grid-cols-2">
          <ProfileFrame title="Objectives" icon={Target}>
            <div className="grid gap-4">
              {profile.objectives.map((objective) => (
                <div
                  key={objective}
                  className="flex gap-3 text-sm leading-6 text-slate-600"
                >
                  <Target className="mt-1 shrink-0 text-navy-800" size={17} />
                  <p>{objective}</p>
                </div>
              ))}
            </div>
          </ProfileFrame>

          <ProfileFrame title="Research Interests" icon={FlaskConical}>
            <BadgeList items={profile.researchSchool} />
          </ProfileFrame>
        </div>
      </section>

      <section className="page-shell py-4">
        <ProfileFrame title="More About Me" icon={UserRound}>
          <div className="space-y-3 text-xs leading-6 text-justify text-slate-600 md:text-sm">
            {profile.longBio.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </ProfileFrame>
      </section>

      <section className="page-shell py-10">
        <ProfileFrame title="Education" icon={GraduationCap}>
          <div className="grid gap-4">
            {profile.education.map((item) => (
              <article
                key={item.degree}
                className="rounded-xl border border-slate-200 bg-slate-50/60 p-5"
              >
                <div className="flex gap-3">
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-700">
                    <GraduationCap size={20} />
                  </span>

                  <div>
                    <h3 className="font-bold text-slate-950">
                      {item.degree}
                    </h3>

                    <p className="text-sm font-semibold text-slate-600">
                      {item.institution}
                    </p>

                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {item.details}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </ProfileFrame>
      </section>

      <section className="page-shell py-6">
        <ProfileFrame title="Professional Experience" icon={Briefcase}>
          <div className="space-y-8">
            {profile.experience.map((item) => (
              <TimelineItem
                key={`${item.role}-${item.period}`}
                item={item}
              />
            ))}
          </div>
        </ProfileFrame>
      </section>

      <section className="page-shell grid gap-6 py-10 lg:grid-cols-2">
        <ProfileFrame title="Professional Society Memberships" icon={Award}>
          <ul className="space-y-2 text-sm leading-6 text-slate-600">
            {profile.memberships.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </ProfileFrame>

        <ProfileFrame title="Professional Certifications" icon={Award}>
          <ul className="space-y-2 text-sm leading-6 text-slate-600">
            {profile.certifications.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </ProfileFrame>

        <ProfileFrame
          title="Academic Duties and Service"
          icon={Briefcase}
          className="lg:col-span-2"
        >
          <div className="grid gap-2 sm:grid-cols-2">
            {profile.service.map((item) => (
              <p key={item} className="text-sm leading-6 text-slate-600">
                • {item}
              </p>
            ))}
          </div>
        </ProfileFrame>

        <ProfileFrame
          title="Professional Profiles"
          icon={ExternalLink}
          className="lg:col-span-2"
        >
          <div className="grid gap-2 sm:grid-cols-2 md:grid-cols-3">
            {profile.professionalLinks.map((link) => (
              <a
                key={link.label}
                href={link.url}
                className="inline-flex items-center gap-2 text-sm font-medium text-navy-900 hover:underline"
              >
                <ExternalLink size={14} /> {link.label}
              </a>
            ))}
          </div>
        </ProfileFrame>
      </section>
    </>
  );
}