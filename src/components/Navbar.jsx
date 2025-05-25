import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="w-full flex justify-between items-center py-4 px-8 bg-gray-950 text-white shadow-lg">
      <div className="text-2xl font-bold tracking-widest text-neon-green">
        Arek.dev
      </div>
      <div className="space-x-6">
        <Link to="/" className="hover:text-neon-green transition">
          Home
        </Link>
        <Link to="/about" className="hover:text-neon-green transition">
          About
        </Link>
        <Link to="/projects" className="hover:text-neon-green transition">
          Projects
        </Link>
        <Link to="/skills" className="hover:text-neon-green transition">
          Skills
        </Link>
        <Link to="/contact" className="hover:text-neon-green transition">
          Contact
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
