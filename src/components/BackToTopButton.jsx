import { FaArrowUp } from "react-icons/fa";
import { useState, useEffect } from "react";

function BackToTopButton() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 150);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!show) return null;

  return (
    <button
      className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-cyan-600 text-white shadow-lg hover:bg-cyan-500 transition"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
    >
      <FaArrowUp size={24} />
    </button>
  );
}

export default BackToTopButton;
