import { Link } from "react-router-dom";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-700 text-white py-4">
      <div className="container mx-auto flex flex-col items-center">
        <div className="flex gap-8 text-lg mb-2">
          {/* LinkedIn profile */}
          <a
            href="https://www.linkedin.com/in/arkadiusz-rak-807272306/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-blue-400 transition"
          >
            <FaLinkedin className="text-2xl" />
            <span>LinkedIn</span>
          </a>
          {/* E-mail link */}
          <a
            href="mailto:arek93r@gmail.com"
            className="flex items-center gap-2 hover:text-red-400 transition"
          >
            <FaEnvelope className="text-2xl" />
            <span>Email</span>
          </a>
          {/* GitHub profile */}
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

        {/* Link to privacy and legal information */}
        <div className="text-sl">
          <Link
            to="/privacy"
            className="hover:underline hover:text-green-400 transition"
          >
            Privacy & Legal
          </Link>
        </div>
      </div>
    </footer>
  );
}
