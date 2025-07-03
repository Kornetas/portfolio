import { Link } from "react-router-dom";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-700 text-white py-8">
      <div className="container mx-auto flex flex-col items-center">
        <div className="flex gap-8 text-lg mb-4">
          <a
            href="https://www.linkedin.com/in/arkadiusz-rak-807272306/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-blue-400 transition"
          >
            <FaLinkedin className="text-2xl" />
            <span>LinkedIn</span>
          </a>
          <a
            href="mailto:arek93r@gmail.com"
            className="flex items-center gap-2 hover:text-red-400 transition"
          >
            <FaEnvelope className="text-2xl" />
            <span>Email</span>
          </a>
          <a
            href="https://github.com/Kornetas"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-gray-300 transition"
          >
            <FaGithub className="text-2xl" />
            <span>GitHub</span>
          </a>
        </div>

        <div className="text-sl">
          <Link to="/privacy" className="hover:underline">
            Privacy & Legal
          </Link>
        </div>
      </div>
    </footer>
  );
}
