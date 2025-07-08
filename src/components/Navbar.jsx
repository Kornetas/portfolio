import MobileNav from "./MobileNav";
import { useState } from "react";
import NavButton from "./NavButton";
import { NavLink } from "react-router-dom";

function Navbar() {
  // Controls if the mobile menu is open
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-gray-950 text-white shadow-lg">
      <div className="max-w-screen-2xl mx-auto flex justify-between items-center py-5 px-4 md:px-8">
        {/* Logo / Home link */}
        <NavLink
          to="/"
          className="text-2xl md:text-3xl font-bold tracking-widest text-white hover:text-neon-blue transition"
          end
        >
          kornet.dev
        </NavLink>

        {/* Desktop navigation links (hidden on mobile) */}
        <div className="hidden md:flex space-x-8">
          <NavButton to="/" end>
            Home
          </NavButton>
          <NavButton to="/about">About</NavButton>
          <NavButton to="/projects">Projects</NavButton>
          <NavButton to="/skills">Skills</NavButton>
          <NavButton to="/contact">Contact</NavButton>
        </div>

        {/* Mobile navigation button & menu */}
        <MobileNav open={open} setOpen={setOpen} />
      </div>
    </nav>
  );
}

export default Navbar;
