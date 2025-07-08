import { NavLink } from "react-router-dom";

function NavButton({ to, children, end = false }) {
  return (
    <NavLink
      to={to}
      end={end}
      className={({ isActive }) =>
        "relative py-1 text-[1.4em] transition " +
        (isActive
          ? "font-bold"
          : `after:content-[''] after:absolute after:left-0 after:-bottom-1
              after:w-0 hover:after:w-full
              after:h-0.5 after:bg-neon-blue after:rounded
              after:transition-all after:duration-300`)
      }
    >
      {children}
    </NavLink>
  );
}

export default NavButton;
