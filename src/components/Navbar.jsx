import MobileNav from "./MobileNav";
import { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  // Controls if the mobile menu is open
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-gray-950 text-white shadow-lg">
      <div className="max-w-screen-2xl mx-auto flex justify-between items-center py-6 px-4 md:px-8">
        {/* Logo / Home link */}
        <NavLink
          to="/"
          className="text-2xl md:text-4xl font-bold tracking-widest text-white hover:text-neon-blue transition"
          end
        >
          kornet.dev
        </NavLink>
        {/* Desktop navigation links (hidden on mobile) */}
        <div className="hidden md:flex space-x-8">
          <NavLink
            to="/"
            className={({ isActive }) =>
              "text-2xl transition " +
              (isActive ? "text-neon-blue font-bold" : "hover:text-neon-blue")
            }
            end
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              "text-2xl transition " +
              (isActive ? "text-neon-blue font-bold" : "hover:text-neon-blue")
            }
          >
            About
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              "text-2xl transition " +
              (isActive ? "text-neon-blue font-bold" : "hover:text-neon-blue")
            }
          >
            Projects
          </NavLink>
          <NavLink
            to="/skills"
            className={({ isActive }) =>
              "text-2xl transition " +
              (isActive ? "text-neon-blue font-bold" : "hover:text-neon-blue")
            }
          >
            Skills
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              "text-2xl transition " +
              (isActive ? "text-neon-blue font-bold" : "hover:text-neon-blue")
            }
          >
            Contact
          </NavLink>
        </div>
        {/* Mobile navigation button & menu */}
        <MobileNav open={open} setOpen={setOpen} />
      </div>
    </nav>
  );
}

export default Navbar;
