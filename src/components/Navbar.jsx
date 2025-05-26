import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gray-950 text-white shadow-lg">
      <div className="max-w-screen-2xl mx-auto flex justify-between items-center py-3 px-4 md:px-8">
        <Link
          to="/"
          className="text-3xl md:text-4xl font-bold tracking-widest text-white hover:text-neon-blue transition"
        >
          kornet.dev
        </Link>
        {/* Desktop nav */}
        <div className="hidden md:flex space-x-8">
          <Link to="/" className="text-xl hover:text-neon-blue transition">
            Home
          </Link>
          <Link to="/about" className="text-xl hover:text-neon-blue transition">
            About
          </Link>
          <Link
            to="/projects"
            className="text-xl hover:text-neon-blue transition"
          >
            Projects
          </Link>
          <Link
            to="/skills"
            className="text-xl hover:text-neon-blue transition"
          >
            Skills
          </Link>
          <Link
            to="/contact"
            className="text-xl hover:text-neon-blue transition"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
