import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import ScrollToTop from './components/ScrollToTop.jsx';
import PageTransition from './components/PageTransition.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';

import Home from './pages/Home.jsx';
import AcademicProfile from './pages/AcademicProfile.jsx';
import Teaching from './pages/Teaching.jsx';
import Research from './pages/Research.jsx';
import Publications from './pages/Publications.jsx';
import StudentAchievements from './pages/StudentAchievements.jsx';
import GrantsAwards from './pages/GrantsAwards.jsx';
import Gallery from './pages/Gallery.jsx';
import Media from './pages/Media.jsx';
import Contact from './pages/Contact.jsx';

export default function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <ScrollToTop />
      <Navbar />

      <main>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={
                <PageTransition>
                  <Home />
                </PageTransition>
              }
            />

            <Route
              path="/profile"
              element={
                <PageTransition>
                  <AcademicProfile />
                </PageTransition>
              }
            />

            <Route
              path="/teaching"
              element={
                <PageTransition>
                  <Teaching />
                </PageTransition>
              }
            />

            <Route
              path="/research"
              element={
                <PageTransition>
                  <Research />
                </PageTransition>
              }
            />

            <Route
              path="/publications"
              element={
                <PageTransition>
                  <Publications />
                </PageTransition>
              }
            />

            <Route
              path="/student-achievements"
              element={
                <PageTransition>
                  <StudentAchievements />
                </PageTransition>
              }
            />

            <Route
              path="/grants-awards"
              element={
                <PageTransition>
                  <GrantsAwards />
                </PageTransition>
              }
            />

            <Route
              path="/gallery"
              element={
                <PageTransition>
                  <Gallery />
                </PageTransition>
              }
            />

            <Route
              path="/media"
              element={
                <PageTransition>
                  <Media />
                </PageTransition>
              }
            />

            <Route
              path="/contact"
              element={
                <PageTransition>
                  <Contact />
                </PageTransition>
              }
            />
          </Routes>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}