# Dr. Yousef Fazea Academic Portfolio Website

This project is a React + Vite academic portfolio website modeled on the uploaded PDF screenshots. It includes the same main pages: Home, Academic Profile, Teaching, Research, Publications, Student Achievements, Grants & Awards, Gallery, and Contact.

## Run locally

```bash
npm install
npm run dev
```

## Build for deployment

```bash
npm run build
```

## Where to update content

- `src/data/profile.js` - name, title, biography, education, links, service, memberships, CV path.
- `src/data/research.js` - research themes, methods, active/completed projects.
- `src/data/teaching.js` - teaching philosophy, courses, methods, students, feedback.
- `src/data/publications.js` - selected and full publication records.
- `src/data/studentAchievements.js` - student publications, projects, testimonials, impact metrics.
- `src/data/grantsAwards.js` - grants, awards, funding statistics.
- `src/data/gallery.js` - gallery/media items and captions.

## Assets

- Replace `public/assets/cv.pdf` with the final CV.
- Replace `public/images/profile-placeholder.svg` with a real portrait if desired.
- Replace gallery placeholder images with real approved photos.

## Notes

- Student photos, names, and testimonials should be published only with permission.
- Placeholder values are centralized in the data files so they can be replaced safely.
