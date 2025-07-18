import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import BackToTopButton from "./components/BackToTopButton";
import Footer from "./components/Footer";
import PrivacyBanner from "./components/PrivacyBanner";
import Privacy from "./pages/Privacy";

// Google Analytics page view tracking (could be extracted to a headless component if more integrations are added)
function AppContent() {
  const location = useLocation();

  // Send a page view event to Google Analytics on every route change.
  // This helps track SPA navigation as single-page apps don't reload the whole page.
  useEffect(() => {
    if (window.gtag) {
      window.gtag("config", "G-TFS4CQ42GT", {
        page_path: location.pathname + location.search,
      });
    }
  }, [location]);

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      {/* Site navigation bar at the top */}
      <Navbar />

      {/* Main content, changes based on route */}
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          {/* Fallback for unknown URLs */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>

      {/* Floating button that scrolls the page to the top */}
      <BackToTopButton />
      {/* Footer at the bottom of the site */}
      <Footer />
      {/* Privacy policy / cookies banner */}
      <PrivacyBanner />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
