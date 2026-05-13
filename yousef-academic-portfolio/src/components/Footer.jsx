import { Link } from 'react-router-dom';
import { ExternalLink, GraduationCap, Mail } from 'lucide-react';
import { profile } from '../data/profile.js';

const quickLinks = [
  ['Academic Profile', '/profile'],
  ['Teaching', '/teaching'],
  ['Research', '/research'],
  ['Publications', '/publications'],
  ['Student Achievements', '/student-achievements'],
  ['Grants & Awards', '/grants-awards'],
  ['Gallery', '/gallery'],
  ['Contact', '/contact']
];

export default function Footer() {
  return (
    <footer className="mt-16 bg-navy-900 text-white">
      <div className="page-shell grid gap-10 py-10 md:grid-cols-[1.2fr_.8fr_.8fr]">
        <div>
          <div className="flex items-center gap-3">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/10">
              <GraduationCap size={19} />
            </span>
            <div>
              <p className="font-bold">{profile.name}</p>
              <p className="text-sm text-white/75">{profile.title}</p>
            </div>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-6 text-white/75">
            {profile.department}<br />
            {profile.university}
          </p>
          <p className="mt-3 inline-flex items-center gap-2 text-sm text-white/75">
            <Mail size={14} /> {profile.email}
          </p>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-[.18em] text-white/70">Quick Links</h3>
          <div className="mt-4 grid gap-2 text-sm text-white/75">
            {quickLinks.map(([label, href]) => (
              <Link key={href} to={href} className="hover:text-white">
                {label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-[.18em] text-white/70">Professional Profiles</h3>
          <div className="mt-4 grid gap-2 text-sm text-white/75">
            {profile.professionalLinks.map((link) => (
              <a key={link.label} href={link.url} className="inline-flex items-center gap-2 hover:text-white">
                <ExternalLink size={13} /> {link.label}
              </a>
            ))}
            <a href={profile.cvPath} className="inline-flex items-center gap-2 hover:text-white">
              <ExternalLink size={13} /> Download CV
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-4">
        <div className="page-shell flex flex-col justify-between gap-2 text-xs text-white/60 md:flex-row">
          <p>© {new Date().getFullYear()} Dr. Yousef Fazea. Academic portfolio website.</p>
          <p>{profile.department}, {profile.university}</p>
        </div>
      </div>
    </footer>
  );
}
