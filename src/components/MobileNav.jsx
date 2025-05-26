import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

export default function MobileNav({ open, setOpen }) {
  return (
    <>
      <button
        className="md:hidden text-3xl p-2 focus:outline-none"
        onClick={() => setOpen(!open)}
        aria-label="Open menu"
      >
        {open ? <FiX /> : <FiMenu />}
      </button>
      {open && (
        <div className="absolute top-16 left-0 w-full bg-gray-950 border-t border-gray-800 flex flex-col items-center py-6 z-50 animate-slide-down">
          <Link
            to="/"
            className="text-2xl py-2 hover:text-neon-blue transition"
            onClick={() => setOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-2xl py-2 hover:text-neon-blue transition"
            onClick={() => setOpen(false)}
          >
            About
          </Link>
          <Link
            to="/projects"
            className="text-2xl py-2 hover:text-neon-blue transition"
            onClick={() => setOpen(false)}
          >
            Projects
          </Link>
          <Link
            to="/skills"
            className="text-2xl py-2 hover:text-neon-blue transition"
            onClick={() => setOpen(false)}
          >
            Skills
          </Link>
          <Link
            to="/contact"
            className="text-2xl py-2 hover:text-neon-blue transition"
            onClick={() => setOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </>
  );
}
