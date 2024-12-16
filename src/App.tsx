import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Programs from './pages/Programs';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import News from './pages/News';
import Contact from './pages/Contact';
import StudyDestinations from './pages/StudyDestinations';
import Institution from './pages/Institution';
import Partnerships from './pages/Partnerships';
import ReferAndEarn from './pages/ReferAndEarn';
import StudentLoans from './pages/StudentLoans';
import SearchPage from './components/search/SearchPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/study-destinations" element={<StudyDestinations />} />
            <Route path="/institutions/:id" element={<Institution />} />
            <Route path="/partnerships" element={<Partnerships />} />
            <Route path="/refer-and-earn" element={<ReferAndEarn />} />
            <Route path="/student-loans" element={<StudentLoans />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/news" element={<News />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/search" element={<SearchPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;