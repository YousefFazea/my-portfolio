import SectionHeader from '../components/SectionHeader.jsx';
import StatCard from '../components/StatCard.jsx';
import { AwardCard, GrantCard } from '../components/GrantAwardCard.jsx';
import { awards, grants, grantStats } from '../data/grantsAwards.js';
import { profile } from '../data/profile.js';
import { Download } from 'lucide-react';

export default function GrantsAwards() {
  return (
    <>
      <section className="page-shell">
        <div className="gradient-hero overflow-hidden rounded-2xl p-8 text-white shadow-academic md:p-10">
          <div className="grid items-center gap-8 md:grid-cols-[auto_1fr_auto]">
            <img src={profile.portrait} alt="Profile placeholder" className="h-28 w-28 rounded-full border-4 border-white/20 bg-white object-cover" />
            <div>
              <p className="eyebrow text-white/65">Grants & Awards</p>
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
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {grantStats.map((stat) => <StatCard key={stat.label} value={stat.value} label={stat.label} />)}
        </div>
      </section>

      <section className="page-shell py-12">
        <SectionHeader title="Funded Projects" />
        <div className="grid gap-4">
          {grants.map((grant) => <GrantCard key={grant.title} grant={grant} />)}
        </div>
      </section>

      <section className="page-shell py-4">
        <SectionHeader title="Awards & Recognition" />
        <div className="grid gap-4 md:grid-cols-2">
          {awards.map((award) => <AwardCard key={award.title} award={award} />)}
        </div>
      </section>
    </>
  );
}
