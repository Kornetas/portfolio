import { useState } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "arek93r@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2900);
  };

  return (
    <section className="relative flex flex-col items-center justify-center min-h-[60vh] px-4 py-12">
      {copied && (
        <div className="fixed top-8 inset-x-0 mx-auto z-50 bg-green-500 text-white text-lg px-6 py-2 rounded-lg shadow-lg font-bold animate-slideDownUp w-max transition-opacity duration-300">
          Copied to clipboard!
        </div>
      )}

      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white text-center">
        Choose <span className="text-green-400">your</span> way to{" "}
        <span className="text-green-400">contact me</span>
      </h2>
      <div className="flex flex-wrap gap-6 items-center justify-center w-full max-w-4xl">
        <a
          href="https://www.linkedin.com/in/arek-dev"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-8 py-4 rounded-full border-2 border-white text-white font-bold text-lg transition hover:border-green-400 hover:text-green-400 focus:outline-none"
        >
          <FaLinkedin className="text-white text-2xl transition" />
          Linkedin
        </a>
        <a
          href="https://github.com/arekdev"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-8 py-4 rounded-full border-2 border-white text-white font-bold text-lg transition hover:border-green-400 hover:text-green-400 focus:outline-none"
        >
          <FaGithub className="text-white text-2xl transition" />
          GitHub
        </a>
        <a
          href="mailto:contact@arek.dev"
          className="flex items-center gap-2 px-8 py-4 rounded-full border-2 border-white text-white font-bold text-lg transition hover:border-green-400 hover:text-green-400 focus:outline-none"
        >
          <MdEmail className="text-white text-2xl transition" />
          E-mail
        </a>
        <button
          type="button"
          onClick={handleCopy}
          className="flex items-center gap-2 px-8 py-4 rounded-full border-2 border-white text-white font-bold text-lg bg-transparent transition hover:border-green-400 hover:text-green-400 focus:outline-none relative"
        >
          {email}
        </button>
      </div>
    </section>
  );
}
export default Contact;
