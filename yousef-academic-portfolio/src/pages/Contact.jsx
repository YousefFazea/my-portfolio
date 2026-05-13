import { Send } from 'lucide-react';
import ContactCard from '../components/ContactCard.jsx';
import { profile } from '../data/profile.js';
import { Download } from 'lucide-react';

export default function Contact() {
  return (
    <>
      <section className="page-shell">
        <div className="gradient-hero overflow-hidden rounded-2xl p-8 text-white shadow-academic md:p-10">
          <div className="grid items-center gap-8 md:grid-cols-[auto_1fr_auto]">
            <img src={profile.portrait} alt="Profile placeholder" className="h-28 w-28 rounded-full border-4 border-white/20 bg-white object-cover" />
            <div>
              <p className="eyebrow text-white/65">Contact</p>
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

      <section className="page-shell grid gap-6 lg:grid-cols-[.9fr_1.1fr]">
        <div className="space-y-6">
          <ContactCard />
        </div>

        <div className="card p-6">
          <h2 className="font-bold text-slate-950">Send a Message</h2>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            This form can open your email client with a pre-filled message. Email contact is preferred for academic inquiries.
          </p>
          <form
            className="mt-5 space-y-4"
            onSubmit={(event) => {
              event.preventDefault();
              const form = new FormData(event.currentTarget);
              const name = form.get('name');
              const email = form.get('email');
              const subject = form.get('subject');
              const message = form.get('message');
              const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
              window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${body}`;
            }}
          >
            <label className="block text-sm font-semibold text-slate-700">
              Your Name *
              <input required name="name" placeholder="Full name" className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-navy-700 focus:ring-2 focus:ring-navy-100" />
            </label>
            <label className="block text-sm font-semibold text-slate-700">
              Your Email *
              <input required name="email" type="email" placeholder="you@email.edu" className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-navy-700 focus:ring-2 focus:ring-navy-100" />
            </label>
            <label className="block text-sm font-semibold text-slate-700">
              Subject *
              <select required name="subject" className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-navy-700 focus:ring-2 focus:ring-navy-100">
                <option value="">Select a subject</option>
                <option>Research Collaboration Inquiry</option>
                <option>Student Mentorship Inquiry</option>
                <option>Course or Teaching Inquiry</option>
                <option>Publication or Media Inquiry</option>
                <option>General Academic Inquiry</option>
              </select>
            </label>
            <label className="block text-sm font-semibold text-slate-700">
              Message *
              <textarea required name="message" rows="6" placeholder="Please describe your inquiry, research interests, or question..." className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-navy-700 focus:ring-2 focus:ring-navy-100" />
            </label>
            <button type="submit" className="btn-primary w-full">
              <Send size={16} /> Send Message
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
