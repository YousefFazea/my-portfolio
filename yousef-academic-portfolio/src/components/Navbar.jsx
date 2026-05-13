import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { profile } from '../data/profile.js';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Academic Profile', href: '/profile' },
  { label: 'Teaching', href: '/teaching' },
  { label: 'Research', href: '/research' },
  { label: 'Publications', href: '/publications' },
  { label: 'Student Achievements', href: '/student-achievements' },
  { label: 'Grants & Awards', href: '/grants-awards' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact', href: '/contact' }
  

];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `rounded-md px-2.5 py-1.5 text-xs font-semibold transition ${
      isActive ? 'bg-navy-900 text-white shadow-soft' : 'text-slate-700 hover:bg-navy-50 hover:text-navy-900'
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="page-shell flex h-14 items-center justify-between gap-4">
        <NavLink to="/" className="flex min-w-0 items-center gap-2" onClick={() => setOpen(false)}>
          <span className="inline-flex h-9 w-9 items-center justify-center overflow-hidden rounded-lg bg-white">
          <img
            src="public/images/logo.png"
            alt="MU"
            className="h-8 w-8 object-contain"
          />
        </span>

  <span className="min-w-0 leading-tight">
    <span className="block truncate text-sm font-bold text-slate-950">{profile.name}</span>
    <span className="block truncate text-[11px] text-slate-500">{profile.university}</span>
  </span>
</NavLink>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
          {navItems.map((item) => (
            <NavLink key={item.href} to={item.href} className={linkClass}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <button
          className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-slate-200 text-slate-700 lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-slate-200 bg-white lg:hidden" aria-label="Mobile navigation">
          <div className="page-shell grid gap-1 py-3">
            {navItems.map((item) => (
              <NavLink key={item.href} to={item.href} className={linkClass} onClick={() => setOpen(false)}>
                {item.label}
              </NavLink>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
