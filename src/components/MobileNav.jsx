import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import StaggeredList from "./StaggeredList";
import clsx from "clsx";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/skills", label: "Skills" },
  { to: "/contact", label: "Contact" },
];

export default function MobileNav({ open, setOpen }) {
  const [closing, setClosing] = useState(false);

  const handleLinkClick = () => {
    setClosing(true);
    setTimeout(() => {
      setOpen(false);
      setClosing(false);
    }, 1000);
  };

  return (
    <>
      <button
        className="md:hidden text-3xl p-2 focus:outline-none"
        onClick={() => setOpen(!open)}
        aria-label="Open menu"
      >
        {open ? <FiX /> : <FiMenu />}
      </button>
      {(open || closing) && (
        <div
          className={clsx(
            "absolute top-16 left-0 w-full bg-gray-950 border-t border-gray-800 flex flex-col items-center py-6 z-50 transition-transform duration-350",
            open && !closing ? "animate-slide-down" : "animate-slide-up"
          )}
        >
          <StaggeredList from="top" stagger={0.09}>
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={handleLinkClick}
                className="text-2xl block py-2 text-center hover:text-cyan-400 transition"
              >
                {link.label}
              </Link>
            ))}
          </StaggeredList>
        </div>
      )}
    </>
  );
}
