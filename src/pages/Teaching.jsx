import {
  BookOpen,
  Code2,
  Download,
  FlaskConical,
  GraduationCap,
  Lightbulb,
  MessageSquareQuote,
  Quote,
  School,
  Users,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { teaching } from '../data/teaching.js';
import { profile } from '../data/profile.js';
import ScrollReveal from '../components/ScrollReveal.jsx';

function PageTitle({ title, subtitle }) {
  return (
    <div className="mb-5">
      <h2 className="font-serif text-xl font-bold text-slate-950">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-1 text-sm text-slate-500">{subtitle}</p>
      )}
    </div>
  );
}

function CourseList({ title, courses, accent }) {
  const isGreen = accent === 'green';

  return (
    <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
      <div
        className={`flex items-center justify-between px-5 py-3 text-white ${isGreen ? 'bg-emerald-700' : 'bg-navy-900'
          }`}
      >
        <div className="flex items-center gap-2">
          <BookOpen size={16} />
          <h3 className="text-sm font-bold">{title}</h3>
        </div>

        <span className="rounded-full bg-white/25 px-2.5 py-1 text-[11px] font-bold text-white">
          {courses.length} courses
        </span>
      </div>

      <div className="divide-y divide-slate-200 px-5 py-4">
        {courses.map((course) => (
          <div
            key={`${course.code}-${course.name}`}
            className="grid grid-cols-[90px_1fr_auto] items-center gap-4 py-2"
          >
            <span className="rounded bg-slate-100 px-3 py-1 text-center text-[11px] font-extrabold text-navy-900">
              {course.code}
            </span>

            <span className="text-sm font-semibold text-slate-700">
              {course.name}
            </span>

            <span
              className={`rounded-full px-2 py-0.5 text-[10px] font-extrabold ${course.institution === 'MU'
                ? 'bg-emerald-50 text-emerald-700'
                : 'bg-green-50 text-green-700'
                }`}
            >
              {course.institution || (isGreen ? 'MU' : 'MU')}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function MethodCard({ method }) {
  const Icon = method.icon || Code2;

  return (
    <article className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 text-navy-900">
        <Icon size={20} />
      </span>

      <h3 className="mt-4 font-serif text-sm font-bold text-slate-950">
        {method.title}
      </h3>

      <p className="mt-2 text-xs leading-5 text-slate-600">
        {method.description}
      </p>
    </article>
  );
}

function InnovationCard({ item }) {
  return (
    <article className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="border-l-4 border-emerald-600 pl-4">
        <h3 className="font-serif text-sm font-bold text-slate-950">
          {item.title}
        </h3>

        <p className="mt-2 text-xs leading-5 text-slate-600">
          {item.description}
        </p>
      </div>
    </article>
  );
}

function FeedbackCard({ item }) {
  return (
    <blockquote className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <Quote size={26} className="text-slate-300" />

      <p className="mt-4 text-sm font-semibold italic leading-6 text-slate-600">
        “{item.quote}”
      </p>

      <div className="mt-5 border-t border-slate-200 pt-4">
        <footer className="text-xs font-bold text-slate-500">
          {item.course}
        </footer>
        <p className="text-xs text-slate-400">Marshall University</p>
      </div>
    </blockquote>
  );
}

export default function Teaching() {
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
              <p className="eyebrow text-white/65">Teaching</p>
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

      {/* Teaching Philosophy */}
      <section className="page-shell py-10">
        <ScrollReveal>
          <PageTitle title="Teaching Philosophy" />

          <div className="rounded-xl border border-slate-300 bg-slate-100/70 p-7 shadow-sm md:p-9">
            <div className="grid gap-5 md:grid-cols-[36px_1fr]">
              <Quote size={32} className="text-slate-400" />

              <div className="space-y-4 text-xs font-semibold leading-6 text-slate-600 md:text-sm">
                {teaching.philosophy.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Teaching Approach */}
      <section className="page-shell py-8">
        <ScrollReveal>
          <PageTitle title="Teaching Approach & Methods" />

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {teaching.methods.map((method) => (
              <MethodCard key={method.title} method={method} />
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* Subjects Taught */}
      <section className="page-shell py-8">
        <ScrollReveal>
          <PageTitle title="Subjects Taught" />

          <div className="grid gap-7 lg:grid-cols-2">
            <CourseList
              title="Postgraduate / Graduate"
              courses={teaching.graduateCourses}
              accent="green"
            />

            <CourseList
              title="Undergraduate"
              courses={teaching.undergraduateCourses}
              accent="blue"
            />
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-5 text-xs font-semibold text-slate-500">
            <span className="inline-flex items-center gap-2">
              <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-extrabold text-emerald-700">
                MU
              </span>
              Marshall University, WV, USA
            </span>

            <span className="inline-flex items-center gap-2">
              <span className="rounded-full bg-blue-50 px-2 py-0.5 text-[10px] font-extrabold text-blue-700">
                UUM
              </span>
              Universiti Utara Malaysia
            </span>
          </div>
        </ScrollReveal>
      </section>

      {/* Student Supervision */}
      <section className="page-shell py-10">
        <ScrollReveal>
          <PageTitle title="Student Supervision" />

          <div className="mb-5 flex items-center gap-3">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-amber-100 text-amber-700">
              <GraduationCap size={17} />
            </span>

            <h3 className="font-serif text-base font-bold text-slate-950">
              Doctoral / Graduate Students
            </h3>

            <span className="rounded-full bg-amber-100 px-3 py-1 text-[11px] font-extrabold text-amber-700">
              {teaching.supervisedStudents.length} students
            </span>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {teaching.supervisedStudents.map((student) => (
              <article
                key={student.name}
                className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-bold text-navy-900">{student.name}</h3>
                    {student.field && (
                      <p className="mt-1 text-sm font-semibold text-slate-500">
                        {student.field}
                      </p>
                    )}
                  </div>

                  <span className="shrink-0 rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-extrabold text-emerald-700">
                    {student.status}
                  </span>
                </div>

                <p className="mt-3 text-xs leading-5 text-slate-600">
                  {student.project}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-8 mb-5 flex items-center gap-3">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-200 text-navy-900">
              <Users size={17} />
            </span>

            <h3 className="font-serif text-base font-bold text-slate-950">
              B.Sc. Students
            </h3>

            <span className="rounded-full bg-slate-200 px-3 py-1 text-[11px] font-extrabold text-navy-900">
              {teaching.bscStudents.length} students
            </span>
          </div>

          <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
            <div className="bg-slate-50 px-5 py-3">
              <h4 className="text-xs font-extrabold uppercase tracking-wide text-navy-900">
                Undergraduate Research and Project Students
              </h4>
            </div>

            <div className="grid gap-3 p-5 sm:grid-cols-2 md:grid-cols-3">
              {teaching.bscStudents.map((student) => (
                <p
                  key={student}
                  className="text-sm font-semibold text-slate-700"
                >
                  • {student}
                </p>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Course Innovation */}
      <section className="page-shell py-8">
        <ScrollReveal>
          <PageTitle title="Course Innovation & Development" />

          <div className="grid gap-5 md:grid-cols-2">
            {teaching.innovations.map((item) => (
              <InnovationCard key={item.title} item={item} />
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* Student Feedback */}
      <section className="page-shell py-10">
        <ScrollReveal>
          <div className="mb-5 flex flex-wrap items-center gap-3">
            <h2 className="font-serif text-xl font-bold text-slate-950">
              Student Feedback Highlights
            </h2>

            <span className="rounded-full bg-slate-100 px-3 py-1 text-[11px] font-bold text-slate-500">
            </span>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {teaching.feedback.map((item) => (
              <FeedbackCard key={item.quote} item={item} />
            ))}
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}