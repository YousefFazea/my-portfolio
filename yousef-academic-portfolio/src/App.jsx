import { Route, Routes } from 'react-router-dom';
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
import Contact from './pages/Contact.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<AcademicProfile />} />
          <Route path="/teaching" element={<Teaching />} />
          <Route path="/research" element={<Research />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/student-achievements" element={<StudentAchievements />} />
          <Route path="/grants-awards" element={<GrantsAwards />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
