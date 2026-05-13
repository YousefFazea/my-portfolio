import { Mail, MapPin, Building2, Download, ExternalLink } from 'lucide-react';
import { profile } from '../data/profile.js';

export default function ContactCard() {
  return (
    <div className="card p-6">
      <h2 className="font-bold text-slate-950">Contact Information</h2>
      <div className="mt-5 space-y-4 text-sm text-slate-600">
        <div>
          <p className="font-bold text-slate-950">{profile.name}</p>
          <p>{profile.title}</p>
          <p>{profile.department}</p>
          <p>{profile.university}</p>
        </div>
        <p className="flex items-center gap-3"><Mail size={16} /> {profile.email}</p>
        <p className="flex items-center gap-3"><MapPin size={16} /> {profile.office}</p>
        <p className="flex items-center gap-3"><Building2 size={16} /> {profile.location}</p>
      </div>
      <a href={profile.cvPath} className="btn-primary mt-6 w-full">
        <Download size={16} /> Download CV (PDF)
      </a>
      <div className="mt-6 border-t border-slate-200 pt-5">
        <h3 className="font-bold text-slate-950">Professional Profiles</h3>
        <div className="mt-3 grid gap-2 text-sm text-slate-600">
          {profile.professionalLinks.map((link) => (
            <a key={link.label} href={link.url} className="inline-flex items-center gap-2 hover:text-navy-900">
              <ExternalLink size={14} /> {link.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
