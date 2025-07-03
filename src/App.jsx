import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import BackToTopButton from "./components/BackToTopButton";
import Analytics from "./components/Analytics";
import Footer from "./components/Footer";
import PrivacyBanner from "./components/PrivacyBanner";
import Privacy from "./pages/Privacy";

function App() {
  return (
    <Router>
      {/* Google Analytics */}
      <Analytics />
      <div className="flex flex-col min-h-screen bg-gray-900 text-white">
        {/* Main site navigation bar */}
        <Navbar />

        {/* Page routes */}
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/privacy" element={<Privacy />} />
          </Routes>
        </div>

        {/* Floating "Back to Top" button */}
        <BackToTopButton />
        <Footer />
        <PrivacyBanner />
      </div>
    </Router>
  );
}

export default App;
