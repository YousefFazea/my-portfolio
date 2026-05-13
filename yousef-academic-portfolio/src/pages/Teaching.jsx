import SectionHeader from '../components/SectionHeader.jsx';
import { teaching } from '../data/teaching.js';
import { Download } from 'lucide-react';
import { profile } from '../data/profile.js';

function CourseList({ title, courses, accent }) {
  return (
    <div className="card overflow-hidden">
      <div className={`border-b border-slate-200 px-5 py-4 ${accent === 'green' ? 'bg-emerald-50' : 'bg-navy-50'}`}>
        <h3 className="font-bold text-slate-950">{title}</h3>
      </div>
      <div className="divide-y divide-slate-100">
        {courses.map((course) => (
          <div key={`${course.code}-${course.name}`} className="flex items-center justify-between gap-3 px-5 py-3">
            <span className="text-sm text-slate-700">{course.name}</span>
            <span className={`rounded-full px-2.5 py-1 text-[11px] font-bold ${accent === 'green' ? 'bg-emerald-100 text-emerald-700' : 'bg-blue-100 text-blue-700'}`}>{course.code}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Teaching() {
  return (
    <>

      <section className="page-shell">
        <div className="gradient-hero overflow-hidden rounded-2xl p-8 text-white shadow-academic md:p-10">
          <div className="grid items-center gap-8 md:grid-cols-[auto_1fr_auto]">
            <img src={profile.portrait} alt="Profile placeholder" className="h-28 w-28 rounded-full border-4 border-white/20 bg-white object-cover" />
            <div>
              <p className="eyebrow text-white/65">Teaching</p>
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
        <SectionHeader title="" />
        <div className="card p-6 md:p-8">
          <div className="space-y-4 text-sm leading-7 text-slate-600 md:text-base">
            {teaching.philosophy.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
        </div>
      </section>

      <section className="page-shell py-12">
        <SectionHeader title="Teaching Approach & Methods" />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {teaching.methods.map((method) => {
            const Icon = method.icon;
            return (
              <article key={method.title} className="card p-5">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-navy-50 text-navy-900">
                  <Icon size={20} />
                </span>
                <h3 className="mt-4 font-bold text-slate-950">{method.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{method.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="page-shell py-4">
        <SectionHeader title="Subjects Taught" />
        <div className="grid gap-6 lg:grid-cols-2">
          <CourseList title="Postgraduate / Graduate" courses={teaching.graduateCourses} accent="green" />
          <CourseList title="Undergraduate" courses={teaching.undergraduateCourses} accent="blue" />
        </div>
      </section>

      <section className="page-shell py-12">
        <SectionHeader title="Student Supervision" subtitle="Selected examples of PhD, Msc and BSc student supervision and mentorship." />
        <div className="grid gap-4 md:grid-cols-2">
          {teaching.supervisedStudents.map((student) => (
            <article key={student.name} className="card p-5">
              <div className="flex items-center justify-between gap-3">
                <h3 className="font-bold text-slate-950">{student.name}</h3>
                <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-bold text-emerald-700">{student.status}</span>
              </div>
              <p className="mt-3 text-sm leading-6 text-slate-600">{student.project}</p>
            </article>
          ))}
        </div>
        <div className="card mt-5 p-5">
          <h3 className="font-bold text-slate-950">B.Sc. Students</h3>
          <div className="mt-4 grid gap-2 sm:grid-cols-2 md:grid-cols-3">
            {teaching.bscStudents.map((student) => <p key={student} className="text-sm text-slate-600">• {student}</p>)}
          </div>
        </div>
      </section>

      <section className="page-shell py-4">
        <SectionHeader title="Course Innovation & Development" />
        <div className="grid gap-4 md:grid-cols-2">
          {teaching.innovations.map((item) => (
            <article key={item.title} className="card border-l-4 border-l-emerald-500 p-5">
              <h3 className="font-bold text-slate-950">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="page-shell py-12">
        <SectionHeader title="Student Feedback Highlights" subtitle="Representative feedback highlights. Publish names or identifiable comments only with permission." />
        <div className="grid gap-4 md:grid-cols-3">
          {teaching.feedback.map((item) => (
            <blockquote key={item.quote} className="card p-5">
              <p className="text-sm leading-6 text-slate-600">“{item.quote}”</p>
              <footer className="mt-4 text-xs font-semibold text-slate-500">{item.course}</footer>
            </blockquote>
          ))}
        </div>
      </section>
    </>
  );
}
